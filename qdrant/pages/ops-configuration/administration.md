> Pinned source for Qdrant master: [qdrant-landing/content/documentation/ops-configuration/administration.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/ops-configuration/administration.md)
> Canonical documentation: https://qdrant.tech/documentation/ops-configuration/administration/

# Administration

Qdrant exposes administration tools which enable to modify at runtime the behavior of a qdrant instance without changing its configuration manually.

## Recovery Mode

*Available as of v1.2.0*

Recovery mode can help in situations where Qdrant fails to start repeatedly.
When starting in recovery mode, Qdrant only loads collection metadata to prevent
going out of memory. This allows you to resolve out of memory situations, for
example, by deleting a collection. After resolving Qdrant can be restarted
normally to continue operation.

In recovery mode, collection operations are limited to
[deleting](https://qdrant.tech/documentation/manage-data/collections/#delete-collection) a
collection. That is because only collection metadata is loaded during recovery.

To enable recovery mode with the Qdrant Docker image you must set the
environment variable `QDRANT_ALLOW_RECOVERY_MODE=true`. The container will try
to start normally first, and restarts in recovery mode if initialisation fails
due to an out of memory error. This behavior is disabled by default.

If using a Qdrant binary, recovery mode can be enabled by setting a recovery
message in an environment variable, such as
`QDRANT__STORAGE__RECOVERY_MODE="My recovery message"`.

## Low Memory Mode

*Available as of v1.18.0*

Low memory mode reduces memory requirements at startup. On memory-constrained hosts, the normal startup process can exhaust available memory before the node becomes reachable resulting in a crash loop. Low memory mode lets you bring the node up with a reduced memory footprint so you can make configuration changes to reduce memory usage. Revert it once the node is stable.

Three modes are available:

| Mode          | Description                                                                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`    | Default. Loads all components as persisted.                                                                                                                                                                                           |
| `no_resident` | Downgrades quantized vectors and payload field indexes to the `cold` [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/), regardless of their configured tier.                                           |
| `no_populate` | Same as `no_resident`, and additionally forces vectors and the HNSW graph to `cold` by skipping mmap prefetch on load. Offers the lowest startup memory footprint, but first queries will be slower until the OS page cache warms up. |

To enable low memory mode, set `storage.low_memory_mode` in the node's configuration file:

```yaml
storage:
  low_memory_mode: no_populate   # or no_resident
```

Or use the environment variable:

```bash
QDRANT__STORAGE__LOW_MEMORY_MODE=no_populate
```

Low memory mode takes effect on the next restart. It doesn't modify the [memory tier](https://qdrant.tech/documentation/ops-configuration/memory-tiers/) settings persisted in your collections — it only overrides where data gets loaded for that startup.

## Strict Mode

*Available as of v1.13.0*

Strict mode is a feature to restrict certain type of operations on a collection in order to protect the Qdrant cluster. The goal is to prevent inefficient usage patterns that could overload the system.

Strict mode ensures a more predictable and responsive service when you do not have control over the queries that are being executed. Upon crossing a limit, the server will return a client side error with the information about the limit that was crossed.

The `strict_mode_config` can be enabled when creating a new collection, see [schema definitions](https://api.qdrant.tech/api-reference/collections/create-collection#request.body.strict_mode_config) for all the available `strict_mode_config` parameters. As part of the config, the `enabled` field act as a toggle to enable or disable the strict mode dynamically.

Simply enabling strict mode without specifying a specific restriction does not have any effect. You need to explicitly set the restrictions you want to enforce.

On Qdrant Cloud, strict mode is enabled by default for new collections. Refer to [Configure Qdrant Cloud Clusters](https://qdrant.tech/documentation/cloud/configure-cluster/) for the specific restrictions.

It is possible to raise the default limits and/or disable strict mode entirely. Though, in order to ensure a stable cluster we strongly recommend to keep strict mode enabled using its default configuration. For disabling strict mode on an existing collection use:

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": false
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" false
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=False),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: false,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(false)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(false).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = false }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(false),
  },
})
```

### Disable Retrieving via Non Indexed Payload

Setting `unindexed_filtering_retrieve` to false prevents retrieving points by filtering on a non indexed payload key which can be very slow.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "unindexed_filtering_retrieve": false
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "unindexed_filtering_retrieve": false
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, unindexed_filtering_retrieve=False),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    unindexed_filtering_retrieve: false,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).unindexed_filtering_retrieve(false)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setUnindexedFilteringRetrieve(false).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, UnindexedFilteringRetrieve = false }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    UnindexedFilteringRetrieve: qdrant.PtrOf(false),
  },
})
```

Or turn it off later on an existing collection through the [update collection parameters](https://qdrant.tech/documentation/manage-data/collections/#update-collection-parameters) API.

**Http**

```http
PATCH /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "unindexed_filtering_retrieve": true
    }
}
```

**Bash**

```bash
curl -X PATCH http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "unindexed_filtering_retrieve": true
    }
  }'
```

**Python**

```python
client.update_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(
        enabled=True,
        unindexed_filtering_retrieve=True,
    ),
)
```

**Typescript**

```typescript
client.updateCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    unindexed_filtering_retrieve: true,
  },
});
```

**Rust**

```rust
use qdrant_client::qdrant::{UpdateCollectionBuilder, StrictModeConfigBuilder};

client
    .update_collection(
        UpdateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(
                StrictModeConfigBuilder::default()
                    .enabled(true)
                    .unindexed_filtering_retrieve(true),
            ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.UpdateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

client
    .updateCollectionAsync(
        UpdateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder()
                    .setEnabled(true)
                    .setUnindexedFilteringRetrieve(true)
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.UpdateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig
  {
    Enabled = true,
    UnindexedFilteringRetrieve = true,
  }
);
```

**Go**

```go
import (
  "context"

  "github.com/qdrant/go-client/qdrant"
)

client.UpdateCollection(context.Background(), &qdrant.UpdateCollection{
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    UnindexedFilteringRetrieve: qdrant.PtrOf(true),
  },
})
```

### Disable Updating via Non Indexed Payload

Setting `unindexed_filtering_update` to false prevents updating points by filtering on a non indexed payload key which can be very slow.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "unindexed_filtering_update": false
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "unindexed_filtering_update": false
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, unindexed_filtering_update=False),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    unindexed_filtering_update: false,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).unindexed_filtering_update(false)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setUnindexedFilteringUpdate(false).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, UnindexedFilteringUpdate = false }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    UnindexedFilteringUpdate: qdrant.PtrOf(false),
  },
})
```

### Maximum Number of Payload Index Count

Setting `max_payload_index_count` caps the maximum number of payload index that can exist on a collection.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "max_payload_index_count": 10
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "max_payload_index_count": 10
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, max_payload_index_count=10),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    max_payload_index_count: 10,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).max_payload_index_count(10)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setMaxPayloadIndexCount(10).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, MaxPayloadIndexCount = 10 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MaxPayloadIndexCount: qdrant.PtrOf(uint64(10)),
  },
})
```

### Maximum Query `limit` Parameter

Retrieving large result set is expensive.

Setting `max_query_limit` caps the maximum number of points that can be retrieved in a single query.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "max_query_limit": 10
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "max_query_limit": 10
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, max_query_limit=10),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    max_query_limit: 10,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).max_query_limit(10)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setMaxQueryLimit(10).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, MaxQueryLimit = 10 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MaxQueryLimit: qdrant.PtrOf(uint32(10)),
  },
})
```

### Maximum `timeout` Parameter

Long running operations are often symptomatic of a deeper issue.

Setting `max_timeout` caps the maximum value in seconds for the `timeout` parameter in all API operations.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "max_timeout": 10
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "max_timeout": 10
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, max_timeout=10),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    max_timeout: 10,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).max_timeout(10)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setMaxTimeout(10).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, MaxTimeout = 10 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MaxTimeout: qdrant.PtrOf(uint32(10)),
  },
})
```

### Disable Exact Search

Exact search bypasses the HNSW index and performs a brute-force scan, which can be very slow on large collections.

Setting `search_allow_exact` to false prevents clients from requesting exact search.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "search_allow_exact": false
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "search_allow_exact": false
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, search_allow_exact=False),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    search_allow_exact: false,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).search_allow_exact(false)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setSearchAllowExact(false).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, SearchAllowExact = false }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    SearchAllowExact: qdrant.PtrOf(false),
  },
})
```

### Maximum HNSW ef Parameter

A high HNSW `ef` value increases recall but also increases search latency.

Setting `search_max_hnsw_ef` caps the maximum `ef` value allowed in search parameters.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "search_max_hnsw_ef": 128
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "search_max_hnsw_ef": 128
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, search_max_hnsw_ef=128),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    search_max_hnsw_ef: 128,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).search_max_hnsw_ef(128u32)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setSearchMaxHnswEf(128).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, SearchMaxHnswEf = 128 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    SearchMaxHnswEf: qdrant.PtrOf(uint32(128)),
  },
})
```

### Maximum Search Oversampling

A high oversampling factor increases the number of candidates evaluated during search, which can significantly increase latency.

Setting `search_max_oversampling` caps the maximum oversampling factor allowed in search parameters.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "search_max_oversampling": 2.0
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "search_max_oversampling": 2.0
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, search_max_oversampling=2.0),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    search_max_oversampling: 2.0,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).search_max_oversampling(2.0f32)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setSearchMaxOversampling(2.0f).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, SearchMaxOversampling = 2.0f }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    SearchMaxOversampling: qdrant.PtrOf(float32(2.0)),
  },
})
```

### Maximum Size of a Filtering Condition

Large filtering conditions are expensive to evaluate.

Setting `condition_max_size` caps the maximum number of element a filtering condition can have.

e.g. the number of elements in `MatchAny`

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "condition_max_size": 10
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "condition_max_size": 10
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, condition_max_size=10),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    condition_max_size: 10,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).condition_max_size(10)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setConditionMaxSize(10).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, ConditionMaxSize = 10 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    ConditionMaxSize: qdrant.PtrOf(uint64(10)),
  },
})
```

### Maximum Number of Conditions in a Filter

A large number of filtering conditions are expensive to evaluate.

Setting `filter_max_conditions` caps the maximum number of conditions filters can have.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "filter_max_conditions": 10
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "filter_max_conditions": 10
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, filter_max_conditions=10),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    filter_max_conditions: 10,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).filter_max_conditions(10)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setFilterMaxConditions(10).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, FilterMaxConditions = 10 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    FilterMaxConditions: qdrant.PtrOf(uint64(10)),
  },
})
```

### Maximum Batch Size When Inserting Vectors

Sending very large batch upserts can create internal congestion.

Setting `upsert_max_batchsize` caps the maximum size in bytes of a batch during vector upserts.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "upsert_max_batchsize": 1000
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "upsert_max_batchsize": 1000
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, upsert_max_batchsize=1000),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    upsert_max_batchsize: 1000,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).upsert_max_batchsize(1000)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setUpsertMaxBatchsize(1000).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, UpsertMaxBatchsize = 1000 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    UpsertMaxBatchsize: qdrant.PtrOf(uint64(1000)),
  },
})
```

### Maximum Batch Size When Searching

Sending very large search batches can create internal congestion.

Setting `search_max_batchsize` caps the maximum number of searches in a single batch request.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "search_max_batchsize": 1000
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "search_max_batchsize": 1000
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, search_max_batchsize=1000),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    search_max_batchsize: 1000,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).search_max_batchsize(1000u64)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setSearchMaxBatchsize(1000).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, SearchMaxBatchsize = 1000 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    SearchMaxBatchsize: qdrant.PtrOf(uint64(1000)),
  },
})
```

### Maximum Collection Storage Size

It is possible to set the maximum size of a collection in terms of vectors and/or payload storage size.

Setting `max_collection_vector_size_bytes` and/or `max_collection_payload_size_bytes` caps the maximum byte size of a collection.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "max_collection_vector_size_bytes": 1000000,
        "max_collection_payload_size_bytes": 1000000
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "max_collection_vector_size_bytes": 100000,
      "max_collection_payload_size_bytes": 100000
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, max_collection_vector_size_bytes=1000000, max_collection_payload_size_bytes=1000000),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    max_collection_vector_size_bytes: 1000000,
    max_collection_payload_size_bytes: 1000000,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).max_collection_vector_size_bytes(1000000).max_collection_payload_size_bytes(1000000)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setMaxCollectionVectorSizeBytes(1000000).setMaxCollectionPayloadSizeBytes(1000000).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, MaxCollectionVectorSizeBytes = 1000000, MaxCollectionPayloadSizeBytes = 1000000 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MaxCollectionVectorSizeBytes: qdrant.PtrOf(uint64(1000000)),
    MaxCollectionPayloadSizeBytes: qdrant.PtrOf(uint64(1000000)),
  },
})
```

### Maximum Resident Memory Usage

> **Note**
>
> Deprecated as of v1.19.0. Use <a href="https://qdrant.tech/documentation/ops-configuration/quotas/">resource quotas</a> to cap memory instead.

When a node is under memory pressure, new write operations can destabilize the cluster.

Setting `max_resident_memory_percent` rejects memory-consuming write operations (such as upsert and set payload) when process resident memory exceeds the given percentage of total system memory. Delete operations are not affected. Accepts values in the range 1–100.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "max_resident_memory_percent": 90
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "max_resident_memory_percent": 90
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, max_resident_memory_percent=90),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    max_resident_memory_percent: 90,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).max_resident_memory_percent(90u32)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setMaxResidentMemoryPercent(90).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, MaxResidentMemoryPercent = 90 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MaxResidentMemoryPercent: qdrant.PtrOf(uint32(90)),
  },
})
```

### Maximum Points Count

Setting `max_points_count` caps the maximum number of points for a collection.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "max_points_count": 1000
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "max_points_count": 1000
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, max_points_count=1000),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    max_points_count: 1000,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).max_points_count(1000)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setMaxPointsCount(1000).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, MaxPointsCount = 1000 }
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MaxPointsCount: qdrant.PtrOf(uint64(1000)),
  },
})
```

### Rate Limiting

An extremely high rate of incoming requests can have a negative impact on the latency.

Setting `read_rate_limit` and/or `write_rate_limit` to cap the maximum number of operations per minute per replica.

When exceeding the maximum number of operations, the client will receive an HTTP 429 error code with a suggested delay before retrying.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "read_rate_limit": 1000,
        "write_rate_limit": 100,
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled":" true,
      "read_rate_limit": 1000,
      "write_rate_limit": 100,
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(enabled=True, read_rate_limit=1000, write_rate_limit=1000,),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    read_rate_limit: 1000,
    write_rate_limit: 100,
  },
});
```

**Rust**

```rust
use qdrant_client::Qdrant;
use qdrant_client::qdrant::{CreateCollectionBuilder, StrictModeConfigBuilder};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}")
            .strict_mode_config(StrictModeConfigBuilder::default().enabled(true).read_rate_limit(1000).write_rate_limit(100)),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder().setEnabled(true).setReadRateLimit(1000).setWriteRateLimit(100).build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig { Enabled = true, ReadRateLimit = 1000, WriteRateLimit = 100}
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
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    ReadRateLimit: qdrant.PtrOf(uint32(1000)),
    WriteRateLimit: qdrant.PtrOf(uint32(100)),
  },
})
```

### Maximum Vectors per Multivector

A multivector with many vectors per point is expensive to store, index and query.

Setting `multivector_config` caps the maximum number of vectors per multivector for each named vector.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "multivector_config": {
            "{vector_name}": {
                "max_vectors": 10
            }
        }
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "multivector_config": {
        "{vector_name}": {
          "max_vectors": 10
        }
      }
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(
        enabled=True,
        multivector_config={"{vector_name}": models.StrictModeMultivector(max_vectors=10)},
    ),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    multivector_config: {
      "{vector_name}": {
        max_vectors: 10,
      },
    },
  },
});
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, StrictModeConfigBuilder, StrictModeMultivector,
    StrictModeMultivectorConfig,
};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}").strict_mode_config(
            StrictModeConfigBuilder::default()
                .enabled(true)
                .multivector_config(StrictModeMultivectorConfig {
                    multivector_config: HashMap::from([(
                        "{vector_name}".to_string(),
                        StrictModeMultivector {
                            max_vectors: Some(10),
                        },
                    )]),
                }),
        ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;
import io.qdrant.client.grpc.Collections.StrictModeMultivector;
import io.qdrant.client.grpc.Collections.StrictModeMultivectorConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder()
                    .setEnabled(true)
                    .setMultivectorConfig(
                        StrictModeMultivectorConfig.newBuilder()
                            .putMultivectorConfig("{vector_name}", StrictModeMultivector.newBuilder().setMaxVectors(10).build())
                            .build())
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig
  {
    Enabled = true,
    MultivectorConfig = new StrictModeMultivectorConfig
    {
      MultivectorConfig = { ["{vector_name}"] = new StrictModeMultivector { MaxVectors = 10 } }
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

client, err := qdrant.NewClient(&qdrant.Config{
  Host: "localhost",
  Port: 6334,
})

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    MultivectorConfig: &qdrant.StrictModeMultivectorConfig{
      MultivectorConfig: map[string]*qdrant.StrictModeMultivector{
        "{vector_name}": {MaxVectors: qdrant.PtrOf(uint64(10))},
      },
    },
  },
})
```

### Maximum Sparse Vector Length

Long sparse vectors increase memory usage and slow down filtering.

Setting `sparse_config` caps the maximum length of sparse vectors for each named vector.

**Http**

```http
PUT /collections/{collection_name}
{
    "strict_mode_config": {
        "enabled": true,
        "sparse_config": {
            "{vector_name}": {
                "max_length": 1000
            }
        }
    }
}
```

**Bash**

```bash
curl -X PUT http://localhost:6333/collections/{collection_name} \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "strict_mode_config": {
      "enabled": true,
      "sparse_config": {
        "{vector_name}": {
          "max_length": 1000
        }
      }
    }
  }'
```

**Python**

```python
from qdrant_client import QdrantClient, models

client = QdrantClient(url="http://localhost:6333")

client.create_collection(
    collection_name="{collection_name}",
    strict_mode_config=models.StrictModeConfig(
        enabled=True,
        sparse_config={"{vector_name}": models.StrictModeSparse(max_length=1000)},
    ),
)
```

**Typescript**

```typescript
import { QdrantClient } from "@qdrant/js-client-rest";

const client = new QdrantClient({ host: "localhost", port: 6333 });

client.createCollection("{collection_name}", {
  strict_mode_config: {
    enabled: true,
    sparse_config: {
      "{vector_name}": {
        max_length: 1000,
      },
    },
  },
});
```

**Rust**

```rust
use std::collections::HashMap;

use qdrant_client::Qdrant;
use qdrant_client::qdrant::{
    CreateCollectionBuilder, StrictModeConfigBuilder, StrictModeSparse, StrictModeSparseConfig,
};

let client = Qdrant::from_url("http://localhost:6334").build()?;

client
    .create_collection(
        CreateCollectionBuilder::new("{collection_name}").strict_mode_config(
            StrictModeConfigBuilder::default()
                .enabled(true)
                .sparse_config(StrictModeSparseConfig {
                    sparse_config: HashMap::from([(
                        "{vector_name}".to_string(),
                        StrictModeSparse {
                            max_length: Some(1000),
                        },
                    )]),
                }),
        ),
    )
    .await?;
```

**Java**

```java
import io.qdrant.client.QdrantClient;
import io.qdrant.client.QdrantGrpcClient;
import io.qdrant.client.grpc.Collections.CreateCollection;
import io.qdrant.client.grpc.Collections.StrictModeConfig;
import io.qdrant.client.grpc.Collections.StrictModeSparse;
import io.qdrant.client.grpc.Collections.StrictModeSparseConfig;

QdrantClient client =
    new QdrantClient(QdrantGrpcClient.newBuilder("localhost", 6334, false).build());

client
    .createCollectionAsync(
        CreateCollection.newBuilder()
            .setCollectionName("{collection_name}")
            .setStrictModeConfig(
                StrictModeConfig.newBuilder()
                    .setEnabled(true)
                    .setSparseConfig(
                        StrictModeSparseConfig.newBuilder()
                            .putSparseConfig("{vector_name}", StrictModeSparse.newBuilder().setMaxLength(1000).build())
                            .build())
                    .build())
            .build())
    .get();
```

**Csharp**

```csharp
using Qdrant.Client;
using Qdrant.Client.Grpc;

var client = new QdrantClient("localhost", 6334);

await client.CreateCollectionAsync(
  collectionName: "{collection_name}",
  strictModeConfig: new StrictModeConfig
  {
    Enabled = true,
    SparseConfig = new StrictModeSparseConfig
    {
      SparseConfig = { ["{vector_name}"] = new StrictModeSparse { MaxLength = 1000 } }
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

client, err := qdrant.NewClient(&qdrant.Config{
  Host: "localhost",
  Port: 6334,
})

client.CreateCollection(context.Background(), &qdrant.CreateCollection{
  CollectionName: "{collection_name}",
  StrictModeConfig: &qdrant.StrictModeConfig{
    Enabled: qdrant.PtrOf(true),
    SparseConfig: &qdrant.StrictModeSparseConfig{
      SparseConfig: map[string]*qdrant.StrictModeSparse{
        "{vector_name}": {MaxLength: qdrant.PtrOf(uint64(1000))},
      },
    },
  },
})
```
