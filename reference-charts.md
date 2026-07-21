---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Reference Charts
menu: resources.html
menu_parent: Resources
---

<div class="card mb-3">
    <div class="card-body d-flex align-items-center justify-content-between">
        <ul class="list-unstyled list-inline m-0">
            <li class="list-inline-item">
                <strong>{{ site.data.resources.reference_charts.rows.size }}</strong> Results
            </li>
        </ul>
    </div>
</div>

<div class="row">
    <div class="col-12">
        {% include components/item-list.html dataset="resources" content="reference_charts" type="cards" %}
    </div>
</div>