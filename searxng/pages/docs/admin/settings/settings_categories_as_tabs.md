> Commit-pinned source for SearXNG master: [docs/admin/settings/settings_categories_as_tabs.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/admin/settings/settings_categories_as_tabs.rst)

.. \_settings categories\_as\_tabs:

# `categories_as_tabs:`

A list of the categories that are displayed as tabs in the user interface.
Categories not listed here can still be searched with the search-syntax.

.. code:: yaml

categories\_as\_tabs:
general:
images:
videos:
news:
map:
music:
it:
science:
files:
social media:

Engines are added to `categories:` (compare \[engine categories]\(#engine categories)), the
categories listed in `categories_as_tabs` are shown as tabs in the UI.  If
there are no active engines in a category, the tab is not displayed (e.g. if a
user disables all engines in a category).

On the preferences page (`/preferences`) -- under *engines* -- there is an
additional tab, called *other*.  In this tab are all engines listed that are not
in one of the UI tabs (not included in `categories_as_tabs`).
