> Pinned source for SearXNG master: [docs/dev/engines/offline/sql-engines.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/engines/offline/sql-engines.rst)

<a id="sql-engines"></a>

# SQL Engines

### further read

- [SQLite](https://www.sqlite.org/index.html)
- [PostgreSQL](https://www.postgresql.org)
- [MySQL](https://www.mysql.com)

### info

Initial sponsored by `Search and Discovery Fund <https://nlnet.nl/discovery>`\_ of [NLnet Foundation](https://nlnet.nl/).

With the *SQL engines* you can bind SQL databases into SearXNG.  The following
Relational Database Management System (RDBMS) are supported:

- [engine sqlite](https://docs.searxng.org/dev/engines/offline/sql-engines.html#engine-sqlite)
- [engine postgresql](https://docs.searxng.org/dev/engines/offline/sql-engines.html#engine-postgresql)
- [engine mysql\_server](https://docs.searxng.org/dev/engines/offline/sql-engines.html#engine-mysql-server) & [engine mariadb\_server](https://docs.searxng.org/dev/engines/offline/sql-engines.html#engine-mariadb-server)

All of the engines above are just commented out in the [settings.yml](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/settings.yml), as you have to set the required attributes for the
engines, e.g. `database:` ...

```yaml
- name: ...
  engine: {sqlite|postgresql|mysql_server}
  database: ...
  result_template: {template_name}
  query_str: ...
```

By default, the engines use the `key-value` template for displaying results /
see [simple](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/templates/simple/result_templates/key-value.html)
theme.  If you are not satisfied with the original result layout, you can use
your own template, set `result_template` attribute to `{template_name}` and
place the templates at:

```python
searx/templates/{theme_name}/result_templates/{template_name}
```

If you do not wish to expose these engines on a public instance, you can still
add them and limit the access by setting `tokens` as described in section
[private engines](https://docs.searxng.org/admin/settings/settings_engines.html#private-engines).

# Extra Dependencies

For using [engine postgresql](https://docs.searxng.org/dev/engines/offline/sql-engines.html#engine-postgresql) or [engine mysql\_server](https://docs.searxng.org/dev/engines/offline/sql-engines.html#engine-mysql-server) you need to
install additional packages in Python's Virtual Environment of your SearXNG
instance.  To switch into the environment ([searxng-src](https://docs.searxng.org/admin/installation-searxng.html#searxng-src)) you can use
[searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh):

```python
$ sudo utils/searxng.sh instance cmd bash
(searxng-pyenv)$ pip install ...
```

# Configure the engines

The configuration of the new database engines are similar.  You must put a valid
SQL-SELECT query in `query_str`.  At the moment you can only bind at most one
parameter in your query.  By setting the attribute `limit` you can define how
many results you want from the SQL server.  Basically, it is the same as the
`LIMIT` keyword in SQL.

Please, do not include `LIMIT` or `OFFSET` in your SQL query as the engines
rely on these keywords during paging.  If you want to configure the number of
returned results use the option `limit`.

<a id="engine-sqlite"></a>

## SQLite

### info

- [sqlite.py](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/engines/sqlite.py)

#### `searx.engines.sqlite`

Static Python API reference (`automodule`).

<a id="engine-postgresql"></a>

## PostgreSQL

<a id="psycopg2"></a>

### info

- [postgresql.py](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/engines/postgresql.py)
- `pip install` [psycopg2-binary](https://docs.searxng.org/dev/engines/offline/sql-engines.html#psycopg2)

#### `searx.engines.postgresql`

Static Python API reference (`automodule`).

<a id="engine-mysql-server"></a>

## MySQL

### info

- [mysql\_server.py](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/engines/mysql_server.py)
- `pip install` [mysql-connector-python](https://pypi.org/project/mysql-connector-python/)

#### `searx.engines.mysql_server`

Static Python API reference (`automodule`).

<a id="engine-mariadb-server"></a>

## MariaDB

### info

- [mariadb\_server.py](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/searx/engines/mariadb_server.py)
- `pip install` [mariadb](https://pypi.org/project/mariadb/)

#### `searx.engines.mariadb_server`

Static Python API reference (`automodule`).
