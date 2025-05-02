document.addEventListener('DOMContentLoaded', () => {
    console.log('Site loaded!');
  
    // Tag-filter hookup (only on /thoughts/)
    const filter = document.getElementById('tag-filter');
    if (filter) {
      filter.addEventListener('change', () => {
        const tag = filter.value;
        document.querySelectorAll('#posts-list li').forEach(li => {
          const tags = li.dataset.tags.split(',');
          li.style.display = (!tag || tags.includes(tag)) ? '' : 'none';
        });
      });
    }
  
    // put others here
  });