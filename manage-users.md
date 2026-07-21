---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Manage Users
menu: users.html
menu_parent: Settings
---

<div class="card mb-3">
    <div class="card-body d-flex align-items-center justify-content-between">
        <ul class="list-unstyled list-inline m-0">
            <li class="list-inline-item">
                <strong>{{ site.data.settings.users.rows.size }}</strong> Results
            </li>
        </ul>
        <form class="row row-cols-lg-auto g-2 align-items-center">
            <div class="col-12">
                <div class="col-12 input-group">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-secondary" type="submit">
                    <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>

<div class="row">
    <div class="col-12">
        {% include components/item-list.html dataset="settings" content="users" actions=true type="cards" %}
    </div>
</div>