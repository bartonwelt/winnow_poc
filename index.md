---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Dashboard
menu: dashboard.html
# col_width: 10
---

<div class="row">
    <div class="col-12">
        <div class="card mb-4">
            <div class="card-header">
                <div class="d-flex align-items-center justify-content-between fw-bold mb-2">
                    Recently Saved
                    <a href="{{ site.data.navigation.favorites.link | relative_url }}" class="btn btn-outline-secondary ms-auto">View All</a>
                </div>
                <ul class="nav nav-tabs card-header-tabs" id="activityTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="survey-tab" data-bs-toggle="tab" data-bs-target="#survey-tab-pane" type="button" role="tab" aria-controls="survey-tab-pane" aria-selected="true">Surveys</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="search-tab" data-bs-toggle="tab" data-bs-target="#search-tab-pane" type="button" role="tab" aria-controls="search-tab-pane" aria-selected="false">Searches</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="ai-tab" data-bs-toggle="tab" data-bs-target="#ai-tab-pane" type="button" role="tab" aria-controls="ai-tab-pane" aria-selected="false">Winnow AI</button>
                    </li>
                </ul>
            </div>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="survey-tab-pane" role="tabpanel" aria-labelledby="survey-tab" tabindex="0">
                    {% include components/item-list.html dataset="activity" actions=true %}
                </div>
                <div class="tab-pane fade" id="search-tab-pane" role="tabpanel" aria-labelledby="search-tab" tabindex="0">
                    {% include components/item-list.html dataset="activity" content="searches" actions=true %}
                </div>
                <div class="tab-pane fade" id="ai-tab-pane" role="tabpanel" aria-labelledby="ai-tab" tabindex="0">
                    {% include components/item-list.html dataset="activity" content="ai" actions=true %}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12 col-lg-6">
        <div class="card mb-4">
            <div class="card-body">
                <i class="bi bi-clock-history h3 text-primary"></i>
                <h5 class="card-title mt-2">Change History</h5>
                <p>A list of all amended, newly enacted, and repealed requirements.</p>
                <a class="btn btn-outline-secondary">View History</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-lg-6">
        <div class="card mb-4">
            <div class="card-body">
                <i class="bi bi-file-earmark-code h3 text-primary"></i>
                <h5 class="card-title mt-2">Release Notes</h5>
                <p>Keep track of changes to the product as we make them.</p>
                <a class="btn btn-outline-secondary">View Releases</a>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card mb-4">
            <div class="card-header">
                <div class="d-flex align-items-center justify-content-between fw-bold">
                    Bloomberg Banking Law
                    <a class="btn btn-outline-secondary ms-auto">Read More</a>
                </div>
            </div>
            {% include components/item-list.html dataset="activity" content="news" %}
        </div>
    </div>
</div>