> Commit-pinned source for SearXNG master: [docs/dev/makefile.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/dev/makefile.rst)

.. \_makefile:

# Makefile & `./manage`

All relevant build and development tasks are implemented in the
:origin:`./manage <manage>` script and for CI or IDE integration a small
:origin:`Makefile` wrapper is available.  If you are not familiar with
Makefiles, we recommend to read gnu-make introduction.

### build environment

Before looking deeper at the targets, first read about :ref:`make
   install`.

To install developer requirements follow buildhosts.

The usage is simple, just type `make {target-name}` to *build* a target.
Calling the `help` target gives a first overview (`make help`):

.. tabs:

```text
.. group-tab:: ``make``

 .. program-output:: bash -c "cd ..; make --no-print-directory help"

.. group-tab:: ``./manage``

 The Makefile targets are implemented for comfort, if you can do without
 tab-completion and need to have a more granular control, use
 :origin:`manage` without the Makefile wrappers.

 .. code:: sh

    $ ./manage help

```

.. \_make install:

# Python environment (`make install`)

### activate environment

`source ./local/py3/bin/activate`

We do no longer need to build up the virtualenv manually.  Jump into your git
working tree and release a `make install` to get a virtualenv with a
*developer install* of SearXNG (:origin:`setup.py`). :

```text
$ cd ~/searxng-clone
$ make install
PYENV     [virtualenv] installing ./requirements*.txt into local/py3
...
PYENV     [install] pip install --use-pep517 --no-build-isolation -e 'searx[test]'
...
Successfully installed searxng-2023.7.19+a446dea1b

```

If you release `make install` multiple times the installation will only
rebuild if the sha256 sum of the *requirement files* fails.  With other words:
the check fails if you edit the requirements listed in
:origin:`requirements-dev.txt` and :origin:`requirements.txt`). :

```text
$ make install
PYENV     OK
PYENV     [virtualenv] requirements.sha256 failed
         [virtualenv] - 6cea6eb6def9e14a18bf32f8a3e...  ./requirements-dev.txt
         [virtualenv] - 471efef6c73558e391c3adb35f4...  ./requirements.txt
...
PYENV     [virtualenv] installing ./requirements*.txt into local/py3
...
PYENV     [install] pip install --use-pep517 --no-build-isolation -e 'searx[test]'
...
Successfully installed searxng-2023.7.19+a446dea1b

```

### drop environment

To get rid of the existing environment before re-build use :ref:`clean target    <make clean>` first.

If you think, something goes wrong with your ./local environment or you change
the :origin:`setup.py` file, you have to call \[make clean]\(#make clean).

.. \_make node.env:

# Node.js environment (`make node.env`)

To install NVM and Node.js in once you can use \[make nvm.nodejs]\(#make nvm.nodejs).

.. \_make nvm:

## NVM `make nvm.install nvm.status`

Use `make nvm.status` to get the current status of your Node.js and nvm
setup.

.. tabs:

```text
.. group-tab:: nvm.install

 .. code:: sh

    $ LANG=C make nvm.install
    INFO:  install (update) NVM at ./searxng/.nvm
    INFO:  clone: https://github.com/nvm-sh/nvm.git
      || Cloning into './searxng/.nvm'...
    INFO:  checkout v0.39.4
      || HEAD is now at 8fbf8ab v0.39.4

.. group-tab:: nvm.status (ubu2004)

 Here is the output you will typically get on a Ubuntu 20.04 system which
 serves only a `no longer active <https://nodejs.org/en/about/releases/>`_
 Release `Node.js v10.19.0 <https://packages.ubuntu.com/focal/nodejs>`_.

 .. code:: sh

    $ make nvm.status
    INFO:  Node.js is installed at /usr/bin/node
    INFO:  Node.js is version v10.19.0
    WARN:  minimal Node.js version is 16.13.0
    INFO:  npm is installed at /usr/bin/npm
    INFO:  npm is version 6.14.4
    WARN:  NVM is not installed

```

.. \_make nvm.nodejs:

## `make nvm.nodejs`

Install latest Node.js locally (uses nvm):

```text
$ make nvm.nodejs
INFO:  install (update) NVM at /share/searxng/.nvm
INFO:  clone: https://github.com/nvm-sh/nvm.git
...
Downloading and installing node v16.13.0...
...
INFO:  Node.js is installed at searxng/.nvm/versions/node/v16.13.0/bin/node
INFO:  Node.js is version v16.13.0
INFO:  npm is installed at searxng/.nvm/versions/node/v16.13.0/bin/npm
INFO:  npm is version 8.1.0
INFO:  NVM is installed at searxng/.nvm

```

.. \_make run:

# `make run`

To get up a running a developer instance simply call `make run`.  This enables
*debug* option in :origin:`searx/settings.yml`, starts a `./searx/webapp.py`
instance and opens the URL in your favorite WEB browser (:man:`xdg-open`):

```text
$ make run

```

Changes to theme's HTML templates (jinja2) are instant.  Changes to the CSS & JS
sources of the theme need to be rebuild.  You can do that by running:

```text
$ make themes.all

```

..
ToDo: vite server is not implemented yet / will be done in a follow up PR

Alternatively to `themes.all` you can run *live builds* of the theme you are
modify (\[make themes]\(#make themes)):

```text
$ LIVE_THEME=simple make run

```

.. \_make format:

# `make format`

.. \_Black code style:
<https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html>

- Format Python source code using Black code style.  See `$BLACK_OPTIONS`
  and `$BLACK_TARGETS` in :origin:`Makefile`.

- Format Shell scripts using shfmt. The formatter `shfmt` reads the rules
  from the EditorConfig files.

.. \_make clean:

# `make clean`

Drops all intermediate files, all builds, but keep sources untouched.  Before
calling `make clean` stop all processes using the \[make install]\(#make install) or
\[make node.env]\(#make node.env). :

```text
$ make clean
CLEAN     pyenv
PYENV     [virtualenv] drop local/py3
CLEAN     docs -- build/docs dist/docs
CLEAN     themes -- locally installed npm dependencies
...
CLEAN     test stuff
CLEAN     common files

```

.. \_make docs:

# `make docs`

Target `docs` builds the documentation:

.. code:: bash

$ make docs
HTML ./docs --> file://
DOCS      build build/docs/includes
...
The HTML pages are in dist/docs.

.. \_make docs.clean:

## `make docs.clean docs.live`

We describe the usage of the `doc.*` targets in the :ref:`How to contribute /
Documentation <contrib docs>` section.  If you want to edit the documentation
read our \[make docs.live]\(#make docs.live) section.  If you are working in your own brand,
adjust your \[settings brand]\(#settings brand).

.. \_make docs.gh-pages:

## `make docs.gh-pages`

To deploy on github.io first adjust your \[settings brand]\(#settings brand).  For any
further read \[deploy on github.io]\(#deploy on github.io).

.. \_make test:

# `make test`

Runs a series of tests: \[make test.pylint]\(#make test.pylint), `test.pep8`, `test.unit`
and `test.robot`.  You can run tests selective, e.g.:

```text
$ make test.pep8 test.unit test.shell
TEST      test.pep8 OK
...
TEST      test.unit OK
...
TEST      test.shell OK

```

.. \_make test.shell:

## `make test.shell`

\[sh lint]\(#sh lint) / if you have changed some bash scripting run this test before
commit.

.. \_make test.pylint:

## `make test.pylint`

[Pylint](https://www.pylint.org/) is known as one of the best source-code, bug and quality checker for the
Python programming language.  The pylint profile used in the SearXNG project is
found in project's root folder :origin:`.pylintrc`.

.. \_make themes:

# `make themes.*`

### further read

- devquickstart

The :origin:`Makefile` targets `make theme.*` cover common tasks to build the
theme(s).  The `./manage themes.*` command line can be used to convenient run
common theme build tasks.

.. program-output:: bash -c "cd ..; ./manage themes.help"

To get live builds while modifying CSS & JS use (\[make run]\(#make run)):

.. code:: sh

$ LIVE\_THEME=simple make run

.. \_make static.build:

# `make static.build.*`

### further read

- devquickstart

The :origin:`Makefile` targets `static.build.*` cover common tasks to build (a
commit of) the static files.  The `./manage static.build..*` command line
can be used to convenient run common build tasks of the static files.

.. program-output:: bash -c "cd ..; ./manage static.help"

.. \_manage go.help:

# `./manage go.help`

The `./manage go.*` command line can be used to convenient run common `go
(wiki)`\_ tasks.

.. program-output:: bash -c "cd ..; ./manage go.help"
