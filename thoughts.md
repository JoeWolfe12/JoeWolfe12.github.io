---
layout: default
title: Thoughts
permalink: /thoughts/
---

# Thoughts

{% comment %}
Gather all unique tags from the *thoughts* collection
{% endcomment %}
{% assign thoughts_tags = "" | split: "" %}
{% for doc in site.thoughts %}
  {% if doc.tags %}{% assign thoughts_tags = thoughts_tags | concat: doc.tags %}{% endif %}
{% endfor %}
{% assign thoughts_tags = thoughts_tags | uniq | sort %}

<label for="tag-filter">Filter by tag:</label>
<select id="tag-filter">
  <option value="">— All —</option>
{% for tag in thoughts_tags %}
  <option value="{{ tag }}">{{ tag }}</option>
{% endfor %}
</select>

<ul id="posts-list">
{% for post in site.thoughts %}
  <li data-tags="{{ post.tags | join:',' }}">
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date: '%Y-%m-%d' }}</small>
  </li>
{% endfor %}
</ul>