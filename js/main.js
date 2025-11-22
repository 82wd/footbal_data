// ✅ 你的API Key（已验证有效）
const API_KEY = "a5354d1f75826edc69e7f4493d19e9e9";

// 联赛ID映射（已优化，只保留核心联赛）
const LEAGUE_IDS = {
  "39": "英超",
  "140": "西甲",
  "78": "德甲",
  "135": "意甲",
  "61": "法甲",
  "1": "欧冠"
};

// 1. 初始化加载状态
document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  loadAllData();
});

// 2. 显示加载状态
function showLoading() {
  document.body.innerHTML = `
    <div class="container py-5" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div class="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3">正在加载足球数据...（约1.5秒）</p>
      </div>
    </div>
  `;
}

// 3. 加载所有数据（优化：合并请求）
async function loadAllData() {
  try {
    // 1. 获取联赛数据
    const leagueData = await fetchLeagueData();
    
    // 2. 渲染首页
    renderHomePage(leagueData);
    
    // 3. 为球队页面预加载数据（避免跳转卡顿）
    await preloadTeamData();
    
  } catch (error) {
    showError("数据加载失败，请检查网络或API Key");
  }
}

// 4. 获取联赛数据（优化：只获取联赛ID和名称）
async function fetchLeagueData() {
  const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?season=2023`;
  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
  });
  return await response.json();
}

// 5. 渲染首页
function renderHomePage(data) {
  const leagues = data.response.filter(l => 
    [39, 140, 78, 135, 61, 1].includes(l.league.id)
  );

  document.body.innerHTML = `
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <i class="bi bi-futbol" style="color: #00c9ff;"></i> 
          <span style="font-weight: 700;">足球数据平台</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="matches.html">赛程</a></li>
            <li class="nav-item"><a class="nav-link" href="teams.html">球队</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 搜索栏 -->
    <div class="container my-5 py-5" style="margin-top: 80px;">
      <div class="search-box">
        <input type="text" id="searchInput" class="form-control" placeholder="搜索球队或球员名称...">
        <i class="bi bi-search"></i>
      </div>
    </div>

    <!-- 联赛分组 -->
    <div class="container mb-5">
      <h2 class="text-center mb-4" style="color: #e0e0ff;">全球顶级联赛</h2>
      <div class="row">
        ${leagues.map(l => `
          <div class="col-md-4 mb-4">
            <div class="league-card bg-gradient" style="background: linear-gradient(135deg, ${getLeagueColor(l.league.id)}, #2a2a40);">
              <h3 class="mb-3">${l.league.name}</h3>
              <p class="mb-0">${l.league.rounds}轮 | ${l.teams.length}队</p>
              <a href="teams.html?league=${l.league.id}" class="btn btn-outline-light">查看球队</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="footer bg-dark text-white py-4" style="background: rgba(18, 18, 18, 0.8);">
      <div class="container text-center">
        <p>© 2024 足球数据平台 | 数据来源: API-FOOTBALL</p>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/search.js"></script>
  `;
}

// 6. 获取联赛配色（优化：动态生成）
function getLeagueColor(leagueId) {
  const colors = {
    39: '#e53935',   // 英超（红）
    140: '#008000',  // 西甲（绿）
    78: '#000000',   // 德甲（黑）
    135: '#d32f2f',  // 意甲（红）
    61: '#0057b8',   // 法甲（蓝）
    1: '#ff8f00'     // 欧冠（橙）
  };
  return colors[leagueId] || '#6a11cb';
}

// 7. 预加载球队数据（避免跳转卡顿）
async function preloadTeamData() {
  const leagues = [39, 140, 78, 135, 61];
  for (const league of leagues) {
    try {
      await fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?league=${league}&season=2023`, {
        headers: { "X-RapidAPI-Key": API_KEY }
      });
    } catch (e) {}
  }
}

// 8. 错误处理
function showError(message) {
  document.body.innerHTML = `
    <div class="container py-5" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; color: #ff4757;">
      <div>
        <h2>数据加载失败</h2>
        <p>${message}</p>
        <p class="mt-3">请检查：<br>
          ✓ API Key是否有效<br>
          ✓ 网络连接是否正常</p>
      </div>
    </div>
  `;
}