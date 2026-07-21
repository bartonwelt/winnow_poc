---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: My Search
menu: search.html
sidebar: sidebars/criteria-sidebar.html
sidebar_right: true
footer_nav: navs/load-more.html
---

<div class="card mb-3">
    <div class="card-body d-flex align-items-center justify-content-between">
        <ul class="list-unstyled list-inline m-0">
            <li class="list-inline-item">
                <strong>100</strong> Results
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

<div>
    {% for i in (1..10) %}
        {% include survey-result.html index=i search=true %}
    {% endfor %}
</div>