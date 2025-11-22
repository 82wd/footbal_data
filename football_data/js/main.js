// ✅ 1. 替换为你的API Key（从RapidAPI申请）
const API_KEY = "a5354d1f75826edc69e7f4493d19e9e9"; 

// 联赛ID映射
const LEAGUE_IDS = {
  "39": "英超",
  "140": "西甲",
  "78": "德甲",
  "135": "意甲",
  "61": "法甲",
  "1": "欧冠"
};

// 加载球队数据
function loadTeamData(leagueId) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/teams?league=${leagueId}&season=2023`;
  
  fetch(url, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(data => {
    const teams = data.response;
    
    // 渲染联赛标题
    document.getElementById('teamHeader').innerHTML = `
      <h1 class="text-center mb-4">${LEAGUE_IDS[leagueId]} 球队列表</h1>
      <p class="text-center text-muted mb-5">共 ${teams.length} 支球队</p>
    `;
    
    // 渲染球队卡片
    const container = document.getElementById('playersContainer');
    container.innerHTML = '';
    
    teams.forEach(team => {
      const teamCard = document.createElement('div');
      teamCard.className = 'col-md-6 col-lg-4 mb-4';
      teamCard.innerHTML = `
        <div class="card h-100 team-card">
          <img src="${team.team.logo}" class="card-img-top" alt="${team.team.name}">
          <div class="card-body">
            <h5 class="card-title">${team.team.name}</h5>
            <p class="card-text text-muted">成立: ${team.team.founded}</p>
            <a href="players.html?team=${team.team.id}" class="btn btn-primary">
              查看阵容 <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      `;
      container.appendChild(teamCard);
    });
  })
  .catch(error => {
    console.error('加载失败:', error);
    document.getElementById('playersContainer').innerHTML = 
      `<div class="col-12 text-center py-5"><p class="text-danger">数据加载失败，请检查API Key</p></div>`;
  });
}

// 加载球员数据（在players.html中使用）
function loadPlayerData(teamId) {
  // 类似逻辑，但用于球员详情
}

// 加载赛程（在matches.html中使用）
function loadMatches(leagueId) {
  // API调用获取比赛数据
}