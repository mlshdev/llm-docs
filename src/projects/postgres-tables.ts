// PostgreSQL assembles part of its manual at build time from data files that
// live outside `doc/`: error codes, wait events, SQL conformance, key words,
// and the Meson target list. The upstream generators are Perl scripts, so the
// tables are reproduced here from the same checked-in inputs, emitting the same
// DocBook the manual expects, without executing upstream code.

export interface GeneratedTableInputs {
  read(relativePath: string): Promise<string>;
}

const sqlVersions = ["2023", "2016", "1992"] as const;

export async function generateErrcodesTable(
  inputs: GeneratedTableInputs,
): Promise<string> {
  const source = await inputs.read("src/backend/utils/errcodes.txt");
  const rows: string[] = [];
  for (const line of source.split("\n")) {
    if (line.startsWith("#") || line.trim() === "") {
      continue;
    }
    if (line.startsWith("Section:")) {
      const heading = line
        .replace(/^Section: /, "")
        .replace("-", "—")
        .replace(/PostgreSQL/g, "<productname>PostgreSQL</productname>");
      rows.push(
        `<row><entry spanname="span12"><emphasis role="bold">${heading}</emphasis></entry></row>`,
      );
      continue;
    }
    const match = /^(\S{5})\s+([EWS])\s+(\S+)(?:\s+(\S+))?/.exec(line);
    if (!match) {
      throw new Error(`Unparsable errcodes.txt line: ${line}`);
    }
    const [, sqlstate, , , condition] = match;
    if (!condition) {
      continue;
    }
    rows.push(
      `<row><entry><literal>${sqlstate}</literal></entry><entry><symbol>${condition}</symbol></entry></row>`,
    );
  }
  return rows.join("\n");
}

export async function generateWaitEventTypes(
  inputs: GeneratedTableInputs,
): Promise<string> {
  const source = await inputs.read(
    "src/backend/utils/activity/wait_event_names.txt",
  );
  const events = new Map<string, { name: string; description: string }[]>();
  let className: string | undefined;
  let abiCompatibility = false;
  const lines: { className: string; line: string }[] = [];
  for (const raw of source.split("\n")) {
    const line = raw.trimEnd();
    if (line.startsWith("#") || line.trim() === "") {
      continue;
    }
    const section = /^Section: ClassName(.*)/.exec(line);
    if (section) {
      className = line.replace(/^.*- /, "");
      abiCompatibility = false;
      continue;
    }
    if (line === "ABI_compatibility:") {
      abiCompatibility = true;
      continue;
    }
    if (abiCompatibility || !className) {
      continue;
    }
    lines.push({ className, line });
  }
  // The documentation orders every class's events by event name, compared
  // case-insensitively.
  const parsed = lines
    .map(({ className: waitClass, line }) => {
      const match = /^(\w+)\t+("\w.*\.")$/.exec(line);
      if (!match?.[1] || !match[2]) {
        throw new Error(`Unparsable wait_event_names.txt line: ${line}`);
      }
      return { waitClass, name: match[1], sentence: match[2].slice(1, -1) };
    })
    .sort((left, right) =>
      left.name.toUpperCase() < right.name.toUpperCase()
        ? -1
        : left.name.toUpperCase() > right.name.toUpperCase()
          ? 1
          : 0,
    );
  for (const entry of parsed) {
    // `LWLock` and `Lock` events are documented under their literal name;
    // every other class converts `SOME_EVENT` to camel case.
    const description =
      entry.waitClass === "WaitEventLWLock" ||
      entry.waitClass === "WaitEventLock"
        ? entry.name
        : entry.name
            .split("_")
            .map((part) => `${part.slice(0, 1)}${part.slice(1).toLowerCase()}`)
            .join("");
    const list = events.get(entry.waitClass) ?? [];
    list.push({ name: description, description: entry.sentence });
    events.set(entry.waitClass, list);
  }
  const tables: string[] = [];
  for (const waitClass of [...events.keys()].sort((left, right) =>
    left.toUpperCase() < right.toUpperCase() ? -1 : 1,
  )) {
    const label = waitClass.replace(/^WaitEvent/, "");
    const rows = (events.get(waitClass) ?? []).map(
      (event) =>
        `     <row><entry><literal>${event.name}</literal></entry><entry>${event.description}</entry></row>`,
    );
    tables.push(
      [
        `  <table id="wait-event-${label.toLowerCase()}-table">`,
        `   <title>Wait Events of Type <literal>${label}</literal></title>`,
        `   <tgroup cols="2">`,
        `    <thead><row><entry><literal>${label}</literal> Wait Event</entry><entry>Description</entry></row></thead>`,
        `    <tbody>`,
        ...rows,
        `    </tbody>`,
        `   </tgroup>`,
        `  </table>`,
      ].join("\n"),
    );
  }
  return tables.join("\n\n");
}

export async function generateFeatureTable(
  inputs: GeneratedTableInputs,
  supported: boolean,
): Promise<string> {
  const packages = await inputs.read(
    "src/backend/catalog/sql_feature_packages.txt",
  );
  const featurePackages = new Map<string, string>();
  for (const line of packages.split("\n")) {
    const [featureId, packageName] = line.split("\t");
    if (!featureId || !packageName) {
      continue;
    }
    const existing = featurePackages.get(featureId);
    featurePackages.set(
      featureId,
      existing ? `${existing}, ${packageName}` : packageName,
    );
  }
  const features = await inputs.read("src/backend/catalog/sql_features.txt");
  const rows: string[] = [];
  for (const line of features.split("\n")) {
    const columns = line.split("\t");
    if (columns.length < 5) {
      continue;
    }
    const [featureId, featureName, subfeatureId, subfeatureName, isSupported] =
      columns;
    const comments = columns[5] ?? "";
    if (!featureId || isSupported !== (supported ? "YES" : "NO")) {
      continue;
    }
    const identifier = subfeatureId
      ? `${featureId}-${subfeatureId}`
      : featureId;
    const name = escapeMarkup(
      (subfeatureId ? subfeatureName : featureName) ?? "",
    );
    rows.push(
      `  <row><entry>${identifier}</entry><entry>${featurePackages.get(featureId) ?? ""}</entry><entry>${name}</entry><entry>${escapeMarkup(comments)}</entry></row>`,
    );
  }
  return ["<tbody>", ...rows, "</tbody>"].join("\n");
}

export async function generateKeywordsTable(
  inputs: GeneratedTableInputs,
): Promise<string> {
  const keywords = new Map<string, Map<string, Set<string>>>();
  const asKeywords = new Set<string>();
  const record = (word: string, version: string, kind: string): void => {
    const byVersion = keywords.get(word) ?? new Map<string, Set<string>>();
    const kinds = byVersion.get(version) ?? new Set<string>();
    kinds.add(kind);
    byVersion.set(version, kinds);
    keywords.set(word, byVersion);
  };
  for (const version of sqlVersions) {
    for (const reservation of ["reserved", "nonreserved"] as const) {
      for (const file of keywordFiles(version, reservation)) {
        const content = await inputs.read(`doc/src/sgml/keywords/${file}`);
        for (const word of content.split("\n")) {
          if (word.trim() !== "") {
            record(word.trim(), version, reservation);
          }
        }
      }
    }
  }
  const kwlist = await inputs.read("src/include/parser/kwlist.h");
  for (const match of kwlist.matchAll(
    /^PG_KEYWORD\("(\w+)", \w+, (\w+)_KEYWORD, (\w+)\)/gm,
  )) {
    const [, word, category, label] = match;
    if (!word || !category) {
      continue;
    }
    record(word.toUpperCase(), "pg", category.toLowerCase());
    if (label === "AS_LABEL") {
      asKeywords.add(word.toUpperCase());
    }
  }
  const postgresCategory = (kinds: Set<string> | undefined): string => {
    if (kinds?.has("unreserved")) {
      return "non-reserved";
    }
    if (kinds?.has("col_name")) {
      return "non-reserved (cannot be function or type)";
    }
    if (kinds?.has("type_func_name")) {
      return "reserved (can be function or type)";
    }
    return kinds?.has("reserved") ? "reserved" : "";
  };
  const rows = [...keywords.keys()].sort().map((word) => {
    const byVersion = keywords.get(word);
    // Long key words carry zero-width spaces upstream so they can wrap; the
    // corpus is plain text, so the word is emitted whole.
    const cells = sqlVersions.map((version) => {
      const kinds = byVersion?.get(version);
      return kinds?.has("reserved")
        ? "reserved"
        : kinds?.has("nonreserved")
          ? "non-reserved"
          : "";
    });
    const postgres = `${postgresCategory(byVersion?.get("pg"))}${
      asKeywords.has(word) ? ", requires <literal>AS</literal>" : ""
    }`;
    return `   <row><entry><token>${word}</token></entry><entry>${postgres}</entry>${cells
      .map((cell) => `<entry>${cell}</entry>`)
      .join("")}</row>`;
  });
  return [
    '<table id="keywords-table">',
    " <title><acronym>SQL</acronym> Key Words</title>",
    ' <tgroup cols="5">',
    "  <thead>",
    "   <row><entry>Key Word</entry><entry><productname>PostgreSQL</productname></entry>",
    ...sqlVersions.map(
      (version) =>
        `   <entry>${version === "1992" ? "SQL-92" : `SQL:${version}`}</entry>`,
    ),
    "   </row>",
    "  </thead>",
    "  <tbody>",
    ...rows,
    "  </tbody>",
    " </tgroup>",
    "</table>",
  ].join("\n");
}

// The SQL standard key word lists are split across per-part files; the upstream
// generator globs them, so the exact set is derived from the standard's parts.
function keywordFiles(
  version: string,
  reservation: "reserved" | "nonreserved",
): readonly string[] {
  if (version === "1992") {
    return [`sql1992-${reservation}.txt`];
  }
  return ["02", "09", "14"].map(
    (part) => `sql${version}-${part}-${reservation}.txt`,
  );
}

export async function generateTargetsMeson(
  inputs: GeneratedTableInputs,
): Promise<string> {
  const source = await inputs.read("doc/src/sgml/targets-meson.txt");
  const sections: string[] = [];
  let open = false;
  for (const raw of source.split("\n")) {
    const line = raw.replace(/\s+$/, "");
    if (line.startsWith("#")) {
      continue;
    }
    // The section id is the group name alone, lower-cased: "Documentation
    // Targets:" is referenced as `targets-meson-documentation`.
    const group = /^(.*) Targets:$/.exec(line)?.[1];
    if (group) {
      if (open) {
        sections.push("  </variablelist>", " </sect3>");
      }
      sections.push(
        ` <sect3 id="targets-meson-${group.toLowerCase()}">`,
        `  <title>${group} Targets</title>`,
        "  <variablelist>",
      );
      open = true;
      continue;
    }
    const entry = open ? /^\s+([^ ]+)\s+(.+)/.exec(line) : undefined;
    if (entry?.[1]) {
      sections.push(
        `   <varlistentry id="meson-target-${entry[1].replaceAll("/", "-")}">`,
        `    <term><option>${entry[1]}</option></term>`,
        `    <listitem><para>${escapeMarkup(entry[2] ?? "")}</para></listitem>`,
        "   </varlistentry>",
      );
    }
  }
  if (open) {
    sections.push("  </variablelist>", " </sect3>");
  }
  return sections.join("\n");
}

function escapeMarkup(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
