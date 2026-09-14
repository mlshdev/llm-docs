import { describe, expect, test } from "bun:test";
import { convertSphinxRst, indexPythonSymbols } from "./discord-py.ts";

const context = {
  sourcePath: "docs/admin/example.rst",
  homepage: "https://docs.searxng.org",
  repository: "searxng/searxng",
  ref: "d4ce87c23431f607162fc5c39ce52c538d64588f",
  files: new Set<string>(),
  labels: new Map([
    [
      "settings engines",
      {
        sourcePath: "docs/admin/settings/settings_engines.rst",
        anchor: "settings-engines",
      },
    ],
  ]),
  symbols: indexPythonSymbols([]),
  currentModule: "",
  dialect: "searxng" as const,
};

describe("SearXNG static Sphinx conversion", () => {
  test("converts tabs, code, callouts, substitutions, roles, and autodoc", () => {
    const rendered = convertSphinxRst(
      `
Example
=========

.. |project| replace:: SearXNG

Use |project| and :ref:\`engine settings <settings engines>\` from
:origin:\`settings.yml <utils/templates/etc/searxng/settings.yml>\`.

.. tabs::

   .. group-tab:: Debian

      .. code-block:: bash

         apt install example

.. attention::

   Read this first.

.. automodule:: searx.missing
   :members:
`,
      { ...context },
    );
    expect(rendered).toContain("# Example");
    expect(rendered).toContain("Use SearXNG");
    expect(rendered).toContain(
      "https://docs.searxng.org/admin/settings/settings_engines.html#settings-engines",
    );
    expect(rendered).toContain(
      "https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/utils/templates/etc/searxng/settings.yml",
    );
    expect(rendered).toContain("**Debian**");
    expect(rendered).toContain("```bash\napt install example\n```");
    expect(rendered).toContain("> **Attention**");
    expect(rendered).toContain("Static Python API reference (`automodule`)");
    expect(rendered).not.toMatch(/^\s*\.\.\s+\S+::/m);
    expect(rendered).not.toMatch(/:[a-zA-Z][\w:-]*:`/);
  });

  test("converts simple RST tables to Markdown tables", () => {
    const rendered = convertSphinxRst(
      `
.. table:: Engine options

   ========== ======= ===========
   argument   type    information
   ========== ======= ===========
   paging     boolean multiple
                      result pages
   category   string  group
   ========== ======= ===========
`,
      { ...context },
    );
    expect(rendered).toContain("**Engine options**");
    expect(rendered).toContain("| argument | type | information |");
    expect(rendered).toContain("| paging | boolean | multiple result pages |");
  });

  test("does not scan directive-looking text inside converted code fences", () => {
    expect(
      convertSphinxRst(
        ".. code-block:: rst\n\n   .. unknown:: example\n   :ref:`literal`\n",
        { ...context },
      ),
    ).toContain(".. unknown:: example");
  });
});
