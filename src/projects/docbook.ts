import path from "node:path";

// A DocBook 4.5 XML reader for documentation sources that are assembled from
// external entities rather than a single file. It resolves the declarations in
// a document's internal DTD subset, splices SYSTEM entities in as they are
// referenced, and fails on anything it was not told how to read, so an upstream
// construct never reaches the corpus silently.

export interface DocbookElement {
  readonly type: "element";
  readonly name: string;
  readonly attributes: Readonly<Record<string, string>>;
  readonly children: readonly DocbookNode[];
  // The file the element was written in, which the internal-entity layout
  // otherwise hides once everything is spliced into one tree.
  readonly sourcePath: string;
}

export interface DocbookText {
  readonly type: "text";
  readonly value: string;
}

export type DocbookNode = DocbookElement | DocbookText;

export interface DocbookEntities {
  readonly system: ReadonlyMap<string, string>;
  readonly text: ReadonlyMap<string, string>;
}

// Documentation sources include files the upstream build generates from data
// checked in elsewhere in the repository. The caller supplies those as virtual
// files so generated and checked-in content parse through one path.
export interface DocbookSource {
  read(relativePath: string): Promise<string>;
  exists(relativePath: string): Promise<boolean>;
}

// Named characters DocBook inherits from the ISO entity sets. An unlisted name
// is an error rather than a silent drop.
const characterEntities: ReadonlyMap<string, string> = new Map([
  ["amp", "&"],
  ["lt", "<"],
  ["gt", ">"],
  ["quot", '"'],
  ["apos", "'"],
  ["nbsp", " "],
  ["mdash", "—"],
  ["ndash", "–"],
  ["bull", "•"],
  ["sect", "§"],
  ["copy", "©"],
  ["rarr", "→"],
  ["pi", "π"],
  ["ldquo", "“"],
  ["rdquo", "”"],
  ["zwsp", "​"],
  ["frac12", "½"],
  ["frac14", "¼"],
  ["frac34", "¾"],
  ["aacute", "á"],
  ["Aacute", "Á"],
  ["Acirc", "Â"],
  ["AElig", "Æ"],
  ["Agrave", "À"],
  ["Aring", "Å"],
  ["Atilde", "Ã"],
  ["Auml", "Ä"],
  ["eacute", "é"],
  ["ecirc", "ê"],
  ["ntilde", "ñ"],
  ["oacute", "ó"],
  ["ocirc", "ô"],
  ["oslash", "ø"],
  ["uuml", "ü"],
]);

const maximumEntityDepth = 20;

// `<!ENTITY name SYSTEM "file">`, `<!ENTITY % name SYSTEM "file">`, and
// `<!ENTITY name "literal">` declarations, wherever they are declared: an
// internal subset, or a file a parameter entity pulled into one.
export async function collectEntities(
  source: DocbookSource,
  documentPath: string,
  seeded: ReadonlyMap<string, string>,
): Promise<DocbookEntities> {
  const system = new Map<string, string>();
  const text = new Map<string, string>(seeded);
  await scan(documentPath, 0);
  return { system, text };

  async function scan(relativePath: string, depth: number): Promise<void> {
    if (depth > maximumEntityDepth) {
      throw new Error(
        `Entity declarations nest deeper than ${maximumEntityDepth}`,
      );
    }
    const content = await source.read(relativePath);
    const directory = path.posix.dirname(relativePath);
    const parameters = new Map<string, string>();
    const declaration =
      /<!ENTITY\s+(%\s+)?([A-Za-z][\w.-]*)\s+(?:SYSTEM\s+"([^"]+)"|"([^"]*)")\s*>/g;
    for (const match of content.matchAll(declaration)) {
      const [, isParameter, name, systemFile, literal] = match;
      if (!name) {
        continue;
      }
      if (systemFile !== undefined) {
        const resolved = path.posix.normalize(
          path.posix.join(directory, systemFile),
        );
        if (isParameter) {
          parameters.set(name, resolved);
        } else {
          system.set(name, resolved);
        }
        continue;
      }
      if (literal !== undefined && !isParameter) {
        text.set(name, literal);
      }
    }
    // A parameter entity contributes declarations only where it is referenced.
    for (const match of content.matchAll(/%([A-Za-z][\w.-]*);/g)) {
      const name = match[1];
      const file = name ? parameters.get(name) : undefined;
      if (!file) {
        continue;
      }
      // A generated file such as `version.sgml` is absent from the repository;
      // its values are seeded from the pin instead.
      if (await source.exists(file)) {
        await scan(file, depth + 1);
      }
    }
  }
}

export async function parseDocbook(
  source: DocbookSource,
  documentPath: string,
  entities: DocbookEntities,
): Promise<readonly DocbookNode[]> {
  return parseFile(source, documentPath, entities, new Set([documentPath]));
}

async function parseFile(
  source: DocbookSource,
  relativePath: string,
  entities: DocbookEntities,
  stack: ReadonlySet<string>,
): Promise<readonly DocbookNode[]> {
  const content = await source.read(relativePath);
  const reader = new DocbookReader(content, relativePath, entities);
  const nodes = reader.read();
  return expandSystemEntities(source, nodes, entities, stack);
}

// A SYSTEM entity reference stands for a subtree, so it is parsed on its own
// and spliced in where it was referenced.
async function expandSystemEntities(
  source: DocbookSource,
  nodes: readonly DocbookNode[],
  entities: DocbookEntities,
  stack: ReadonlySet<string>,
): Promise<readonly DocbookNode[]> {
  const result: DocbookNode[] = [];
  for (const node of nodes) {
    if (node.type === "text") {
      result.push(node);
      continue;
    }
    if (node.name === systemEntityPlaceholder) {
      const name = node.attributes.name ?? "";
      const file = entities.system.get(name);
      if (!file) {
        throw new Error(`Undeclared entity &${name};`);
      }
      if (stack.has(file)) {
        throw new Error(`Circular entity reference to ${file}`);
      }
      result.push(
        ...(await parseFile(source, file, entities, new Set([...stack, file]))),
      );
      continue;
    }
    result.push({
      ...node,
      children: await expandSystemEntities(
        source,
        node.children,
        entities,
        stack,
      ),
    });
  }
  return result;
}

const systemEntityPlaceholder = "#system-entity";

class DocbookReader {
  readonly #source: string;
  readonly #sourcePath: string;
  readonly #entities: DocbookEntities;
  #offset = 0;

  constructor(source: string, sourcePath: string, entities: DocbookEntities) {
    this.#source = source;
    this.#sourcePath = sourcePath;
    this.#entities = entities;
  }

  read(): readonly DocbookNode[] {
    const nodes = this.#readNodes(undefined);
    if (this.#offset < this.#source.length) {
      throw new Error(
        `Unexpected trailing content in ${this.#sourcePath} at offset ${this.#offset}`,
      );
    }
    return nodes;
  }

  #readNodes(parent: string | undefined): readonly DocbookNode[] {
    const nodes: DocbookNode[] = [];
    let text = "";
    const flush = (): void => {
      if (text !== "") {
        nodes.push({ type: "text", value: text });
        text = "";
      }
    };
    while (this.#offset < this.#source.length) {
      const next = this.#source.indexOf("<", this.#offset);
      const ampersand = this.#source.indexOf("&", this.#offset);
      if (next === -1 && ampersand === -1) {
        text += this.#decodeText(this.#source.slice(this.#offset));
        this.#offset = this.#source.length;
        break;
      }
      if (ampersand !== -1 && (next === -1 || ampersand < next)) {
        text += this.#source.slice(this.#offset, ampersand);
        this.#offset = ampersand;
        const entity = this.#readEntityReference();
        if (typeof entity === "string") {
          text += entity;
        } else {
          flush();
          nodes.push(entity);
        }
        continue;
      }
      text += this.#source.slice(this.#offset, next);
      this.#offset = next;
      // A CDATA section is literal content: no markup, no entity references.
      if (this.#source.startsWith("<![CDATA[", this.#offset)) {
        const end = this.#source.indexOf("]]>", this.#offset + 9);
        if (end === -1) {
          throw new Error(`Unterminated CDATA section in ${this.#sourcePath}`);
        }
        text += this.#source.slice(this.#offset + 9, end);
        this.#offset = end + 3;
        continue;
      }
      if (this.#skipProlog()) {
        continue;
      }
      if (this.#source.startsWith("</", this.#offset)) {
        const close = this.#source.indexOf(">", this.#offset);
        if (close === -1) {
          throw new Error(`Unterminated end tag in ${this.#sourcePath}`);
        }
        const name = this.#source.slice(this.#offset + 2, close).trim();
        if (parent === undefined) {
          throw new Error(
            `Unexpected </${name}> at top level of ${this.#sourcePath}`,
          );
        }
        if (name !== parent) {
          throw new Error(
            `Expected </${parent}> but found </${name}> in ${this.#sourcePath}`,
          );
        }
        this.#offset = close + 1;
        flush();
        return nodes;
      }
      flush();
      nodes.push(this.#readElement());
    }
    if (parent !== undefined) {
      throw new Error(`Unterminated <${parent}> in ${this.#sourcePath}`);
    }
    flush();
    return nodes;
  }

  #readElement(): DocbookElement {
    const match = /^<([A-Za-z][\w.-]*)/.exec(this.#source.slice(this.#offset));
    if (!match?.[1]) {
      throw new Error(
        `Malformed tag in ${this.#sourcePath} at offset ${this.#offset}`,
      );
    }
    const name = match[1];
    this.#offset += match[0].length;
    const attributes: Record<string, string> = {};
    for (;;) {
      this.#skipWhitespace();
      if (this.#source.startsWith("/>", this.#offset)) {
        this.#offset += 2;
        return {
          type: "element",
          name,
          attributes,
          children: [],
          sourcePath: this.#sourcePath,
        };
      }
      if (this.#source.startsWith(">", this.#offset)) {
        this.#offset += 1;
        return {
          type: "element",
          name,
          attributes,
          children: this.#readNodes(name),
          sourcePath: this.#sourcePath,
        };
      }
      const attribute = /^([A-Za-z][\w.:-]*)\s*=\s*("[^"]*"|'[^']*')/.exec(
        this.#source.slice(this.#offset),
      );
      if (!attribute?.[1] || attribute[2] === undefined) {
        throw new Error(
          `Malformed attribute in <${name}> in ${this.#sourcePath}`,
        );
      }
      attributes[attribute[1]] = this.#decodeText(attribute[2].slice(1, -1));
      this.#offset += attribute[0].length;
    }
  }

  // Comments, CDATA, the XML declaration, processing instructions, and the
  // DOCTYPE with its internal subset carry no document content; the
  // declarations in the subset were already collected separately.
  #skipProlog(): boolean {
    if (this.#source.startsWith("<!--", this.#offset)) {
      const end = this.#source.indexOf("-->", this.#offset + 4);
      if (end === -1) {
        throw new Error(`Unterminated comment in ${this.#sourcePath}`);
      }
      this.#offset = end + 3;
      return true;
    }
    if (this.#source.startsWith("<?", this.#offset)) {
      const end = this.#source.indexOf("?>", this.#offset + 2);
      if (end === -1) {
        throw new Error(
          `Unterminated processing instruction in ${this.#sourcePath}`,
        );
      }
      this.#offset = end + 2;
      return true;
    }
    if (this.#source.startsWith("<!DOCTYPE", this.#offset)) {
      this.#offset = this.#endOfDoctype();
      return true;
    }
    return false;
  }

  #endOfDoctype(): number {
    let index = this.#offset + "<!DOCTYPE".length;
    let depth = 0;
    for (; index < this.#source.length; index += 1) {
      const character = this.#source[index];
      if (character === "[") {
        depth += 1;
      } else if (character === "]") {
        depth -= 1;
      } else if (character === ">" && depth <= 0) {
        return index + 1;
      }
    }
    throw new Error(`Unterminated DOCTYPE in ${this.#sourcePath}`);
  }

  #readEntityReference(): string | DocbookElement {
    const match = /^&(#x?[0-9A-Fa-f]+|[A-Za-z][\w.-]*);/.exec(
      this.#source.slice(this.#offset),
    );
    if (!match?.[1]) {
      throw new Error(
        `Malformed entity reference in ${this.#sourcePath} at offset ${this.#offset}`,
      );
    }
    const name = match[1];
    this.#offset += match[0].length;
    if (name.startsWith("#")) {
      const code = name.startsWith("#x")
        ? Number.parseInt(name.slice(2), 16)
        : Number.parseInt(name.slice(1), 10);
      if (!Number.isInteger(code)) {
        throw new Error(`Malformed numeric character reference &${name};`);
      }
      return String.fromCodePoint(code);
    }
    const literal =
      this.#entities.text.get(name) ?? characterEntities.get(name);
    if (literal !== undefined) {
      return literal;
    }
    if (this.#entities.system.has(name)) {
      return {
        type: "element",
        name: systemEntityPlaceholder,
        attributes: { name },
        children: [],
        sourcePath: this.#sourcePath,
      };
    }
    throw new Error(`Undeclared entity &${name}; in ${this.#sourcePath}`);
  }

  #decodeText(value: string): string {
    return value.replace(
      /&(#x?[0-9A-Fa-f]+|[A-Za-z][\w.-]*);/g,
      (reference, name: string) => {
        if (name.startsWith("#")) {
          const code = name.startsWith("#x")
            ? Number.parseInt(name.slice(2), 16)
            : Number.parseInt(name.slice(1), 10);
          return Number.isInteger(code)
            ? String.fromCodePoint(code)
            : reference;
        }
        return (
          this.#entities.text.get(name) ??
          characterEntities.get(name) ??
          reference
        );
      },
    );
  }

  #skipWhitespace(): void {
    while (/\s/.test(this.#source[this.#offset] ?? "")) {
      this.#offset += 1;
    }
  }
}
