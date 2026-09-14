> Pinned source for SearXNG master: [docs/dev/quickstart.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/docs/dev/quickstart.rst)

<a id="devquickstart"></a>

# Development Quickstart

<a id="npm"></a> <a id="node-js"></a> <a id="biome"></a> <a id="stylelint"></a>

### further read

- [makefile](https://docs.searxng.org/dev/makefile.html#makefile)
- [buildhosts](https://docs.searxng.org/admin/buildhosts.html#buildhosts)

SearXNG loves developers; Developers do not need to worry about tool chains, the
usual developer tasks can be comfortably executed via [make](https://docs.searxng.org/dev/makefile.html#makefile).

Don't hesitate, just clone SearXNG's sources and start hacking right now ..

```bash
git clone https://github.com/searxng/searxng.git searxng
```

For the developer environment, [mise en place](https://docs.searxng.org/dev/quickstart.html#mise-en-place) is recommended:

```sh
$ curl https://mise.run | sh
```

The tools required for a developer environment are provided via [mise.toml](https://docs.searxng.org/dev/quickstart.html#mise-toml),
trust the project:

```sh
$ mise trust
```

<a id="mise-toml"></a>
<https://github.com/searxng/searxng/blob/master/mise.toml> <a id="mise-en-place"></a>
<https://mise.jdx.dev/getting-started.html>

Here is how a minimal workflow looks like:

1. *start* hacking
2. *run* your code: [make run](https://docs.searxng.org/dev/makefile.html#make-run)
3. *format & test* your code: [make format](https://docs.searxng.org/dev/makefile.html#make-format) and [make test](https://docs.searxng.org/dev/makefile.html#make-test)

If you think at some point something fails, go back to *start*.  Otherwise,
choose a meaningful commit message and we are happy to receive your pull
request. To not end in *wild west* we have some directives, please pay attention
to our "[how to contribute](https://docs.searxng.org/dev/contribution_guide.html#how-to-contribute)" guideline.

<a id="pdb"></a>

If you want to debug with the *good old Python Debugger* pdb\_: Alternatively to
`make run` (2.) which starts a [searxng granian](https://docs.searxng.org/admin/installation-granian.html#searxng-granian) server you can jump
into the developer environment and start a python based HTTP server by:

```python
$ ./manage dev.env
...
(dev.env)$ SEARXNG_DEBUG=1 searxng-run
```

Since this is a pure Python solution, you can set breakpoints in your code with
`pdb.set_trace()` and the debugger will wait for you in the terminal prompt.

Any other script or command line provided by SearXNG can also be used in the
same environment, here are a few examples:

```python
# tools related to favicons
(dev.env)$ python -m searx.favicons

# tools related to DATA stored in searx/data
(dev.env)$ python -m searx.data --help

# tools related to engines
(dev.env)$ python -m searx.enginelib --help

# to test one of the update scripts
(dev.env)$ searxng_extra/update/update_engine_traits.py --help

# to test the update of the wikidata units and property names
(dev.env)$ searxng_extra/update/update_wikidata.py
```

### further read

- [make nvm](https://docs.searxng.org/dev/makefile.html#make-nvm)
- [make themes](https://docs.searxng.org/dev/makefile.html#make-themes)

If you implement themes, you will need to setup a [Node.js environment](https://docs.searxng.org/dev/makefile.html#make-node-env).  Before you call *make run* (2.), you need to compile the
modified styles and JavaScript: `make node.clean themes.all`.  If Biome\_
or Stylelint\_ reports issues, try `make themes.fix`.

Alternatively you can also compile selective the theme you have modified,
e.g. the *simple* theme.

```bash
make themes.simple
```

> **Tip**
> To get live builds while modifying CSS & JS use: `LIVE_THEME=simple make run`

### further read

- [make static.build](https://docs.searxng.org/dev/makefile.html#make-static-build)

If you finished your *tests* you can start to commit your changes.  To separate
the modified source code from the build products first run:

```bash
make static.build.restore
```

This will restore the old build products and only your changes of the code
remain in the working tree which can now be added & committed.  When all sources
are committed, you can commit the build products simply by:

```bash
make static.build.commit
```

Committing the build products should be the last step, just before you send us
your PR.  There is also a make target to rewind this last build commit:

```bash
make static.build.drop
```
