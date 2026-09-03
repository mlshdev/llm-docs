> Commit-pinned source for SearXNG master: [docs/admin/buildhosts.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/admin/buildhosts.rst)

.. \_buildhosts:

# Buildhosts

To get best results from build, it's recommend to install additional packages on
build hosts (see searxng.sh).

.. \_searxng.sh install buildhost:

# Build and Development tools

To Install tools used by build and development tasks in once:

.. tabs:

```text
.. group-tab:: SearXNG's development tools

 .. code:: sh

    $ sudo -H ./utils/searxng.sh install buildhost

```

This will install packages needed by SearXNG:

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START distro-packages
:end-before: END distro-packages

and packages needed to build documentation and run tests:

.. kernel-include:: $DOCS\_BUILD/includes/searxng.rst
:start-after: START build-packages
:end-before: END build-packages

.. \_docs build:

# Build docs

### Sphinx build needs

- [ImageMagick](https://www.imagemagick.org)
- [Graphviz](https://graphviz.gitlab.io)
- [XeTeX](https://tug.org/xetex/)
- [dvisvgm](https://dvisvgm.de/)

Most of the sphinx requirements are installed from :origin:`setup.py` and the
docs can be build from scratch with `make docs.html`.  For better math and
image processing additional packages are needed.  The XeTeX needed not only for
PDF creation, it's also needed for math when HTML output is build.

To be able to do sphinx:math-support without CDNs, the math are rendered
as images (`sphinx.ext.imgmath` extension).

Here is the extract from the :origin:`docs/conf.py` file, setting math renderer
to `imgmath`:

.. literalinclude:: ../conf.py
:language: python
:start-after: # sphinx.ext.imgmath setup
:end-before: # sphinx.ext.imgmath setup END

If your docs build (`make docs.html`) shows warnings like this:

```text
WARNING: dot(1) not found, for better output quality install \
        graphviz from https://www.graphviz.org
..
WARNING: LaTeX command 'latex' cannot be run (needed for math \
        display), check the imgmath_latex setting

```

you need to install additional packages on your build host, to get better HTML
output (\[install buildhost]\(#searxng.sh install buildhost)).

.. tabs:

```text
.. group-tab:: Ubuntu / debian

  .. code-block:: sh

     $ sudo apt install graphviz imagemagick texlive-xetex librsvg2-bin

.. group-tab:: Arch Linux

  .. code-block:: sh

     $ sudo pacman -S graphviz imagemagick texlive-bin extra/librsvg

.. group-tab::  Fedora / RHEL

  .. code-block:: sh

     $ sudo dnf install graphviz graphviz-gd ImageMagick texlive-xetex-bin librsvg2-tools

```

For PDF output you also need:

.. tabs:

```text
.. group-tab:: Ubuntu / debian

  .. code:: sh

     $ sudo apt texlive-latex-recommended texlive-extra-utils ttf-dejavu

.. group-tab:: Arch Linux

  .. code:: sh

  	 $ sudo pacman -S texlive-core texlive-latexextra ttf-dejavu

.. group-tab::  Fedora / RHEL

  .. code:: sh

  	 $ sudo dnf install \
         texlive-collection-fontsrecommended texlive-collection-latex \
         dejavu-sans-fonts dejavu-serif-fonts dejavu-sans-mono-fonts

```

.. \_sh lint:

# Lint shell scripts

To lint shell scripts we use ShellCheck - a shell script static analysis tool
(\[install buildhost]\(#searxng.sh install buildhost)).

.. SNIP sh lint requirements

.. tabs:

```text
.. group-tab:: Ubuntu / debian

  .. code-block:: sh

     $ sudo apt install shellcheck

.. group-tab:: Arch Linux

  .. code-block:: sh

     $ sudo pacman -S shellcheck

.. group-tab::  Fedora / RHEL

  .. code-block:: sh

     $ sudo dnf install ShellCheck

```

.. SNAP sh lint requirements
