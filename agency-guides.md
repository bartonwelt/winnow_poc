---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Agency Guides
menu: resources.html
menu_parent: Resources
---

<div class="card mb-3">
    <div class="card-body d-flex align-items-center justify-content-between">
        <ul class="list-unstyled list-inline m-0">
            <li class="list-inline-item">
                <strong>{{ site.data.resources.agency_guides.rows.size }}</strong> Results
            </li>
        </ul>
        <form class="row row-cols-lg-auto g-2 align-items-center">
            <div class="col-12">
                <div class="input-group">
                    <span class="input-group-text" id="orderByAddon">Filter:</span>
                    <label for="resultsOrder" class="visually-hidden">Filter:</label>
                    <select class="form-select" id="resultsOrder" aria-label="Order By" aria-described-by="orderByAddon">
                        <option selected>All Guides</option>
                        <optgroup label="Agencies">
                            {% for agency in site.data.resources.agency_guides.agencies %}
                                <option value="">{{ agency }}</option>
                            {% endfor %}
                        </optgroup>
                    </select>
                </div>
            </div>
        </form>
    </div>
</div>

<div class="row">
    <div class="col-12">
        {% include components/item-list.html dataset="resources" content="agency_guides" type="cards" %}
    </div>
</div>