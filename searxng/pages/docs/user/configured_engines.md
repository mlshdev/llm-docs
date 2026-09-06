> Commit-pinned source for SearXNG master: [docs/user/configured_engines.rst](https://github.com/searxng/searxng/blob/22056605a6e0ed41a0aa91a2bf300a361fd16b92/docs/user/configured_engines.rst)

.. \_configured engines:

# Configured Engines

### Further reading ..

- \[settings categories\_as\_tabs]\(#settings categories\_as\_tabs)
- engines-dev
- \[settings engines]\(#settings engines)
- \[general engine configuration]\(#general engine configuration)

{% for category, engines in categories\_as\_tabs.items() %}

## tab `!available`

{% for group, group\_bang, engines in engines | group\_engines\_in\_tab %}

{% if loop.length > 1 %}

### {% if group\_bang %}group `available`{% else %}available{% endif %}

{% endif %}

.. flat-table:

```text
  :header-rows: 2
  :stub-columns: 1
  :widths: 10 1 10 1 1 1 1 1 1 1

  * - :cspan:`5` Engines configured by default (in :ref:`settings.yml <engine settings>`)
    - :cspan:`3` :ref:`Supported features <engine file>`

  * - Name
    - !bang
    - Module
    - Disabled
    - Timeout
    - Weight
    - Paging
    - Locale
    - Safe search
    - Time range

  {% for mod in engines %}

  * - `available <available>`_
      {%- if mod.language %}
      (available)
      {%- endif %}
    - ``!available``
    - {%- if 'searx.engines.' + mod.__name__ in documented_modules %}
      :py:mod:`~searx.engines.available`
      {%- else %}
      :origin:`available <searx/engines/available.py>`
      {%- endif %}
    - available
    - available
    - available
    {% if mod.engine_type == 'online' %}
    - available
    - available
    - available
    - available
    {% else %}
    - :cspan:`3` not applicable (available)
    {% endif %}

 {% endfor %}
 {% endfor %}
 {% endfor %}

```
