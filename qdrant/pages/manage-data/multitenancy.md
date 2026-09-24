> Pinned source for Qdrant master: [qdrant-landing/content/documentation/manage-data/multitenancy.md](https://github.com/qdrant/landing_page/blob/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/content/documentation/manage-data/multitenancy.md)
> Canonical documentation: https://qdrant.tech/documentation/manage-data/multitenancy/

# Configure Multitenancy

Many applications serve multiple users, customers, or organizations ("tenants") from a shared deployment. Each tenant's data must stay isolated: when a tenant searches, they should only see their own data. Qdrant offers several solutions for keeping tenants' data separated within a shared deployment.

Creating a separate collection for each tenant is rarely the most efficient approach. Each collection carries its own resource overhead, so creating many collections can quickly become expensive. Only create multiple collections when you have a limited number of tenants that need strict isolation.

> **Note**
>
> Qdrant Cloud <a href="https://qdrant.tech/documentation/cloud/configure-cluster/">limits each cluster to a maximum of 1000 collections</a> by default.

Instead, keep all tenants in a single collection and use one of these three approaches to isolate them:

- [**Partition by payload**](#partition-by-payload) filters points by a payload field that identifies the tenant. This is efficient for a large number of small, similarly-sized tenants.
- [**User-defined sharding**](#user-defined-sharding) gives each tenant its own dedicated shard. This trades some resource overhead for stronger isolation, and is best suited to a smaller number of larger tenants.
- [**Tiered multitenancy**](#tiered-multitenancy) combines the two: small tenants share a single shard while large tenants get promoted to their own dedicated shard.

## Partition by Payload

To partition data in a shared collection, add a payload field that identifies the tenant to each point. You can then filter by this field to ensure that each tenant only sees their own data.

This example uses `group_id` as the tenant field. Start by creating a keyword payload index for the tenant field:

**Http**

```http
PUT /collections/{collection_name}/index
{
    "field_name": "group_id",
    "field_schema": {
        "type": "keyword",
        "is_tenant": true
    }
}
```

**Python**

```python
client.create_payload_index(
    collection_name="{collection_name}",
    field_name="group_id",
    field_schema=models.KeywordIndexParams(
        type=models.KeywordIndexType.KEYWORD,
        is_tenant=True,
    ),
)
```

**Typescript**

```typescript
client.createPayloadIndex("{collection_name}", {
  field_name: "group_id",
  field_schema: {
    type: "keyword",
    is_tenant: true,
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateFieldIndexCollectionBuilder,
    KeywordIndexParamsBuilder,
    FieldType
};
use qdrant_client::Qdrant;

client.create_field_index(
        CreateFieldIndexCollectionBuilder::new(
            "{collection_name}",
            "group_id",
            FieldType::Keyword,
        ).field_index_params(
            KeywordIndexParamsBuilder::default()
                .is_tenant(true)
        )
    ).await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;

client
    .createPayloadIndexAsync(
        "{collection_name}",
        "group_id",
        PayloadSchemaType.Keyword,
        PayloadIndexParams.newBuilder()
            .setKeywordIndexParams(
                KeywordIndexParams.newBuilder()
                    .setIsTenant(true)
                    .build())
            .build(),
        null,
        null,
        null)
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreatePayloadIndexAsync(
	collectionName: "{collection_name}",
	fieldName: "group_id",
	schemaType: PayloadSchemaType.Keyword,
	indexParams: new PayloadIndexParams
	{
		KeywordIndexParams = new KeywordIndexParams
		{
			IsTenant = true
		}
	}
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
	CollectionName: "{collection_name}",
	FieldName:      "group_id",
	FieldType:      qdrant.FieldType_FieldTypeKeyword.Enum(),
	FieldIndexParams: qdrant.NewPayloadIndexParams(
		&qdrant.KeywordIndexParams{
			IsTenant: qdrant.PtrOf(true),
		}),
})
```

> **Note**
>
> The <code>is\_tenant</code> parameter is available as of v1.11.0. Previous versions should use default options for keyword index creation.

The `is_tenant=true` parameter is optional, but specifying it gives Qdrant additional information about the collection's usage patterns.
When set, Qdrant organizes the storage structure to co-locate vectors of the same tenant together, which can significantly improve performance by utilizing sequential reads during queries.
Instead of many random disk seeks across the segment, the data of one tenant can be read in a single sequential pass.

![Tenants defragmentation with is\_tenant](https://raw.githubusercontent.com/qdrant/landing_page/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/static/docs/defragmentation.png)

*With `is_tenant=true`, the points of one tenant are stored together and read sequentially.*

Next, insert points with the tenant ID in the payload:

**Http**

```http
PUT /collections/{collection_name}/points
{
    "points": [
        {
            "id": 1,
            "payload": {"group_id": "user_1"},
            "vector": [0.9, 0.1, 0.1]
        },
        {
            "id": 2,
            "payload": {"group_id": "user_1"},
            "vector": [0.1, 0.9, 0.1]
        },
        {
            "id": 3,
            "payload": {"group_id": "user_2"},
            "vector": [0.1, 0.1, 0.9]
        },
    ]
}
```

**Python**

```python
client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1,
            payload={"group_id": "user_1"},
            vector=[0.9, 0.1, 0.1],
        ),
        models.PointStruct(
            id=2,
            payload={"group_id": "user_1"},
            vector=[0.1, 0.9, 0.1],
        ),
        models.PointStruct(
            id=3,
            payload={"group_id": "user_2"},
            vector=[0.1, 0.1, 0.9],
        ),
    ],
)
```

**Typescript**

```typescript
client.upsert("{collection_name}", {
  points: [
    {
      id: 1,
      payload: { group_id: "user_1" },
      vector: [0.9, 0.1, 0.1],
    },
    {
      id: 2,
      payload: { group_id: "user_1" },
      vector: [0.1, 0.9, 0.1],
    },
    {
      id: 3,
      payload: { group_id: "user_2" },
      vector: [0.1, 0.1, 0.9],
    },
  ],
});
```

**Rust**

```rust
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Qdrant;

client
    .upsert_points(UpsertPointsBuilder::new(
        "{collection_name}",
        vec![
            PointStruct::new(1, vec![0.9, 0.1, 0.1], [("group_id", "user_1".into())]),
            PointStruct::new(2, vec![0.1, 0.9, 0.1], [("group_id", "user_1".into())]),
            PointStruct::new(3, vec![0.1, 0.1, 0.9], [("group_id", "user_2".into())]),
        ],
    ))
    .await?;
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;

client
    .upsertAsync(
        "{collection_name}",
        List.of(
            PointStruct.newBuilder()
                .setId(id(1))
                .setVectors(vectors(0.9f, 0.1f, 0.1f))
                .putAllPayload(Map.of("group_id", value("user_1")))
                .build(),
            PointStruct.newBuilder()
                .setId(id(2))
                .setVectors(vectors(0.1f, 0.9f, 0.1f))
                .putAllPayload(Map.of("group_id", value("user_1")))
                .build(),
            PointStruct.newBuilder()
                .setId(id(3))
                .setVectors(vectors(0.1f, 0.1f, 0.9f))
                .putAllPayload(Map.of("group_id", value("user_2")))
                .build()))
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.UpsertAsync(
	collectionName: "{collection_name}",
	points: new List<PointStruct>
	{
		new()
		{
			Id = 1,
			Vectors = new[] { 0.9f, 0.1f, 0.1f },
			Payload = { ["group_id"] = "user_1" }
		},
		new()
		{
			Id = 2,
			Vectors = new[] { 0.1f, 0.9f, 0.1f },
			Payload = { ["group_id"] = "user_1" }
		},
		new()
		{
			Id = 3,
			Vectors = new[] { 0.1f, 0.1f, 0.9f },
			Payload = { ["group_id"] = "user_2" }
		}
	}
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*qdrant.PointStruct{
		{
			Id:      qdrant.NewIDNum(1),
			Vectors: qdrant.NewVectors(0.9, 0.1, 0.1),
			Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_1"}),
		},
		{
			Id:      qdrant.NewIDNum(2),
			Vectors: qdrant.NewVectors(0.1, 0.9, 0.1),
			Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_1"}),
		},
		{
			Id:      qdrant.NewIDNum(3),
			Vectors: qdrant.NewVectors(0.1, 0.1, 0.9),
			Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_2"}),
		},
	},
})
```

> **Note**
>
> The key doesn't need to be named <code>group\_id</code>. You can choose any name.

Query with a filter on the tenant field (`group_id`) to return only one tenant's data:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.1, 0.1, 0.9],
    "filter": {
        "must": [
            {
                "key": "group_id",
                "match": {
                    "value": "user_1"
                }
            }
        ]
    },
    "limit": 10
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=[0.1, 0.1, 0.9],
    query_filter=models.Filter(
        must=[
            models.FieldCondition(
                key="group_id",
                match=models.MatchValue(
                    value="user_1",
                ),
            )
        ]
    ),
    limit=10,
)
```

**Typescript**

```typescript
client.query("{collection_name}", {
    query: [0.1, 0.1, 0.9],
    filter: {
        must: [{ key: "group_id", match: { value: "user_1" } }],
    },
    limit: 10,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder};
use qdrant_client::Qdrant;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.1, 0.1, 0.9])
            .limit(10)
            .filter(Filter::must([Condition::matches(
                "group_id",
                "user_1".to_string(),
            )])),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setFilter(
                        Filter.newBuilder().addMust(matchKeyword("group_id", "user_1")).build())
                .setQuery(nearest(0.1f, 0.1f, 0.9f))
                .setLimit(10)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.1f, 0.1f, 0.9f },
	filter: MatchKeyword("group_id", "user_1"),
	limit: 10
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.1, 0.1, 0.9),
	Filter: &qdrant.Filter{
		Must: []*qdrant.Condition{
			qdrant.NewMatch("group_id", "user_1"),
		},
	},
})
```

### Calibrate Performance

Indexing speed can become a bottleneck when many tenants share a collection, since their vectors are all indexed together. To avoid this bottleneck, consider disabling the global vector index for the collection and building it only for individual groups instead.

By adopting this strategy, Qdrant indexes vectors for each tenant independently, significantly accelerating the process.

To implement this approach:

1. Set `payload_m` in the HNSW configuration to a non-zero value, such as 16.
2. Set `m` in the HNSW configuration to 0. This disables the global index for the collection.

**Http**

```http
PUT /collections/{collection_name}
{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "hnsw_config": {
        "payload_m": 16,
        "m": 0
    }
}
```

**Python**

```python
client.create_collection(
    collection_name="{collection_name}",
    vectors_config=models.VectorParams(size=768, distance=models.Distance.COSINE),
    hnsw_config=models.HnswConfigDiff(
        payload_m=16,
        m=0,
    ),
)
```

**Typescript**

```typescript
client.createCollection("{collection_name}", {
  vectors: {
    size: 768,
    distance: "Cosine",
  },
  hnsw_config: {
    payload_m: 16,
    m: 0,
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Distance, HnswConfigDiffBuilder, VectorParamsBuilder,
};
use qdrant_client::Qdrant;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(768, Distance::Cosine))
            .hnsw_config(HnswConfigDiffBuilder::default().payload_m(16).m(0)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.HnswConfigDiff;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorsConfig;

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setVectorsConfig(
                VectorsConfig.newBuilder()
                    .setParams(
                        VectorParams.newBuilder()
                            .setSize(768)
                            .setDistance(Distance.Cosine)
                            .build())
                    .build())
            .setHnswConfig(HnswConfigDiff.newBuilder().setPayloadM(16).setM(0).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	vectorsConfig: new VectorParams { Size = 768, Distance = Distance.Cosine },
	hnswConfig: new HnswConfigDiff { PayloadM = 16, M = 0 }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     768,
		Distance: qdrant.Distance_Cosine,
	}),
	HnswConfig: &qdrant.HnswConfigDiff{
		PayloadM: qdrant.PtrOf(uint64(16)),
		M:        qdrant.PtrOf(uint64(0)),
	},
})
```

### Limitations

- Global requests (without the `group_id` filter) are slower, since they require scanning all groups to identify the nearest neighbors.
- When using [sparse vector search](https://qdrant.tech/documentation/search/text-search/full-text-search/) with the [IDF modifier](https://qdrant.tech/documentation/manage-data/indexing/#idf-modifier), payload-based partitioning alone doesn't isolate IDF statistics. By default, all tenants share the same shard-wide term frequencies. Use the [`idf` search parameter](#per-tenant-idf-statistics) to scope statistics to a single tenant.

### Per-Tenant IDF Statistics

*Available as of v1.19.0*

[BM25](https://qdrant.tech/documentation/search/text-search/full-text-search/#bm25) and [miniCOIL](https://qdrant.tech/documentation/search/text-search/full-text-search/#minicoil) sparse vector searches use the [inverse document frequency (IDF)](https://qdrant.tech/documentation/manage-data/multitenancy/documentation/manage-data/indexing/#idf-modifier) to score matching documents, giving rarer terms more weight than common ones. Calculating the IDF requires two statistics: the total number of documents and the number of documents containing each term.

By default, these statistics are computed across the entire shard being queried. When using payload-filter-based multitenancy, this blends every tenant's vocabulary into one set of statistics, so a term's IDF no longer reflects its rarity within a specific tenant's data.

The `idf` search parameter lets you correct this by narrowing the population — the *IDF corpus* — that Qdrant computes statistics over. It accepts a payload filter that scopes the data.

This filter is independent of the retrieval filter. The filter that determines the IDF corpus is typically broader than the retrieval filter. For example, here, the IDF is calculated over all of a tenant's data even when the retrieval filter narrows further by year:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": {
        "text": "time travel",
        "model": "qdrant/bm25"
    },
    "using": "title-bm25",
    "filter": {
        "must": [
            { "key": "group_id", "match": { "value": "user_1" } },
            { "key": "year", "match": { "value": 2024 } }
        ]
    },
    "params": {
        "idf": {
            "corpus": {
                "must": [
                    { "key": "group_id", "match": { "value": "user_1" } }
                ]
            }
        }
    },
    "limit": 10,
    "with_payload": true
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=models.Document(text="time travel", model="qdrant/bm25"),
    using="title-bm25",
    query_filter=models.Filter(
        must=[
            models.FieldCondition(key="group_id", match=models.MatchValue(value="user_1")),
            models.FieldCondition(key="year", match=models.MatchValue(value=2024)),
        ]
    ),
    search_params=models.SearchParams(
        idf=models.IdfCorpusParams(
            corpus=models.Filter(
                must=[
                    models.FieldCondition(
                        key="group_id", match=models.MatchValue(value="user_1")
                    ),
                ]
            )
        )
    ),
    limit=10,
    with_payload=True,
)
```

**Typescript**

```typescript
client.query("{collection_name}", {
  query: {
    text: "time travel",
    model: "qdrant/bm25",
  },
  using: "title-bm25",
  filter: {
    must: [
      { key: "group_id", match: { value: "user_1" } },
      { key: "year", match: { value: 2024 } },
    ],
  },
  params: {
    idf: {
      corpus: {
        must: [{ key: "group_id", match: { value: "user_1" } }],
      },
    },
  },
  limit: 10,
  with_payload: true,
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    Condition, Document, Filter, IdfParamsBuilder, Query, QueryPointsBuilder, SearchParamsBuilder,
};

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_nearest(Document::new("time travel", "qdrant/bm25")))
            .using("title-bm25")
            .filter(Filter::must([
                Condition::matches("group_id", "user_1".to_string()),
                Condition::matches("year", 2024),
            ]))
            .params(SearchParamsBuilder::default().idf(
                IdfParamsBuilder::default().corpus(Filter::must([Condition::matches(
                    "tenant",
                    "acme".to_string(),
                )])),
            ))
            .limit(10)
            .with_payload(true)
            .build(),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ConditionFactory.match;
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.*;

QdrantClient client =

client
    .queryAsync(
        QueryPoints.newBuilder()
            .setCollectionName("{collection_name}")
            .setQuery(
                nearest(
                    Document.newBuilder()
                        .setText("time travel")
                        .setModel("qdrant/bm25")
                        .build()))
            .setUsing("title-bm25")
            .setFilter(
                Filter.newBuilder()
                    .addMust(matchKeyword("group_id", "user_1"))
                    .addMust(match("year", 2024))
                    .build())
            .setParams(
                SearchParams.newBuilder()
                    .setIdf(
                        IdfParams.newBuilder()
                            .setCorpus(
                                Filter.newBuilder()
                                    .addMust(matchKeyword("group_id", "user_1"))
                                    .build())
                            .build())
                    .build())
            .setLimit(10)
            .setWithPayload(enable(true))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new Document { Text = "time travel", Model = "qdrant/bm25" },
    usingVector: "title-bm25",
    filter: new Filter
    {
        Must =
        {
            MatchKeyword("group_id", "user_1"),
            Match("year", 2024),
        },
    },
    searchParams: new SearchParams
    {
        Idf = new IdfParams
        {
            Corpus = new Filter
            {
                Must = { MatchKeyword("group_id", "user_1") },
            },
        },
    },
    payloadSelector: true,
    limit: 10
);
```

**Go**

```go
client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query: qdrant.NewQueryNearest(
		qdrant.NewVectorInputDocument(&qdrant.Document{
			Model: "qdrant/bm25",
			Text:  "time travel",
		}),
	),
	Using: qdrant.PtrOf("title-bm25"),
	Filter: &qdrant.Filter{
		Must: []*qdrant.Condition{
			qdrant.NewMatch("group_id", "user_1"),
			qdrant.NewMatchInt("year", 2024),
		},
	},
	Params: &qdrant.SearchParams{
		Idf: &qdrant.IdfParams{
			Corpus: &qdrant.Filter{
				Must: []*qdrant.Condition{
					qdrant.NewMatch("group_id", "user_1"),
				},
			},
		},
	},
	Limit:       qdrant.PtrOf(uint64(10)),
	WithPayload: qdrant.NewWithPayload(true),
})
```

- `idf` defaults to `global` (shard-wide statistics), the same as omitting it.
- [Create a payload index](https://qdrant.tech/documentation/manage-data/indexing/#create-a-payload-index) and/or [tenant index](https://qdrant.tech/documentation/manage-data/indexing/#tenant-index) for any fields you want to use in the `idf` filter. On Qdrant Cloud, [strict mode is enabled by default](https://qdrant.tech/documentation/cloud/configure-cluster/) and filters on unindexed fields are rejected.
- Only applicable to queries on a sparse vector with the [IDF modifier](https://qdrant.tech/documentation/manage-data/indexing/#idf-modifier) enabled; using `idf` on a vector without it returns an error.
- If the corpus filter matches no points, IDF statistics do not fall back to shard-wide statistics. Instead, every term gets the same constant weight, so ranking degenerates to plain TF with no rarity signal.
- When using [user-defined sharding](#user-defined-sharding), routing a search request to a single tenant's dedicated shard already scopes IDF to that tenant's data. This shard locality also applies to the `idf` filter: if it matches points that live in a different shard than the one being queried, Qdrant does not reach across shards to satisfy it. It silently computes statistics from whatever overlap exists locally, which can be empty or partial.

## User-Defined Sharding

*Available as of v1.7.0*

Instead of filtering tenants by a payload field, another way to separate tenants is to give each tenant its own dedicated shard. Qdrant lets you specify the shard for each point individually, so operations for a tenant only ever touch that tenant's shard. This trades some resource overhead (each shard has its own storage and index structures) for stronger isolation, and works best for a modest number of large tenants.

To use this approach, create a collection with [user-defined sharding](https://qdrant.tech/documentation/scaling/distributed_deployment/#user-defined-sharding) (also known as custom sharding) enabled:

**Http**

```http
PUT /collections/{collection_name}
{
    "shard_number": 1,
    "sharding_method": "custom"
    // ... other collection parameters
}
```

**Python**

```python
client.create_collection(
    collection_name="{collection_name}",
    shard_number=1,
    sharding_method=models.ShardingMethod.CUSTOM,
    # ... other collection parameters
)
```

**Typescript**

```typescript
client.createCollection("{collection_name}", {
    shard_number: 1,
    sharding_method: "custom",
    // ... other collection parameters
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Distance, ShardingMethod, VectorParamsBuilder,
};
use qdrant_client::Qdrant;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(300, Distance::Cosine))
            .shard_number(1)
            .sharding_method(ShardingMethod::Custom.into()),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.ShardingMethod;

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            // ... other collection parameters
            .setShardNumber(1)
            .setShardingMethod(ShardingMethod.Custom)
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	// ... other collection parameters
	shardNumber: 1,
	shardingMethod: ShardingMethod.Custom
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	// ... other collection parameters
	ShardNumber:    qdrant.PtrOf(uint32(1)),
	ShardingMethod: qdrant.ShardingMethod_Custom.Enum(),
})
```

Then create a shard for each tenant, using the tenant ID as the shard key ([API reference](https://api.qdrant.tech/api-reference/distributed/create-shard-key#request)):

**Http**

```http
PUT /collections/{collection_name}/shards
{
  "shard_key": "{shard_key}"
}
```

**Python**

```python
client.create_shard_key("{collection_name}", "{shard_key}")
```

**Typescript**

```typescript
client.createShardKey("{collection_name}", {
    shard_key: "{shard_key}"
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateShardKeyBuilder, CreateShardKeyRequestBuilder
};
use qdrant_client::Qdrant;

client
    .create_shard_key(
        CreateShardKeyRequestBuilder::new("{collection_name}")
            .request(CreateShardKeyBuilder::default().shard_key("{shard_key}".to_string())),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateShardKey;
import io.qdrant.client.grpc.Collections.CreateShardKeyRequest;

client.createShardKeyAsync(CreateShardKeyRequest.newBuilder()
                .setCollectionName("{collection_name}")
                .setRequest(CreateShardKey.newBuilder()
                                .setShardKey(shardKey("{shard_key}"))
                                .build())
                .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateShardKeyAsync(
    "{collection_name}",
    new CreateShardKey { ShardKey = new ShardKey { Keyword = "{shard_key}", } }
    );
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateShardKey(context.Background(), "{collection_name}", &qdrant.CreateShardKey{
	ShardKey: qdrant.NewShardKey("{shard_key}"),
})
```

To route a point to its tenant's shard, provide the `shard_key` field in the upsert request:

**Http**

```http
PUT /collections/{collection_name}/points
{
    "points": [
        {
            "id": 1111,
            "vector": [0.1, 0.2, 0.3]
        },
    ],
    "shard_key": "user_1"
}
```

**Python**

```python
client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1111,
            vector=[0.1, 0.2, 0.3],
        ),
    ],
    shard_key_selector="user_1",
)
```

**Typescript**

```typescript
client.upsert("{collection_name}", {
    points: [
        {
            id: 1111,
            vector: [0.1, 0.2, 0.3],
        },
    ],
    shard_key: "user_1",
});
```

**Rust**

```rust
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder};
use qdrant_client::Payload;

client
    .upsert_points(
        UpsertPointsBuilder::new(
            "{collection_name}",
            vec![PointStruct::new(
                111,
                vec![0.1, 0.2, 0.3],
                Payload::default(),
            )],
        )
        .shard_key_selector("user_1".to_string()),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ShardKeySelectorFactory.shardKeySelector;
import static io.qdrant.client.VectorsFactory.vectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.UpsertPoints;
import java.util.List;

client
    .upsertAsync(
        UpsertPoints.newBuilder()
            .setCollectionName("{collection_name}")
            .addAllPoints(
                List.of(
                    PointStruct.newBuilder()
                        .setId(id(111))
                        .setVectors(vectors(0.1f, 0.2f, 0.3f))
                        .build()))
            .setShardKeySelector(shardKeySelector("user_1"))
            .build()
    )
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.UpsertAsync(
	collectionName: "{collection_name}",
	points: new List<PointStruct>
	{
		new() { Id = 111, Vectors = new[] { 0.1f, 0.2f, 0.3f } }
	},
	shardKeySelector: new ShardKeySelector { ShardKeys = { new List<ShardKey> { "user_1" } } }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*qdrant.PointStruct{
		{
			Id:      qdrant.NewIDNum(111),
			Vectors: qdrant.NewVectors(0.1, 0.2, 0.3),
		},
	},
	ShardKeySelector: &qdrant.ShardKeySelector{
		ShardKeys: []*qdrant.ShardKey{
			qdrant.NewShardKey("user_1"),
		},
	},
})
```

Specify the same `shard_key` in query requests to search only within that tenant's shard.

Shards require significant resources, so keep the number of tenants low enough that each can have its own shard. For large numbers of tenants, use [partition by payload](#partition-by-payload) or [tiered multitenancy](#tiered-multitenancy) instead.

## Tiered Multitenancy

*Available as of v1.16.0*

In some real-world applications, tenants aren't always equally distributed. For example, a SaaS application might have a few large customers and many small ones.
Large tenants might require more resources and isolation, while small tenants shouldn't add too much overhead.

One solution is to add application-level logic to separate tenants into different collections based on their size or resource requirements.
There is, however, a downside to this approach: you might not know in advance which tenants will be large and which will stay small.
Additionally, application-level logic increases system complexity and requires an additional source of truth for managing tenant placement.

To address this problem, Qdrant provides a built-in mechanism called ***tiered multitenancy***. With tiered multitenancy, you can implement two levels of tenant isolation within a single collection:

- Keep small tenants together in a single shared shard.
- Isolate large tenants into their own dedicated shards.

There are three components in Qdrant that allow you to implement tiered multitenancy:

- [**User-defined Sharding**](https://qdrant.tech/documentation/scaling/distributed_deployment/#user-defined-sharding) allows you to create named shards within a collection. It allows you to isolate large tenants into their own shards.
- **Fallback shards** - a special routing mechanism that allows you to route requests to either a dedicated shard (if it exists) or to a shared fallback shard. It allows you to keep requests unified, without the need to know whether a tenant is dedicated or shared.
- **Tenant promotion** - a mechanism that allows you to move tenants from the shared fallback shard to their own dedicated shard when they grow large enough. This process is based on Qdrant's internal shard transfer mechanism, which makes promotion completely transparent for the application. The promotion process supports both read and write requests.

![Tiered multitenancy with tenant promotion](https://raw.githubusercontent.com/qdrant/landing_page/78beef7e019cb0e5c3cdf851163a98df8c04c37f/qdrant-landing/static/docs/tenant-promotion.png)

*Tiered multitenancy: small tenants share the fallback shard, promoted tenants get their own.*

### Configure Tiered Multitenancy

To take advantage of tiered multitenancy, you need to create a collection with user-defined sharding and create a fallback shard in it.

**Http**

```http
PUT /collections/{collection_name}
{
    "shard_number": 1,
    "sharding_method": "custom"
    // ... other collection parameters
}
```

**Python**

```python
client.create_collection(
    collection_name="{collection_name}",
    shard_number=1,
    sharding_method=models.ShardingMethod.CUSTOM,
    # ... other collection parameters
)
```

**Typescript**

```typescript
client.createCollection("{collection_name}", {
    shard_number: 1,
    sharding_method: "custom",
    // ... other collection parameters
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateCollectionBuilder, Distance, ShardingMethod, VectorParamsBuilder,
};
use qdrant_client::Qdrant;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .vectors_config(VectorParamsBuilder::new(300, Distance::Cosine))
            .shard_number(1)
            .sharding_method(ShardingMethod::Custom.into()),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.ShardingMethod;

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            // ... other collection parameters
            .setShardNumber(1)
            .setShardingMethod(ShardingMethod.Custom)
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateCollectionAsync(
	collectionName: "{collection_name}",
	// ... other collection parameters
	shardNumber: 1,
	shardingMethod: ShardingMethod.Custom
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "{collection_name}",
	// ... other collection parameters
	ShardNumber:    qdrant.PtrOf(uint32(1)),
	ShardingMethod: qdrant.ShardingMethod_Custom.Enum(),
})
```

Set `shard_number` to 1. Promoting tenants to dedicated shards later can only be done with single shards. Configuring a `replication_factor` greater than 1 is fine.

Start by creating a fallback shard, which will be used to store small tenants.
Let's name it `default`.

**Http**

```http
PUT /collections/{collection_name}/shards
{
  "shard_key": "default",
  "shards_number": 1
}
```

**Python**

```python
client.create_shard_key("{collection_name}", "default", shards_number=1)
```

**Typescript**

```typescript
client.createShardKey("{collection_name}", {
    shard_key: "default",
    shards_number: 1
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateShardKeyBuilder, CreateShardKeyRequestBuilder
};
use qdrant_client::Qdrant;

client
    .create_shard_key(
        CreateShardKeyRequestBuilder::new("{collection_name}")
            .request(CreateShardKeyBuilder::default().shard_key("default".to_string()).shards_number(1)),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateShardKey;
import io.qdrant.client.grpc.Collections.CreateShardKeyRequest;

client.createShardKeyAsync(CreateShardKeyRequest.newBuilder()
                .setCollectionName("{collection_name}")
                .setRequest(CreateShardKey.newBuilder()
                                .setShardKey(shardKey("default"))
                                .setShardsNumber(1)
                                .build())
                .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateShardKeyAsync(
    "{collection_name}",
    new CreateShardKey { ShardKey = new ShardKey { Keyword = "default", }, ShardsNumber = 1 }
    );
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateShardKey(context.Background(), "{collection_name}", &qdrant.CreateShardKey{
	ShardKey:     qdrant.NewShardKey("default"),
	ShardsNumber: qdrant.PtrOf(uint32(1)),
})
```

Similar to creating a collection, set `shards_number` to 1.

Since the collection will allow both dedicated and shared tenants, you still need to configure payload-based tenancy the same way as described in the [Partition by Payload](#partition-by-payload) section. Specifically, create a payload index for the tenant field (`group_id` in this example) with `is_tenant=true`.

**Http**

```http
PUT /collections/{collection_name}/index
{
    "field_name": "group_id",
    "field_schema": {
        "type": "keyword",
        "is_tenant": true
    }
}
```

**Python**

```python
client.create_payload_index(
    collection_name="{collection_name}",
    field_name="group_id",
    field_schema=models.KeywordIndexParams(
        type=models.KeywordIndexType.KEYWORD,
        is_tenant=True,
    ),
)
```

**Typescript**

```typescript
client.createPayloadIndex("{collection_name}", {
  field_name: "group_id",
  field_schema: {
    type: "keyword",
    is_tenant: true,
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateFieldIndexCollectionBuilder,
    KeywordIndexParamsBuilder,
    FieldType
};
use qdrant_client::Qdrant;

client.create_field_index(
        CreateFieldIndexCollectionBuilder::new(
            "{collection_name}",
            "group_id",
            FieldType::Keyword,
        ).field_index_params(
            KeywordIndexParamsBuilder::default()
                .is_tenant(true)
        )
    ).await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.KeywordIndexParams;
import io.qdrant.client.grpc.Collections.PayloadIndexParams;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;

client
    .createPayloadIndexAsync(
        "{collection_name}",
        "group_id",
        PayloadSchemaType.Keyword,
        PayloadIndexParams.newBuilder()
            .setKeywordIndexParams(
                KeywordIndexParams.newBuilder()
                    .setIsTenant(true)
                    .build())
            .build(),
        null,
        null,
        null)
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreatePayloadIndexAsync(
	collectionName: "{collection_name}",
	fieldName: "group_id",
	schemaType: PayloadSchemaType.Keyword,
	indexParams: new PayloadIndexParams
	{
		KeywordIndexParams = new KeywordIndexParams
		{
			IsTenant = true
		}
	}
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
	CollectionName: "{collection_name}",
	FieldName:      "group_id",
	FieldType:      qdrant.FieldType_FieldTypeKeyword.Enum(),
	FieldIndexParams: qdrant.NewPayloadIndexParams(
		&qdrant.KeywordIndexParams{
			IsTenant: qdrant.PtrOf(true),
		}),
})
```

### Write to a Tiered Multitenant Collection

Now you can start uploading data into the collection. Specify a **shard key selector** in each request to reach the correct shard. The shard key selector needs to specify two keys:

- `target` shard - name of the tenant's dedicated shard (which may or may not exist).
- `fallback` shard - name of the shared fallback shard (in this example, `default`).

**Http**

```http
PUT /collections/{collection_name}/points
{
    "points": [
        {
            "id": 1,
            "payload": {"group_id": "user_1"},
            "vector": [0.9, 0.1, 0.1]
        }
    ],
    "shard_key": {
        "fallback": "default",
        "target": "user_1"
    }
}
```

**Python**

```python
client.upsert(
    collection_name="{collection_name}",
    points=[
        models.PointStruct(
            id=1,
            payload={"group_id": "user_1"},
            vector=[0.9, 0.1, 0.1],
        ),
    ],
    shard_key_selector=models.ShardKeyWithFallback(
        target="user_1",
        fallback="default"
    )
)
```

**Typescript**

```typescript
client.upsert("{collection_name}", {
  points: [
    {
      id: 1,
      payload: { group_id: "user_1" },
      vector: [0.9, 0.1, 0.1],
    }
  ],
  shard_key: {
    target: "user_1",
    fallback: "default"
  }
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointStruct, ShardKeySelectorBuilder, UpsertPointsBuilder};

let shard_key_selector = ShardKeySelectorBuilder::with_shard_key("user_1")
    .fallback("default")
    .build();

client
    .upsert_points(
        UpsertPointsBuilder::new(
            "{collection_name}",
            vec![
                PointStruct::new(
                    1,
                    vec![0.9, 0.1, 0.1],
                    [("group_id", "user_1".into())]
                ),
            ],
        )
        .shard_key_selector(shard_key_selector),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ShardKeyFactory.shardKey;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import io.qdrant.client.grpc.Points.ShardKeySelector;
import io.qdrant.client.grpc.Points.UpsertPoints;
import java.util.List;
import java.util.Map;

client
    .upsertAsync(
        UpsertPoints.newBuilder()
            .setCollectionName("{collection_name}")
            .addAllPoints(
                List.of(
                    PointStruct.newBuilder()
                        .setId(id(1))
                        .setVectors(vectors(0.9f, 0.1f, 0.1f))
                        .putAllPayload(Map.of("group_id", value("user_1")))
                        .build()))
            .setShardKeySelector(
                ShardKeySelector.newBuilder()
                    .addShardKeys(shardKey("user_1"))
                    .setFallback(shardKey("default"))
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.UpsertAsync(
	collectionName: "{collection_name}",
	points: new List<PointStruct>
	{
		new()
		{
			Id = 1,
			Vectors = new[] { 0.9f, 0.1f, 0.1f },
			Payload = { ["group_id"] = "user_1" }
		}
	},
	shardKeySelector: new ShardKeySelector { 
		ShardKeys = { new List<ShardKey> { "user_1" } },
		Fallback = new ShardKey { Keyword = "default" }
	}
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*qdrant.PointStruct{
		{
			Id:      qdrant.NewIDNum(1),
			Vectors: qdrant.NewVectors(0.9, 0.1, 0.1),
			Payload: qdrant.NewValueMap(map[string]any{"group_id": "user_1"}),
		},
	},
	ShardKeySelector: &qdrant.ShardKeySelector{
		ShardKeys: []*qdrant.ShardKey{
			qdrant.NewShardKey("user_1"),
		},
		Fallback: qdrant.NewShardKey("default"),
	},
})
```

The routing logic works as follows:

- If the `target` shard exists and is active, the request routes to it.
- If the `target` shard does not exist, the request routes to the `fallback` shard.

### Query Tiered Multitenant Collection

When querying points, specify the same shard key selector and filter on the tenant field (`group_id` in this example). The tenant filter value must match the `target` shard key.

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.1, 0.1, 0.9],
    "filter": {
        "must": [
            {
                "key": "group_id",
                "match": {
                    "value": "user_1"
                }
            }
        ]
    },
    "shard_key": {
        "fallback": "default",
        "target": "user_1"
    },
    "limit": 10
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=[0.1, 0.1, 0.9],
    query_filter=models.Filter(
        must=[
            models.FieldCondition(
                key="group_id",
                match=models.MatchValue(value="user_1"),
            )
        ]
    ),
    shard_key_selector=models.ShardKeyWithFallback(
        target="user_1",
        fallback="default"
    ),
    limit=10,
)
```

**Typescript**

```typescript
client.query("{collection_name}", {
    query: [0.1, 0.1, 0.9],
    filter: {
        must: [{ key: "group_id", match: { value: "user_1" } }],
    },
    shard_key: { target: "user_1", fallback: "default" },
    limit: 10,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder, ShardKeySelectorBuilder};
use qdrant_client::Qdrant;

let shard_key_selector = ShardKeySelectorBuilder::with_shard_key("user_1")
    .fallback("default")
    .build();

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.1, 0.1, 0.9])
            .limit(10)
            .filter(Filter::must([Condition::matches(
                "group_id",
                "user_1".to_string(),
            )]))
            .shard_key_selector(shard_key_selector),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.ShardKeySelector;

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setFilter(
                        Filter.newBuilder().addMust(matchKeyword("group_id", "user_1")).build())
                .setQuery(nearest(0.1f, 0.1f, 0.9f))
                .setLimit(10)
                .setShardKeySelector(
                        ShardKeySelector.newBuilder()
                                .addShardKeys(shardKey("user_1"))
                                .setFallback(shardKey("default"))
                                .build())
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.1f, 0.1f, 0.9f },
	filter: MatchKeyword("group_id", "user_1"),
	shardKeySelector: new ShardKeySelector {
		ShardKeys = { new List<ShardKey> { "user_1" } },
		Fallback = new ShardKey { Keyword = "default" }
	},
	limit: 10
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.1, 0.1, 0.9),
	Filter: &qdrant.Filter{
		Must: []*qdrant.Condition{
			qdrant.NewMatch("group_id", "user_1"),
		},
	},
	ShardKeySelector: &qdrant.ShardKeySelector{
		ShardKeys: []*qdrant.ShardKey{qdrant.NewShardKey("user_1")},
		Fallback:  qdrant.NewShardKey("default"),
	},
})
```

### Promote Tenant to Dedicated Shard

When a tenant grows large enough, you can promote it to its own dedicated shard.
To do this, first create a new shard for the tenant:

**Http**

```http
PUT /collections/{collection_name}/shards
{
  "shard_key": "user_1",
  "shards_number": 1,
  "replication_factor": 1,
  "initial_state": "Partial"
}
```

**Python**

```python
client.create_shard_key(
    "{collection_name}",
    shard_key="user_1",
    shards_number=1,
    replication_factor=1,
    initial_state=models.ReplicaState.PARTIAL
)
```

**Typescript**

```typescript
client.createShardKey("{collection_name}", {
    shard_key: "default",
    shards_number: 1,
    replication_factor: 1,
    initial_state: "Partial"
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    CreateShardKeyBuilder, CreateShardKeyRequestBuilder
};
use qdrant_client::qdrant::ReplicaState;
use qdrant_client::Qdrant;

client
    .create_shard_key(
        CreateShardKeyRequestBuilder::new("{collection_name}")
            .request(
                CreateShardKeyBuilder::default()
                    .shard_key("user_1".to_string())
                    .shards_number(1)
                    .replication_factor(1)
                    .initial_state(ReplicaState::Partial)
            ),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateShardKey;
import io.qdrant.client.grpc.Collections.CreateShardKeyRequest;
import io.qdrant.client.grpc.Collections.ReplicaState;
import io.qdrant.client.grpc.Common.Filter;

client.createShardKeyAsync(CreateShardKeyRequest.newBuilder()
                .setCollectionName("{collection_name}")
                .setRequest(CreateShardKey.newBuilder()
                                .setShardKey(shardKey("default"))
                                .setShardsNumber(1)
                                .setReplicationFactor(1)
                                .setInitialState(ReplicaState.Partial)
                                .build())
                .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.CreateShardKeyAsync(
    "{collection_name}",
    new CreateShardKey {
        ShardKey = new ShardKey { Keyword = "default" },
        ShardsNumber = 1,
        ReplicationFactor = 1,
        InitialState = ReplicaState.Partial
    }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.CreateShardKey(
	context.Background(),
	"{collection_name}",
	&qdrant.CreateShardKey{
		ShardKey:          qdrant.NewShardKey("default"),
		ShardsNumber:      qdrant.PtrOf(uint32(1)),
		ReplicationFactor: qdrant.PtrOf(uint32(1)),
		InitialState:      qdrant.PtrOf(qdrant.ReplicaState_Partial),
	},
)
```

The shard is created in `Partial` state, since it still needs to receive data. Similar to before, use the collection's default `shards_number` of 1. The `replication_factor` should initially be set to 1 too. You can create replicas after you've replicated the tenant's data to the new shard.

Use the `replicate_points` API to initiate data transfer:

**Http**

```http
POST /collections/{collection_name}/cluster
{
    "replicate_points": {
        "filter": {
            "must": {
                "key": "group_id",
                "match": {
                    "value": "user_1"
                }
            }
        },
        "from_shard_key": "default",
        "to_shard_key": "user_1"
    }
}
```

**Python**

```python
client.cluster_collection_update(
    collection_name="{collection_name}",
    cluster_operation=models.ReplicatePointsOperation(
        replicate_points=models.ReplicatePoints(
            from_shard_key="default",
            to_shard_key="user_1",
            filter=models.Filter(
                must=[
                    models.FieldCondition(
                        key="group_id",
                        match=models.MatchValue(
                            value="user_1",
                        )
                    )
                ]
            )
        )
    )
)
```

**Typescript**

```typescript
client.updateCollectionCluster("{collection_name}", {
    replicate_points: {
        filter: {
            must: {
                key: "group_id",
                match: {
                    value: "user_1"
                }
            }
        },
        from_shard_key: "default",
        to_shard_key: "user_1"
    }
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    update_collection_cluster_setup_request::Operation, Condition, Filter,
    ReplicatePointsBuilder, ShardKey, UpdateCollectionClusterSetupRequest,
};
use qdrant_client::Qdrant;

client
    .update_collection_cluster_setup(UpdateCollectionClusterSetupRequest {
        collection_name: "{collection_name}".to_string(),
        operation: Some(Operation::ReplicatePoints(
            ReplicatePointsBuilder::new(
                ShardKey::from("default"),
                ShardKey::from("user_1"),
            )
            .filter(Filter::must([Condition::matches(
                "group_id",
                "user_1".to_string(),
            )]))
            .build(),
        )),
        timeout: None,
    })
    .await?;
```

**Java**

```java
import static io.qdrant.client.ConditionFactory.matchKeyword;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ShardKeyFactory.shardKey;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.ReplicatePoints;
import io.qdrant.client.grpc.Collections.UpdateCollectionClusterSetupRequest;
import io.qdrant.client.grpc.Common.Filter;

client
    .updateCollectionClusterSetupAsync(
        UpdateCollectionClusterSetupRequest.newBuilder()
            .setCollectionName("{collection_name}")
            .setReplicatePoints(
                ReplicatePoints.newBuilder()
                    .setFromShardKey(shardKey("default"))
                    .setToShardKey(shardKey("user_1"))
                    .setFilter(
                        Filter.newBuilder().addMust(matchKeyword("group_id", "user_1")).build())
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;

await client.UpdateCollectionClusterSetupAsync(new()
{
    CollectionName = "{collection_name}",
	ReplicatePoints = new()
    {
        FromShardKey = "default",
		ToShardKey = "user_1",
		Filter = MatchKeyword("group_id", "user_1")
    }
});
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.UpdateClusterCollectionSetup(context.Background(), qdrant.NewUpdateCollectionClusterReplicatePoints(
	"{collection_name}", &qdrant.ReplicatePoints{
		FromShardKey: qdrant.NewShardKey("default"),
		ToShardKey:   qdrant.NewShardKey("user_1"),
		Filter: &qdrant.Filter{
			Must: []*qdrant.Condition{
				qdrant.NewMatch("group_id", "user_1"),
			},
		},
	},
))
```

Once the transfer is complete, the target shard will become `Active`, and all requests for the tenant will be routed to it automatically.
At this point it's safe to delete the tenant's data from the shared fallback shard to free up space.

You can now [create replicas](https://qdrant.tech/documentation/scaling/distributed_deployment/#creating-new-shard-replicas) for the new shard.

### Limitations

- The fallback shard and the dedicated tenant shards must have a `shards_number` of 1. A new dedicated tenant shard also needs to have a `replication_factor` of 1 at creation time. This is because the shard transfer mechanism only works with single shards. If you wish, you can increase the replication factor after the point transfer is complete.

  This means all small tenants sharing the fallback shard must fit within the storage and write capacity of a single shard, and thus that of a single node. The same applies to dedicated tenant shards. We plan to remove this restriction in a future release.
- Similar to collections, dedicated shards introduce some resource overhead. Don't create more than a thousand dedicated shards per cluster. The recommended threshold for promoting a tenant is the same as the indexing threshold for a single collection, which is approximately 20,000 points.
