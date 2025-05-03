document.addEventListener('DOMContentLoaded', () => {
    console.log('Site loaded!');
  
    // Tag-filter hookup (only on /thoughts/)
    const filter = document.getElementById('tag-filter');
    const posts  = Array.from(document.querySelectorAll('#posts-list li'));
    filter.addEventListener('change', () => {
      const tag = filter.value;
      posts.forEach(li => {
        const tags = li.dataset.tags.split(',');
        li.style.display = (!tag || tags.includes(tag)) ? '' : 'none';
      });
    });
  
    // put others here
  });