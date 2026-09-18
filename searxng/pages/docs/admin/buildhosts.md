> Pinned source for SearXNG master: [docs/admin/buildhosts.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/admin/buildhosts.rst)

<a id="buildhosts"></a>

# Buildhosts

To get best results from build, it's recommend to install additional packages on
build hosts (see [searxng.sh](https://docs.searxng.org/utils/searxng.sh.html#searxng-sh)).

<a id="searxng-sh-install-buildhost"></a>

# Build and Development tools

To Install tools used by build and development tasks in once:

**SearXNG's development tools**

```sh
$ sudo -H ./utils/searxng.sh install buildhost
```

This will install packages needed by SearXNG:

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

and packages needed to build documentation and run tests:

Build-time include: `$DOCS_BUILD/includes/searxng.rst`

<a id="docs-build"></a>

# Build docs

<a id="graphviz"></a> <a id="imagemagick"></a> <a id="xetex"></a> <a id="dvisvgm"></a>

### Sphinx build needs

- ImageMagick\_
- Graphviz\_
- XeTeX\_
- dvisvgm\_

Most of the sphinx requirements are installed from [setup.py](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/setup.py) and the
docs can be build from scratch with `make docs.html`.  For better math and
image processing additional packages are needed.  The XeTeX\_ needed not only for
PDF creation, it's also needed for [math](https://docs.searxng.org/dev/reST.html#math) when HTML output is build.

To be able to do sphinx:math-support without CDNs, the math are rendered
as images (`sphinx.ext.imgmath` extension).

Here is the extract from the [docs/conf.py](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/conf.py) file, setting math renderer
to `imgmath`:

Build-time include: `../conf.py`

If your docs build (`make docs.html`) shows warnings like this:

```python
WARNING: dot(1) not found, for better output quality install \
         graphviz from https://www.graphviz.org
..
WARNING: LaTeX command 'latex' cannot be run (needed for math \
         display), check the imgmath_latex setting
```

you need to install additional packages on your build host, to get better HTML
output ([install buildhost](https://docs.searxng.org/admin/buildhosts.html#searxng-sh-install-buildhost)).

**Ubuntu / debian**

```sh
$ sudo apt install graphviz imagemagick texlive-xetex librsvg2-bin
```

**Arch Linux**

```sh
$ sudo pacman -S graphviz imagemagick texlive-bin extra/librsvg
```

**Fedora / RHEL**

```sh
$ sudo dnf install graphviz graphviz-gd ImageMagick texlive-xetex-bin librsvg2-tools
```

For PDF output you also need:

**Ubuntu / debian**

```sh
$ sudo apt texlive-latex-recommended texlive-extra-utils ttf-dejavu
```

**Arch Linux**

```sh
udo pacman -S texlive-core texlive-latexextra ttf-dejavu
```

**Fedora / RHEL**

```sh
udo dnf install \
  texlive-collection-fontsrecommended texlive-collection-latex \
  dejavu-sans-fonts dejavu-serif-fonts dejavu-sans-mono-fonts
```

<a id="sh-lint"></a>

# Lint shell scripts

<a id="shellcheck"></a>

To lint shell scripts we use ShellCheck\_ - a shell script static analysis tool
([install buildhost](https://docs.searxng.org/admin/buildhosts.html#searxng-sh-install-buildhost)).

**Ubuntu / debian**

```sh
$ sudo apt install shellcheck
```

**Arch Linux**

```sh
$ sudo pacman -S shellcheck
```

**Fedora / RHEL**

```sh
$ sudo dnf install ShellCheck
```
