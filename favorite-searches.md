---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Favorite Searches
menu: favorite-surveys.html
menu_parent: Favorites
---

<div class="row">
    <div class="col-12">
        {% include components/item-list.html dataset="activity" content="searches" type="cards" actions=true %}
    </div>
</div>