---
layout: default
title: Thoughts
permalink: /thoughts/
---

# Thoughts

<label for="tag-filter">Filter by tag:</label>
<select id="tag-filter">
  <option value="">— All —</option>
  {% for tag in site.tags %}
    <option value="{{ tag[0] }}">{{ tag[0] }} ({{ tag[1].size }})</option>
  {% endfor %}
</select>

<ul id="posts-list">
  {% for post in site.collections.thoughts.docs %}
    <li data-tags="{{ post.data.tags | join:',' }}">
      <a href="{{ post.url }}">{{ post.data.title }}</a>
      <small>{{ post.data.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
</ul>