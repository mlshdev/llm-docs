> Pinned source for Qdrant master: [qdrant-landing/content/documentation/migrate-to-qdrant/from-azure-search.md](https://github.com/qdrant/landing_page/blob/3b58061329eedce2091c9dd380b8c47fcaa1cb64/qdrant-landing/content/documentation/migrate-to-qdrant/from-azure-search.md)
> Canonical documentation: https://qdrant.tech/documentation/migrate-to-qdrant/from-azure-search/

# Migrate from Azure AI Search to Qdrant

## What You Need from Azure AI Search

- **Service endpoint** — e.g. `https://your-service.search.windows.net`
- **Index name** — the index containing your vectors
- **Admin API key** — used to authenticate with the Azure AI Search REST API

## Concept Mapping

| Azure AI Search                                           | Qdrant       | Notes                                                                          |
| :-------------------------------------------------------- | :----------- | :----------------------------------------------------------------------------- |
| Index                                                     | Collection   | One-to-one mapping                                                             |
| Document                                                  | Point        | Each document becomes a point                                                  |
| Vector field (`Collection(Edm.Single)` with `dimensions`) | Named vector | Each vector field in the index becomes a named vector on the same point        |
| Retrievable document fields                               | Payload      | Non-vector, retrievable fields (excluding `@search.*` metadata) become payload |
| `cosine`                                                  | `Cosine`     | Direct mapping; also the fallback for any unrecognized metric                  |
| `dotProduct`                                              | `Dot`        | Direct mapping                                                                 |
| `euclidean`                                               | `Euclid`     | Direct mapping                                                                 |

## Run the Migration

```bash
docker run --net=host --rm -it registry.cloud.qdrant.io/library/qdrant-migration azure \
    --azure.endpoint 'https://your-service.search.windows.net' \
    --azure.index 'your-index' \
    --azure.api-key 'your-azure-admin-api-key' \
    --qdrant.url 'https://your-instance.cloud.qdrant.io:6334' \
    --qdrant.api-key 'your-qdrant-api-key' \
    --qdrant.collection 'your-collection'
```

### All Azure AI Search-Specific Flags

| Flag                  | Required | Description                             |
| :-------------------- | :------- | :-------------------------------------- |
| `--azure.endpoint`    | Yes      | Azure AI Search service endpoint        |
| `--azure.index`       | Yes      | Index to migrate                        |
| `--azure.api-key`     | Yes      | Admin API key for authentication        |
| `--azure.api-version` | No       | REST API version (default `2026-04-01`) |

### Qdrant-Side Options

| Flag                | Default  | Description                                                   |
| :------------------ | :------- | :------------------------------------------------------------ |
| `--qdrant.id-field` | `__id__` | Payload field name for original Azure AI Search document keys |

## Next Steps

After migration, verify your data arrived correctly with the [Migration Verification Guide](https://qdrant.tech/documentation/migration-guidance/).
