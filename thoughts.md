---
layout: default
title: Thoughts
permalink: /thoughts/
---

# Thoughts

{% assign thoughts_tags = "" | split: "" %}
{% for doc in site.thoughts %}
  {% if doc.tags %}
    {% assign thoughts_tags = thoughts_tags | concat: doc.tags %}
  {% endif %}
{% endfor %}
{% assign thoughts_tags = thoughts_tags | uniq | sort %}

<select id="tag-filter">
  <option value="">— All —</option>
  {% for tag in thoughts_tags %}
    <option value="{{ tag }}">{{ tag }}</option>
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