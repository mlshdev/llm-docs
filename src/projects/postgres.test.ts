import { describe, expect, test } from "bun:test";
import { collectEntities, parseDocbook } from "./docbook.ts";
import type { DocbookElement, DocbookSource } from "./docbook.ts";
import { planPostgresPages } from "./postgres.ts";
import { generateTargetsMeson } from "./postgres-tables.ts";
import type { Document } from "../types.ts";

async function convert(body: string): Promise<readonly Document[]> {
  const files: Record<string, string> = { "book.sgml": body };
  const source: DocbookSource = {
    read: async (relativePath) => files[relativePath] ?? "",
    exists: async (relativePath) => files[relativePath] !== undefined,
  };
  const entities = await collectEntities(source, "book.sgml", new Map());
  const book = (await parseDocbook(source, "book.sgml", entities)).find(
    (node): node is DocbookElement =>
      node.type === "element" && node.name === "book",
  );
  if (!book) {
    throw new Error("test book is missing its <book> element");
  }
  return planPostgresPages(book, "18").map((page) => page.render());
}

function bodyOf(documents: readonly Document[], id: string): string {
  const document = documents.find((entry) =>
    entry.outputPath.endsWith(`${id}.md`),
  );
  if (!document) {
    throw new Error(
      `no page ${id} in ${documents.map((d) => d.outputPath).join(", ")}`,
    );
  }
  return document.body;
}

describe("PostgreSQL page splitting", () => {
  test("splits a chapter into its own page and one page per top-level section", async () => {
    const documents = await convert(`<book id="postgres">
 <chapter id="ddl">
  <title>Data Definition</title>
  <para>This chapter covers tables.</para>
  <sect1 id="ddl-basics">
   <title>Table Basics</title>
   <para>A table is a named collection of rows.</para>
   <sect2 id="ddl-basics-columns">
    <title>Columns</title>
    <para>Each column has a type.</para>
   </sect2>
  </sect1>
 </chapter>
</book>`);

    expect(documents.map((entry) => entry.outputPath)).toEqual([
      "pages/ddl.md",
      "pages/ddl-basics.md",
    ]);
    const chapter = documents[0];
    expect(chapter?.canonicalUrl).toBe(
      "https://www.postgresql.org/docs/18/ddl.html",
    );
    expect(chapter?.sourcePath).toBe("book.sgml#ddl");
    expect(chapter?.body).toContain("# Data Definition");
    expect(chapter?.body).toContain("This chapter covers tables.");
    // A nested section stays with its own page rather than being duplicated
    // into the chapter that contains it.
    expect(chapter?.body).not.toContain("A table is a named collection");
    expect(bodyOf(documents, "ddl-basics")).toContain("## Columns");
  });
});

describe("PostgreSQL DocBook conversion", () => {
  test("resolves cross references, links, and footnote references", async () => {
    const documents = await convert(`<book id="postgres">
 <chapter id="ddl">
  <title>Data Definition</title>
  <para>
   See <xref linkend="sql-select"/> and <link linkend="ddl-basics">the basics</link>.
   Ordinary<footnote id="fn-caveat"><para>Except when it is not.</para></footnote>
   and repeated<footnoteref linkend="fn-caveat"/>.
  </para>
  <sect1 id="ddl-basics"><title>Table Basics</title><para>Basics.</para></sect1>
 </chapter>
 <reference id="sql">
  <title>SQL Commands</title>
  <refentry id="sql-select">
   <refmeta><refentrytitle>SELECT</refentrytitle><manvolnum>7</manvolnum></refmeta>
   <refnamediv><refname>SELECT</refname><refpurpose>retrieve rows</refpurpose></refnamediv>
   <refsect1><title>Description</title><para>Retrieves rows.</para></refsect1>
  </refentry>
 </reference>
</book>`);

    const chapter = bodyOf(documents, "ddl");
    expect(chapter).toContain("[SELECT](./sql-select.md)");
    expect(chapter).toContain("[the basics](./ddl-basics.md)");
    expect(chapter).toContain("Ordinary (Except when it is not.)");
    expect(chapter).toContain("repeated (Except when it is not.)");
    expect(bodyOf(documents, "sql-select")).toContain("## Description");
  });

  test("renders block constructs that appear inside a paragraph", async () => {
    const documents = await convert(`<book id="postgres">
 <chapter id="ddl">
  <title>Data Definition</title>
  <para>
   Constraints come in kinds:
   <itemizedlist>
    <listitem><para>Check constraints.</para></listitem>
    <listitem><para>Unique constraints.</para></listitem>
   </itemizedlist>
   as shown below.
   <programlisting>CREATE TABLE t (a int);</programlisting>
  </para>
  <note><para>Constraints are enforced.</para></note>
 </chapter>
</book>`);

    const body = bodyOf(documents, "ddl");
    expect(body).toContain("Constraints come in kinds:");
    expect(body).toContain("- Check constraints.");
    expect(body).toContain("as shown below.");
    expect(body).toContain("```sql\nCREATE TABLE t (a int);\n```");
    expect(body).toContain("> **Note**");
  });

  test("renders a function table with the arrow the stylesheet supplies", async () => {
    const documents = await convert(`<book id="postgres">
 <chapter id="functions">
  <title>Functions</title>
  <table id="functions-string-table">
   <title>String Functions</title>
   <tgroup cols="1">
    <tbody>
     <row>
      <entry role="func_table_entry">
       <para role="func_signature">
        <function>lower</function> ( <type>text</type> ) <returnvalue>text</returnvalue>
       </para>
       <para>Converts the string to lower case.</para>
       <para><literal>lower('TOM')</literal> <returnvalue>tom</returnvalue></para>
      </entry>
     </row>
    </tbody>
   </tgroup>
  </table>
 </chapter>
</book>`);

    const body = bodyOf(documents, "functions");
    expect(body).toContain("`lower` ( `text` ) → `text`");
    expect(body).toContain("`lower('TOM')` → `tom`");
  });

  test("renders key combinations, cited manual pages, and attributions", async () => {
    const documents = await convert(`<book id="postgres">
 <chapter id="app">
  <title>Applications</title>
  <para>
   Press <keycombo action="simul"><keycap>Control</keycap><keycap>D</keycap></keycombo>
   and read <citerefentry><refentrytitle>psql</refentrytitle><manvolnum>1</manvolnum></citerefentry>.
  </para>
  <blockquote>
   <attribution>RFC 1413</attribution>
   <para>The Identification Protocol.</para>
  </blockquote>
 </chapter>
</book>`);

    const body = bodyOf(documents, "app");
    expect(body).toContain("`Control`+`D`");
    expect(body).toContain("`psql`(1)");
    expect(body).toContain("— RFC 1413");
  });

  test("quarantines a page whose markup has no handler instead of dropping it", async () => {
    const book = `<book id="postgres">
 <chapter id="ddl"><title>Data Definition</title>
  <para>Text <nosuchelement>value</nosuchelement>.</para>
 </chapter>
</book>`;

    expect(convert(book)).rejects.toThrow(/Unhandled inline DocBook element/);
  });

  test("rejects a cross reference whose target the book never declares", async () => {
    const book = `<book id="postgres">
 <chapter id="ddl"><title>Data Definition</title>
  <para>See <xref linkend="never-declared"/>.</para>
 </chapter>
</book>`;

    expect(convert(book)).rejects.toThrow(/never-declared/);
  });
});

describe("PostgreSQL generated tables", () => {
  test("reproduces the Meson target ids the manual cross-references", async () => {
    const generated = await generateTargetsMeson({
      read: async () => `# comment line
Documentation Targets:
  docs              Build documentation in multiple formats
  html/postgres.html  Build HTML documentation

Installation Targets:
  install           Install the project
`,
    });

    expect(generated).toContain('<sect3 id="targets-meson-documentation">');
    expect(generated).toContain("<title>Documentation Targets</title>");
    expect(generated).toContain('<varlistentry id="meson-target-docs">');
    // A target whose name is a path keeps its name, with slashes mapped so the
    // id stays a legal identifier.
    expect(generated).toContain(
      '<varlistentry id="meson-target-html-postgres.html">',
    );
    expect(generated).toContain('<sect3 id="targets-meson-installation">');
  });
});
