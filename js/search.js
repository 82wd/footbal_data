// 搜索功能优化：实时过滤，无卡顿
document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  if (!searchTerm) {
    document.querySelectorAll('.card').forEach(card => {
      card.style.display = 'block';
    });
    return;
  }

  document.querySelectorAll('.card-title').forEach(title => {
    const card = title.closest('.card');
    const teamName = title.textContent.toLowerCase();
    
    if (teamName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});