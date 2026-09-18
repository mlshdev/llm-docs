> Pinned source for Qdrant master: [qdrant-landing/content/documentation/inference/cloud-inference.md](https://github.com/qdrant/landing_page/blob/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/content/documentation/inference/cloud-inference.md)
> Canonical documentation: https://qdrant.tech/documentation/inference/cloud-inference/

# Qdrant Cloud Inference

![Qdrant Cloud Inference](https://raw.githubusercontent.com/qdrant/landing_page/4d8a8ceb08486decdbf0f0016772c7f120ea7d56/qdrant-landing/static/docs/qdrant-cloud-inference.png)

Clusters on Qdrant Managed Cloud can use [Qdrant Cloud Inference](https://qdrant.tech/documentation/cloud/inference/) to generate embeddings. For a list of available models and their dimensions, visit the Inference tab of the Cluster Detail page in the Qdrant Cloud Console. You can also enable Cloud Inference for a cluster from this tab.

Several embedding models are free to use with Qdrant Cloud Inference, including on free-tier clusters. The “Cost: Free” label in the Inference tab identifies these models.

Inference of short payloads, such as most search queries, is handled in the same network as the Qdrant Cloud cluster, reducing latency for search inputs. This applies to  Qdrant-hosted models and is fully transparent. Longer search inputs and upserts are handled by a dedicated remote inference service.

Before using a Cloud-hosted embedding model, ensure that your collection has been configured for vectors with the correct dimensionality. The Inference tab of the Cluster Detail page in the Qdrant Cloud Console lists the dimensionality for each supported embedding model.

## Text Inference

Let's consider an example of using Cloud Inference with a text model that produces dense vectors. This example creates one point and uses a simple search query with a `Document` Inference Object.

**Http**

```http
# Insert new points with cloud-side inference
PUT /collections/<your-collection>/points?wait=true
{
  "points": [
    {
      "id": 1,
      "payload": { "topic": "cooking", "type": "dessert" },
      "vector": {
        "text": "Recipe for baking chocolate chip cookies",
        "model": "<the-model-to-use>"
      }
    }
  ]
}

# Search in the collection using cloud-side inference
POST /collections/<your-collection>/points/query
{
  "query": {
    "text": "How to bake cookies?",
    "model": "<the-model-to-use>"
  }
}
```

**Bash**

```bash
# Create a new vector
curl -X PUT "https://xyz-example.qdrant.io:6333/collections/<your-collection>/points?wait=true" \
  -H "Content-Type: application/json" \
  -H "api-key: <paste-your-api-key-here>" \
  -d '{
    "points": [
      {
        "id": 1,
        "payload": { "topic": "cooking", "type": "dessert" },
        "vector": {
          "text": "Recipe for baking chocolate chip cookies",
          "model": "<the-model-to-use>"
        }
      }
    ]
  }'

# Perform a search query
curl -X POST "https://xyz-example.qdrant.io:6333/collections/<your-collection>/points/query" \
  -H "Content-Type: application/json" \
  -H "api-key: <paste-your-api-key-here>" \
  -d '{
    "query": {
      "text": "How to bake cookies?",
      "model": "<the-model-to-use>"
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, Document

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<paste-your-api-key-here>",
    # IMPORTANT
    # If not enabled, inference will be performed locally
    cloud_inference=True,
)

points = [
    PointStruct(
        id=1,
        payload={"topic": "cooking", "type": "dessert"},
        vector=Document(
            text="Recipe for baking chocolate chip cookies",
            model="<the-model-to-use>"
        )
    )
]

client.upsert(collection_name="<your-collection>", points=points)

result = client.query_points(
    collection_name="<your-collection>",
    query=Document(
        text="How to bake cookies?",
        model="<the-model-to-use>"
    )
)

print(result)
```

**Typescript**

```typescript
import {QdrantClient} from "@qdrant/js-client-rest";

const points = [
  {
    id: 1,
    payload: { topic: "cooking", type: "dessert" },
    vector: {
        text: "Recipe for baking chocolate chip cookies",
        model: "<the-model-to-use>"
      }
  }
];

await client.upsert("<your-collection>", { wait: true, points });

const result = await client.query(
    "<your-collection>",
    {
      query: {
          text: "How to bake cookies?",
          model: "<the-model-to-use>"
      },
    }
)

console.log(result);
```

**Rust**

```rust
use qdrant_client::{
    Payload, Qdrant,
    qdrant::{Document, PointStruct, Query, QueryPointsBuilder, UpsertPointsBuilder},
};

let points = vec![PointStruct::new(
    1,
    Document {
        text: "Recipe for baking chocolate chip cookies".into(),
        model: "<the-model-to-use>".into(),
        ..Default::default()
    },
    Payload::try_from(serde_json::json!(
        {"topic": "cooking", "type": "dessert"}
    ))?,
)];

client
    .upsert_points(UpsertPointsBuilder::new("<your-collection>", points).wait(true))
    .await?;

let query_document = Document {
    text: "How to bake cookies?".into(),
    model: "<the-model-to-use>".into(),
    ..Default::default()
};

let result = client
    .query(
        QueryPointsBuilder::new("<your-collection>")
            .query(Query::new_nearest(query_document))
            .build(),
    )
    .await?;

println!("Result: {:?}", result);
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;

client
    .upsertAsync(
        "<your-collection>",
        List.of(
            PointStruct.newBuilder()
                .setId(id(1))
                .setVectors(
                    vectors(
                        Document.newBuilder()
                            .setText("Recipe for baking chocolate chip cookies")
                            .setModel("<the-model-to-use>")
                            .build()))
                .putAllPayload(Map.of("topic", value("cooking"), "type", value("dessert")))
                .build()))
    .get();

List<Points.ScoredPoint> points =
    client
        .queryAsync(
            Points.QueryPoints.newBuilder()
                .setCollectionName("<your-collection>")
                .setQuery(
                    nearest(
                        Document.newBuilder()
                            .setText("How to bake cookies?")
                            .setModel("<the-model-to-use>")
                            .build()))
                .build())
        .get();

System.out.printf(points.toString());
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using Value = Qdrant.Client.Grpc.Value;

var client = new QdrantClient(
  host: "xyz-example.qdrant.io",
  port: 6334,
  https: true,
  apiKey: "<paste-your-api-key-here>"
);

await client.UpsertAsync(
  collectionName: "<your-collection>",
  points: new List <PointStruct> {
    new() {
      Id = 1,
        Vectors = new Document() {
          Text = "Recipe for baking chocolate chip cookies",
          Model = "<the-model-to-use>",
        },
        Payload = {
          ["topic"] = "cooking",
          ["type"] = "dessert"
        },
    },
  }
);

var points = await client.QueryAsync(
  collectionName: "<your-collection>",
  query: new Document() {
    Text = "How to bake cookies?",
    Model = "<the-model-to-use>"
  }
);

foreach(var point in points) {
  Console.WriteLine(point);
}
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "<your-collection>",
	Points: []*qdrant.PointStruct{
		{
			Id: qdrant.NewIDNum(1),
			Vectors: qdrant.NewVectorsDocument(&qdrant.Document{
				Text:  "Recipe for baking chocolate chip cookies",
				Model: "<the-model-to-use>",
			}),
			Payload: qdrant.NewValueMap(map[string]any{
				"topic": "cooking",
				"type":  "dessert",
			}),
		},
	},
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "<your-collection>",
	Query: qdrant.NewQueryNearest(
		qdrant.NewVectorInputDocument(&qdrant.Document{
			Text:  "How to bake cookies?",
			Model: "<the-model-to-use>",
		}),
	),
})
```

Usage examples, specific to each cluster and model, can also be found in the Inference tab of the Cluster Detail page in the Qdrant Cloud Console.

Note that each model has a context window, which is the maximum number of tokens that can be processed by the model in a single request. If the input text exceeds the context window, it is truncated to fit within the limit. The context window size is displayed in the Inference tab of the Cluster Detail page.

For dense vector models, you also have to ensure that the vector size configured in the collection matches the output size of the model. If the vector size does not match, the upsert will fail with an error.

## Image Inference

Here is another example of using Cloud Inference with an image model. This example uses the `CLIP` model to encode an image and then uses a text query to search for it.

Since the `CLIP` model is multimodal, we can use both image and text inputs on the same vector field.

**Http**

```http
# Insert new points with cloud-side inference
PUT /collections/<your-collection>/points?wait=true
{
  "points": [
    {
      "id": 1,
      "vector": {
        "image": "https://qdrant.tech/example.png",
        "model": "qdrant/clip-vit-b-32-vision"
      },
      "payload": {
        "title": "Example Image"
      }
    }
  ]
}

# Search in the collection using cloud-side inference
POST /collections/<your-collection>/points/query
{
  "query": {
    "text": "Mission to Mars",
    "model": "qdrant/clip-vit-b-32-text"
  }
}
```

**Bash**

```bash
# Create a new vector
curl -X PUT "https://xyz-example.qdrant.io:6333/collections/<your-collection>/points?wait=true" \
  -H "Content-Type: application/json" \
  -H "api-key: <paste-your-api-key-here>" \
  -d '{
    "points": [
      {
        "id": 1,
        "vector": {
          "image": "https://qdrant.tech/example.png",
          "model": "qdrant/clip-vit-b-32-vision"
        },
        "payload": {
          "title": "Example Image"
        }
      }
    ]
  }'

# Perform a search query
curl -X POST "https://xyz-example.qdrant.io:6333/collections/<your-collection>/points/query" \
  -H "Content-Type: application/json" \
  -H "api-key: <paste-your-api-key-here>" \
  -d '{
    "query": {
      "text": "Mission to Mars",
      "model": "qdrant/clip-vit-b-32-text"
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient
from qdrant_client.models import PointStruct, Image, Document

client = QdrantClient(
    url="https://xyz-example.qdrant.io:6333",
    api_key="<paste-your-api-key-here>",
    # IMPORTANT
    # If not enabled, inference will be performed locally
    cloud_inference=True,
)

points = [
    PointStruct(
        id=1,
        vector=Image(
            image="https://qdrant.tech/example.png",
            model="qdrant/clip-vit-b-32-vision"
        ),
        payload={
            "title": "Example Image"
        }
    )
]

client.upsert(collection_name="<your-collection>", points=points)

result = client.query_points(
    collection_name="<your-collection>",
    query=Document(
        text="Mission to Mars",
        model="qdrant/clip-vit-b-32-text"
    )
)

print(result)
```

**Typescript**

```typescript
import {QdrantClient} from "@qdrant/js-client-rest";

const points = [
  {
    id: 1,
    vector: {
      image: "https://qdrant.tech/example.png",
      model: "qdrant/clip-vit-b-32-vision"
    },
    payload: {
      title: "Example Image"
    }
  }
];

await client.upsert("<your-collection>", { wait: true, points });

const result = await client.query(
    "<your-collection>",
    {
      query: {
          text: "Mission to Mars",
          model: "qdrant/clip-vit-b-32-text"
      },
    }
)

console.log(result);
```

**Rust**

```rust
use qdrant_client::{
    Payload, Qdrant,
    qdrant::{Document, Image, PointStruct, Query, QueryPointsBuilder, UpsertPointsBuilder},
};

let points = vec![PointStruct::new(
    1,
    Image {
        image: Some("https://qdrant.tech/example.png".into()),
        model: "qdrant/clip-vit-b-32-vision".into(),
        ..Default::default()
    },
    Payload::try_from(serde_json::json!({
        "title": "Example Image"
    }))?,
)];

client
    .upsert_points(UpsertPointsBuilder::new("<your-collection>", points).wait(true))
    .await?;

let query_document = Document {
    text: "Mission to Mars".into(),
    model: "qdrant/clip-vit-b-32-text".into(),
    ..Default::default()
};

let result = client
    .query(
        QueryPointsBuilder::new("<your-collection>")
            .query(Query::new_nearest(query_document))
            .build(),
    )
    .await?;

println!("Result: {:?}", result);
```

**Java**

```java
import static io.qdrant.client.PointIdFactory.id;
import static io.qdrant.client.QueryFactory.nearest;
import static io.qdrant.client.ValueFactory.value;
import static io.qdrant.client.VectorsFactory.vectors;

import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Points;
import io.qdrant.client.grpc.Points.Document;
import io.qdrant.client.grpc.Points.Image;
import io.qdrant.client.grpc.Points.PointStruct;
import java.util.List;
import java.util.Map;

client
    .upsertAsync(
        "<your-collection>",
        List.of(
            PointStruct.newBuilder()
                .setId(id(1))
                .setVectors(
                    vectors(
                        Image.newBuilder()
                            .setImage(value("https://qdrant.tech/example.png"))
                            .setModel("qdrant/clip-vit-b-32-vision")
                            .build()))
                .putAllPayload(Map.of("title", value("Example Image")))
                .build()))
    .get();

List<Points.ScoredPoint> points =
    client
        .queryAsync(
            Points.QueryPoints.newBuilder()
                .setCollectionName("<your-collection>")
                .setQuery(
                    nearest(
                        Document.newBuilder()
                            .setText("Mission to Mars")
                            .setModel("qdrant/clip-vit-b-32-text")
                            .build()))
                .build())
        .get();

System.out.printf(points.toString());
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;
using Value = Qdrant.Client.Grpc.Value;

await client.UpsertAsync(
  collectionName: "<your-collection>",
  points: new List <PointStruct> {
    new() {
      Id = 1,
        Vectors = new Image() {
          Image_ = "https://qdrant.tech/example.png",
          Model = "qdrant/clip-vit-b-32-vision",
        },
        Payload = {
          ["title"] = "Example Image"
        },
    },
  }
);

var points = await client.QueryAsync(
  collectionName: "<your-collection>",
  query: new Document() {
    Text = "Mission to Mars",
    Model = "qdrant/clip-vit-b-32-text"
  }
);

foreach(var point in points) {
  Console.WriteLine(point);
}
```

**Go**

```go
import (
	"context"

	"github.com/qdrant/go-client/qdrant"
)

client.Upsert(context.Background(), &qdrant.UpsertPoints{
	CollectionName: "<your-collection>",
	Points: []*qdrant.PointStruct{
		{
			Id: qdrant.NewIDNum(1),
			Vectors: qdrant.NewVectorsImage(&qdrant.Image{
				Model: "qdrant/clip-vit-b-32-vision",
				Image: qdrant.NewValueString("https://qdrant.tech/example.png"),
			}),
			Payload: qdrant.NewValueMap(map[string]any{
				"title": "Example image",
			}),
		},
	},
})

client.Query(context.Background(), &qdrant.QueryPoints{
	CollectionName: "<your-collection>",
	Query: qdrant.NewQueryNearest(
		qdrant.NewVectorInputDocument(&qdrant.Document{
			Text:  "Mission to Mars",
			Model: "qdrant/clip-vit-b-32-text",
		}),
	),
})
```

The Qdrant Cloud Inference server will download the images using the provided URL. Alternatively, you can provide the image as a base64-encoded string. Each model has limitations on the file size and extensions it can work with. Refer to the model card for details.

## Automatic Query and Passage Prefixes

Some embedding models are trained to expect different text prefixes for query inputs versus passage or document inputs. Using the wrong prefix or omitting one can degrade retrieval quality.

Qdrant Cloud Inference automatically applies the correct prefix for the model you're using, based on whether the request is a search query or an upsert. For example, when you upsert a document using a model from the E5 family, the proxy prepends `passage: ` to each input text. When you query with the same model, it prepends `query: ` instead. You don't need to add these prefixes yourself.

If your input text already starts with the correct prefix, it's left unchanged, so you don't end up with a double prefix.

This behavior applies to supported Qdrant-hosted models. Models accessed through [external providers](https://qdrant.tech/documentation/inference/external-inference-providers/), such as `openai/`, `cohere/`, or `jinaai/`, are handled by those providers.

## Local Inference Compatibility

The Python SDK offers a unique capability: it supports both [local](https://qdrant.tech/documentation/fastembed/fastembed-semantic-search/) and cloud inference through an identical interface.

You can easily switch between local and cloud inference by setting the `cloud_inference` flag when initializing the QdrantClient. For example:

```python
client = QdrantClient(
    url="https://your-cluster.qdrant.io",
    api_key="<your-api-key>",
    cloud_inference=True,  # Set to False to use local inference
)
```

This flexibility allows you to develop and test your applications locally or in continuous integration (CI) environments without requiring access to cloud inference resources.

- When `cloud_inference` is set to `False`, inference is performed locally using `fastembed`.
- When set to `True`, inference requests are handled by Qdrant Cloud.
