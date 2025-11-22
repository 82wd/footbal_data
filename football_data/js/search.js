// 搜索功能：在所有页面中生效
document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  
  if (!searchTerm) {
    // 重置所有内容
    document.querySelectorAll('.team-card').forEach(card => {
      card.style.display = 'block';
    });
    return;
  }

  // 搜索球队名称
  document.querySelectorAll('.team-card .card-title').forEach(title => {
    const teamName = title.textContent.toLowerCase();
    const card = title.closest('.team-card');
    
    if (teamName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // 搜索球员（在球员页面中实现类似逻辑）
});