import { describe, expect, test } from "bun:test";
import { convertAria2Rst, renderAria2ApiReference } from "./aria2.ts";

describe("aria2 RST conversion", () => {
  test("converts options, nested admonitions, code blocks, and roles", () => {
    const headingRule = "=".repeat(7);
    const source = `Options
${headingRule}

.. option:: -j, --jobs=<N>

  Set :option:\`--jobs\` using the :kbd:\`TAB\` key.

  .. note::

    Example:

    .. code-block:: console

      $ aria2c --jobs=2
`;
    const converted = convertAria2Rst(source, "aria2c.rst");
    expect(converted).toContain("#### `-j, --jobs=<N>`");
    expect(converted).toContain("Set `--jobs` using the `TAB` key.");
    expect(converted).toContain("> **Note**");
    expect(converted).toContain("> ```console\n> $ aria2c --jobs=2\n> ```");
    expect(converted).not.toContain("\n$ aria2c --jobs=2\n");
  });

  test("converts literal blocks, definition lists, links, and simple tables", () => {
    const tableRule = `${"=".repeat(7)} ${"=".repeat(10)}`;
    const source = `Guide
=====

See \`aria2 <https://aria2.github.io/>\`_.

host
  Server name.

Example::

  aria2c https://example.com/file

${tableRule}
feature dependency
${tableRule}
HTTPS   OpenSSL
${tableRule}
`;
    const converted = convertAria2Rst(source, "README.rst");
    expect(converted).toContain("[aria2](https://aria2.github.io/)");
    expect(converted).toContain("**host**\n\nServer name.");
    expect(converted).toContain(
      "```text\naria2c https://example.com/file\n```",
    );
    expect(converted).toContain("| feature | dependency |");
    expect(converted).toContain("| HTTPS | OpenSSL |");
  });

  test("repairs the malformed upstream function role", () => {
    expect(
      convertAria2Rst(
        ":func:'aria2.shutdown` and :rfc:`6455`",
        "doc/manual-src/en/aria2c.rst",
      ),
    ).toBe(
      "`aria2.shutdown` and [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455)\n",
    );
  });

  test("joins multiline inline literals", () => {
    expect(
      convertAria2Rst(
        "Use ``--http-proxy=user\n--http-proxy-passwd=secret``.\n",
        "doc/manual-src/en/aria2c.rst",
      ),
    ).toBe("Use `--http-proxy=user --http-proxy-passwd=secret`.\n");
  });

  test("does not join closed literals on adjacent definition lines", () => {
    expect(
      convertAria2Rst(
        "``EXT``: 4 bytes\n  Compare ``EXT[3]`` with zero.\n",
        "doc/manual-src/en/technical-notes.rst",
      ),
    ).toBe("**`EXT`: 4 bytes**\n\nCompare `EXT[3]` with zero.\n");
  });

  test("rejects unsupported directives and includes", () => {
    expect(() => convertAria2Rst(".. custom:: value\n", "aria2c.rst")).toThrow(
      "Unsupported aria2 RST directive custom",
    );
    expect(() =>
      convertAria2Rst(".. include:: missing\n", "aria2c.rst"),
    ).toThrow("Unsupported aria2 include missing");
  });

  test("rejects external targets and substitutions instead of dropping them", () => {
    expect(() =>
      convertAria2Rst(
        ".. _site: https://example.com\n\nSee `site`_.\n",
        "aria2c.rst",
      ),
    ).toThrow("Unsupported aria2 RST construct");
    expect(() =>
      convertAria2Rst(
        ".. |release| replace:: 1.37.0\n\nVersion |release|.\n",
        "aria2c.rst",
      ),
    ).toThrow("Unsupported aria2 RST construct");
  });
});

describe("aria2 API reference generation", () => {
  test("renders documented enums, structs, members, and functions", () => {
    const header = `/**
 * @enum
 *
 * Download events.
 */
enum Event {
  /**
   * Download completed.
   */
  COMPLETE = 1,
};

/**
 * @struct
 *
 * Session options.
 */
struct Config {
  /**
   * Whether to continue.
   */
  bool keepRunning;
};

/**
 * @function
 *
 * Runs one event for |config|. See :ref:\`input-file\`.
 */
int run(const Config& config);
`;
    const rendered = renderAria2ApiReference(header);
    expect(rendered).toContain("### Enums");
    expect(rendered).toContain("#### `enum Event`");
    expect(rendered).toContain("##### `COMPLETE = 1`");
    expect(rendered).toContain("#### `struct Config`");
    expect(rendered).toContain("##### `bool keepRunning`");
    expect(rendered).toContain("#### `int run(const Config& config)`");
    expect(rendered).toContain("Runs one event for *config*.");
    expect(rendered).toContain(
      "https://aria2.github.io/manual/en/html/aria2c.html#input-file",
    );
  });

  test("rejects unknown documented declaration kinds", () => {
    expect(() =>
      renderAria2ApiReference("/**\n * @concept\n */\nconcept Value = true;\n"),
    ).toThrow("Unsupported aria2 API marker @concept");
  });
});
