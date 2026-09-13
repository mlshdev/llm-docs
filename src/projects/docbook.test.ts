import { describe, expect, test } from "bun:test";
import { collectEntities, parseDocbook } from "./docbook.ts";
import type { DocbookElement, DocbookSource } from "./docbook.ts";

function sourceOf(files: Record<string, string>): DocbookSource {
  return {
    read: async (relativePath) => {
      const content = files[relativePath];
      if (content === undefined) {
        throw new Error(`missing ${relativePath}`);
      }
      return content;
    },
    exists: async (relativePath) => files[relativePath] !== undefined,
  };
}

function elementsOf(nodes: readonly { type: string }[]): DocbookElement[] {
  return nodes.filter(
    (node): node is DocbookElement => node.type === "element",
  );
}

describe("DocBook entity collection", () => {
  test("follows parameter entities into the files they declare", async () => {
    const source = sourceOf({
      "book.sgml": `<!DOCTYPE book [
<!ENTITY % filelist SYSTEM "filelist.sgml">
%filelist;
<!ENTITY project "PostgreSQL">
]>
<book/>`,
      "filelist.sgml": `<!ENTITY % allfiles SYSTEM "ref/allfiles.sgml">
%allfiles;
<!ENTITY intro SYSTEM "intro.sgml">`,
      "ref/allfiles.sgml": `<!ENTITY selectRef SYSTEM "select.sgml">`,
    });

    const entities = await collectEntities(source, "book.sgml", new Map());

    expect(entities.system.get("intro")).toBe("intro.sgml");
    // `ref/allfiles.sgml` names its siblings unqualified, so a system path is
    // relative to the file that declares it, not to the book root.
    expect(entities.system.get("selectRef")).toBe("ref/select.sgml");
    expect(entities.text.get("project")).toBe("PostgreSQL");
  });

  test("tolerates a build-generated file that is absent from the checkout", async () => {
    const source = sourceOf({
      "book.sgml": `<!DOCTYPE book [
<!ENTITY % version SYSTEM "version.sgml">
%version;
]>
<book>&version;</book>`,
    });

    const entities = await collectEntities(
      source,
      "book.sgml",
      new Map([["version", "18.6"]]),
    );
    const nodes = await parseDocbook(source, "book.sgml", entities);

    expect(elementsOf(nodes)[0]?.children[0]).toEqual({
      type: "text",
      value: "18.6",
    });
  });
});

describe("DocBook parsing", () => {
  test("expands a system entity into the referenced file's tree", async () => {
    const source = sourceOf({
      "book.sgml": `<!DOCTYPE book [
<!ENTITY intro SYSTEM "intro.sgml">
]>
<book id="postgres">&intro;</book>`,
      "intro.sgml": `<chapter id="intro"><title>Preface</title></chapter>`,
    });

    const entities = await collectEntities(source, "book.sgml", new Map());
    const book = elementsOf(
      await parseDocbook(source, "book.sgml", entities),
    )[0];
    const chapter = elementsOf(book?.children ?? [])[0];

    expect(book?.name).toBe("book");
    expect(chapter?.name).toBe("chapter");
    expect(chapter?.attributes.id).toBe("intro");
    // The page's provenance must survive the include so quarantine reports and
    // manifests name the file a reader can open, not the book root.
    expect(chapter?.sourcePath).toBe("intro.sgml");
  });

  test("keeps CDATA literal and decodes character references elsewhere", async () => {
    const source = sourceOf({
      "book.sgml": `<book><para>caf&eacute; &amp; &#65;</para>
<programlisting><![CDATA[if (a &lt; b) ]]></programlisting></book>`,
    });

    const entities = await collectEntities(source, "book.sgml", new Map());
    const book = elementsOf(
      await parseDocbook(source, "book.sgml", entities),
    )[0];
    const [para, listing] = elementsOf(book?.children ?? []);

    expect(para?.children[0]).toEqual({ type: "text", value: "café & A" });
    expect(listing?.children[0]).toEqual({
      type: "text",
      value: "if (a &lt; b) ",
    });
  });

  test("rejects an undeclared entity rather than dropping it", async () => {
    const source = sourceOf({ "book.sgml": `<book>&nosuchentity;</book>` });
    const entities = await collectEntities(source, "book.sgml", new Map());

    expect(parseDocbook(source, "book.sgml", entities)).rejects.toThrow(
      /nosuchentity/,
    );
  });

  test("rejects a mismatched end tag", async () => {
    const source = sourceOf({ "book.sgml": `<book><para>text</sect1></book>` });
    const entities = await collectEntities(source, "book.sgml", new Map());

    expect(parseDocbook(source, "book.sgml", entities)).rejects.toThrow(
      /sect1/,
    );
  });
});
