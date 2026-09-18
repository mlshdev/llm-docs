> Pinned source for Qdrant master: [qdrant-landing/content/documentation/inference/matryoshka-models.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/inference/matryoshka-models.md)
> Canonical documentation: https://qdrant.tech/documentation/inference/matryoshka-models/

# Reduce Vector Dimensionality with Matryoshka Models

[Matryoshka Representation Learning](https://arxiv.org/abs/2205.13147) (MRL) is a technique used to train embedding models to produce vectors that can be reduced in size with minimal loss of information. On Qdrant Cloud, for supported models, you can specify the `mrl` parameter in the `options` object to reduce the vector size to the desired dimension.

MRL on Qdrant Cloud helps minimize costs and latency when you need multiple sizes of the same vector. Instead of making several inference requests for each vector size, the inference service only generates embeddings for the full-sized vector and then reduces the vector to each requested smaller size.

The following example demonstrates how to insert a point into a collection with both the original full-size vector (`large`) and a reduced-size vector (`small`):

**Http**

```http
PUT /collections/{collection_name}/points?wait=true
{
  "points": [
    {
      "id": 1,
      "vector": {
        "large": {
          "text": "Recipe for baking chocolate chip cookies",
          "model": "openai/text-embedding-3-small",
          "options": {
            "openai-api-key": "<YOUR_OPENAI_API_KEY>"
          }
        },
        "small": {
          "text": "Recipe for baking chocolate chip cookies",
          "model": "openai/text-embedding-3-small",
          "options": {
            "openai-api-key": "<YOUR_OPENAI_API_KEY>",
            "mrl": 64
          }
        }
      }
    }
  ]
}
```

**Python**

```python
from qdrant_client import QdrantClient, models
from qdrant_client.context_headers import headers

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<your-qdrant-api-key>",
    cloud_inference=True
)

with headers({"openai-api-key": "<YOUR_OPENAI_API_KEY>"}):
    client.upsert(
        collection_name="{collection_name}",
        points=[
            models.PointStruct(
                id=1,
                vector={
                    "large": models.Document(
                        text="Recipe for baking chocolate chip cookies",
                        model="openai/text-embedding-3-small",
                    ),
                    "small": models.Document(
                        text="Recipe for baking chocolate chip cookies",
                        model="openai/text-embedding-3-small",
                        options={"mrl": 64},
                    )
                },
            )
        ],
    )
```

**Typescript**

```typescript
import { QdrantClient, withHeaders } from "@qdrant/js-client-rest";

await withHeaders({ 'openai-api-key': '<YOUR_OPENAI_API_KEY>' }, () =>
    client.upsert("{collection_name}", {
        points: [
            {
                id: 1,
                vector: {
                    large: {
                        text: 'Recipe for baking chocolate chip cookies',
                        model: 'openai/text-embedding-3-small',
                    },
                    small: {
                        text: 'Recipe for baking chocolate chip cookies',
                        model: 'openai/text-embedding-3-small',
                        options: {
                            mrl: 64,
                        },
                    },
                },
            },
        ],
    })
);
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::{
    Payload, Qdrant,
    qdrant::{Document, NamedVectors, PointStruct, UpsertPointsBuilder, Value},
};

client
    .with_header("openai-api-key", "<YOUR_OPENAI_API_KEY>")
    .upsert_points(
        UpsertPointsBuilder::new(
            "{collection_name}",
            vec![PointStruct::new(
                1,
                NamedVectors::default()
                    .add_vector(
                        "large",
                        Document {
                            text: "Recipe for baking chocolate chip cookies".into(),
                            model: "openai/text-embedding-3-small".into(),
                            options: HashMap::new(),
                        },
                    )
                    .add_vector(
                        "small",
                        Document {
                            text: "Recipe for baking chocolate chip cookies".into(),
                            model: "openai/text-embedding-3-small".into(),
                            options: HashMap::<String, Value>::from_iter(vec![(
                                "mrl".into(),
                                Value::from(64),
                            )]),
                        },
                    ),
                Payload::default(),
            )],
        )
        .wait(true),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorFactory.vector;
import static io.qdrant.client.VectorsFactory.namedVectors;

import io.grpc.Context;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.RequestHeaders;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;

Context ctx = RequestHeaders.withHeader(
    Context.current(), "openai-api-key", "<YOUR_OPENAI_API_KEY>");

ctx.call(() -> client
    .upsertAsync(
        "{collection_name}",
        List.of(
            PointStruct.newBuilder()
                .setId(id(1))
                .setVectors(
                    namedVectors(
                        Map.of(
                            "large",
                            vector(
                                Document.newBuilder()
                                    .setModel("openai/text-embedding-3-small")
                                    .setText("Recipe for baking chocolate chip cookies")
                                    .build()),
                            "small",
                            vector(
                                Document.newBuilder()
                                    .setModel("openai/text-embedding-3-small")
                                    .setText("Recipe for baking chocolate chip cookies")
                                    .putAllOptions(Map.of("mrl", value(64)))
                                    .build()))))
                .build()))
    .get());
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

using (RequestHeaders.Use("openai-api-key", "<YOUR_OPENAI_API_KEY>"))
    await client.UpsertAsync(
        collectionName: "{collection_name}",
        points: new List<PointStruct>
        {
            new()
            {
                Id = 1,
                Vectors = new Dictionary<string, Vector>
                {
                    ["large"] = new Document()
                    {
                        Model = "openai/text-embedding-3-small",
                        Text = "Recipe for baking chocolate chip cookies",
                    },
                    ["small"] = new Document()
                    {
                        Model = "openai/text-embedding-3-small",
                        Text = "Recipe for baking chocolate chip cookies",
                        Options = { ["mrl"] = 64 },
                    },
                },
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

ctx := qdrant.WithHeader(context.Background(), "openai-api-key", "<YOUR_OPENAI_API_KEY>")

client.Upsert(ctx, &qdrant.UpsertPoints{
	CollectionName: "{collection_name}",
	Points: []*qdrant.PointStruct{
		{
			Id: qdrant.NewIDNum(uint64(1)),
			Vectors: qdrant.NewVectorsMap(map[string]*qdrant.Vector{
				"large": qdrant.NewVectorDocument(&qdrant.Document{
					Model: "openai/text-embedding-3-small",
					Text:  "Recipe for baking chocolate chip cookies",
				}),
				"small": qdrant.NewVectorDocument(&qdrant.Document{
					Model: "openai/text-embedding-3-small",
					Text:  "Recipe for baking chocolate chip cookies",
					Options: qdrant.NewValueMap(map[string]any{
						"mrl": 64,
					}),
				}),
			}),
		},
	},
})
```

Note that, even though the request contains two inference objects, Qdrant Cloud's inference service only makes one inference request to the OpenAI API, saving one round trip and reducing costs.

A good use case for MRL is [prefetching](https://qdrant.tech/documentation/concepts/hybrid-queries/#multi-stage-queries) with smaller vectors, followed by re-scoring with the original-sized vectors, effectively balancing speed and accuracy. This example first prefetches 1000 candidates using a 64-dimensional reduced vector (`small`) and then re-scores them using the original full-size vector (`large`) to return the top 10 most relevant results:

**Http**

```http
POST /collections/{collection_name}/points/query
{
  "prefetch": {
    "query": {
      "text": "How to bake cookies?",
      "model": "openai/text-embedding-3-small",
      "options": {
        "openai-api-key": "<YOUR_OPENAI_API_KEY>",
        "mrl": 64
      }
    },
    "using": "small",
    "limit": 1000
  },
  "query": {
    "text": "How to bake cookies?",
    "model": "openai/text-embedding-3-small",
    "options": {
      "openai-api-key": "<YOUR_OPENAI_API_KEY>"
    }
  },
  "using": "large",
  "limit": 10
}
```

**Python**

```python
from qdrant_client import QdrantClient, models
from qdrant_client.context_headers import headers

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<your-qdrant-api-key>",
    cloud_inference=True
)

with headers({"openai-api-key": "<YOUR_OPENAI_API_KEY>"}):
    client.query_points(
        collection_name="{collection_name}",
        query=models.Document(
            text="How to bake cookies?",
            model="openai/text-embedding-3-small",
        ),
        using="large",
        limit=10,
        prefetch=models.Prefetch(
            query=models.Document(
                text="How to bake cookies?",
                model="openai/text-embedding-3-small",
                options={"mrl": 64},
            ),
            using="small",
            limit=1000,
        )
    )
```

**Typescript**

```typescript
import { QdrantClient, withHeaders } from "@qdrant/js-client-rest";

await withHeaders({ 'openai-api-key': '<YOUR_OPENAI_API_KEY>' }, () =>
    client.query("{collection_name}", {
        prefetch: {
            query: {
                text: "How to bake cookies?",
                model: "openai/text-embedding-3-small",
                options: {
                    mrl: 64,
                }
            },
            using: 'small',
            limit: 1000,
        },
        query: {
            text: "How to bake cookies?",
            model: "openai/text-embedding-3-small",
        },
        using: 'large',
        limit: 10,
    })
);
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::{
    Qdrant,
    qdrant::{Document, PrefetchQueryBuilder, Query, QueryPointsBuilder, Value},
};

client
    .with_header("openai-api-key", "<YOUR_OPENAI_API_KEY>")
    .query(
        QueryPointsBuilder::new("{collection_name}")
            .add_prefetch(
                PrefetchQueryBuilder::default()
                    .query(Query::new_nearest(Document {
                        text: "How to bake cookies?".into(),
                        model: "openai/text-embedding-3-small".into(),
                        options: HashMap::<String, Value>::from_iter(vec![(
                            "mrl".into(),
                            Value::from(64),
                        )]),
                    }))
                    .using("small")
                    .limit(1000_u64),
            )
            .query(Query::new_nearest(Document {
                text: "How to bake cookies?".into(),
                model: "openai/text-embedding-3-small".into(),
                options: HashMap::new(),
            }))
            .using("large")
            .limit(10_u64)
            .build(),
    )
    .await?;
```

**Java**

```java
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ValueFactory.value;

import io.grpc.Context;
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.RequestHeaders;
import io.qdrant.client.grpc.Points;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.PrefetchQuery;
import java.util.Map;

Context ctx = RequestHeaders.withHeader(
    Context.current(), "openai-api-key", "<YOUR_OPENAI_API_KEY>");

ctx.call(() -> client
    .queryAsync(
        Points.QueryPoints.newBuilder()
            .setCollectionName("{collection_name}")
            .addPrefetch(
                PrefetchQuery.newBuilder()
                    .setQuery(
                        nearest(
                            Document.newBuilder()
                                .setModel("openai/text-embedding-3-small")
                                .setText("How to bake cookies?")
                                .putAllOptions(Map.of("mrl", value(64)))
                                .build()))
                    .setUsing("small")
                    .setLimit(1000)
                    .build())
            .setQuery(
                nearest(
                    Document.newBuilder()
                        .setModel("openai/text-embedding-3-small")
                        .setText("How to bake cookies?")
                        .build()))
            .setUsing("large")
            .build())
    .get());
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

using (RequestHeaders.Use("openai-api-key", "<YOUR_OPENAI_API_KEY>"))
    await client.QueryAsync(
        collectionName: "{collection_name}",
        prefetch:
        [
            new()
            {
                Query = new Document()
                {
                    Model = "openai/text-embedding-3-small",
                    Text = "How to bake cookies?",
                    Options = { ["mrl"] = 64 },
                },
                Using = "small",
                Limit = 1000,
            },
        ],
        query: new Document()
        {
            Model = "openai/text-embedding-3-small",
            Text = "How to bake cookies?",
        },
        usingVector: "large",
        limit: 10
    );
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

ctx := qdrant.WithHeader(context.Background(), "openai-api-key", "<YOUR_OPENAI_API_KEY>")

client.Query(ctx, &qdrant.QueryPoints{
	CollectionName: "{collection_name}",
	Prefetch: []*qdrant.PrefetchQuery{
		{
			Query: qdrant.NewQueryNearest(
				qdrant.NewVectorInputDocument(&qdrant.Document{
					Model: "openai/text-embedding-3-small",
					Text:  "How to bake cookies?",
					Options: qdrant.NewValueMap(map[string]any{
						"mrl": 64,
					}),
				}),
			),
			Using: qdrant.PtrOf("small"),
			Limit: qdrant.PtrOf(uint64(1000)),
		},
	},
	Query: qdrant.NewQueryNearest(
		qdrant.NewVectorInputDocument(&qdrant.Document{
			Model: "openai/text-embedding-3-small",
			Text:  "How to bake cookies?",
		}),
	),
	Using: qdrant.PtrOf("large"),
	Limit: qdrant.PtrOf(uint64(10)),
})
```
