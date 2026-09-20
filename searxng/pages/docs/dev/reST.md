> Pinned source for SearXNG master: [docs/dev/reST.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/reST.rst)

<a id="rest-primer"></a>

# reST primer

### KISS\_ and readability\_

Instead of defining more and more roles, we at SearXNG encourage our
contributors to follow principles like KISS\_ and readability\_.

We at SearXNG are using reStructuredText (aka reST\_) markup for all kind of
documentation.  With the builders from the Sphinx\_ project a HTML output is
generated and deployed at docs.searxng.org\_.  For build prerequisites read
[docs build](https://docs.searxng.org/admin/buildhosts.html#docs-build).

<a id="docs-searxng-org"></a>

The source files of SearXNG's documentation are located at [docs](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs).
Sphinx assumes source files to be encoded in UTF-8 by default.  Run [make docs.live](https://docs.searxng.org/dev/contribution_guide.html#make-docs-live) to build HTML while editing.

### Further reading

- Sphinx-Primer\_
- [Sphinx markup constructs](https://docs.searxng.org/dev/reST.html#sphinx-markup-constructs)
- reST\_, docutils\_, [docutils FAQ](https://docs.searxng.org/dev/reST.html#docutils-faq)
- Sphinx\_, sphinx-doc FAQ
- [sphinx config](https://docs.searxng.org/dev/reST.html#sphinx-config), doctree\_
- sphinx cross references
- linuxdoc\_
- intersphinx\_
- sphinx-jinja\_
- [Sphinx's autodoc](https://docs.searxng.org/dev/reST.html#sphinx-s-autodoc)
- [Sphinx's Python domain](https://docs.searxng.org/dev/reST.html#sphinx-s-python-domain), [Sphinx's C domain](https://docs.searxng.org/dev/reST.html#sphinx-s-c-domain)
- SVG\_, ImageMagick\_
- DOT\_, Graphviz's dot, Graphviz\_

Sphinx\_ and reST\_ have their place in the python ecosystem.  Over that reST is
used in popular projects, e.g the Linux kernel documentation [\[kernel doc\]](https://docs.searxng.org/dev/reST.html#kernel-doc).

<a id="kernel-doc"></a>

### Content matters

The readability\_ of the reST sources has its value, therefore we recommend to
make sparse usage of reST markup / .. content matters!

**reST** is a plaintext markup language, its markup is *mostly* intuitive and
you will not need to learn much to produce well formed articles with.  I use the
word *mostly*: like everything in live, reST has its advantages and
disadvantages, some markups feel a bit grumpy (especially if you are used to
other plaintext markups).

# Soft skills

Before going any deeper into the markup let's face on some **soft skills** a
trained author brings with, to reach a well feedback from readers:

- Documentation is dedicated to an audience and answers questions from the
  audience point of view.
- Don't detail things which are general knowledge from the audience point of
  view.
- Limit the subject, use cross links for any further reading.

To be more concrete what a *point of view* means.  In the ([docs](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs))
folder we have three sections (and the *blog* folder), each dedicate to a
different group of audience.

**User's POV: [docs/user](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/user)**

A typical user knows about search engines and might have heard about
meta crawlers and privacy.

**Admin's POV: [docs/admin](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/admin)**

A typical Admin knows about setting up services on a linux system, but he does
not know all the pros and cons of a SearXNG setup.

**Developer's POV: [docs/dev](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev)**

Depending on the readability\_ of code, a typical developer is able to read and
understand source code.  Describe what a item aims to do (e.g. a function).
If the chronological order matters, describe it.  Name the *out-of-limits
conditions* and all the side effects a external developer will not know.

<a id="rest-inline-markup"></a>

# Basic inline markup

### Inline markup

- [reST roles](https://docs.searxng.org/dev/reST.html#rest-roles)
- [reST smart ref](https://docs.searxng.org/dev/reST.html#rest-smart-ref)

Basic inline markup is done with asterisks and backquotes.  If asterisks or
backquotes appear in running text and could be confused with inline markup
delimiters, they have to be escaped with a backslash (`\*pointer`).

**basic inline markup**

| description                              | rendered           | markup               |
| ---------------------------------------- | ------------------ | -------------------- |
| one asterisk for emphasis                | *italics*          | `*italics*`          |
| two asterisks for strong emphasis        | **boldface**       | `**boldface**`       |
| backquotes for code samples and literals | `foo()`            | `foo()`              |
| quote asterisks or backquotes            | \*foo is a pointer | `\*foo is a pointer` |

<a id="rest-basic-structure"></a>

# Basic article structure

The basic structure of an article makes use of heading adornments to markup
chapter, sections and subsections.

<a id="rest-template"></a>

## reST template

reST template for an simple article:

```reST
.. _doc refname:

==============
Document title
==============

Lorem ipsum dolor sit amet, consectetur adipisici elit ..  Further read
:ref:`chapter refname`.

.. _chapter refname:

Chapter
=======

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquid ex ea commodi consequat ...

.. _section refname:

Section
-------

lorem ..

.. _subsection refname:

Subsection
~~~~~~~~~~

lorem ..
```

## Headings

**#. title - with overline for document title:**

```reST
==============
Document title
==============
```

**#. chapter - with anchor named `anchor name`:**

```reST
.. _anchor name:

Chapter
=======
```

**#. section**

```reST
Section
-------
```

**#. subsection**

```reST
Subsection
~~~~~~~~~~
```

# Anchors & Links

<a id="rest-anchor"></a>

## Anchors

<a id="ref-role"></a>
<https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html#role-ref>

To refer a point in the documentation a anchor is needed.  The [reST template](https://docs.searxng.org/dev/reST.html#rest-template) shows an example where a chapter titled *"Chapters"*
gets an anchor named `chapter title`.  Another example from *this* document,
where the anchor named `reST anchor`:

```reST
.. _reST anchor:

Anchors
-------

To refer a point in the documentation a anchor is needed ...
```

To refer anchors use the [ref role](https://docs.searxng.org/dev/reST.html#ref-role) markup:

```reST
Visit chapter :ref:`reST anchor`.  Or set hyperlink text manually :ref:`foo bar <reST anchor>`.
```

> **`:ref:` role**
>
> - **Class:** rst-example
>
> Visit chapter [reST anchor](https://docs.searxng.org/dev/reST.html#rest-anchor).  Or set hyperlink text manually [foo bar](https://docs.searxng.org/dev/reST.html#rest-anchor).

<a id="rest-ordinary-ref"></a>

## Link ordinary URL

If you need to reference external URLs use *named* hyperlinks to maintain
readability of reST sources.  Here is a example taken from *this* article:

```reST
.. _Sphinx Field Lists:
   https://www.sphinx-doc.org/en/master/usage/restructuredtext/field-lists.html

With the *named* hyperlink `Sphinx Field Lists`_, the raw text is much more
readable.

And this shows the alternative (less readable) hyperlink markup `Sphinx Field
Lists
<https://www.sphinx-doc.org/en/master/usage/restructuredtext/field-lists.html>`__.
```

> **Named hyperlink**
>
> - **Class:** rst-example
>
> With the *named* hyperlink [Sphinx Field Lists](https://docs.searxng.org/dev/reST.html#sphinx-field-lists), the raw text is much more
> readable.
>
> And this shows the alternative (less readable) hyperlink markup `Sphinx Field
> Lists <https://www.sphinx-doc.org/en/master/usage/restructuredtext/field-lists.html>`\_\_.

<a id="rest-smart-ref"></a>

## Smart refs

With the power of sphinx.ext.extlinks\_ and intersphinx\_ referencing external
content becomes smart.

**smart refs with sphinx.ext.extlinks\_ and intersphinx\_**

| refer ...                  | rendered example                                                                                                        | markup                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `rfc`                      | [RFC 822](https://datatracker.ietf.org/doc/html/rfc822)                                                                 | `[RFC 822](https://datatracker.ietf.org/doc/html/rfc822)`                                                                 |
| `pep`                      | [PEP 8](https://peps.python.org/pep-0008/)                                                                              | `[PEP 8](https://peps.python.org/pep-0008/)`                                                                              |
| sphinx.ext.extlinks\_      |                                                                                                                         |                                                                                                                           |
| -------------------------- | ----------------------------------                                                                                      | ------------------------------------                                                                                      |
| project's wiki article     | [Offline-engines](https://en.wikipedia.org/wiki/Offline-engines)                                                        | `[Offline-engines](https://en.wikipedia.org/wiki/Offline-engines)`                                                        |
| to docs public URL         | [dev/reST.html](https://docs.searxng.org/dev/reST.html)                                                                 | `[dev/reST.html](https://docs.searxng.org/dev/reST.html)`                                                                 |
| files & folders origin     | [docs/dev/reST.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/reST.rst) | `[docs/dev/reST.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/reST.rst)` |
| pull request               | [4](https://github.com/searxng/searxng/pull/4)                                                                          | `[4](https://github.com/searxng/searxng/pull/4)`                                                                          |
| patch                      | [af2cae6](https://github.com/searxng/searxng/commit/af2cae6)                                                            | `[af2cae6](https://github.com/searxng/searxng/commit/af2cae6)`                                                            |
| PyPi package               | [curl\_cffi](https://pypi.org/project/curl_cffi/)                                                                       | `[curl_cffi](https://pypi.org/project/curl_cffi/)`                                                                        |
| manual page man            | `bash(1)`                                                                                                               | `bash(1)`                                                                                                                 |
| intersphinx\_              |                                                                                                                         |                                                                                                                           |
| -------------------------- | ----------------------------------                                                                                      | ------------------------------------                                                                                      |
| external anchor            | python:and                                                                                                              | `python:and`                                                                                                              |
| external doc anchor        | [jinja:templates](https://docs.searxng.org/jinja:templates.html)                                                        | `[jinja:templates](https://docs.searxng.org/jinja:templates.html)`                                                        |
| python code object         | `datetime.datetime`                                                                                                     | `datetime.datetime`                                                                                                       |
| flask code object          | `flask.Flask`                                                                                                           | `flask.Flask`                                                                                                             |

Intersphinx is configured in [docs/conf.py](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/conf.py):

```python
intersphinx_mapping = {
    "python": ("https://docs.python.org/3/", None),
    "flask": ("https://flask.palletsprojects.com/", None),
    "jinja": ("https://jinja.palletsprojects.com/", None),
    "linuxdoc" : ("https://return42.github.io/linuxdoc/", None),
    "sphinx" : ("https://www.sphinx-doc.org/en/master/", None),
}
```

To list all anchors of the inventory (e.g. `python`) use:

```sh
$ python -m sphinx.ext.intersphinx https://docs.python.org/3/objects.inv
...
$ python -m sphinx.ext.intersphinx https://docs.searxng.org/objects.inv
...
```

# Literal blocks

The simplest form of [literal-blocks](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#literal-blocks) is a indented block introduced by
two colons (`::`).  For highlighting use [highlight](https://docutils.sourceforge.io/docs/ref/rst/directives.html#highlight) or [reST code](https://docs.searxng.org/dev/reST.html#rest-code) directive.  To include literals from external files use
`literalinclude` or kernel-include
directive (latter one expands environment variables in the path name).

<a id="rest-literal"></a>

## `::`

```reST
::

  Literal block

Lorem ipsum dolor::

  Literal block

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
eirmod tempor invidunt ut labore ::

  Literal block
```

> **Literal block**
>
> - **Class:** rst-example
>
> ```python
> Literal block
> ```
>
> Lorem ipsum dolor:
>
> ```python
> Literal block
> ```
>
> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
> eirmod tempor invidunt ut labore :
>
> ```python
> Literal block
> ```

<a id="rest-code"></a>

## `code-block`

<a id="pygments"></a>

### Syntax highlighting

is handled by pygments\_.

The `code-block` directive is a variant of the [code](https://docutils.sourceforge.io/docs/ref/rst/directives.html#code) directive
with additional options.  To learn more about code literals visit
sphinx:code-examples.

```reST
The URL ``/stats`` handle is shown in :ref:`stats-handle`

.. code-block:: Python
   :caption: python code block
   :name: stats-handle

   @app.route('/stats', methods=['GET'])
   def stats():
       """Render engine statistics page."""
       stats = get_engines_stats()
       return render(
           'stats.html'
           , stats = stats )
```

```reST
```

> **Code block**
>
> - **Class:** rst-example
>
> The URL `/stats` handle is shown in stats-handle
>
> ```Python
> @app.route('/stats', methods=['GET'])
> def stats():
>     """Render engine statistics page."""
>     stats = get_engines_stats()
>     return render(
>         'stats.html'
>         , stats = stats )
> ```

# Unicode substitution

The [unicode directive](https://docutils.sourceforge.io/docs/ref/rst/directives.html#unicode-character-codes) converts Unicode
character codes (numerical values) to characters.  This directive can only be
used within a substitution definition.

```reST
.. |copy| unicode:: 0xA9 .. copyright sign
.. |(TM)| unicode:: U+2122

Trademark |(TM)| and copyright |copy| glyphs.
```

> **Unicode**
>
> - **Class:** rst-example
>
> Trademark |(TM)| and copyright `copy` glyphs.

<a id="rest-roles"></a>

# Roles

### Further reading

- [Sphinx Roles](https://docs.searxng.org/dev/reST.html#sphinx-roles)
- [sphinx:usage/restructuredtext/domains](https://docs.searxng.org/sphinx:usage/restructuredtext/domains.html)

A *custom interpreted text role* ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#roles)) is an inline piece of
explicit markup.  It signifies that that the enclosed text should be interpreted
in a specific way.

The general markup is one of:

```reST
```

**smart refs with sphinx.ext.extlinks\_ and intersphinx\_**

| role                                                                                       | rendered example                                                              | markup                                                                          |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `guilabel`                                                                                 | `&Cancel`                                                                     | `&Cancel`                                                                       |
| `kbd`                                                                                      | `C-x C-f`                                                                     | `C-x C-f`                                                                       |
| `menuselection`                                                                            | `Open --> File`                                                               | `Open --> File`                                                                 |
| `download`                                                                                 | `this file`                                                                   | `this file`                                                                     |
| math\_                                                                                     | `a^2 + b^2 = c^2`                                                             | `a^2 + b^2 = c^2`                                                               |
| `ref`                                                                                      | [svg image example](https://docs.searxng.org/dev/reST.html#svg-image-example) | `[svg image example](https://docs.searxng.org/dev/reST.html#svg-image-example)` |
| `command`                                                                                  | `ls -la`                                                                      | `ls -la`                                                                        |
| [emphasis](https://docutils.sourceforge.io/docs/ref/rst/roles.html#emphasis)               | `italic`                                                                      | `italic`                                                                        |
| [strong](https://docutils.sourceforge.io/docs/ref/rst/roles.html#strong)                   | `bold`                                                                        | `bold`                                                                          |
| [literal](https://docutils.sourceforge.io/docs/ref/rst/roles.html#literal)                 | `foo()`                                                                       | `foo()`                                                                         |
| [subscript](https://docutils.sourceforge.io/docs/ref/rst/roles.html#subscript)             | H\ `2`\ O                                                                     | ``H\ `2`\ O``                                                                   |
| [superscript](https://docutils.sourceforge.io/docs/ref/rst/roles.html#superscript)         | E = mc\ `2`                                                                   | \`\`E = mc\ \`2\`\`\`                                                           |
| [title-reference](https://docutils.sourceforge.io/docs/ref/rst/roles.html#title-reference) | `Time`                                                                        | `Time`                                                                          |

# Figures & Images

### Image processing

With the directives from linuxdoc the build process
is flexible.  To get best results in the generated output format, install
ImageMagick\_ and Graphviz\_.

SearXNG's sphinx setup includes: linuxdoc:kfigure.  Scalable here means;
scalable in sense of the build process.  Normally in absence of a converter
tool, the build process will break.  From the authors POV it’s annoying to care
about the build process when handling with images, especially since he has no
access to the build process.  With linuxdoc:kfigure the build process
continues and scales output quality in dependence of installed image processors.

If you want to add an image, you should use the `kernel-figure` (inheritance
of [figure](https://docutils.sourceforge.io/docs/ref/rst/directives.html#figure)) and `kernel-image` (inheritance of [image](https://docutils.sourceforge.io/docs/ref/rst/directives.html#image))
directives.  E.g. to insert a figure with a scalable image format use SVG
([svg image example](https://docs.searxng.org/dev/reST.html#svg-image-example)):

```reST
.. _svg image example:

.. kernel-figure:: svg_image.svg
   :alt: SVG image example

   Simple SVG image

 To refer the figure, a caption block is needed: :ref:`svg image example`.
```

<a id="svg-image-example"></a>

![SVG image example](https://raw.githubusercontent.com/searxng/searxng/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/svg_image.svg)

*Simple SVG image.*

To refer the figure, a caption block is needed: [svg image example](https://docs.searxng.org/dev/reST.html#svg-image-example).

## DOT files (aka Graphviz)

With linuxdoc:kernel-figure reST support for **DOT** formatted files is
given.

- Graphviz's dot
- DOT\_
- Graphviz\_

A simple example is shown in [dot file example](https://docs.searxng.org/dev/reST.html#dot-file-example):

```reST
.. _dot file example:

.. kernel-figure:: hello.dot
   :alt: hello world

   DOT's hello world example
```

> **hello.dot**
>
> - **Class:** rst-example
>
> <a id="dot-file-example"></a>
>
> ![hello world](https://raw.githubusercontent.com/searxng/searxng/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/dev/hello.dot)
>
> *DOT's hello world example*

## `kernel-render` DOT

Embed *render* markups (or languages) like Graphviz's **DOT** is provided by the
linuxdoc:kernel-render directive.  A simple example of embedded DOT\_ is
shown in figure [dot render example](https://docs.searxng.org/dev/reST.html#dot-render-example):

```reST
.. _dot render example:

.. kernel-render:: DOT
   :alt: digraph
   :caption: Embedded  DOT (Graphviz) code

   digraph foo {
     "bar" -> "baz";
   }

Attribute ``caption`` is needed, if you want to refer the figure: :ref:`dot render example`.
```

Please note build tools.  If Graphviz\_ is
installed, you will see an vector image.  If not, the raw markup is inserted as
*literal-block*.

> **kernel-render DOT**
>
> - **Class:** rst-example
>
> <a id="dot-render-example"></a>
>
> ```dot
> digraph foo {
>   "bar" -> "baz";
> }
> ```
>
> *Embedded  DOT (Graphviz) code*
>
> Attribute `caption` is needed, if you want to refer the figure: [dot render example](https://docs.searxng.org/dev/reST.html#dot-render-example).

## `kernel-render` SVG

A simple example of embedded SVG\_ is shown in figure [svg render example](https://docs.searxng.org/dev/reST.html#svg-render-example):

```reST
.. _svg render example:

.. kernel-render:: SVG
   :caption: Embedded **SVG** markup
   :alt: so-nw-arrow
```

..

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
     baseProfile="full" width="70px" height="40px"
     viewBox="0 0 700 400"
     >
  <line x1="180" y1="370"
        x2="500" y2="50"
        stroke="black" stroke-width="15px"
        />
  <polygon points="585 0 525 25 585 50"
           transform="rotate(135 525 25)"
           />
</svg>
```

> **kernel-render SVG**
>
> - **Class:** rst-example
>
> <a id="svg-render-example"></a>
>
> ```svg
> <?xml version="1.0" encoding="UTF-8"?>
> <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
>      baseProfile="full" width="70px" height="40px"
>      viewBox="0 0 700 400"
>      >
>   <line x1="180" y1="370"
>         x2="500" y2="50"
>         stroke="black" stroke-width="15px"
>         />
>   <polygon points="585 0 525 25 585 50"
>            transform="rotate(135 525 25)"
>            />
> </svg>
> ```
>
> *Embedded **SVG** markup*

<a id="rest-lists"></a>

# List markups

## Bullet list

List markup ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#bullet-lists)) is simple:

```reST
- This is a bulleted list.

  1. Nested lists are possible, but be aware that they must be separated from
     the parent list items by blank line
  2. Second item of nested list

- It has two items, the second
  item uses two lines.

#. This is a numbered list.
#. It has two items too.
```

> **bullet list**
>
> - **Class:** rst-example
>
> - This is a bulleted list.
>
>   1. Nested lists are possible, but be aware that they must be separated from
>      the parent list items by blank line
>   2. Second item of nested list
>
> - It has two items, the second
>   item uses two lines.
>
> \#. This is a numbered list.
> \#. It has two items too.

## Horizontal list

The `.. hlist::` transforms a bullet list into a more compact
list.

```reST
.. hlist::

   - first list item
   - second list item
   - third list item
   ...
```

> **hlist**
>
> - **Class:** rst-example
>
> - first list item
>
> - second list item
>
> - third list item
>
> - next list item
>
> - next list item xxxx
>
> - next list item yyyy
>
> - next list item zzzz

## Definition list

### Note ..

- the term cannot have more than one line of text

- there is **no blank line between term and definition block** // this
  distinguishes definition lists ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#definition-lists)) from block
  quotes ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#block-quotes)).

Each definition list ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#definition-lists)) item contains a term,
optional classifiers and a definition.  A term is a simple one-line word or
phrase.  Optional classifiers may follow the term on the same line, each after
an inline ' : ' (**space, colon, space**).  A definition is a block indented
relative to the term, and may contain multiple paragraphs and other body
elements.  There may be no blank line between a term line and a definition block
(*this distinguishes definition lists from block quotes*).  Blank lines are
required before the first and after the last definition list item, but are
optional in-between.

Definition lists are created as follows:

```reST
term 1 (up to a line of text)
    Definition 1.

See the typo : this line is not a term!

  And this is not term's definition.  **There is a blank line** in between
  the line above and this paragraph.  That's why this paragraph is taken as
  **block quote** (:duref:`ref <block-quotes>`) and not as term's definition!

term 2
    Definition 2, paragraph 1.

    Definition 2, paragraph 2.

term 3 : classifier
    Definition 3.

term 4 : classifier one : classifier two
    Definition 4.
```

> **definition list**
>
> - **Class:** rst-example
>
> **term 1 (up to a line of text)**
>
> Definition 1.
>
> See the typo : this line is not a term!
>
> And this is not term's definition.  **There is a blank line** in between
> the line above and this paragraph.  That's why this paragraph is taken as
> **block quote** ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#block-quotes)) and not as term's definition!
>
> **term 2**
>
> Definition 2, paragraph 1.
>
> Definition 2, paragraph 2.
>
> **term 3 : classifier**
>
> Definition 3.
>
> term 4 : classifier one : classifier two

## Quoted paragraphs

Quoted paragraphs ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#block-quotes)) are created by just indenting
them more than the surrounding paragraphs.  Line blocks ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#line-blocks)) are a way of preserving line breaks:

```reST
normal paragraph ...
lorem ipsum.

   Quoted paragraph ...
   lorem ipsum.

| These lines are
| broken exactly like in
| the source file.
```

> **Quoted paragraph and line block**
>
> - **Class:** rst-example
>
> normal paragraph ...
> lorem ipsum.
>
> Quoted paragraph ...
> lorem ipsum.
>
> \| These lines are
> \| broken exactly like in
> \| the source file.

<a id="rest-field-list"></a>

## Field Lists

<a id="sphinx-field-lists"></a>
<https://www.sphinx-doc.org/en/master/usage/restructuredtext/field-lists.html>

### bibliographic fields

First lines fields are bibliographic fields, see [Sphinx Field Lists](https://docs.searxng.org/dev/reST.html#sphinx-field-lists).

Field lists are used as part of an extension syntax, such as options for
directives, or database-like records meant for further processing.  Field lists
are mappings from field names to field bodies.  They marked up like this:

```reST
```

> **Field List**
>
> - **Class:** rst-example
>
> - **Fieldname:** Field content
>   **:foo:       first paragraph in field foo**
>
> second paragraph in field foo
>
> - **Bar:** Field content

They are commonly used in Python documentation:

```python
def my_function(my_arg, my_other_arg):
    """A function just for me.

    :param my_arg: The first of my arguments.
    :param my_other_arg: The second of my arguments.

    :returns: A message (just for me, of course).
    """
```

## Further list blocks

- field lists ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#field-lists), with caveats noted in
  [reST field list](https://docs.searxng.org/dev/reST.html#rest-field-list))
- option lists ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#option-lists))
- quoted literal blocks ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#quoted-literal-blocks))
- doctest blocks ([ref](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#doctest-blocks))

# Admonitions

## Sidebar

Sidebar is an eye catcher, often used for admonitions pointing further stuff or
site effects.  Here is the source of the sidebar [on top of this page](https://docs.searxng.org/dev/reST.html#rest-primer).

```reST
.. sidebar:: KISS_ and readability_

   Instead of defining more and more roles, we at SearXNG encourage our
   contributors to follow principles like KISS_ and readability_.
```

## Generic admonition

The generic [admonition](https://docutils.sourceforge.io/docs/ref/rst/directives.html#admonitions) needs a title:

```reST
.. admonition:: generic admonition title

   lorem ipsum ..
```

> **generic admonition title**
> lorem ipsum ..

## Specific admonitions

Specific admonitions: [hint](https://docutils.sourceforge.io/docs/ref/rst/directives.html#hint), [note](https://docutils.sourceforge.io/docs/ref/rst/directives.html#note), [tip](https://docutils.sourceforge.io/docs/ref/rst/directives.html#tip) [attention](https://docutils.sourceforge.io/docs/ref/rst/directives.html#attention),
[caution](https://docutils.sourceforge.io/docs/ref/rst/directives.html#caution), [danger](https://docutils.sourceforge.io/docs/ref/rst/directives.html#danger), [error](https://docutils.sourceforge.io/docs/ref/rst/directives.html#error), , [important](https://docutils.sourceforge.io/docs/ref/rst/directives.html#important), and
[warning](https://docutils.sourceforge.io/docs/ref/rst/directives.html#warning) .

```reST
.. hint::

   lorem ipsum ..

.. note::

   lorem ipsum ..

.. warning::

   lorem ipsum ..
```

> **Hint**
> lorem ipsum ..

> **Note**
> lorem ipsum ..

> **Tip**
> lorem ipsum ..

> **Attention**
> lorem ipsum ..

> **Caution**
> lorem ipsum ..

> **Danger**
> lorem ipsum ..

> **Important**
> lorem ipsum ..

> **Error**
> lorem ipsum ..

> **Warning**
> lorem ipsum ..

# Tables

### Nested tables

Nested tables are ugly! Not all builder support nested tables, don't use
them!

ASCII-art tables like [reST simple table](https://docs.searxng.org/dev/reST.html#rest-simple-table) and [reST grid table](https://docs.searxng.org/dev/reST.html#rest-grid-table) might
be comfortable for readers of the text-files, but they have huge disadvantages
in the creation and modifying.  First, they are hard to edit.  Think about
adding a row or a column to a ASCII-art table or adding a paragraph in a cell,
it is a nightmare on big tables.

### List tables

For meaningful patch and diff use [reST flat table](https://docs.searxng.org/dev/reST.html#rest-flat-table).

Second the diff of modifying ASCII-art tables is not meaningful, e.g. widening a
cell generates a diff in which also changes are included, which are only
ascribable to the ASCII-art.  Anyway, if you prefer ASCII-art for any reason,
here are some helpers:

- Emacs Table Mode
- Online Tables Generator

<a id="rest-simple-table"></a>

## Simple tables

[Simple tables](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#simple-tables) allow *colspan* but not *rowspan*.  If
your table need some metadata (e.g. a title) you need to add the \`\`.. table:

directive\`\` [(ref)](https://docutils.sourceforge.io/docs/ref/rst/directives.html#table) in front and place the table in its body:

```reST
.. table:: foo gate truth table
   :widths: grid
   :align: left

   ====== ====== ======
       Inputs    Output
   ------------- ------
   A      B      A or B
   ====== ====== ======
   False
   --------------------
   True
   --------------------
   True   False  True
          (foo)
   ------ ------ ------
   False  True
          (foo)
   ====== =============
```

> **Simple ASCII table**
>
> - **Class:** rst-example
>
> **foo gate truth table**
>
> | In     | uts         | Output |
> | ------ | ----------- | ------ |
> | ------ | ------      | ------ |
> | A      | B           | A or B |
> | False  |             |        |
> | ------ | ------      | ------ |
> | True   |             |        |
> | ------ | ------      | ------ |
> | True   | False (foo) | True   |
> | ------ | ------      | ------ |
> | False  | True (foo)  |        |
> | ====== | ======      | ====== |

<a id="rest-grid-table"></a>

## Grid tables

[Grid tables](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#grid-tables) allow colspan *colspan* and *rowspan*:

```reST
.. table:: grid table example
   :widths: 1 1 5

   +------------+------------+-----------+
   | Header 1   | Header 2   | Header 3  |
   +============+============+===========+
   | body row 1 | column 2   | column 3  |
   +------------+------------+-----------+
   | body row 2 | Cells may span columns.|
   +------------+------------+-----------+
   | body row 3 | Cells may  | - Cells   |
   +------------+ span rows. | - contain |
   | body row 4 |            | - blocks. |
   +------------+------------+-----------+
```

> **ASCII grid table**
>
> - **Class:** rst-example
>
> **grid table example**
>
> | Header 1   | Header 2    | Header 3    |
> | ---------- | ----------- | ----------- |
> | body row 1 | column 2    | column 3    |
> | body row 2 | Cells may s | an columns. |
>
> +------------+ span rows. | - contain |
> \| body row 4 |            | - blocks. |
> +------------+------------+-----------+

<a id="rest-flat-table"></a>

## flat-table

The `flat-table` is a further developed variant of the list tables.  It is a double-stage list similar to the
[list-table](https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table) with some additional features:

**column-span: `cspan`**

with the role `cspan` a cell can be extended through additional columns

**row-span: `rspan`**

with the role `rspan` a cell can be extended through additional rows

**auto-span:**

spans rightmost cell of a table row over the missing cells on the right side
of that table-row.  With Option `:fill-cells:` this behavior can changed
from *auto span* to *auto fill*, which automatically inserts (empty) cells
instead of spanning the last cell.

**options:**

:header-rows:   \[int] count of header rows
:stub-columns:  \[int] count of stub columns

- **Widths:** \[\[int] \[int] ... ] widths of columns
  :fill-cells:    instead of auto-span missing cells, insert missing cells

**roles:**

- **Cspan:** \[int] additional columns (*morecols*)
- **Rspan:** \[int] additional rows (*morerows*)

The example below shows how to use this markup.  The first level of the staged
list is the *table-row*. In the *table-row* there is only one markup allowed,
the list of the cells in this *table-row*. Exception are *comments* ( `..` )
and *targets* (e.g. a ref to row 2 of table's body).

```reST
.. flat-table:: ``flat-table`` example
   :header-rows: 2
   :stub-columns: 1
   :widths: 1 1 1 1 2

   * - :rspan:`1` head / stub
     - :cspan:`3` head 1.1-4

   * - head 2.1
     - head 2.2
     - head 2.3
     - head 2.4

   * .. row body 1 / this is a comment

     - row 1
     - :rspan:`2` cell 1-3.1
     - cell 1.2
     - cell 1.3
     - cell 1.4

   * .. Comments and targets are allowed on *table-row* stage.
     .. _`row body 2`:

     - row 2
     - cell 2.2
     - :rspan:`1` :cspan:`1`
       cell 2.3 with a span over

       * col 3-4 &
       * row 2-3

   * - row 3
     - cell 3.2

   * - row 4
     - cell 4.1
     - cell 4.2
     - cell 4.3
     - cell 4.4

   * - row 5
     - cell 5.1 with automatic span to right end

   * - row 6
     - cell 6.1
     - ..
```

> **List table**
>
> - **Class:** rst-example
>
> **`flat-table` example**
>
> - - `1` head / stub
>   - `3` head 1.1-4
> - - head 2.1
>   - head 2.2
>   - head 2.3
>   - head 2.4
> - .. row body 1 / this is a comment
>
>   - row 1
>   - `2` cell 1-3.1
>   - cell 1.2
>   - cell 1.3
>   - cell 1.4
> - .. Comments and targets are allowed on *table-row* stage. <a id="row-body-2"></a>
>
>   - row 2
>   - cell 2.2
>   - `1` `1`
>     cell 2.3 with a span over
>
>     - col 3-4 &
>     - row 2-3
> - - row 3
>   - cell 3.2
> - - row 4
>   - cell 4.1
>   - cell 4.2
>   - cell 4.3
>   - cell 4.4
> - - row 5
>   - cell 5.1 with automatic span to right end
> - - row 6
>   - cell 6.1
>   - ..

## CSV table

CSV table might be the choice if you want to include CSV-data from a outstanding
(build) process into your documentation.

```reST
.. csv-table:: CSV table example
   :header: .. , Column 1, Column 2
   :widths: 2 5 5
   :stub-columns: 1
   :file: csv_table.txt
```

Content of file `csv_table.txt`:

Build-time include: `csv_table.txt`

> **CSV table**
>
> - **Class:** rst-example
>
> **CSV table example**
>
> ```csv
> ```

# Templating

### Build environment

All *generic-doc* tasks are running in the [make install](https://docs.searxng.org/dev/makefile.html#make-install).

Templating is suitable for documentation which is created generic at the build
time.  The sphinx-jinja\_ extension evaluates jinja\_ templates in the [make install](https://docs.searxng.org/dev/makefile.html#make-install) (with SearXNG modules installed).  We use this e.g. to build chapter:
[configured engines](https://docs.searxng.org/user/configured_engines.html#configured-engines).  Below the jinja directive from the
[docs/admin/engines.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/admin/engines.rst) is shown:

Build-time include: `../user/configured_engines.rst`

The context for the template is selected in the line `.. jinja:: searx`.  In
sphinx's build configuration ([docs/conf.py](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/conf.py)) the `searx` context
contains the `engines` and `plugins`.

```py
import searx.search
import searx.engines
import searx.plugins
searx.search.initialize()
jinja_contexts = {
   'searx': {
      'engines': searx.engines.engines,
      'plugins': searx.plugins.plugins
   },
}
```

# Tabbed views

<a id="sphinx-tabs"></a> <a id="basic-tabs"></a> <a id="group-tabs"></a> <a id="code-tabs"></a>

With [sphinx-tabs](https://docs.searxng.org/dev/reST.html#sphinx-tabs) extension we have *tabbed views*.  To provide installation
instructions with one tab per distribution we use the [group-tabs](https://docs.searxng.org/dev/reST.html#group-tabs) directive,
others are basic-tabs\_ and code-tabs\_.  Below a *group-tab* example from
[docs build](https://docs.searxng.org/admin/buildhosts.html#docs-build) is shown:

Build-time include: `../admin/buildhosts.rst`

<a id="math"></a>

# Math equations

<a id="mathematics"></a> <a id="amsmath-user-guide"></a>
<http://vesta.informatik.rwth-aachen.de/ftp/pub/mirror/ctan/macros/latex/required/amsmath/amsldoc.pdf>

### About LaTeX

- [amsmath user guide](https://docs.searxng.org/dev/reST.html#amsmath-user-guide)
- Mathematics\_
- [docs build](https://docs.searxng.org/admin/buildhosts.html#docs-build)

The input language for mathematics is LaTeX markup using the [amsmath](https://ctan.org/pkg/amsmath)
package.

To embed LaTeX markup in reST documents, use role `:math:` for
inline and directive `.. math::` for block markup.

```reST
In :math:numref:`schroedinger general` the time-dependent Schrödinger equation
is shown.

.. math::
   :label: schroedinger general

    \mathrm{i}\hbar\dfrac{\partial}{\partial t} |\,\psi (t) \rangle =
          \hat{H} |\,\psi (t) \rangle.
```

> **LaTeX math equation**
>
> - **Class:** rst-example
>
> In `schroedinger general` the time-dependent Schrödinger equation
> is shown.
>
> $$
>
> $$

The next example shows the difference of `\tfrac` (*textstyle*) and `\dfrac`
(*displaystyle*) used in a inline markup or another fraction.

```reST
``\tfrac`` **inline example** :math:`\tfrac{\tfrac{1}{x}+\tfrac{1}{y}}{y-z}`
``\dfrac`` **inline example** :math:`\dfrac{\dfrac{1}{x}+\dfrac{1}{y}}{y-z}`
```

> **Line spacing**
>
> - **Class:** rst-example
>
> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
> voluptua.  ...
> `\tfrac` **inline example** `\tfrac{\tfrac{1}{x}+\tfrac{1}{y}}{y-z}`
> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
> gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
>
> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
> voluptua.  ...
> `\tfrac` **inline example** `\dfrac{\dfrac{1}{x}+\dfrac{1}{y}}{y-z}`
> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
> gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

<a id="kiss"></a>

<a id="readability"></a> <a id="sphinx-primer"></a>
<https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html> <a id="rest"></a> <a id="sphinx-roles"></a>
<https://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html> <a id="sphinx"></a> <a id="sphinx-doc-faq"></a> <a id="sphinx-markup-constructs"></a>
<https://www.sphinx-doc.org/en/stable/markup/index.html> <a id="sphinx-cross-references"></a>
<https://www.sphinx-doc.org/en/stable/markup/inline.html#cross-referencing-arbitrary-locations> <a id="sphinx-ext-extlinks"></a>
<https://www.sphinx-doc.org/en/master/usage/extensions/extlinks.html> <a id="intersphinx"></a> <a id="sphinx-config"></a> <a id="sphinx-s-autodoc"></a> <a id="sphinx-s-python-domain"></a>
<https://www.sphinx-doc.org/en/stable/domains.html#the-python-domain> <a id="sphinx-s-c-domain"></a>
<https://www.sphinx-doc.org/en/stable/domains.html#cross-referencing-c-constructs> <a id="doctree"></a>
<https://www.sphinx-doc.org/en/master/extdev/tutorial.html?highlight=doctree#build-phases> <a id="docutils"></a> <a id="docutils-faq"></a> <a id="linuxdoc"></a> <a id="jinja"></a> <a id="sphinx-jinja"></a> <a id="svg"></a> <a id="dot"></a> <a id="graphviz-s-dot"></a> <a id="graphviz"></a> <a id="imagemagick"></a>

<a id="emacs-table-mode"></a> <a id="online-tables-generator"></a> <a id="oasis-xml-exchange-table-model"></a>
