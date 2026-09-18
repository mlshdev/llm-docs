> Pinned source for Qdrant master: [qdrant-landing/content/documentation/search/search.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/search/search.md)
> Canonical documentation: https://qdrant.tech/documentation/search/search/

# Similarity Search

Searching for the nearest vectors is at the core of many representational learning applications.
Modern neural networks are trained to transform objects into vectors so that objects close in the real world appear close in vector space.
It could be, for example, texts with similar meanings, visually similar pictures, or songs of the same genre.

![This is how vector similarity works](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/docs/encoders.png)

*This is how vector similarity works*

## Query API

*Available as of v1.10.0*

Qdrant provides a single interface for all kinds of search and exploration requests - the `Query API`.
Here is a reference list of what kind of queries you can perform with the `Query API` in Qdrant:

Depending on the `query` parameter, Qdrant might prefer different strategies for the search.

|                                                                                                    |                                                                     |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Nearest Neighbors Search                                                                           | Vector Similarity Search, also known as k-NN                        |
| Search By Id                                                                                       | Search by an already stored vector - skip embedding model inference |
| [Recommendations](https://qdrant.tech/documentation/search/explore/#recommendation-api)            | Provide positive and negative examples                              |
| [Discovery Search](https://qdrant.tech/documentation/search/explore/#discovery-api)                | Guide the search using context as a one-shot training set           |
| [Scroll](https://qdrant.tech/documentation/manage-data/points/#scroll-points)                      | Get all points with optional filtering                              |
| [Grouping](https://qdrant.tech/documentation/search/search/#grouping-api)                          | Group results by a certain field                                    |
| [Order By](https://qdrant.tech/documentation/manage-data/points/#order-points-by-payload-key)      | Order points by payload key                                         |
| [Hybrid Search](https://qdrant.tech/documentation/search/hybrid-queries/#hybrid-search)            | Combine multiple queries to get better results                      |
| [Multi-Stage Search](https://qdrant.tech/documentation/search/hybrid-queries/#multi-stage-queries) | Optimize performance for large embeddings                           |
| [Random Sampling](#random-sampling)                                                                | Get random points from the collection                               |

**Nearest Neighbors Search**

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7] // <--- Dense vector
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7], # <--- Dense vector
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: [0.2, 0.1, 0.9, 0.7], // <--- Dense vector
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Query, QueryPointsBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_nearest(vec![0.2, 0.1, 0.9, 0.7]))
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(QueryPoints.newBuilder()
  .setCollectionName("{collectionName}")
  .setQuery(nearest(List.of(0.2f, 0.1f, 0.9f, 0.7f)))
  .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
 collectionName: "{collection_name}",
 query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
})
```

**Search By Id**

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": "43cf51e2-8777-4f52-bc74-c2cbde0c8b04" // <--- point id
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query="43cf51e2-8777-4f52-bc74-c2cbde0c8b04", # <--- point id
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: '43cf51e2-8777-4f52-bc74-c2cbde0c8b04', // <--- point id
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointId, Query, QueryPointsBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_nearest(PointId::from("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.UUID;

QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(QueryPoints.newBuilder()
  .setCollectionName("{collectionName}")
  .setQuery(nearest(UUID.fromString("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
  .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: Guid.Parse("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQueryID(qdrant.NewID("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")),
})
```

## Metrics

There are many ways to estimate the similarity of vectors with each other.
In Qdrant terms, these ways are called metrics.
The choice of metric depends on the vectors obtained and, in particular, on the neural network encoder training method.

Qdrant supports these most popular types of metrics:

- Dot product: `Dot` - <https://en.wikipedia.org/wiki/Dot_product>
- Cosine similarity: `Cosine`  - <https://en.wikipedia.org/wiki/Cosine_similarity>
- Euclidean distance: `Euclid` - <https://en.wikipedia.org/wiki/Euclidean_distance>
- Manhattan distance: `Manhattan`\*- <https://en.wikipedia.org/wiki/Taxicab_geometry> <i><sup>\*Available as of v1.7</sup></i>

The most typical metric used in similarity learning models is the cosine metric.

![Embeddings](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/docs/cos.png)

Qdrant counts this metric in 2 steps, due to which a higher search speed is achieved.
The first step is to normalize the vector when adding it to the collection.
It happens only once for each vector.

The second step is the comparison of vectors.
In this case, it becomes equivalent to dot production - a very fast operation due to SIMD.

Depending on the query configuration, Qdrant might prefer different strategies for the search.
Read more about it in the [query planning](#query-planning) section.

## Search API

Let's look at an example of a search query.

REST API - API Schema definition is available [here](https://api.qdrant.tech/api-reference/search/query-points)

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.79],
    "filter": {
        "must": [
            {
                "key": "city",
                "match": {
                    "value": "London"
                }
            }
        ]
    },
    "params": {
        "hnsw_ef": 128,
        "exact": false
    },
    "limit": 3
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    query_filter=models.Filter(
        must=[
            models.FieldCondition(
                key="city",
                match=models.MatchValue(
                    value="London",
                ),
            )
        ]
    ),
    search_params=models.SearchParams(hnsw_ef=128, exact=False),
    limit=3,
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: [0.2, 0.1, 0.9, 0.7],
    filter: {
        must: [
            {
                key: "city",
                match: {
                    value: "London",
                },
            },
        ],
    },
    params: {
        hnsw_ef: 128,
        exact: false,
    },
    limit: 3,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder, SearchParamsBuilder};

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(3)
            .filter(Filter::must([Condition::matches(
                "city",
                "London".to_string(),
            )]))
            .params(SearchParamsBuilder::default().hnsw_ef(128).exact(false)),
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
import io.qdrant.client.grpc.Points.SearchParams;
import java.util.List;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(QueryPoints.newBuilder()
        .setCollectionName("{collection_name}")
        .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
        .setFilter(Filter.newBuilder().addMust(matchKeyword("city", "London")).build())
        .setParams(SearchParams.newBuilder().setExact(false).setHnswEf(128).build())
        .setLimit(3)
        .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    filter: MatchKeyword("city", "London"),
    searchParams: new SearchParams { Exact = false, HnswEf = 128 },
    limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	Filter: &qdrant.Filter{
		Must: []*qdrant.Condition{
			qdrant.NewMatch("city", "London"),
		},
	},
	Params: &qdrant.SearchParams{
		Exact:  qdrant.PtrOf(false),
		HnswEf: qdrant.PtrOf(uint64(128)),
	},
})
```

In this example, we are looking for vectors similar to vector `[0.2, 0.1, 0.9, 0.7]`.
Parameter `limit` (or its alias - `top`) specifies the amount of most similar results we would like to retrieve.

Values under the key `params` specify custom parameters for the search.
Currently, it could be:

- `hnsw_ef` - value that specifies `ef` parameter of the HNSW algorithm.
- `exact` - option to not use the approximate search (ANN). If set to true, the search may run for a long as it performs a full scan to retrieve exact results.
- `indexed_only` - With this option you can disable the search in those segments where vector index is not built yet. This may be useful if you want to minimize the impact to the search performance whilst the collection is also being updated. Using this option may lead to a partial result if the collection is not fully indexed yet, consider using it only if eventual consistency is acceptable for your use case.
- `quantization` - parameters related to quantization. See [Searching with Quantization](https://qdrant.tech/documentation/manage-data/quantization/#searching-with-quantization) guide.
- `acorn` - parameters related to the [ACORN search algorithm](#acorn-search-algorithm).
- `idf` - which population sparse vector IDF statistics are computed over. See [Per-Tenant IDF Statistics](https://qdrant.tech/documentation/manage-data/multitenancy/#per-tenant-idf-statistics).

Since the `filter` parameter is specified, the search is performed only among those points that satisfy the filter condition.
See details of possible filters and their work in the [filtering](https://qdrant.tech/documentation/search/filtering/) section.

> **Note**
>
> For performant filtering, create <a href="https://qdrant.tech/documentation/manage-data/indexing/#payload-index">payload indexes</a> for the fields you plan to filter on. For best results, create payload indexes before ingesting data. Refer to <a href="https://qdrant.tech/documentation/manage-data/indexing/#create-a-payload-index">Create a Payload Index</a> for more information.

Example result of this API would be

```json
{
  "result": [
    { "id": 10, "score": 0.81 },
    { "id": 14, "score": 0.75 },
    { "id": 11, "score": 0.73 }
  ],
  "status": "ok",
  "time": 0.001
}
```

The `result` contains ordered by `score` list of found point ids.

Note that payload and vector data is missing in these results by default.
See [payload and vector in the result](#payload-and-vector-in-the-result) on how
to include it.

If the collection was created with multiple vectors, the name of the vector to use for searching should be provided:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "using": "image",
    "limit": 3
}
```

**Python**

```python
from qdrant_client import QdrantClient

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    using="image",
    limit=3,
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
  query: [0.2, 0.1, 0.9, 0.7],
  using: "image",
  limit: 3,
});
```

**Rust**

```rust
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(3)
            .using("image"),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(QueryPoints.newBuilder()
        .setCollectionName("{collection_name}")
        .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
        .setUsing("image")
        .setLimit(3)
        .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
	usingVector: "image",
	limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	Using:          qdrant.PtrOf("image"),
})
```

Search is processing only among vectors with the same name.

If the collection was created with sparse vectors, the name of the sparse vector to use for searching should be provided:

You can still use payload filtering and other features of the search API with sparse vectors.

There are however important differences between dense and sparse vector search:

| Index            | Sparse Query                                                                      | Dense Query                                       |
| ---------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| Scoring Metric   | Default is `Dot product`, no need to specify it                                   | `Distance` has supported metrics e.g. Dot, Cosine |
| Search Type      | Always exact in Qdrant                                                            | HNSW is an approximate NN                         |
| Return Behaviour | Returns only vectors with non-zero values in the same indices as the query vector | Returns `limit` vectors                           |

In general, the speed of the search is proportional to the number of non-zero values in the query vector.

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": {
        "indices": [1, 3, 5, 7],
        "values": [0.1, 0.2, 0.3, 0.4]
    },
    "using": "text"
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

result = client.query_points(
    collection_name="{collection_name}",
    query=models.SparseVector(indices=[1, 3, 5, 7], values=[0.1, 0.2, 0.3, 0.4]),
    using="text",
).points
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: {
        indices: [1, 3, 5, 7],
        values: [0.1, 0.2, 0.3, 0.4]
    },
    using: "text",
    limit: 3,
});
```

**Rust**

```rust
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![(1, 0.2), (3, 0.1), (5, 0.9), (7, 0.7)])
            .limit(10)
            .using("text"),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

QdrantClient client =
  new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setUsing("text")
                .setQuery(nearest(List.of(0.1f, 0.2f, 0.3f, 0.4f), List.of(1, 3, 5, 7)))
                .setLimit(3)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
  collectionName: "{collection_name}",
  query: new (float, uint)[] {(0.1f, 1), (0.2f, 3), (0.3f, 5), (0.4f, 7)},
  usingVector: "text",
  limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query: qdrant.NewQuerySparse(
		[]uint32{1, 3, 5, 7},
		[]float32{0.1, 0.2, 0.3, 0.4}),
	Using: qdrant.PtrOf("text"),
})
```

### Filtering Results by Score

In addition to payload filtering, it might be useful to filter out results with a low similarity score.
For example, if you know the minimal acceptance score for your model and do not want any results which are less similar than the threshold.
In this case, you can use `score_threshold` parameter of the search query.
It will exclude all results with a score worse than the given.

> **Note**
>
> This parameter may exclude lower or higher scores depending on the used metric. For example, higher scores of Euclidean metric are considered more distant and, therefore, will be excluded.

### Payload and Vector in the Result

By default, retrieval methods do not return any stored information such as
payload and vectors. Additional parameters `with_vectors` and `with_payload`
alter this behavior.

Example:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "with_vectors": true,
    "with_payload": true
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    with_vectors=True,
    with_payload=True,
)
```

**Typescript**

```typescript
client.query("{collection_name}", {
  query: [0.2, 0.1, 0.9, 0.7],
  with_vector: true,
  with_payload: true,
});
```

**Rust**

```rust
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(3)
            .with_payload(true)
            .with_vectors(true),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.WithVectorsSelectorFactory;
import io.qdrant.client.grpc.Points.QueryPoints;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setWithPayload(enable(true))
                .setWithVectors(WithVectorsSelectorFactory.enable(true))
                .setLimit(3)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
	payloadSelector: true,
	vectorsSelector: true,
	limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	WithPayload:    qdrant.NewWithPayload(true),
	WithVectors:    qdrant.NewWithVectors(true),
})
```

You can use `with_payload` to scope to or filter a specific payload subset.
You can even specify an array of items to include, such as `city`,
`village`, and `town`:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "with_payload": ["city", "village", "town"]
}
```

**Python**

```python
from qdrant_client import QdrantClient

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    with_payload=["city", "village", "town"],
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
  query: [0.2, 0.1, 0.9, 0.7],
  with_payload: ["city", "village", "town"],
});
```

**Rust**

```rust
use qdrant_client::qdrant::{with_payload_selector::SelectorOptions, QueryPointsBuilder};

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(3)
            .with_payload(SelectorOptions::Include(
                vec![
                    "city".to_string(),
                    "village".to_string(),
                    "town".to_string(),
                ]
                .into(),
            ))
            .with_vectors(true),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.include;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setWithPayload(include(List.of("city", "village", "town")))
                .setLimit(3)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    payloadSelector: new WithPayloadSelector
    {
        Include = new PayloadIncludeSelector
        {
            Fields = { new string[] { "city", "village", "town" } }
        }
    },
    limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	WithPayload:    qdrant.NewWithPayloadInclude("city", "village", "town"),
})
```

Or use `include` or `exclude` explicitly. For example, to exclude `city`:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "with_payload": {
      "exclude": ["city"]
    }
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    with_payload=models.PayloadSelectorExclude(
        exclude=["city"],
    ),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
  query: [0.2, 0.1, 0.9, 0.7],
  with_payload: {
    exclude: ["city"],
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{with_payload_selector::SelectorOptions, QueryPointsBuilder};
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(3)
            .with_payload(SelectorOptions::Exclude(vec!["city".to_string()].into()))
            .with_vectors(true),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.exclude;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setWithPayload(exclude(List.of("city")))
                .setLimit(3)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
	payloadSelector: new WithPayloadSelector
	{
		Exclude = new PayloadExcludeSelector { Fields = { new string[] { "city" } } }
	},
	limit: 3
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	WithPayload:    qdrant.NewWithPayloadExclude("city"),
})
```

It is possible to target nested fields using a dot notation:

- `payload.nested_field` - for a nested field
- `payload.nested_array[].sub_field` - for projecting nested fields within an array

Accessing array elements by index is currently not supported.

### ACORN Search Algorithm

*Available as of v1.16.0*

For filtered vector search, you are recommended to create a [payload index](https://qdrant.tech/documentation/manage-data/indexing/#payload-index) for the fields you want to filter by.
During the search, Qdrant will use a combined [filterable index](https://qdrant.tech/documentation/manage-data/indexing/#filterable-hnsw-index).
However, when combining multiple strict payload filters, this mechanism might not provide sufficient accuracy.
In such cases, you can use the ACORN search algorithm.

It is an extension to the regular HNSW search algorithm, based on the ACORN-1 algorithm described in the paper [ACORN: Performant and Predicate-Agnostic Search Over Vector Embeddings and Structured Data](https://arxiv.org/abs/2403.04871).
During graph traversal, it explores not just direct neighbors (first hop), but also neighbors of neighbors (second hop) when direct neighbors are filtered out.
This improves search accuracy at the cost of performance.

Enable it as follows:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "params": {
        "acorn": {
            "enable": true,
            "max_selectivity": 0.4
        }
    },
    "limit": 10
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    search_params=models.SearchParams(
        acorn=models.AcornSearchParams(
            enable=True,
            max_selectivity=0.4,
        )
    ),
    limit=10,
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: [0.2, 0.1, 0.9, 0.7],
    params: {
        acorn: {
            enable: true,
            max_selectivity: 0.4,
        },
    },
    limit: 10,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{
    AcornSearchParamsBuilder, QueryPointsBuilder, SearchParamsBuilder,
};
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(10)
            .params(
                SearchParamsBuilder::default().acorn(
                    AcornSearchParamsBuilder::new(true)
                        .max_selectivity(0.4),
                ),
            ),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.AcornSearchParams;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setParams(
                        SearchParams.newBuilder()
                                .setAcorn(
                                        AcornSearchParams.newBuilder()
                                                .setEnable(true)
                                                .setMaxSelectivity(0.4)
                                                .build())
                                .build())
                .setLimit(10)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
	searchParams: new SearchParams
	{
		Acorn = new AcornSearchParams
		{
			Enable = true,
			MaxSelectivity = 0.4
		}
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

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	Params: &qdrant.SearchParams{
		Acorn: &qdrant.AcornSearchParams{
			Enable:          qdrant.PtrOf(true),
			MaxSelectivity:  qdrant.PtrOf(0.4),
		},
	},
})
```

ACORN is disabled by default.
Once enabled via the `enable` flag, it activates conditionally when estimated filter selectivity is below the threshold.
The optional `max_selectivity` value controls this threshold;
`0.0` means ACORN will never be used, `1.0` means it will always be used. The default value is `0.4`.
Selectivity is estimated as:
$$ \text{Estimated filter selectivity} =
\frac{\text{Estimated number of points satisfying the filters}}
{\text{Total number of points}}
$$
Since ACORN is significantly slower (approximately 2-10x in typical scenarios) but improves recall for restrictive filters, tuning this parameter is about deciding when the accuracy improvement justifies the performance cost.

## Batch Search API

The batch search API enables to perform multiple search requests via a single request.

Its semantic is straightforward, `n` batched search requests are equivalent to `n` singular search requests.

This approach has several advantages. Logically, fewer network connections are required which can be very beneficial on its own.

More importantly, batched requests will be efficiently processed via the query planner which can detect and optimize requests if they have the same `filter`.

This can have a great effect on latency for non trivial filters as the intermediary results can be shared among the request.

In order to use it, simply pack together your search requests. All the regular attributes of a search request are of course available.

**Http**

```http
POST /collections/{collection_name}/points/query/batch
{
    "searches": [
        {
            "query": [0.2, 0.1, 0.9, 0.7],
            "filter": {
                "must": [
                    {
                        "key": "city",
                        "match": {
                            "value": "London"
                        }
                    }
                ]
            },
            "limit": 3
        },
        {
            "query": [0.5, 0.3, 0.2, 0.3],
            "filter": {
                "must": [
                    {
                        "key": "city",
                        "match": {
                            "value": "London"
                        }
                    }
                ]
            },
            "limit": 3
        }
    ]
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

filter_ = models.Filter(
    must=[
        models.FieldCondition(
            key="city",
            match=models.MatchValue(
                value="London",
            ),
        )
    ]
)

search_queries = [
    models.QueryRequest(query=[0.2, 0.1, 0.9, 0.7], filter=filter_, limit=3),
    models.QueryRequest(query=[0.5, 0.3, 0.2, 0.3], filter=filter_, limit=3),
]

client.query_batch_points(collection_name="{collection_name}", requests=search_queries)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

const filter = {
    must: [
        {
            key: "city",
            match: {
                value: "London",
            },
        },
    ],
};

const searches = [
    {
        query: [0.2, 0.1, 0.9, 0.7],
        filter,
        limit: 3,
    },
    {
        query: [0.5, 0.3, 0.2, 0.3],
        filter,
        limit: 3,
    },
];

client.queryBatch("{collection_name}", {
    searches,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{Condition, Filter, QueryBatchPointsBuilder, QueryPointsBuilder};
use qdrant_client::Qdrant;

let client = Qdrant::from_url("http://localhost:6334").build()?;

let filter = Filter::must([Condition::matches("city", "London".to_string())]);

let searches = vec![
    QueryPointsBuilder::new("{collection_name}")
        .query(vec![0.1, 0.2, 0.3, 0.4])
        .limit(3)
        .filter(filter.clone())
        .build(),
    QueryPointsBuilder::new("{collection_name}")
        .query(vec![0.5, 0.3, 0.2, 0.3])
        .limit(3)
        .filter(filter)
        .build(),
];

client
        .query_batch(QueryBatchPointsBuilder::new("{collection_name}", searches))
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

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

Filter filter = Filter.newBuilder().addMust(matchKeyword("city", "London")).build();

List<QueryPoints> searches = List.of(
        QueryPoints.newBuilder()
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setFilter(filter)
                .setLimit(3)
                .build(),
        QueryPoints.newBuilder()
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setFilter(filter)
                .setLimit(3)
                .build());

client.queryBatchAsync("{collection_name}", searches).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using static Qdrant.Client.Grpc.Conditions;

var client = new QdrantClient("localhost", 6334);

var filter = MatchKeyword("city", "London");

var queries = new List<QueryPoints>
{
    new()
    {
        CollectionName = "{collection_name}",
        Query = new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
        Filter = filter,
        Limit = 3
    },
    new()
    {
        CollectionName = "{collection_name}",
        Query = new float[] { 0.5f, 0.3f, 0.2f, 0.3f },
        Filter = filter,
        Limit = 3
    }
};

await client.QueryBatchAsync(collectionName: "{collection_name}", queries: queries);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

filter := qdrant.Filter{
	Must: []*qdrant.Condition{
		qdrant.NewMatch("city", "London"),
	},
}

client.QueryBatch(context.Background(), &qdrant.QueryBatchPoints{
	CollectionName: "{collection_name}",
	QueryPoints: []*qdrant.QueryPoints{
		{
			CollectionName: "{collection_name}",
			Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
			Filter:         &filter,
		},
		{
			CollectionName: "{collection_name}",
			Query:          qdrant.NewQuery(0.5, 0.3, 0.2, 0.3),
			Filter:         &filter,
		},
	},
})
```

The result of this API contains one array per search requests.

```json
{
  "result": [
    [
        { "id": 10, "score": 0.81 },
        { "id": 14, "score": 0.75 },
        { "id": 11, "score": 0.73 }
    ],
    [
        { "id": 1, "score": 0.92 },
        { "id": 3, "score": 0.89 },
        { "id": 9, "score": 0.75 }
    ]
  ],
  "status": "ok",
  "time": 0.001
}
```

## Query by ID

Whenever you need to use a vector as an input, you can always use a [point ID](https://qdrant.tech/documentation/manage-data/points/#point-ids) instead.

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": "43cf51e2-8777-4f52-bc74-c2cbde0c8b04" // <--- point id
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query="43cf51e2-8777-4f52-bc74-c2cbde0c8b04", # <--- point id
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: '43cf51e2-8777-4f52-bc74-c2cbde0c8b04', // <--- point id
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointId, Query, QueryPointsBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_nearest(PointId::from("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.UUID;

QdrantClient client = new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.queryAsync(QueryPoints.newBuilder()
  .setCollectionName("{collectionName}")
  .setQuery(nearest(UUID.fromString("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
  .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
    collectionName: "{collection_name}",
    query: Guid.Parse("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQueryID(qdrant.NewID("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")),
})
```

The above example will fetch the default vector from the point with this id, and use it as the query vector.

If the `using` parameter is also specified, Qdrant will use the vector with that name.

It is also possible to reference an ID from a different collection, by setting the `lookup_from` parameter.

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": "43cf51e2-8777-4f52-bc74-c2cbde0c8b04", // <--- point id
    "using": "512d-vector",
    "lookup_from": {
        "collection": "another_collection", // <--- other collection name
        "vector": "image-512" // <--- vector name in the other collection
    }
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.query_points(
    collection_name="{collection_name}",
    query="43cf51e2-8777-4f52-bc74-c2cbde0c8b04",  # <--- point id
    using="512d-vector",
    lookup_from=models.LookupLocation(
        collection="another_collection",  # <--- other collection name
        vector="image-512",  # <--- vector name in the other collection
    )
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.query("{collection_name}", {
    query: '43cf51e2-8777-4f52-bc74-c2cbde0c8b04', // <--- point id
    using: '512d-vector',
    lookup_from: {
        collection: 'another_collection', // <--- other collection name
        vector: 'image-512', // <--- vector name in the other collection
    }
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{LookupLocationBuilder, Query, QueryPointsBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client.query(
    QueryPointsBuilder::new("{collection_name}")
        .query(Query::new_nearest("43cf51e2-8777-4f52-bc74-c2cbde0c8b04"))
        .using("512d-vector")
        .lookup_from(
            LookupLocationBuilder::new("another_collection")
                .vector_name("image-512")
        )
).await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.LookupLocation;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.UUID;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .queryAsync(
        QueryPoints.newBuilder()
            .setCollectionName("{collection_name}")
            .setQuery(nearest(UUID.fromString("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")))
            .setUsing("512d-vector")
            .setLookupFrom(
                LookupLocation.newBuilder()
                    .setCollectionName("another_collection")
                    .setVectorName("image-512")
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(
  collectionName: "{collection_name}",
  query: Guid.Parse("43cf51e2-8777-4f52-bc74-c2cbde0c8b04"), // <--- point id
  usingVector: "512d-vector",
  lookupFrom: new() {
    CollectionName = "another_collection", // <--- other collection name
      VectorName = "image-512" // <--- vector name in the other collection
  }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQueryID(qdrant.NewID("43cf51e2-8777-4f52-bc74-c2cbde0c8b04")),
	Using:          qdrant.PtrOf("512d-vector"),
	LookupFrom: &qdrant.LookupLocation{
		CollectionName: "another_collection",
		VectorName:     qdrant.PtrOf("image-512"),
	},
})
```

In the case above, Qdrant will fetch the `"image-512"` vector from the specified point id in the
collection `another_collection`.

> **Note**
>
> The fetched vector(s) must match the characteristics of the <code>using</code> vector, otherwise, an error will be returned.

## Pagination

The Search and [recommendation](https://qdrant.tech/documentation/search/explore/#recommendation-api) APIs allow you to skip the first results and return only the results starting from a specified offset:

Example:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "with_vectors": true,
    "with_payload": true,
    "limit": 10,
    "offset": 100
}
```

**Python**

```python
client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    with_vectors=True,
    with_payload=True,
    limit=10,
    offset=100,
)
```

**Typescript**

```typescript
client.query("{collection_name}", {
  query: [0.2, 0.1, 0.9, 0.7],
  with_vector: true,
  with_payload: true,
  limit: 10,
  offset: 100,
});
```

**Rust**

```rust
use qdrant_client::qdrant::QueryPointsBuilder;
use qdrant_client::Qdrant;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .with_payload(true)
            .with_vectors(true)
            .limit(10)
            .offset(100),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.enable;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.WithVectorsSelectorFactory;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setWithPayload(enable(true))
                .setWithVectors(WithVectorsSelectorFactory.enable(true))
                .setLimit(10)
                .setOffset(100)
                .build())
        .get();
```

**Csharp**

```csharp
await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    payloadSelector: true,
    vectorsSelector: true,
    limit: 10,
    offset: 100
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
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	WithPayload:    qdrant.NewWithPayload(true),
	WithVectors:    qdrant.NewWithVectors(true),
	Limit:          qdrant.PtrOf(uint64(10)),
	Offset:         qdrant.PtrOf(uint64(100)),
})
```

This is equivalent to retrieving the 11th page with 10 records per page.

> **Note**
>
> Large offset values may cause performance issues

Vector-based retrieval in general, and the HNSW index in particular, are not designed to be paginated. It is impossible to retrieve the Nth closest vector without internally retrieving the first N vectors first. However, using the `offset` parameter saves resources by reducing network traffic and the number of times the storage is accessed. Using the `offset` parameter internally retrieves `offset + limit` points, but only accesses the payload and vector of those points that are actually returned.

### Stable Ordering

Because HNSW search is approximate, the ranking of results can shift slightly between requests. As a result, paginating with `offset` can return the same point on multiple pages or skip points entirely.

There are several ways to work around this:

#### Client-Side Pagination

Retrieve a large batch in a single request and paginate through it on the client. For example, fetch the top 100 results at once and let the user browse them 10 at a time. This avoids multiple round-trips and guarantees no duplicates.

The trade-off is increased latency, and returning more data than the user actually needs.

#### Exact Search

Use exact searches to bypass HNSW and scan all vectors, returning results in a stable, deterministic order. This ensures that offset-based pagination works correctly.

The trade-off is higher latency, which makes this practical only for small collections.

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "params": {
        "exact": true
    },
    "limit": 10
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    search_params=models.SearchParams(exact=True),
    limit=10,
)
```

**Typescript**

```typescript
client.query("{collection_name}", {
    query: [0.2, 0.1, 0.9, 0.7],
    params: {
        exact: true,
    },
    limit: 10,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{QueryPointsBuilder, SearchParamsBuilder};
use qdrant_client::Qdrant;

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(10)
            .params(SearchParamsBuilder::default().exact(true)),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.SearchParams;

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setParams(SearchParams.newBuilder().setExact(true).build())
                .setLimit(10)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

await client.QueryAsync(
	collectionName: "{collection_name}",
	query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
	searchParams: new SearchParams { Exact = true },
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
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	Params: &qdrant.SearchParams{
		Exact: qdrant.PtrOf(true),
	},
})
```

#### Exclude Seen IDs

To avoid duplicates, on subsequent pages, add a `must_not: has_id` filter containing all point IDs collected from previous pages. This excludes all previously seen points from the results:

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": [0.2, 0.1, 0.9, 0.7],
    "filter": {
        "must_not": [
            { "has_id": [83461, 19284, 57392, 44017, 91825] }
        ]
    },
    "limit": 5
}
```

**Python**

```python
from uuid import UUID

from qdrant_client import QdrantClient, models

seen_ids: list[int | str | UUID] = [83461, 19284, 57392, 44017, 91825]  # IDs returned on previous pages

client.query_points(
    collection_name="{collection_name}",
    query=[0.2, 0.1, 0.9, 0.7],
    query_filter=models.Filter(
        must_not=[
            models.HasIdCondition(has_id=seen_ids),
        ]
    ),
    limit=5,
)
```

**Typescript**

```typescript
const seenIds = [83461, 19284, 57392, 44017, 91825]; // IDs returned on previous pages

client.query("{collection_name}", {
  query: [0.2, 0.1, 0.9, 0.7],
  filter: {
    must_not: [
      {
        has_id: seenIds,
      },
    ],
  },
  limit: 5,
});
```

**Rust**

```rust
use qdrant_client::qdrant::{Condition, Filter, QueryPointsBuilder};
use qdrant_client::Qdrant;

let seen_ids = vec![83461u64, 19284, 57392, 44017, 91825]; // IDs returned on previous pages

client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .filter(Filter::must_not([Condition::has_id(seen_ids)]))
            .limit(5),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.ConditionFactory.hasId;
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Common.Filter;
import io.qdrant.client.grpc.Points.QueryPoints;
import java.util.List;

var seenIds = List.of(id(83461), id(19284), id(57392), id(44017), id(91825)); // IDs returned on previous pages

client.queryAsync(
        QueryPoints.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setFilter(
                        Filter.newBuilder()
                                .addMustNot(hasId(seenIds))
                                .build())
                .setLimit(5)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using static Qdrant.Client.Grpc.Conditions;

ulong[] seenIds = [83461, 19284, 57392, 44017, 91825]; // IDs returned on previous pages

// The ! operator negates the condition (must not)
await client.QueryAsync(
    collectionName: "{collection_name}",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    filter: !HasId(seenIds),
    limit: 5
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

seenIds := []uint64{83461, 19284, 57392, 44017, 91825} // IDs returned on previous pages

pointIds := make([]*qdrant.PointId, len(seenIds))
for i, id := range seenIds {
	pointIds[i] = qdrant.NewIDNum(id)
}

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	Filter: &qdrant.Filter{
		MustNot: []*qdrant.Condition{
			qdrant.NewHasID(pointIds...),
		},
	},
	Limit: qdrant.PtrOf(uint64(5)),
})
```

Repeat this pattern on every page, expanding the exclusion list with each set of results.

> **Note**
>
> The exclusion list grows by <code>limit</code> entries per page. This approach works well for sequential, forward-only pagination. It isn't practical for jumping directly to an arbitrary page.

## Grouping API

It is possible to group results by a certain field. This is useful when you have multiple points for the same item, and you want to avoid redundancy of the same item in the results.

For example, if you have a large document split into multiple chunks, and you want to search or [recommend](https://qdrant.tech/documentation/search/explore/#recommendation-api) on a per-document basis, you can group the results by the document ID.

Consider having points with the following payloads:

```json
[
    {
        "id": 0,
        "payload": {
            "chunk_part": 0, 
            "document_id": "a"
        },
        "vector": [0.91]
    },
    {
        "id": 1,
        "payload": {
            "chunk_part": 1, 
            "document_id": ["a", "b"]
        },
        "vector": [0.8]
    },
    {
        "id": 2,
        "payload": {
            "chunk_part": 2, 
            "document_id": "a"
        },
        "vector": [0.2]
    },
    {
        "id": 3,
        "payload": {
            "chunk_part": 0, 
            "document_id": 123
        },
        "vector": [0.79]
    },
    {
        "id": 4,
        "payload": {
            "chunk_part": 1, 
            "document_id": 123
        },
        "vector": [0.75]
    },
    {
        "id": 5,
        "payload": {
            "chunk_part": 0, 
            "document_id": -10
        },
        "vector": [0.6]
    }
]
```

With the ***groups*** API, you will be able to get the best *N* points for each document, assuming that the payload of the points contains the document ID. Of course there will be times where the best *N* points cannot be fulfilled due to lack of points or a big distance with respect to the query. In every case, the `group_size` is a best-effort parameter, akin to the `limit` parameter.

### Search Groups

REST API ([Schema](https://api.qdrant.tech/api-reference/search/query-points-groups)):

**Http**

```http
POST /collections/{collection_name}/points/query/groups
{
    // Same as in the regular query API
    "query": [1.1],
    // Grouping parameters
    "group_by": "document_id",  // Path of the field to group by
    "limit": 4,                 // Max amount of groups
    "group_size": 2            // Max amount of points per group
}
```

**Python**

```python
client.query_points_groups(
    collection_name="{collection_name}",
    # Same as in the regular query_points() API
    query=[1.1],
    # Grouping parameters
    group_by="document_id",  # Path of the field to group by
    limit=4,  # Max amount of groups
    group_size=2,  # Max amount of points per group
)
```

**Typescript**

```typescript
client.queryGroups("{collection_name}", {
    query: [1.1],
    group_by: "document_id",
    limit: 4,
    group_size: 2,
});
```

**Rust**

```rust
use qdrant_client::qdrant::QueryPointGroupsBuilder;

client
    .query_groups(
        QueryPointGroupsBuilder::new("{collection_name}", "document_id")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .group_size(2u64)
            .with_payload(true)
            .with_vectors(true)
            .limit(4u64),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;

import io.qdrant.client.grpc.Points.QueryPointGroups;
import io.qdrant.client.grpc.Points.SearchPointGroups;
import java.util.List;

client.queryGroupsAsync(
        QueryPointGroups.newBuilder()
                .setCollectionName("{collection_name}")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setGroupBy("document_id")
                .setLimit(4)
                .setGroupSize(2)
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;

var client = new QdrantClient("localhost", 6334);

await client.QueryGroupsAsync(
    collectionName: "{collection_name}",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    groupBy: "document_id",
    limit: 4,
    groupSize: 2
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	GroupBy:        "document_id",
	GroupSize:      qdrant.PtrOf(uint64(2)),
})
```

The output of a ***groups*** call looks like this:

```json
{
    "result": {
        "groups": [
            {
                "id": "a",
                "hits": [
                    { "id": 0, "score": 0.91 },
                    { "id": 1, "score": 0.85 }
                ]
            },
            {
                "id": "b",
                "hits": [
                    { "id": 1, "score": 0.85 }
                ]
            },
            {
                "id": 123,
                "hits": [
                    { "id": 3, "score": 0.79 },
                    { "id": 4, "score": 0.75 }
                ]
            },
            {
                "id": -10,
                "hits": [
                    { "id": 5, "score": 0.6 }
                ]
            }
        ]
    },
    "status": "ok",
    "time": 0.001
}
```

The groups are ordered by the score of the top point in the group. Inside each group the points are sorted too.

If the `group_by` field of a point is an array (e.g. `"document_id": ["a", "b"]`), the point can be included in multiple groups (e.g. `"document_id": "a"` and `document_id: "b"`).

> **Note**
>
> This feature relies heavily on the `group_by` key provided. To improve performance, make sure to create a dedicated index for it.

**Limitations**:

- Only [keyword](https://qdrant.tech/documentation/manage-data/payload/#keyword) and [integer](https://qdrant.tech/documentation/manage-data/payload/#integer) payload values are supported for the `group_by` parameter. Payload values with other types will be ignored.
- At the moment, pagination is not enabled when using **groups**, so the `offset` parameter is not allowed.

### Lookup in Groups

When the points in a group share large fields like titles, abstracts, or full document vectors, copying that data onto every point inflates storage and forces you to rewrite every chunk whenever a shared field changes.

`with_lookup` solves this. Store the shared data once in a separate collection, then attach it to each group at query time using the [groups API](#grouping-api).

![Group id matches point id](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/docs/lookup_id_linking.png)

> **Note**
>
> Store only document-level metadata (e.g., titles, abstracts) in the lookup collection, not chunks or duplicated data.

Set up the two collections. `chunks` holds one point per chunk with its own vector. `documents` holds one point per document with payload only. The payload index on `document_id` lets `group_by` work on that field.

**Http**

```http
PUT /collections/chunks
{
    "vectors": {
        "size": 4,
        "distance": "Cosine"
    }
}

PUT /collections/chunks/index
{
    "field_name": "document_id",
    "field_schema": "integer"
}

PUT /collections/documents
{
    "vectors": {}
}
```

**Python**

```python
client.create_collection(
    collection_name="chunks",
    vectors_config=models.VectorParams(size=4, distance=models.Distance.COSINE),
)

client.create_payload_index(
    collection_name="chunks",
    field_name="document_id",
    field_schema=models.PayloadSchemaType.INTEGER,
)

client.create_collection(
    collection_name="documents",
    vectors_config={},  # no vectors, payload only
)
```

**Typescript**

```typescript
await client.createCollection("chunks", {
    vectors: { size: 4, distance: "Cosine" },
});

await client.createPayloadIndex("chunks", {
    field_name: "document_id",
    field_schema: "integer",
});

await client.createCollection("documents", {
    vectors: {}, // no vectors, payload only
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, CreateFieldIndexCollectionBuilder, Distance, FieldType,
    VectorParamsBuilder, VectorsConfigBuilder,
};

client
    .create_collection(
        CreateCollectionBuilder::new("chunks")
            .vectors_config(VectorParamsBuilder::new(4, Distance::Cosine)),
    )
    .await?;

client
    .create_field_index(
        CreateFieldIndexCollectionBuilder::new("chunks", "document_id", FieldType::Integer)
            .wait(true),
    )
    .await?;

// No vectors, payload only.
client
    .create_collection(
        CreateCollectionBuilder::new("documents")
            .vectors_config(VectorsConfigBuilder::default()),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.Distance;
import io.qdrant.client.grpc.Collections.PayloadSchemaType;
import io.qdrant.client.grpc.Collections.VectorParams;
import io.qdrant.client.grpc.Collections.VectorParamsMap;
import io.qdrant.client.grpc.Collections.VectorsConfig;

QdrantClient client = new QdrantClient(
    QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.createCollectionAsync("chunks",
        VectorParams.newBuilder().setDistance(Distance.Cosine).setSize(4).build()).get();

client.createPayloadIndexAsync(
    "chunks",
    "document_id",
    PayloadSchemaType.Integer,
    null,
    true,
    null,
    null).get();

// No vectors, payload only.
client.createCollectionAsync(
    CreateCollection.newBuilder()
        .setCollectionName("documents")
        .setVectorsConfig(VectorsConfig.newBuilder()
            .setParamsMap(VectorParamsMap.newBuilder().build())
            .build())
        .build()).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
	collectionName: "chunks",
	vectorsConfig: new VectorParams { Size = 4, Distance = Distance.Cosine }
);

await client.CreatePayloadIndexAsync(
	collectionName: "chunks",
	fieldName: "document_id",
	schemaType: PayloadSchemaType.Integer
);

// No vectors, payload only.
await client.CreateCollectionAsync(
	collectionName: "documents",
	vectorsConfig: new VectorParamsMap()
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "chunks",
	VectorsConfig: qdrant.NewVectorsConfig(&qdrant.VectorParams{
		Size:     4,
		Distance: qdrant.Distance_Cosine,
	}),
})

client.CreateFieldIndex(context.Background(), &qdrant.CreateFieldIndexCollection{
	CollectionName: "chunks",
	FieldName:      "document_id",
	FieldType:      qdrant.FieldType_FieldTypeInteger.Enum(),
})

// No vectors, payload only.
client.CreateCollection(context.Background(), &qdrant.CreateCollection{
	CollectionName: "documents",
	VectorsConfig: qdrant.NewVectorsConfigMap(
		map[string]*qdrant.VectorParams{},
	),
})
```

Ingest both collections, with `documents` populated before any query that uses `with_lookup`.

**Http**

```http
PUT /collections/documents/points
{
    "points": [
        {
            "id": 200,
            "vector": {},
            "payload": {"title": "Document A", "text": "This is document A"}
        },
        {
            "id": 201,
            "vector": {},
            "payload": {"title": "Document B", "text": "This is document B"}
        }
    ]
}

PUT /collections/chunks/points
{
    "points": [
        {
            "id": 0,
            "vector": [0.1, 0.2, 0.3, 0.4],
            "payload": {"document_id": 200}
        },
        {
            "id": 1,
            "vector": [0.5, 0.6, 0.7, 0.8],
            "payload": {"document_id": [200, 201]}
        }
    ]
}
```

**Python**

```python
client.upsert(
    collection_name="documents",
    points=[
        models.PointStruct(
            id=200,
            vector={},
            payload={"title": "Document A", "text": "This is document A"},
        ),
        models.PointStruct(
            id=201,
            vector={},
            payload={"title": "Document B", "text": "This is document B"},
        ),
    ],
)

client.upsert(
    collection_name="chunks",
    points=[
        models.PointStruct(
            id=0,
            vector=[0.1, 0.2, 0.3, 0.4],
            payload={"document_id": 200},
        ),
        models.PointStruct(
            id=1,
            vector=[0.5, 0.6, 0.7, 0.8],
            payload={"document_id": [200, 201]},
        ),
    ],
)
```

**Typescript**

```typescript
await client.upsert("documents", {
    points: [
        {
            id: 200,
            vector: {},
            payload: { title: "Document A", text: "This is document A" },
        },
        {
            id: 201,
            vector: {},
            payload: { title: "Document B", text: "This is document B" },
        },
    ],
});

await client.upsert("chunks", {
    points: [
        {
            id: 0,
            vector: [0.1, 0.2, 0.3, 0.4],
            payload: { document_id: 200 },
        },
        {
            id: 1,
            vector: [0.5, 0.6, 0.7, 0.8],
            payload: { document_id: [200, 201] },
        },
    ],
});
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::Qdrant;
use qdrant_client::qdrant::{PointStruct, UpsertPointsBuilder, Vector};

client
    .upsert_points(UpsertPointsBuilder::new(
        "documents",
        vec![
            PointStruct::new(
                200,
                HashMap::<String, Vector>::new(),
                [
                    ("title", "Document A".into()),
                    ("text", "This is document A".into()),
                ],
            ),
            PointStruct::new(
                201,
                HashMap::<String, Vector>::new(),
                [
                    ("title", "Document B".into()),
                    ("text", "This is document B".into()),
                ],
            ),
        ],
    ))
    .await?;

client
    .upsert_points(UpsertPointsBuilder::new(
        "chunks",
        vec![
            PointStruct::new(0, vec![0.1, 0.2, 0.3, 0.4], [("document_id", 200.into())]),
            PointStruct::new(1, vec![0.5, 0.6, 0.7, 0.8], [("document_id", vec![200, 201].into())]),
        ],
    ))
    .await?;
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.list;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.namedVectors;
import static io.qdrant.client.VectorsFactory.vectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;

QdrantClient client = new QdrantClient(
    QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client.upsertAsync(
    "documents",
    List.of(
        PointStruct.newBuilder()
            .setId(id(200))
            .setVectors(namedVectors(Map.of()))
            .putAllPayload(Map.of(
                "title", value("Document A"),
                "text", value("This is document A")))
            .build(),
        PointStruct.newBuilder()
            .setId(id(201))
            .setVectors(namedVectors(Map.of()))
            .putAllPayload(Map.of(
                "title", value("Document B"),
                "text", value("This is document B")))
            .build())).get();

client.upsertAsync(
    "chunks",
    List.of(
        PointStruct.newBuilder()
            .setId(id(0))
            .setVectors(vectors(0.1f, 0.2f, 0.3f, 0.4f))
            .putAllPayload(Map.of("document_id", value(200)))
            .build(),
        PointStruct.newBuilder()
            .setId(id(1))
            .setVectors(vectors(0.5f, 0.6f, 0.7f, 0.8f))
            .putAllPayload(Map.of("document_id", list(List.of(value(200), value(201)))))
            .build())).get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.UpsertAsync(
	collectionName: "documents",
	points: new List<PointStruct>
	{
		new()
		{
			Id = 200,
			Vectors = new Dictionary<string, Vector>(),
			Payload =
			{
				["title"] = "Document A",
				["text"] = "This is document A",
			},
		},
		new()
		{
			Id = 201,
			Vectors = new Dictionary<string, Vector>(),
			Payload =
			{
				["title"] = "Document B",
				["text"] = "This is document B",
			},
		},
	}
);

await client.UpsertAsync(
	collectionName: "chunks",
	points: new List<PointStruct>
	{
		new()
		{
			Id = 0,
			Vectors = new float[] { 0.1f, 0.2f, 0.3f, 0.4f },
			Payload = { ["document_id"] = 200 },
		},
		new()
		{
			Id = 1,
			Vectors = new float[] { 0.5f, 0.6f, 0.7f, 0.8f },
			Payload = { ["document_id"] = new Value[] { 200L, 201L } },
		},
	}
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "documents",
	Points: []*qdrant.PointStruct{
		{
			Id: qdrant.NewIDNum(200),
			Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{}),
			Payload: qdrant.NewValueMap(map[string]any{
				"title": "Document A",
				"text":  "This is document A",
			}),
		},
		{
			Id: qdrant.NewIDNum(201),
			Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{}),
			Payload: qdrant.NewValueMap(map[string]any{
				"title": "Document B",
				"text":  "This is document B",
			}),
		},
	},
})

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "chunks",
	Points: []*qdrant.PointStruct{
		{
			Id:      qdrant.NewIDNum(0),
			Vectors: qdrant.NewVectors(0.1, 0.2, 0.3, 0.4),
			Payload: qdrant.NewValueMap(map[string]any{"document_id": 200}),
		},
		{
			Id:      qdrant.NewIDNum(1),
			Vectors: qdrant.NewVectors(0.5, 0.6, 0.7, 0.8),
			Payload: qdrant.NewValueMap(map[string]any{"document_id": []int{200, 201}}),
		},
	},
})
```

The lookup is a plain join by point id, not a vector search:

- The `documents` collection must already contain a point whose id matches the `group_by` value from each chunk.
- The id types must match. A string `group_by` value against integer point ids returns an empty `lookup` field with no error.
- Group ids without a matching point in `documents` get an empty `lookup` field.

Query the `chunks` collection with `group_by="document_id"` and `with_lookup` pointing at the `documents` collection:

**Http**

```http
POST /collections/chunks/points/query/groups
{
    // Same as in the regular query API
    "query": [0.2, 0.1, 0.9, 0.7],

    // Grouping parameters
    "group_by": "document_id",
    "limit": 2,
    "group_size": 2,

    // Lookup parameters
    "with_lookup": {
        // Name of the collection to look up points in
        "collection": "documents",

        // Options for specifying what to bring from the payload 
        // of the looked up point, true by default
        "with_payload": ["title", "text"],

        // Options for specifying what to bring from the vector(s) 
        // of the looked up point, false by default
        "with_vectors": false
    }
}
```

**Python**

```python
client.query_points_groups(
    collection_name="chunks",
    # Same as in the regular search() API
    query=[0.2, 0.1, 0.9, 0.7],
    # Grouping parameters
    group_by="document_id",  # Path of the field to group by
    limit=2,  # Max amount of groups
    group_size=2,  # Max amount of points per group
    # Lookup parameters
    with_lookup=models.WithLookup(
        # Name of the collection to look up points in
        collection="documents",
        # Options for specifying what to bring from the payload
        # of the looked up point, True by default
        with_payload=["title", "text"],
        # Options for specifying what to bring from the vector(s)
        # of the looked up point, False by default
        with_vectors=False,
    ),
)
```

**Typescript**

```typescript
client.queryGroups("chunks", {
    query: [0.2, 0.1, 0.9, 0.7],
    group_by: "document_id",
    limit: 2,
    group_size: 2,
    with_lookup: {
        collection: "documents",
        with_payload: ["title", "text"],
        with_vectors: false,
    },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{with_payload_selector::SelectorOptions, QueryPointGroupsBuilder, WithLookupBuilder};

client
    .query_groups(
        QueryPointGroupsBuilder::new("chunks", "document_id")
            .query(vec![0.2, 0.1, 0.9, 0.7])
            .limit(2u64)
            .group_size(2u64)
            .with_lookup(
                WithLookupBuilder::new("documents")
                    .with_payload(SelectorOptions::Include(
                        vec!["title".to_string(), "text".to_string()].into(),
                    ))
                    .with_vectors(false),
            ),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.WithPayloadSelectorFactory.include;
import static io.qdrant.client.WithVectorsSelectorFactory.enable;

import io.qdrant.client.grpc.Points.QueryPointGroups;
import io.qdrant.client.grpc.Points.WithLookup;
import java.util.List;

client.queryGroupsAsync(
        QueryPointGroups.newBuilder()
                .setCollectionName("chunks")
                .setQuery(nearest(0.2f, 0.1f, 0.9f, 0.7f))
                .setGroupBy("document_id")
                .setLimit(2)
                .setGroupSize(2)
                .setWithLookup(
                        WithLookup.newBuilder()
                                .setCollection("documents")
                                .setWithPayload(include(List.of("title", "text")))
                                .setWithVectors(enable(false))
                                .build())
                .build())
        .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.QueryGroupsAsync(
    collectionName: "chunks",
    groupBy: "document_id",
    query: new float[] { 0.2f, 0.1f, 0.9f, 0.7f },
    limit: 2,
    groupSize: 2,
    withLookup: new WithLookup
    {
        Collection = "documents",
        WithPayload = new WithPayloadSelector
        {
            Include = new PayloadIncludeSelector { Fields = { new string[] { "title", "text" } } }
        },
        WithVectors = false
    }
);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
	CollectionName: "chunks",
	Query:          qdrant.NewQuery(0.2, 0.1, 0.9, 0.7),
	GroupBy:        "document_id",
	Limit:          qdrant.PtrOf(uint64(2)),
	GroupSize:      qdrant.PtrOf(uint64(2)),
	WithLookup: &qdrant.WithLookup{
		Collection:  "documents",
		WithPayload: qdrant.NewWithPayloadInclude("title", "text"),
	},
})
```

You can also pass `with_lookup="documents"` as a shorthand. It uses the server defaults (`with_payload=True`, `with_vectors=False`), so the documents' vectors are not returned. Use the explicit `WithLookup(...)` form when you need those vectors back.

The looked-up result appears under `lookup` in each group. Below, chunk id 1 shows up in both groups because its `document_id` payload is an array (`[200, 201]`), placing the chunk into every matching group.

```json
{
    "result": {
        "groups": [
            {
                "id": 200,
                "hits": [
                    { "id": 0, "score": 0.91 },
                    { "id": 1, "score": 0.85 }
                ],
                "lookup": {
                    "id": 200,
                    "payload": {
                        "title": "Document A",
                        "text": "This is document A"
                    }
                }
            },
            {
                "id": 201,
                "hits": [
                    { "id": 1, "score": 0.85 }
                ],
                "lookup": {
                    "id": 201,
                    "payload": {
                        "title": "Document B",
                        "text": "This is document B"
                    }
                }
            }
        ]
    },
    "status": "ok",
    "time": 0.001
}
```

For a collection of 20 000 documents with around 24 chunks each, duplicating \~3 KB of document-level data on every chunk adds up to \~1.4 GB. Storing those fields once per document in the `documents` collection brings that down to \~60 MB. The split pays off when the shared fields are large or change often, since updating one point in `documents` shows up under every chunk's group at query time.

## Random Sampling

*Available as of v1.11.0*

In some cases it might be useful to retrieve a random sample of points from the collection. This can be useful for debugging, testing, or for providing entry points for exploration.

Random sampling API is a part of [Universal Query API](#query-api) and can be used in the same way as regular search API.

**Http**

```http
POST /collections/{collection_name}/points/query
{
    "query": {
        "sample": "random"
    }
}
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

sampled = client.query_points(
    collection_name="{collection_name}",
    query=models.SampleQuery(sample=models.Sample.RANDOM)
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

const sampled = await client.query("{collection_name}", {
  query: {
    sample: "random",
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{Query, QueryPointsBuilder, Sample};

let client = Qdrant::from_url("http://localhost:6334").build()?;

let sampled = client
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .query(Query::new_sample(Sample::Random))
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.sample;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points.QueryPoints;
import io.qdrant.client.grpc.Points.Sample;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .queryAsync(
        QueryPoints.newBuilder()
            .setCollectionName("{collection_name}")
            .setQuery(sample(Sample.Random))
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.QueryAsync(collectionName: "{collection_name}", query: Sample.Random);
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client, err := qdrant.NewClient(&qdrant.Config{
	Host: "localhost",
	Port: 6334,
})

client.QueryGroups(context.Background(), &qdrant.QueryPointGroups{
	CollectionName: "{collection_name}",
	Query:          qdrant.NewQuerySample(qdrant.Sample_Random),
})
```

> **Note**
>
> If you need a sample that's reproducible across queries, for example for recall evaluation or a train/test split, use the <a href="https://qdrant.tech/documentation/search/filtering/#slice">slice filter condition</a> instead. It returns the same subset of points every time.

## Query Planning

Depending on the filter used in the search - there are several possible scenarios for query execution.
Qdrant chooses one of the query execution options depending on the available indexes, the complexity of the conditions and the cardinality of the filtering result.
This process is called query planning.

The strategy selection process relies heavily on heuristics and can vary from release to release.
However, the general principles are:

- planning is performed for each segment independently (see [storage](https://qdrant.tech/documentation/manage-data/storage/) for more information about segments)
- prefer a full scan if the amount of points is below a threshold
- estimate the cardinality of a filtered result before selecting a strategy
- retrieve points using payload index (see [indexing](https://qdrant.tech/documentation/manage-data/indexing/)) if cardinality is below threshold
- use filterable vector index if the cardinality is above a threshold
- use ACORN when the selectivity (ratio) is low, but the cardinality (an amount) is still high

You can adjust the threshold using a [configuration file](https://github.com/qdrant/qdrant/blob/master/config/config.yaml), as well as independently for each collection.
