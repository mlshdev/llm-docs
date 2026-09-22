> Pinned source for Qdrant master: [qdrant-landing/content/documentation/tutorials-operations/incremental-embedding-updates.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/tutorials-operations/incremental-embedding-updates.md)
> Canonical documentation: https://qdrant.tech/documentation/tutorials-operations/incremental-embedding-updates/

# Incremental Embedding Updates

| Time: 25 min | Level: Beginner | Output: [GitHub](https://github.com/qdrant/examples/blob/master/temporal-data-drift/sync_raw_data_to_embeddings.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://githubtocolab.com/qdrant/examples/blob/master/temporal-data-drift/sync_raw_data_to_embeddings.ipynb) |
| ------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

Qdrant documentation [lives on GitHub](https://github.com/qdrant/landing_page), consisting mainly of markdown pages with embedded code snippets and visuals.
Like any other documentation of an evolving product, it's not static: raw data in markdowns changes with time, and users searching across our documentation expect to find the latest state of it.
If search over documentation uses vectors, as ours does, it requires additional setup and maintenance to fulfill this expectation.

## Vectors <-> Raw Data

Vectors are a transformation of raw data.
This transformation does not happen by itself when raw data changes. Unless vectors are updated proactively, documentation search would run against embeddings of text that no longer exists.
There's a need for a re-embedding process, syncing vectors with raw data changes.

This tutorial provides a simple pipeline that, set up from day one, detects changes in your text data and executes incremental embedding updates.
It reconciles a complete, current list of Qdrant documentation chunks with a Qdrant collection. Each run:

1. leaves unchanged chunks untouched,
2. re-embeds changed text,
3. reuses a vector when text changes location,
4. adds new text,
5. deletes text absent from the source list.

The pattern applies when your chunking is deterministic and enumerating the current source is inexpensive.

The tutorial has an accompanying [notebook](https://github.com/qdrant/examples/blob/master/temporal-data-drift/sync_raw_data_to_embeddings.ipynb).

> **Note**
>
> <strong>Scale note.</strong>  This design re-reads the whole collection on every run: it pulls every point's hash and diffs the full stored set against the incoming one. Per-run cost scales with corpus size, not with what actually changed.
> At around 100,000 points, this stays cheap. By around 1 million points, each run moves hundreds of MB and hits Qdrant's 32 MB request cap (<a href="https://qdrant.tech/documentation/ops-configuration/configuration/"><code>max\_request\_size\_mb</code></a>). Batching doesn't help — it just splits the same full scan into more round trips. The result: a full corpus scan to update a handful of chunks.
> A follow-up post will cover a version that groups chunks into hash buckets and checks only the buckets that changed, so cost stays flat as the corpus grows.

## Prerequisites

Install the [Qdrant client of your choice](https://qdrant.tech/documentation/interfaces/#client-libraries).

We use Qdrant Cloud and its [Free Embedding Inference](https://qdrant.tech/documentation/cloud/inference/#free-embedding-models).
Create a Free Tier [Qdrant Cloud cluster](https://cloud.qdrant.io/) and set `QDRANT_URL` and `QDRANT_API_KEY` in your environment.

**Python**

```python
from qdrant_client import QdrantClient, models

# Replace url and api_key with your own from https://cloud.qdrant.io
client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<your-api-key>",
    cloud_inference=True
)
```

**Typescript**

```typescript
import { QdrantClient, Schemas } from "@qdrant/js-client-rest";

// Replace url and apiKey with your own from https://cloud.qdrant.io
const client = new QdrantClient({
    url: "https://xyz-example.qdrant.io:6333",
    apiKey: "<your-api-key>",
});
```

**Rust**

```rust
// Replace the URL and API key with your own from https://cloud.qdrant.io
let client = Qdrant::from_url("https://xyz-example.qdrant.io:6334")
    .api_key("<your-api-key>")
    .build()?;
```

**Java**

```java
// Replace the host and API key with your own from https://cloud.qdrant.io
static final QdrantClient client =
    new QdrantClient(
        QdrantGrpcClient.newBuilder("xyz-example.qdrant.io", 6334, true)
            .withApiKey("<your-api-key>")
            .build());
```

**Csharp**

```csharp
// Replace the host and API key with your own from https://cloud.qdrant.io
var client = new QdrantClient(
	host: "xyz-example.qdrant.io",
	https: true,
	apiKey: "<your-api-key>"
);
```

**Go**

```go
// Replace the host and API key with your own from https://cloud.qdrant.io
client, err := qdrant.NewClient(&qdrant.Config{
	Host:   "xyz-example.qdrant.io",
	APIKey: "<your-api-key>",
	UseTLS: true,
})
```

## The Data: Qdrant Documentation

Let's look at the [operations tutorials](https://qdrant.tech/documentation/tutorials-operations/) tab. Here's an example of a real change: this tutorial became a part of this tab, so our collection of vectors used for documentation search will have to be updated.

Let's consider a simple documentation hierarchy:

1. We have one page behind one `url`: <https://qdrant.tech/documentation/tutorials-operations/secure-qdrant>
2. A page consists of sections. For example, the ["Step 2: Enable TLS" section](https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/#step-2-enable-tls). A section is marked by an `anchor`, generated from the heading text: "Step 2: Enable TLS" -> the "#step-2-enable-tls" part of the `section_url`.

Let's break down documentation using this hierarchy. Some sections might not fit the embedding model context window limit (how big of a text it can represent). We'll split them into chunks, numbered `0, 1, 2…`. For minimal hierarchy awareness, a chunk keeps its section heading prepended.

```text
page https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/ (url)
├── section  #prerequisites (anchor)
│   └── chunk_num 0  "Prerequisites - Docker and Docker Compose installed..."
├── section  #secure-a-self-hosted-qdrant-instance (anchor)
│   ├── chunk_num 0  "Secure a Self-Hosted Qdrant Instance | Time: 45 min..."
│   └── chunk_num 1  "Secure a Self-Hosted Qdrant Instance > Qdrant Cloud..."
├── section  #step-1-start-an-unsecured-instance (anchor)
│   └── chunk_num 0  "Step 1: Start an Unsecured Instance Start Qdrant..."
├── section  #step-2-enable-tls (anchor)
│   └── chunk_num 0  "Step 2: Enable TLS Unencrypted connections allow..."
└── ...
```

So one page produces a set of chunks of the form: `{url, anchor, chunk_num, text}`. One vector = one section chunk.

**CHUNKS list used in this tutorial: three real tutorials from the operations tab chunked**

```python
CHUNKS = [  # three tutorials: secure-qdrant, migration, time-based-sharding
 {
  "url": "https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/",
  "anchor": "prerequisites",
  "chunk_num": 0,
  "text": "Prerequisites - Docker and Docker Compose installed - `curl` available in your terminal - mkcert for generating a local self-signed certificate (installation instructions) - TLS requires Qdrant 1.2 or later, API key authentication requires Qdrant 1.2 or later, and granular access API keys (JWT) require Qdrant 1.9 or later. This tutorial uses the latest Qdrant image, which includes all these features. ---"
 },
 {
  "url": "https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/",
  "anchor": "secure-a-self-hosted-qdrant-instance",
  "chunk_num": 0,
  "text": "Secure a Self-Hosted Qdrant Instance | Time: 45 min | Level: Intermediate | ..."
 },
 # ... full list in the ipynb
]
```

For each chunk we assume some text normalization pipeline is in place, as:

- Noise in the text degrades the embedding
- Noise costs re-embedding when it's not needed (for example, someone added a trailing space)

```text
normalize(text):
    - remove invisible characters (zero-width spaces, byte-order mark, soft hyphen)
    - collapse any whitespace run into a single space
    - ...
```

## Configuring Collection

Let's configure a collection for chunks.

We'll use `sentence-transformers/all-MiniLM-L6-v2`: it's one of the [free embedding models](https://qdrant.tech/documentation/cloud/inference/#free-embedding-models) on Qdrant Cloud Inference.
Its output dimension is 384, its context window is 256 tokens, which is exactly why long sections got chunked above: over-window input is silently truncated.

### Collection Metadata

Vectors produced by different embedding models, or by the same model over differently prepared text, should not mix in one collection: retrieval will degrade and it will be hard to detect why.
A simple guardrail: save which model and which pipeline version produced the data points in [**collection metadata**](https://qdrant.tech/documentation/manage-data/collections/#collection-metadata), and if one of the two changed, trigger full collection re-embedding.

**Python**

```python
MODEL = "sentence-transformers/all-MiniLM-L6-v2"
PIPELINE = "docs-prep-pipeline-v1"
COLLECTION = "docs-sync-tutorial"

client.create_collection(
    COLLECTION,
    vectors_config=models.VectorParams(
        size=384,  # all-MiniLM-L6-v2 output dimension
        distance=models.Distance.COSINE,
    ),
    metadata={"embedding_model": MODEL, "pipeline_version": PIPELINE},
)
```

**Typescript**

```typescript
const MODEL = "sentence-transformers/all-MiniLM-L6-v2";
const PIPELINE = "docs-prep-pipeline-v1";
const COLLECTION = "docs-sync-tutorial";

await client.createCollection(COLLECTION, {
    vectors: {
        size: 384, // all-MiniLM-L6-v2 output dimension
        distance: "Cosine",
    },
});

await client.updateCollection(COLLECTION, {
    metadata: { embedding_model: MODEL, pipeline_version: PIPELINE },
});
```

**Rust**

```rust
const MODEL: &str = "sentence-transformers/all-MiniLM-L6-v2";
const PIPELINE: &str = "docs-prep-pipeline-v1";
const COLLECTION: &str = "docs-sync-tutorial";

let mut metadata: HashMap<String, Value> = HashMap::new();
metadata.insert("embedding_model".to_string(), json!(MODEL));
metadata.insert("pipeline_version".to_string(), json!(PIPELINE));

client
    .create_collection(
        CreateCollectionBuilder::new(COLLECTION)
            .vectors_config(VectorParamsBuilder::new(
                384, // all-MiniLM-L6-v2 output dimension
                Distance::Cosine,
            ))
            .metadata(metadata),
    )
    .await?;
```

**Java**

```java
static final String MODEL = "sentence-transformers/all-MiniLM-L6-v2";
static final String PIPELINE = "docs-prep-pipeline-v1";
static final String COLLECTION = "docs-sync-tutorial";

static void createCollection() throws Exception {
    client.createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName(COLLECTION)
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParams(
                        VectorParams.newBuilder()
                            .setSize(384) // all-MiniLM-L6-v2 output dimension
                            .setDistance(Distance.Cosine)
                            .build())
                    .build())
            .putAllMetadata(
                Map.of(
                    "embedding_model", value(MODEL),
                    "pipeline_version", value(PIPELINE)))
            .build()).get();
}
```

**Csharp**

```csharp
var MODEL = "sentence-transformers/all-MiniLM-L6-v2";
var PIPELINE = "docs-prep-pipeline-v1";
var COLLECTION = "docs-sync-tutorial";

await client.CreateCollectionAsync(
	collectionName: COLLECTION,
	vectorsConfig: new VectorParams
	{
		Size = 384, // all-MiniLM-L6-v2 output dimension
		Distance = Distance.Cosine
	},
	metadata: new()
	{
		["embedding_model"] = MODEL,
		["pipeline_version"] = PIPELINE
	}
);
```

**Go**

```go
MODEL := "sentence-transformers/all-MiniLM-L6-v2"
PIPELINE := "docs-prep-pipeline-v1"
COLLECTION := "docs-sync-tutorial"

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: COLLECTION,
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     384, // all-MiniLM-L6-v2 output dimension
		Distance: qdrant.Distance_Cosine,
	}),
	Metadata: qdrant.NewValueMap(map[string]any{
		"embedding_model":  MODEL,
		"pipeline_version": PIPELINE,
	}),
})
```

The gate is then a simple check at the start of every run:

**Python**

```python
def check_gate():
    # compare this pipeline's constants against what the collection records about itself
    meta = client.get_collection(COLLECTION).config.metadata or {}

    if meta.get("embedding_model") != MODEL or meta.get("pipeline_version") != PIPELINE:
        raise RuntimeError(f"collection was built by {meta}: full re-embed into a fresh collection required")
```

**Typescript**

```typescript
async function checkGate() {
    // compare this pipeline's constants against what the collection records about itself
    const meta = ((await client.getCollection(COLLECTION)).config.metadata ??
        {}) as Record<string, unknown>;

    if (meta.embedding_model !== MODEL || meta.pipeline_version !== PIPELINE) {
        throw new Error(`collection was built by ${JSON.stringify(meta)}: full re-embed into a fresh collection required`);
    }
}
```

**Rust**

```rust
async fn check_gate(client: &Qdrant) -> anyhow::Result<()> {
    // compare this pipeline's constants against what the collection records about itself
    let meta = client
        .collection_info(COLLECTION)
        .await?
        .result
        .and_then(|info| info.config)
        .map(|config| config.metadata)
        .unwrap_or_default();

    if meta.get("embedding_model").and_then(|v| v.as_str()).map(String::as_str) != Some(MODEL)
        || meta.get("pipeline_version").and_then(|v| v.as_str()).map(String::as_str)
            != Some(PIPELINE)
    {
        anyhow::bail!(
            "collection was built by {meta:?}: full re-embed into a fresh collection required"
        );
    }
    Ok(())
}
```

**Java**

```java
static void checkGate() throws Exception {
    // compare this pipeline's constants against what the collection records about itself
    Map<String, Value> meta =
        client.getCollectionInfoAsync(COLLECTION).get().getConfig().getMetadataMap();

    Value model = meta.get("embedding_model");
    Value pipeline = meta.get("pipeline_version");
    if (model == null || !MODEL.equals(model.getStringValue())
            || pipeline == null || !PIPELINE.equals(pipeline.getStringValue())) {
        throw new RuntimeException(
            "collection was built by " + meta + ": full re-embed into a fresh collection required");
    }
}
```

**Csharp**

```csharp
async Task CheckGate()
{
	// compare this pipeline's constants against what the collection records about itself
	var meta = (await client.GetCollectionInfoAsync(COLLECTION)).Config.Metadata;
	var model = meta.GetValueOrDefault("embedding_model")?.StringValue;
	var pipeline = meta.GetValueOrDefault("pipeline_version")?.StringValue;

	if (model != MODEL || pipeline != PIPELINE)
		throw new InvalidOperationException(
			$"collection was built by {model}/{pipeline}: full re-embed into a fresh collection required");
}
```

**Go**

```go
checkGate := func() {
	// compare this pipeline's constants against what the collection records about itself
	info, err := client.GetCollectionInfo(context.Background(), COLLECTION)
	meta := info.GetConfig().GetMetadata()

	if meta["embedding_model"].GetStringValue() != MODEL || meta["pipeline_version"].GetStringValue() != PIPELINE {
		panic(fmt.Sprintf("collection was built by %v: full re-embed into a fresh collection required", meta))
	}
}
```

## Characteristics of a Document Chunk

What usually happens to documentation?
Something completely new appears, information on pages gets fixed, pages get restructured and sections are moved as-is, pages get deleted.

It makes sense to monitor two independent characteristics of a document chunk:

- **Content**: the text we search against and generate the embedding from.
- **Position**: where the chunk lives, in our case its URL, anchor, and number.

Hence every record should get two derived values:

- **Content fingerprint**, like SHA-256 of the text. It changes if a single character changes, and never otherwise. Comparing fingerprints answers "*Is it the same content?*" without comparing texts.
- **Deterministic ID** for position in documentation. For example, `url + "#" + anchor + "::" + chunk_num` turned into a UUID, one of the two point ID formats Qdrant accepts. Comparing IDs answers "*Is this content still at the same position?*".

**Python**

```python
import hashlib
import uuid
from datetime import datetime, timezone

def content_hash(text):
    return hashlib.sha256(text.encode()).hexdigest()

def point_id(url, anchor, num):
    # NAMESPACE_URL is a fixed constant uuid5 requires; it marks the input as a URL-like name
    return str(uuid.uuid5(uuid.NAMESPACE_URL, f"{url}#{anchor}::{num}"))

def prepare_chunks_for_sync(chunks):
    """Derive both values (and the section address) for every raw chunk."""
    out = []
    for c in chunks:
        text = normalize(c["text"])
        out.append({
            **c,
            "text": text,
            "section_url": f"{c['url']}#{c['anchor']}" if c["anchor"] else c["url"],
            "content_hash": content_hash(text),
            "point_id": point_id(c["url"], c["anchor"], c["chunk_num"]),
        })
    return out
```

**Typescript**

```typescript
import { createHash } from "node:crypto";

type RawChunk = { url: string; anchor: string; chunk_num: number; text: string };
type SyncChunk = RawChunk & { section_url: string; content_hash: string; point_id: string };

function contentHash(text: string): string {
    return createHash("sha256").update(text).digest("hex");
}

// NAMESPACE_URL is a fixed constant name-based (v5) UUIDs require; it marks the input as a URL-like name
function pointId(url: string, anchor: string, num: number): string {
    // Qdrant accepts any well-formed UUID as a point ID:
    // hash the address, format the digest as a UUID, and the same address always yields the same ID
    const hex = createHash("sha256").update(`${url}#${anchor}::${num}`).digest("hex");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

// Derive both values (and the section address) for every raw chunk.
function prepareChunksForSync(chunks: RawChunk[]): SyncChunk[] {
    return chunks.map((c) => {
        const text = normalize(c.text);
        return {
            ...c,
            text,
            section_url: c.anchor ? `${c.url}#${c.anchor}` : c.url,
            content_hash: contentHash(text),
            point_id: pointId(c.url, c.anchor, c.chunk_num),
        };
    });
}
```

**Rust**

```rust
fn content_hash(text: &str) -> String {
    Sha256::digest(text.as_bytes())
        .iter()
        .map(|byte| format!("{byte:02x}"))
        .collect()
}

fn point_id(url: &str, anchor: &str, num: u32) -> String {
    // NAMESPACE_URL is a fixed constant uuid5 requires; it marks the input as a URL-like name
    uuid::Uuid::new_v5(
        &uuid::Uuid::NAMESPACE_URL,
        format!("{url}#{anchor}::{num}").as_bytes(),
    )
    .to_string()
}

/// Derive both values (and the section address) for every raw chunk.
fn prepare_chunks_for_sync(chunks: &[Chunk]) -> Vec<Chunk> {
    chunks
        .iter()
        .map(|c| {
            let text = normalize(&c.text);
            Chunk {
                text: text.clone(),
                section_url: if c.anchor.is_empty() {
                    c.url.clone()
                } else {
                    format!("{}#{}", c.url, c.anchor)
                },
                content_hash: content_hash(&text),
                point_id: point_id(&c.url, &c.anchor, c.chunk_num),
                ..c.clone()
            }
        })
        .collect()
}
```

**Java**

```java
static String contentHash(String text) throws Exception {
    byte[] digest = MessageDigest.getInstance("SHA-256")
        .digest(text.getBytes(StandardCharsets.UTF_8));
    return String.format("%064x", new BigInteger(1, digest));
}

static String pointId(String url, String anchor, int num) {
    // name-based UUID (version 3); the same address always yields the same ID
    return UUID.nameUUIDFromBytes(
        (url + "#" + anchor + "::" + num).getBytes(StandardCharsets.UTF_8)).toString();
}

// Derive both values (and the section address) for every raw chunk.
static List<Chunk> prepareChunksForSync(List<Chunk> chunks) throws Exception {
    List<Chunk> out = new ArrayList<>();
    for (Chunk c : chunks) {
        String text = normalize(c.text);
        Chunk prepared = new Chunk(c.url, c.anchor, c.chunkNum, text);
        prepared.sectionUrl = !c.anchor.isEmpty() ? c.url + "#" + c.anchor : c.url;
        prepared.contentHash = contentHash(text);
        prepared.pointId = pointId(c.url, c.anchor, c.chunkNum);
        out.add(prepared);
    }
    return out;
}
```

**Csharp**

```csharp
string ContentHash(string text) =>
	Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(text))).ToLowerInvariant();

// Qdrant accepts any well-formed UUID as a point ID:
// a Guid built from the first 16 bytes of the address hash, so the same address always yields the same ID
string PointIdFor(string url, string anchor, int num) =>
	new Guid(SHA256.HashData(Encoding.UTF8.GetBytes($"{url}#{anchor}::{num}")).AsSpan(0, 16)).ToString();

// Derive both values (and the section address) for every raw chunk.
List<Chunk> PrepareChunksForSync(List<Chunk> chunks)
{
	var prepared = new List<Chunk>();
	foreach (var c in chunks)
	{
		var text = Normalize(c.Text);
		prepared.Add(c with
		{
			Text = text,
			SectionUrl = c.Anchor != "" ? $"{c.Url}#{c.Anchor}" : c.Url,
			ContentHash = ContentHash(text),
			PointId = PointIdFor(c.Url, c.Anchor, c.ChunkNum),
		});
	}
	return prepared;
}
```

**Go**

```go
contentHash := func(text string) string {
	sum := sha256.Sum256([]byte(text))
	return hex.EncodeToString(sum[:])
}

pointID := func(url, anchor string, num int) string {
	// NewSHA1 with a namespace is UUIDv5; NameSpaceURL is a fixed constant it requires,
	// marking the input as a URL-like name
	return uuid.NewSHA1(uuid.NameSpaceURL, []byte(fmt.Sprintf("%s#%s::%d", url, anchor, num))).String()
}

// derive both values (and the section address) for every raw chunk
prepareChunksForSync := func(chunks []Chunk) []Chunk {
	out := make([]Chunk, 0, len(chunks))
	for _, c := range chunks {
		c.Text = normalize(c.Text)
		c.SectionURL = c.URL
		if c.Anchor != "" {
			c.SectionURL = c.URL + "#" + c.Anchor
		}
		c.ContentHash = contentHash(c.Text)
		c.PointID = pointID(c.URL, c.Anchor, c.ChunkNum)
		out = append(out, c)
	}
	return out
}
```

Example:

```text
point ID: 2ff5204a-0353-5991-... # UUID(url + "#" + anchor + "::" + chunk_num)
text (to vectorize):         Prerequisites - Docker and Docker Compose...
content_hash:                27d55e75b962f1d5... # sha256(text)
```

Additionally, a point can be described by the following fields:

**Payload:**

- `url`: filter or group all chunks of one page
- `section_url`: filter or group all chunks of one section
- `last_updated`: when content of this chunk last changed (or was created)

**payload() implementation**

**Python**

```python
def payload(chunk, last_updated=None):
    return {
        "url": chunk["url"],
        "anchor": chunk["anchor"],
        "chunk_num": chunk["chunk_num"],
        "section_url": chunk["section_url"],
        "text": chunk["text"],
        "content_hash": chunk["content_hash"],
        "last_updated": last_updated or datetime.now(timezone.utc).isoformat(timespec="seconds"),
    }
```

**Typescript**

```typescript
function payload(chunk: SyncChunk, lastUpdated?: string) {
    return {
        url: chunk.url,
        anchor: chunk.anchor,
        chunk_num: chunk.chunk_num,
        section_url: chunk.section_url,
        text: chunk.text,
        content_hash: chunk.content_hash,
        last_updated: lastUpdated ?? new Date().toISOString().replace(/\.\d+Z$/, "Z"),
    };
}
```

**Rust**

```rust
fn payload(chunk: &Chunk, last_updated: Option<String>) -> anyhow::Result<Payload> {
    let last_updated = last_updated.unwrap_or_else(|| {
        chrono::Utc::now().to_rfc3339_opts(chrono::SecondsFormat::Secs, false)
    });
    Ok(Payload::try_from(serde_json::json!({
        "url": chunk.url,
        "anchor": chunk.anchor,
        "chunk_num": chunk.chunk_num,
        "section_url": chunk.section_url,
        "text": chunk.text,
        "content_hash": chunk.content_hash,
        "last_updated": last_updated,
    }))?)
}
```

**Java**

```java
static Map<String, Value> payload(Chunk chunk, String lastUpdated) {
    Map<String, Value> p = new HashMap<>();
    p.put("url", value(chunk.url));
    p.put("anchor", value(chunk.anchor));
    p.put("chunk_num", value(chunk.chunkNum));
    p.put("section_url", value(chunk.sectionUrl));
    p.put("text", value(chunk.text));
    p.put("content_hash", value(chunk.contentHash));
    p.put("last_updated", value(lastUpdated != null
        ? lastUpdated
        : OffsetDateTime.now(ZoneOffset.UTC).truncatedTo(ChronoUnit.SECONDS).toString()));
    return p;
}
```

**Csharp**

```csharp
Dictionary<string, Value> Payload(Chunk chunk, string? lastUpdated = null) => new()
{
	["url"] = chunk.Url,
	["anchor"] = chunk.Anchor,
	["chunk_num"] = chunk.ChunkNum,
	["section_url"] = chunk.SectionUrl,
	["text"] = chunk.Text,
	["content_hash"] = chunk.ContentHash,
	["last_updated"] = lastUpdated ?? DateTimeOffset.UtcNow.ToString("yyyy-MM-ddTHH:mm:ssK"),
};
```

**Go**

```go
payload := func(c Chunk, lastUpdated string) map[string]any {
	if lastUpdated == "" {
		lastUpdated = time.Now().UTC().Format(time.RFC3339)
	}
	return map[string]any{
		"url":          c.URL,
		"anchor":       c.Anchor,
		"chunk_num":    c.ChunkNum,
		"section_url":  c.SectionURL,
		"text":         c.Text,
		"content_hash": c.ContentHash,
		"last_updated": lastUpdated,
	}
}
```

For all the payload fields used for filtering or grouping we need to create a [**payload index**](https://qdrant.tech/documentation/manage-data/indexing/).

**Python**

```python
for field in ("content_hash", "url", "section_url"):
    client.create_payload_index(COLLECTION, field, models.PayloadSchemaType.KEYWORD)
```

**Typescript**

```typescript
for (const field of ["content_hash", "url", "section_url"]) {
    await client.createPayloadIndex(COLLECTION, {
        field_name: field,
        field_schema: "keyword",
    });
}
```

**Rust**

```rust
for field in ["content_hash", "url", "section_url"] {
    client
        .create_field_index(CreateFieldIndexCollectionBuilder::new(
            COLLECTION,
            field,
            FieldType::Keyword,
        ))
        .await?;
}
```

**Java**

```java
static void createPayloadIndexes() throws Exception {
    for (String field : List.of("content_hash", "url", "section_url")) {
        client.createPayloadIndexAsync(
            COLLECTION, field, PayloadSchemaType.Keyword, null, null, null, null).get();
    }
}
```

**Csharp**

```csharp
foreach (var field in new[] { "content_hash", "url", "section_url" })
	await client.CreatePayloadIndexAsync(COLLECTION, field, PayloadSchemaType.Keyword);
```

**Go**

```go
for _, field := range []string{"content_hash", "url", "section_url"} {
	client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
		CollectionName: COLLECTION,
		FieldName:      field,
		FieldType:      qdrant.FieldType_FieldTypeKeyword.Enum(),
	})
}
```

## Populate Collection

Populate the collection with the whole documentation.

**Python**

```python
client.upsert(COLLECTION, points=[
    models.PointStruct(
        id=c["point_id"],
        vector=models.Document(text=c["text"], model=MODEL),
        payload=payload(c),
    )
    for c in prepare_chunks_for_sync(CHUNKS)
], wait=True)
```

**Typescript**

```typescript
await client.upsert(COLLECTION, {
    points: prepareChunksForSync(CHUNKS).map((c) => ({
        id: c.point_id,
        vector: { text: c.text, model: MODEL },
        payload: payload(c),
    })),
    wait: true,
});
```

**Rust**

```rust
let points: Vec<PointStruct> = prepare_chunks_for_sync(&chunks)
    .iter()
    .map(|c| {
        Ok(PointStruct::new(
            c.point_id.clone(),
            Document::new(&c.text, MODEL),
            payload(c, None)?,
        ))
    })
    .collect::<anyhow::Result<_>>()?;

client
    .upsert_points(UpsertPointsBuilder::new(COLLECTION, points).wait(true))
    .await?;
```

**Java**

```java
static void populate() throws Exception {
    List<PointStruct> points = new ArrayList<>();
    for (Chunk c : prepareChunksForSync(CHUNKS)) {
        points.add(
            PointStruct.newBuilder()
                .setId(id(UUID.fromString(c.pointId)))

                .setVectors(
                    vectors(
                        vector(
                            Document.newBuilder()
                                .setText(c.text)
                                .setModel(MODEL)
                                .build())))
                .putAllPayload(payload(c, null))
                .build());
    }
    client.upsertAsync(COLLECTION, points).get();
}
```

**Csharp**

```csharp
await client.UpsertAsync(
	collectionName: COLLECTION,
	points: PrepareChunksForSync(CHUNKS).Select(c => new PointStruct
	{
		Id = new PointId { Uuid = c.PointId },
		Vectors = new Document { Text = c.Text, Model = MODEL },
		Payload = { Payload(c) },
	}).ToList(),
	wait: true
);
```

**Go**

```go
var points []*qdrant.PointStruct
for _, c := range prepareChunksForSync(CHUNKS) {
	points = append(points, &qdrant.PointStruct{
		Id: qdrant.NewID(c.PointID),

		Vectors: qdrant.NewVectorsDocument(&qdrant.Document{Text: c.Text, Model: MODEL}),
		Payload: qdrant.NewValueMap(payload(c, "")),
	})
}
client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: COLLECTION,
	Points:         points,
	Wait:           qdrant.PtrOf(true),
})
```

**Test the search against it**

**Python**

```python
QUERY = "Where exactly to set `QDRANT__SERVICE__API_KEY` variable to enable authentication for a self-hosted Qdrant?"

client.query_points(
    COLLECTION,
    query=models.Document(text=QUERY, model=MODEL),
    limit=3,
    with_payload=["section_url", "text"],
)
```

**Typescript**

```typescript
const QUERY = "Where exactly to set `QDRANT__SERVICE__API_KEY` variable to enable authentication for a self-hosted Qdrant?";

await client.query(COLLECTION, {
    query: { text: QUERY, model: MODEL },
    limit: 3,
    with_payload: ["section_url", "text"],
});
```

**Rust**

```rust
const QUERY: &str = "Where exactly to set `QDRANT__SERVICE__API_KEY` variable to enable authentication for a self-hosted Qdrant?";

client
    .query(
        QueryPointsBuilder::new(COLLECTION)
            .query(Query::new_nearest(Document::new(QUERY, MODEL)))
            .limit(3)
            .with_payload(PayloadIncludeSelector::new(vec![
                "section_url".to_string(),
                "text".to_string(),
            ])),
    )
    .await?;
```

**Java**

```java
static final String QUERY =
    "Where exactly to set `QDRANT__SERVICE__API_KEY` variable to enable authentication for a self-hosted Qdrant?";

static void search() throws Exception {
    client.queryAsync(
        QueryPoints.newBuilder()
            .setCollectionName(COLLECTION)
            .setQuery(
                nearest(
                    Document.newBuilder()
                        .setText(QUERY)
                        .setModel(MODEL)
                        .build()))
            .setLimit(3)
            .setWithPayload(WithPayloadSelectorFactory.include(List.of("section_url", "text")))
            .build()).get();
}
```

**Csharp**

```csharp
var QUERY = "Where exactly to set `QDRANT__SERVICE__API_KEY` variable to enable authentication for a self-hosted Qdrant?";

await client.QueryAsync(
	collectionName: COLLECTION,
	query: new Document { Text = QUERY, Model = MODEL },
	limit: 3,
	payloadSelector: new[] { "section_url", "text" }
);
```

**Go**

```go
QUERY := "Where exactly to set `QDRANT__SERVICE__API_KEY` variable to enable authentication for a self-hosted Qdrant?"

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: COLLECTION,
	Query:          qdrant.NewQueryDocument(&qdrant.Document{Text: QUERY, Model: MODEL}),
	Limit:          qdrant.PtrOf(uint64(3)),
	WithPayload:    qdrant.NewWithPayloadInclude("section_url", "text"),
})
```

You should get something like:

```text
0.675  https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/#secure-a-self-hosted-qdrant-instance
       Secure a Self-Hosted Qdrant Instance | Time: 45 min | Level: Intermediate | ...
```

## Syncing with Documentation Changes

Your sync trigger could be a CI job on merge if your docs live in git, or a nightly cron job.

The input of every sync with a documentation collection here is the **current full chunk list of the docs**. For a simple deterministic data prep pipeline it's cheap to gather this full list once a day, saving you the headache of deriving raw changes.

Each incoming chunk is compared against the current documentation collection in one of the following ways, based on the `point ID` (the chunk's address in documentation) and `content_hash` (the chunk's exact content, its fingerprint):

```text
incoming chunk
├─ ID found in the collection?
│   ├─ yes: fingerprint equal?
│   │   ├─ yes -> unchanged: the point stays as is
│   │   └─ no  -> content changed: re-embed in place
│   └─ no: identical fingerprint under another ID?
│       ├─ yes -> address changed: reuse the vector, create a new point
│       └─ no  -> new: embed and insert a new point
└─ stored point whose ID is absent from the incoming list
                -> gone: delete (last, after all writes)
```

**Note:** Optional safety net: take a [snapshot](https://qdrant.tech/documentation/snapshots/) before sync, delete it later when everything looks fine.

### Input of a Sync Pipeline

Let's consider some possible changes:

- adding to the ["Secure a Self-Hosted Qdrant Instance" tutorial](https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/) a new small section "Step 6: Rotate API keys",
  with the "Step 3" section now pointing to it
- the [migration page](https://qdrant.tech/documentation/tutorials-operations/migration/) moved to a new URL
- the ["Time-based sharding" tutorial](https://qdrant.tech/documentation/tutorials-operations/time-based-sharding/) was removed

**The LATEST\_CHUNKS list with these three changes**

```python
untouched_secure_qdrant = [
    c for c in CHUNKS
    if c["url"] == "https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/"
    and c["anchor"] != "step-3-enable-an-admin-api-key"
]

# now points to the new section
step_3 = {
 "url": "https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/",
 "anchor": "step-3-enable-an-admin-api-key",
 "chunk_num": 0,
 "text": "Step 3: Enable an Admin API Key ... Refer to Security > Authentication to learn more about admin API keys, including API key rotation. --- See also: rotating API keys."
}

# the new section
step_6 = {
 "url": "https://qdrant.tech/documentation/tutorials-operations/secure-qdrant/",
 "anchor": "step-6-rotate-api-keys",
 "chunk_num": 0,
 "text": "Step 6: Rotate API keys Rotate the admin API key on a schedule and immediately after any suspected exposure. Update every client before revoking the old key."
}

# the migration page moved: same texts, new addresses
moved = [
    {**c, "url": "https://qdrant.tech/documentation/tutorials-operations/migration-guide/"}
    for c in CHUNKS
    if c["url"] == "https://qdrant.tech/documentation/tutorials-operations/migration/"
]

# the time-based-sharding tutorial is absent from LATEST_CHUNKS - that is how a deletion arrives

LATEST_CHUNKS = prepare_chunks_for_sync(untouched_secure_qdrant + [step_3, step_6] + moved)
```

We now check every incoming chunk against the collection: does its ID (address) exist, and does its `content_hash` (exact text) match?

[`retrieve`](https://qdrant.tech/documentation/manage-data/points/) fetches points by ID. At corpus scale you would batch the IDs.

**Python**

```python
def split_by_state(latest_chunks):
    """Compare the incoming chunk list to the collection: who is unchanged, changed, or unknown."""
    incoming = {c["point_id"]: c for c in latest_chunks}

    stored = {}
    points = client.retrieve(
        COLLECTION,
        ids=list(incoming),
        with_payload=["content_hash"],
        with_vectors=False,
    )
    for p in points:
        stored[str(p.id)] = p.payload["content_hash"]

    unchanged, content_changed, unknown_ids = [], [], []
    for pid, c in incoming.items():
        if stored.get(pid) == c["content_hash"]:
            unchanged.append(c)
        elif pid in stored:
            content_changed.append(c)
        else:
            unknown_ids.append(c)

    return incoming, unchanged, content_changed, unknown_ids

incoming_ids, unchanged, content_changed, unknown_ids = split_by_state(LATEST_CHUNKS)
```

**Typescript**

```typescript
// Compare the incoming chunk list to the collection: who is unchanged, changed, or unknown.
async function splitByState(latestChunks: SyncChunk[]) {
    const incoming = new Map(latestChunks.map((c) => [c.point_id, c]));

    const stored = new Map<string, string>();
    const points = await client.retrieve(COLLECTION, {
        ids: [...incoming.keys()],
        with_payload: ["content_hash"],
        with_vector: false,
    });
    for (const p of points) {
        stored.set(String(p.id), p.payload?.content_hash as string);
    }

    const unchanged: SyncChunk[] = [];
    const contentChanged: SyncChunk[] = [];
    const unknownIds: SyncChunk[] = [];
    for (const [pid, c] of incoming) {
        if (stored.get(pid) === c.content_hash) {
            unchanged.push(c);
        } else if (stored.has(pid)) {
            contentChanged.push(c);
        } else {
            unknownIds.push(c);
        }
    }

    return { incoming, unchanged, contentChanged, unknownIds };
}

const { incoming, unchanged, contentChanged, unknownIds } = await splitByState(LATEST_CHUNKS);
```

**Rust**

```rust
/// Compare the incoming chunk list to the collection: who is unchanged, changed, or unknown.
async fn split_by_state(
    client: &Qdrant,
    latest_chunks: &[Chunk],
) -> anyhow::Result<(HashMap<String, Chunk>, Vec<Chunk>, Vec<Chunk>, Vec<Chunk>)> {
    let incoming: HashMap<String, Chunk> = latest_chunks
        .iter()
        .map(|c| (c.point_id.clone(), c.clone()))
        .collect();

    let ids: Vec<PointId> = incoming.keys().map(|id| id.as_str().into()).collect();
    let points = client
        .get_points(
            GetPointsBuilder::new(COLLECTION, ids)
                .with_payload(PayloadIncludeSelector::new(vec!["content_hash".to_string()]))
                .with_vectors(false),
        )
        .await?;

    let mut stored: HashMap<String, String> = HashMap::new();
    for p in points.result {
        let hash = p.get("content_hash").as_str().cloned();
        if let (Some(PointIdOptions::Uuid(id)), Some(hash)) =
            (p.id.and_then(|i| i.point_id_options), hash)
        {
            stored.insert(id, hash);
        }
    }

    let (mut unchanged, mut content_changed, mut unknown_ids) =
        (Vec::new(), Vec::new(), Vec::new());
    for (pid, c) in &incoming {
        if stored.get(pid) == Some(&c.content_hash) {
            unchanged.push(c.clone());
        } else if stored.contains_key(pid) {
            content_changed.push(c.clone());
        } else {
            unknown_ids.push(c.clone());
        }
    }

    Ok((incoming, unchanged, content_changed, unknown_ids))
}

let (incoming_ids, unchanged, content_changed, unknown_ids) =
    split_by_state(&client, &latest_chunks).await?;
```

**Java**

```java
static class SyncState {
    Map<String, Chunk> incoming = new LinkedHashMap<>();
    List<Chunk> unchanged = new ArrayList<>();
    List<Chunk> contentChanged = new ArrayList<>();
    List<Chunk> unknownIds = new ArrayList<>();
}

// Compare the incoming chunk list to the collection: who is unchanged, changed, or unknown.
static SyncState splitByState(List<Chunk> latestChunks) throws Exception {
    SyncState state = new SyncState();
    for (Chunk c : latestChunks) {
        state.incoming.put(c.pointId, c);
    }

    Map<String, String> stored = new HashMap<>();
    var points = client.retrieveAsync(
        COLLECTION,
        state.incoming.keySet().stream()
            .map(pid -> id(UUID.fromString(pid)))
            .collect(Collectors.toList()),
        WithPayloadSelectorFactory.include(List.of("content_hash")),
        WithVectorsSelectorFactory.enable(false),
        null).get();
    for (var p : points) {
        stored.put(p.getId().getUuid(), p.getPayloadMap().get("content_hash").getStringValue());
    }

    for (Map.Entry<String, Chunk> e : state.incoming.entrySet()) {
        String pid = e.getKey();
        Chunk c = e.getValue();
        if (c.contentHash.equals(stored.get(pid))) {
            state.unchanged.add(c);
        } else if (stored.containsKey(pid)) {
            state.contentChanged.add(c);
        } else {
            state.unknownIds.add(c);
        }
    }

    return state;
}
```

**Csharp**

```csharp
// Compare the incoming chunk list to the collection: who is unchanged, changed, or unknown.
async Task<(Dictionary<string, Chunk> incomingIds, List<Chunk> unchanged, List<Chunk> contentChanged, List<Chunk> unknownIds)>
	SplitByState(List<Chunk> latestChunks)
{
	var incoming = latestChunks.ToDictionary(c => c.PointId);

	var stored = new Dictionary<string, string>();
	var points = await client.RetrieveAsync(
		COLLECTION,
		ids: incoming.Keys.Select(pid => new PointId { Uuid = pid }).ToList(),
		payloadSelector: new[] { "content_hash" },
		vectorSelector: false
	);
	foreach (var p in points)
		stored[p.Id.Uuid] = p.Payload["content_hash"].StringValue;

	var unchanged = new List<Chunk>();
	var contentChanged = new List<Chunk>();
	var unknownIds = new List<Chunk>();
	foreach (var (pid, c) in incoming)
	{
		if (stored.TryGetValue(pid, out var hash) && hash == c.ContentHash)
			unchanged.Add(c);
		else if (stored.ContainsKey(pid))
			contentChanged.Add(c);
		else
			unknownIds.Add(c);
	}

	return (incoming, unchanged, contentChanged, unknownIds);
}

var splitState = await SplitByState(LATEST_CHUNKS);
```

**Go**

```go
// compare the incoming chunk list to the collection: who is unchanged, changed, or unknown
splitByState := func(latestChunks []Chunk) (map[string]Chunk, []Chunk, []Chunk, []Chunk) {
	incoming := make(map[string]Chunk, len(latestChunks))
	ids := make([]*qdrant.PointId, 0, len(latestChunks))
	for _, c := range latestChunks {
		incoming[c.PointID] = c
		ids = append(ids, qdrant.NewID(c.PointID))
	}

	retrieved, err := client.Get(context.Background(), &qdrant.GetPoints{
		CollectionName: COLLECTION,
		Ids:            ids,
		WithPayload:    qdrant.NewWithPayloadInclude("content_hash"),
		WithVectors:    qdrant.NewWithVectors(false),
	})
	stored := make(map[string]string, len(retrieved))
	for _, p := range retrieved {
		stored[p.GetId().GetUuid()] = p.GetPayload()["content_hash"].GetStringValue()
	}

	var unchanged, contentChanged, unknownIDs []Chunk
	for pid, c := range incoming {
		storedHash, found := stored[pid]
		switch {
		case found && storedHash == c.ContentHash:
			unchanged = append(unchanged, c)
		case found:
			contentChanged = append(contentChanged, c)
		default:
			unknownIDs = append(unknownIDs, c)
		}
	}

	return incoming, unchanged, contentChanged, unknownIDs
}

incomingIDs, unchanged, contentChanged, unknownIDs := splitByState(LATEST_CHUNKS)
```

### Case 1: Unchanged, Do Nothing

These chunks carry the same fingerprint as before.

### Case 2: Content Changed, Re-Embed

The chunk about Step 3 exists under a known ID (it didn't change its position on the docs website) but carries new information.
Use `upsert`: writing a point under an existing ID replaces it.

**Python**

```python
def re_embed_changed(content_changed):
    if not content_changed:
        return
    client.upsert(COLLECTION,
        points=[
            models.PointStruct(
                id=c["point_id"],
                vector=models.Document(text=c["text"], model=MODEL),
                payload=payload(c),
            )
            for c in content_changed],
        wait=True)
```

**Typescript**

```typescript
async function reEmbedChanged(contentChanged: SyncChunk[]) {
    if (contentChanged.length === 0) {
        return;
    }
    await client.upsert(COLLECTION, {
        points: contentChanged.map((c) => ({
            id: c.point_id,
            vector: { text: c.text, model: MODEL },
            payload: payload(c),
        })),
        wait: true,
    });
}
```

**Rust**

```rust
async fn re_embed_changed(client: &Qdrant, content_changed: &[Chunk]) -> anyhow::Result<()> {
    if content_changed.is_empty() {
        return Ok(());
    }
    let points: Vec<PointStruct> = content_changed
        .iter()
        .map(|c| {
            Ok(PointStruct::new(
                c.point_id.clone(),
                Document::new(&c.text, MODEL),
                payload(c, None)?,
            ))
        })
        .collect::<anyhow::Result<_>>()?;

    client
        .upsert_points(UpsertPointsBuilder::new(COLLECTION, points).wait(true))
        .await?;
    Ok(())
}
```

**Java**

```java
static void reEmbedChanged(List<Chunk> contentChanged) throws Exception {
    if (contentChanged.isEmpty()) {
        return;
    }
    List<PointStruct> points = new ArrayList<>();
    for (Chunk c : contentChanged) {
        points.add(
            PointStruct.newBuilder()
                .setId(id(UUID.fromString(c.pointId)))
                .setVectors(
                    vectors(
                        vector(
                            Document.newBuilder()
                                .setText(c.text)
                                .setModel(MODEL)
                                .build())))
                .putAllPayload(payload(c, null))
                .build());
    }
    client.upsertAsync(COLLECTION, points).get();
}
```

**Csharp**

```csharp
async Task ReEmbedChanged(List<Chunk> contentChanged)
{
	if (contentChanged.Count == 0)
		return;
	await client.UpsertAsync(
		collectionName: COLLECTION,
		points: contentChanged.Select(c => new PointStruct
		{
			Id = new PointId { Uuid = c.PointId },
			Vectors = new Document { Text = c.Text, Model = MODEL },
			Payload = { Payload(c) },
		}).ToList(),
		wait: true
	);
}
```

**Go**

```go
reEmbedChanged := func(contentChanged []Chunk) {
	if len(contentChanged) == 0 {
		return
	}
	points := make([]*qdrant.PointStruct, 0, len(contentChanged))
	for _, c := range contentChanged {
		points = append(points, &qdrant.PointStruct{
			Id:      qdrant.NewID(c.PointID),
			Vectors: qdrant.NewVectorsDocument(&qdrant.Document{Text: c.Text, Model: MODEL}),
			Payload: qdrant.NewValueMap(payload(c, "")),
		})
	}
	client.Upsert(context.Background(), &qdrant.UpsertPoints{
		CollectionName: COLLECTION,
		Points:         points,
		Wait:           qdrant.PtrOf(true),
	})
}
```

### Cases 3 and 4: ID Is Not Present in the Collection

Six IDs are unknown to the collection, but an unknown ID does not necessarily mean new content. When a page moves as-is, every chunk on it gets a new address (a new ID), while the text stays exactly the same. Embedding it again would produce the same vector, so why pay for it.

A filtered [`scroll`](https://qdrant.tech/documentation/manage-data/points/) on `content_hash` answers the question "*does this exact text already exist under some other ID?*".

- On a hit, we copy the stored vector into the new point and keep the source's `last_updated` as the content did not change.
- On a miss, the content is genuinely new; we embed and insert a new point.

**Note:** *This version performs one hash lookup per unknown chunk so the decision is easy to inspect. In production, batch hash lookups and point upserts.*

**Python**

```python
def reuse_or_add(unknown_ids):
    """Reuse an existing embedding when the same text is already stored; embed only what is new."""
    reused, added = 0, 0

    for c in unknown_ids:
        same_text = models.Filter(must=[
            models.FieldCondition(
                key="content_hash",
                match=models.MatchValue(value=c["content_hash"]),
            )
        ])
        hits, _ = client.scroll(
            COLLECTION,
            scroll_filter=same_text,
            limit=1,
            with_payload=["last_updated"],
            with_vectors=True,
        )

        if hits:  # same text, new address: copy the vector, keep its last_updated
            point = models.PointStruct(
                id=c["point_id"],
                vector=hits[0].vector,
                payload=payload(c, hits[0].payload["last_updated"]),
            )
            reused += 1
        else:     # genuinely new content: embed and insert
            point = models.PointStruct(
                id=c["point_id"],
                vector=models.Document(text=c["text"], model=MODEL),
                payload=payload(c),
            )
            added += 1

        client.upsert(COLLECTION, points=[point], wait=True)

    return reused, added
```

**Typescript**

```typescript
// Reuse an existing embedding when the same text is already stored; embed only what is new.
async function reuseOrAdd(unknownIds: SyncChunk[]) {
    let reused = 0;
    let added = 0;

    for (const c of unknownIds) {
        const sameText = {
            must: [
                {
                    key: "content_hash",
                    match: { value: c.content_hash },
                },
            ],
        };
        const hits = (await client.scroll(COLLECTION, {
            filter: sameText,
            limit: 1,
            with_payload: ["last_updated"],
            with_vector: true,
        })).points;

        let point: Schemas["PointStruct"];
        if (hits.length > 0) { // same text, new address: copy the vector, keep its last_updated
            point = {
                id: c.point_id,
                vector: hits[0].vector as number[],
                payload: payload(c, hits[0].payload?.last_updated as string),
            };
            reused += 1;
        } else { // genuinely new content: embed and insert
            point = {
                id: c.point_id,
                vector: { text: c.text, model: MODEL },
                payload: payload(c),
            };
            added += 1;
        }

        await client.upsert(COLLECTION, { points: [point], wait: true });
    }

    return { reused, added };
}
```

**Rust**

```rust
/// Reuse an existing embedding when the same text is already stored; embed only what is new.
async fn reuse_or_add(client: &Qdrant, unknown_ids: &[Chunk]) -> anyhow::Result<(usize, usize)> {
    let (mut reused, mut added) = (0, 0);

    for c in unknown_ids {
        let same_text =
            Filter::must([Condition::matches("content_hash", c.content_hash.clone())]);
        let hits = client
            .scroll(
                ScrollPointsBuilder::new(COLLECTION)
                    .filter(same_text)
                    .limit(1)
                    .with_payload(PayloadIncludeSelector::new(vec![
                        "last_updated".to_string()
                    ]))
                    .with_vectors(true),
            )
            .await?
            .result;

        let point = if let Some(hit) = hits.into_iter().next() {
            // same text, new address: copy the vector, keep its last_updated
            let last_updated = hit.get("last_updated").as_str().cloned();
            let vector: Vec<f32> = match hit.vectors.and_then(|v| v.vectors_options) {
                Some(vectors_output::VectorsOptions::Vector(v)) => match v.vector {
                    Some(vector_output::Vector::Dense(dense)) => dense.data,
                    _ => anyhow::bail!("expected a dense vector on the stored point"),
                },
                _ => anyhow::bail!("expected a dense vector on the stored point"),
            };
            reused += 1;
            PointStruct::new(c.point_id.clone(), vector, payload(c, last_updated)?)
        } else {
            // genuinely new content: embed and insert
            added += 1;
            PointStruct::new(
                c.point_id.clone(),
                Document::new(&c.text, MODEL),
                payload(c, None)?,
            )
        };

        client
            .upsert_points(UpsertPointsBuilder::new(COLLECTION, vec![point]).wait(true))
            .await?;
    }

    Ok((reused, added))
}
```

**Java**

```java
// Reuse an existing embedding when the same text is already stored; embed only what is new.
static int[] reuseOrAdd(List<Chunk> unknownIds) throws Exception {
    int reused = 0;
    int added = 0;

    for (Chunk c : unknownIds) {
        Filter sameText = Filter.newBuilder()
            .addMust(matchKeyword("content_hash", c.contentHash))
            .build();

        var hits = client.scrollAsync(
            ScrollPoints.newBuilder()
                .setCollectionName(COLLECTION)
                .setFilter(sameText)
                .setLimit(1)
                .setWithPayload(WithPayloadSelectorFactory.include(List.of("last_updated")))
                .setWithVectors(WithVectorsSelectorFactory.enable(true))
                .build()).get().getResultList();

        PointStruct point;
        if (!hits.isEmpty()) { // same text, new address: copy the vector, keep its last_updated
            point = PointStruct.newBuilder()
                .setId(id(UUID.fromString(c.pointId)))
                .setVectors(vectors(vector(
                    VectorOutputHelper.getDenseVector(hits.get(0).getVectors().getVector())
                        .getDataList())))
                .putAllPayload(
                    payload(c, hits.get(0).getPayloadMap().get("last_updated").getStringValue()))
                .build();
            reused++;
        } else { // genuinely new content: embed and insert
            point = PointStruct.newBuilder()
                .setId(id(UUID.fromString(c.pointId)))
                .setVectors(
                    vectors(
                        vector(
                            Document.newBuilder()
                                .setText(c.text)
                                .setModel(MODEL)
                                .build())))
                .putAllPayload(payload(c, null))
                .build();
            added++;
        }

        client.upsertAsync(COLLECTION, List.of(point)).get();
    }

    return new int[] {reused, added};
}
```

**Csharp**

```csharp
// Reuse an existing embedding when the same text is already stored; embed only what is new.
async Task<(int reused, int added)> ReuseOrAdd(List<Chunk> unknownIds)
{
	int reused = 0, added = 0;

	foreach (var c in unknownIds)
	{
		var sameText = new Filter
		{
			Must = { MatchKeyword("content_hash", c.ContentHash) }
		};
		var hits = (await client.ScrollAsync(
			COLLECTION,
			filter: sameText,
			limit: 1,
			payloadSelector: new[] { "last_updated" },
			vectorsSelector: true
		)).Result;

		PointStruct point;
		if (hits.Count > 0) // same text, new address: copy the vector, keep its last_updated
		{
			point = new PointStruct
			{
				Id = new PointId { Uuid = c.PointId },
				Vectors = hits[0].Vectors.Vector.GetDenseVector()!.Data.ToArray(),
				Payload = { Payload(c, hits[0].Payload["last_updated"].StringValue) },
			};
			reused++;
		}
		else // genuinely new content: embed and insert
		{
			point = new PointStruct
			{
				Id = new PointId { Uuid = c.PointId },
				Vectors = new Document { Text = c.Text, Model = MODEL },
				Payload = { Payload(c) },
			};
			added++;
		}

		await client.UpsertAsync(COLLECTION, points: new List<PointStruct> { point }, wait: true);
	}

	return (reused, added);
}
```

**Go**

```go
// reuse an existing embedding when the same text is already stored; embed only what is new
reuseOrAdd := func(unknownIDs []Chunk) (int, int) {
	reused, added := 0, 0

	for _, c := range unknownIDs {
		sameText := &qdrant.Filter{
			Must: []*qdrant.Condition{
				qdrant.NewMatch("content_hash", c.ContentHash),
			},
		}
		hits, err := client.Scroll(context.Background(), &qdrant.ScrollPoints{
			CollectionName: COLLECTION,
			Filter:         sameText,
			Limit:          qdrant.PtrOf(uint32(1)),
			WithPayload:    qdrant.NewWithPayloadInclude("last_updated"),
			WithVectors:    qdrant.NewWithVectors(true),
		})

		var point *qdrant.PointStruct
		if len(hits) > 0 { // same text, new address: copy the vector, keep its last_updated
			point = &qdrant.PointStruct{
				Id:      qdrant.NewID(c.PointID),
				Vectors: qdrant.NewVectors(hits[0].GetVectors().GetVector().GetData()...),
				Payload: qdrant.NewValueMap(payload(c, hits[0].GetPayload()["last_updated"].GetStringValue())),
			}
			reused++
		} else { // genuinely new content: embed and insert
			point = &qdrant.PointStruct{
				Id:      qdrant.NewID(c.PointID),
				Vectors: qdrant.NewVectorsDocument(&qdrant.Document{Text: c.Text, Model: MODEL}),
				Payload: qdrant.NewValueMap(payload(c, "")),
			}
			added++
		}

		client.Upsert(context.Background(), &qdrant.UpsertPoints{
			CollectionName: COLLECTION,
			Points:         []*qdrant.PointStruct{point},
			Wait:           qdrant.PtrOf(true),
		})
	}

	return reused, added
}
```

What's important to notice: the old points, the migration page under its old URL, are still in the collection. They need to be removed, and that is the last case.

### Case 5: Gone, Delete

Whatever LATEST\_CHUNKS does not contain no longer exists at the source. The deletion is one filtered call, "every point whose ID is *not* in the incoming list".

**Note:** *Deletion runs **last**, after all writes: hence if someone queries documentation at night while this pipeline runs, results for a second might be weird, as mid-run search here sees old and new content side by side:)*

**Note:** *It's a good practice to put some guardrails on the number of deletions before running it: if it is suspiciously large, you might want to skip deletion and investigate instead. Mind the edge case: an empty incoming list would match every point in the collection, so refuse to sync empty input.*

**Note:** Frequent re-embeddings and deletions don't degrade the index over time: background [optimizers](https://qdrant.tech/documentation/ops-optimization/optimizer/) rebuild and merge index segments as changes accumulate.

**Python**

```python
def delete_gone(incoming_ids):
    """Remove every point the current crawl no longer contains. Returns how many."""
    if not incoming_ids:
        raise ValueError("Refusing to delete from an empty source snapshot.")

    stale = models.Filter(must_not=[models.HasIdCondition(has_id=list(incoming_ids))])

    to_delete = client.count(COLLECTION, count_filter=stale).count

    # potential check against a threshold to avoid accidental mass deletion could be added here
    client.delete(COLLECTION, points_selector=models.FilterSelector(filter=stale), wait=True)
    return to_delete
```

**Typescript**

```typescript
// Remove every point the current crawl no longer contains. Returns how many.
async function deleteGone(incoming: Map<string, SyncChunk>) {
    if (incoming.size === 0) {
        throw new Error("Refusing to delete from an empty source snapshot.");
    }

    const stale = { must_not: [{ has_id: [...incoming.keys()] }] };

    const toDelete = (await client.count(COLLECTION, { filter: stale })).count;

    // potential check against a threshold to avoid accidental mass deletion could be added here
    await client.delete(COLLECTION, { filter: stale, wait: true });
    return toDelete;
}
```

**Rust**

```rust
/// Remove every point the current crawl no longer contains. Returns how many.
async fn delete_gone(
    client: &Qdrant,
    incoming_ids: &HashMap<String, Chunk>,
) -> anyhow::Result<u64> {
    if incoming_ids.is_empty() {
        anyhow::bail!("Refusing to delete from an empty source snapshot.");
    }

    let stale = Filter::must_not([Condition::has_id(
        incoming_ids.keys().map(|id| PointId::from(id.as_str())),
    )]);

    let to_delete = client
        .count(CountPointsBuilder::new(COLLECTION).filter(stale.clone()))
        .await?
        .result
        .map(|r| r.count)
        .unwrap_or(0);

    // potential check against a threshold to avoid accidental mass deletion could be added here
    client
        .delete_points(DeletePointsBuilder::new(COLLECTION).points(stale).wait(true))
        .await?;
    Ok(to_delete)
}
```

**Java**

```java
// Remove every point the current crawl no longer contains. Returns how many.
static long deleteGone(Map<String, Chunk> incomingIds) throws Exception {
    if (incomingIds.isEmpty()) {
        throw new IllegalArgumentException("Refusing to delete from an empty source snapshot.");
    }

    Filter stale = Filter.newBuilder()
        .addMustNot(hasId(
            incomingIds.keySet().stream()
                .map(pid -> id(UUID.fromString(pid)))
                .collect(Collectors.toList())))
        .build();

    long toDelete = client.countAsync(COLLECTION, stale, true).get();

    // potential check against a threshold to avoid accidental mass deletion could be added here
    client.deleteAsync(COLLECTION, stale).get();
    return toDelete;
}
```

**Csharp**

```csharp
// Remove every point the current crawl no longer contains. Returns how many.
async Task<ulong> DeleteGone(Dictionary<string, Chunk> incomingIds)
{
	if (incomingIds.Count == 0)
		throw new ArgumentException("Refusing to delete from an empty source snapshot.");

	var stale = new Filter
	{
		MustNot = { HasId(incomingIds.Keys.Select(Guid.Parse).ToList()) }
	};

	var toDelete = await client.CountAsync(COLLECTION, filter: stale);

	// potential check against a threshold to avoid accidental mass deletion could be added here
	await client.DeleteAsync(COLLECTION, filter: stale, wait: true);
	return toDelete;
}
```

**Go**

```go
// remove every point the current crawl no longer contains, return how many
deleteGone := func(incomingIDs map[string]Chunk) int {
	if len(incomingIDs) == 0 {
		panic("Refusing to delete from an empty source snapshot.")
	}

	ids := make([]*qdrant.PointId, 0, len(incomingIDs))
	for pid := range incomingIDs {
		ids = append(ids, qdrant.NewID(pid))
	}
	stale := &qdrant.Filter{
		MustNot: []*qdrant.Condition{qdrant.NewHasID(ids...)},
	}

	toDelete, err := client.Count(context.Background(), &qdrant.CountPoints{
		CollectionName: COLLECTION,
		Filter:         stale,
	})

	// potential check against a threshold to avoid accidental mass deletion could be added here
	client.Delete(context.Background(), &qdrant.DeletePoints{
		CollectionName: COLLECTION,
		Points:         qdrant.NewPointsSelectorFilter(stale),
		Wait:           qdrant.PtrOf(true),
	})
	return int(toDelete)
}
```

## Run and Verify the Sync

The five cases, assembled from the functions defined above:

**Python**

```python
def sync(latest_chunks):
    check_gate()  # refuse to mix embedding models or pipeline versions

    chunks = prepare_chunks_for_sync(latest_chunks)
    incoming_ids, unchanged, content_changed, unknown_ids = split_by_state(chunks)

    re_embed_changed(content_changed)
    reused, added = reuse_or_add(unknown_ids)
    deleted = delete_gone(incoming_ids)

    return {
        "unchanged": len(unchanged),
        "re-embedded": len(content_changed),
        "reused_embedding": reused,
        "added": added,
        "deleted": deleted,
    }
```

**Typescript**

```typescript
async function sync(latestChunks: RawChunk[]) {
    await checkGate(); // refuse to mix embedding models or pipeline versions

    const chunks = prepareChunksForSync(latestChunks);
    const { incoming, unchanged, contentChanged, unknownIds } = await splitByState(chunks);

    await reEmbedChanged(contentChanged);
    const { reused, added } = await reuseOrAdd(unknownIds);
    const deleted = await deleteGone(incoming);

    return {
        "unchanged": unchanged.length,
        "re-embedded": contentChanged.length,
        "reused_embedding": reused,
        "added": added,
        "deleted": deleted,
    };
}
```

**Rust**

```rust
async fn sync(
    client: &Qdrant,
    latest_chunks: &[Chunk],
) -> anyhow::Result<HashMap<&'static str, usize>> {
    check_gate(client).await?; // refuse to mix embedding models or pipeline versions

    let chunks = prepare_chunks_for_sync(latest_chunks);
    let (incoming_ids, unchanged, content_changed, unknown_ids) =
        split_by_state(client, &chunks).await?;

    re_embed_changed(client, &content_changed).await?;
    let (reused, added) = reuse_or_add(client, &unknown_ids).await?;
    let deleted = delete_gone(client, &incoming_ids).await?;

    Ok(HashMap::from([
        ("unchanged", unchanged.len()),
        ("re-embedded", content_changed.len()),
        ("reused_embedding", reused),
        ("added", added),
        ("deleted", deleted as usize),
    ]))
}
```

**Java**

```java
static Map<String, Long> sync(List<Chunk> latestChunks) throws Exception {
    checkGate(); // refuse to mix embedding models or pipeline versions

    List<Chunk> chunks = prepareChunksForSync(latestChunks);
    SyncState state = splitByState(chunks);

    reEmbedChanged(state.contentChanged);
    int[] reusedAdded = reuseOrAdd(state.unknownIds); // {reused, added}
    long deleted = deleteGone(state.incoming);

    return Map.of(
        "unchanged", (long) state.unchanged.size(),
        "re-embedded", (long) state.contentChanged.size(),
        "reused_embedding", (long) reusedAdded[0],
        "added", (long) reusedAdded[1],
        "deleted", deleted);
}
```

**Csharp**

```csharp
async Task<Dictionary<string, long>> Sync(List<Chunk> latestChunks)
{
	await CheckGate(); // refuse to mix embedding models or pipeline versions

	var chunks = PrepareChunksForSync(latestChunks);
	var (incomingIds, unchanged, contentChanged, unknownIds) = await SplitByState(chunks);

	await ReEmbedChanged(contentChanged);
	var (reused, added) = await ReuseOrAdd(unknownIds);
	var deleted = await DeleteGone(incomingIds);

	return new Dictionary<string, long>
	{
		["unchanged"] = unchanged.Count,
		["re-embedded"] = contentChanged.Count,
		["reused_embedding"] = reused,
		["added"] = added,
		["deleted"] = (long)deleted,
	};
}
```

**Go**

```go
sync := func(latestChunks []Chunk) map[string]int {
	checkGate() // refuse to mix embedding models or pipeline versions

	chunks := prepareChunksForSync(latestChunks)
	incomingIDs, unchanged, contentChanged, unknownIDs := splitByState(chunks)

	reEmbedChanged(contentChanged)
	reused, added := reuseOrAdd(unknownIDs)
	deleted := deleteGone(incomingIDs)

	return map[string]int{
		"unchanged":        len(unchanged),
		"re-embedded":      len(contentChanged),
		"reused_embedding": reused,
		"added":            added,
		"deleted":          deleted,
	}
}
```

Run the sync.

**Python**

```python
run = sync(LATEST_CHUNKS)
print(run)
```

**Typescript**

```typescript
const run = await sync(LATEST_CHUNKS);
console.log(run);
```

**Rust**

```rust
let run = sync(&client, &latest_chunks).await?;
println!("{run:?}");
```

**Java**

```java
static void runSync() throws Exception {
    Map<String, Long> run = sync(LATEST_CHUNKS);
    System.out.println(run);
}
```

**Csharp**

```csharp
var run = await Sync(LATEST_CHUNKS);
foreach (var (op, count) in run)
	Console.WriteLine($"{op}: {count}");
```

**Go**

```go
run := sync(LATEST_CHUNKS)
fmt.Println(run)
```

You should see something like:

```text
{'unchanged': 9, 're-embedded': 1, 'reused_embedding': 5, 'added': 1, 'deleted': 20}
```

A re-run of the same sync input should change nothing: every change counter at zero, all 16 chunks in `unchanged`.

## Conclusion

A deterministic ID, a content fingerprint, and five sync cases keep embeddings in sync with changing raw data, re-embedding only what actually changed. Adapt this pipeline to your own documents.

Ways to make it better:

- Pipelines that risk concurrent iterative updates: see [conditional updates](https://qdrant.tech/documentation/manage-data/points/#conditional-updates) and [update modes](https://qdrant.tech/documentation/manage-data/points/#update-mode), per-write preconditions. This pipeline runs one sync at a time and does not need them.
- The `last_updated` field this sync maintains can power recency-aware ranking via [decay functions in a formula query](https://qdrant.tech/documentation/search/search-relevance/).

Related guides:

- Switching or upgrading the embedding model: [Embedding Model Migration](https://qdrant.tech/documentation/tutorials-operations/embedding-model-migration/)
- Wholesale infrastructure swaps: [Blue-Green Deployment](https://qdrant.tech/documentation/tutorials-operations/blue-green-deployment/)
- Sync driven by database change events: [Data Synchronization](https://qdrant.tech/documentation/data-synchronization/)
