> Pinned source for Qdrant master: [qdrant-landing/content/documentation/platforms/privategpt.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/platforms/privategpt.md)
> Canonical documentation: https://qdrant.tech/documentation/platforms/privategpt/

# PrivateGPT

[PrivateGPT](https://docs.privategpt.dev/) is a production-ready AI project that allows you to inquire about your documents using Large Language Models (LLMs) with offline support.

PrivateGPT uses Qdrant as the default vectorstore for ingesting and retrieving documents.

## Configuration

Qdrant settings can be configured by setting values to the qdrant property in the `settings.yaml` file. By default, Qdrant tries to connect to an instance at <http://localhost:3000>.

Example:

```yaml
qdrant:
    url: "https://xyz-example.eu-central.aws.cloud.qdrant.io:6333"
    api_key: "<your-api-key>"
```

The available [configuration options](https://docs.privategpt.dev/manual/storage/vector-stores#qdrant-configuration) are:

| Field                                                                                                   | Description                                                                        |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| location                                                                                                | If `:memory:` - use in-memory Qdrant instance.                                     |
| If `str` - use it as a `url` parameter.                                                                 |                                                                                    |
| url                                                                                                     | Either host or str of `Optional[scheme], host, Optional[port], Optional[prefix]`.  |
| Eg. `http://localhost:6333`                                                                             |                                                                                    |
| port                                                                                                    | Port of the REST API interface. Default: `6333`                                    |
| grpc\_port                                                                                              | Port of the gRPC interface. Default: `6334`                                        |
| prefer\_grpc                                                                                            | If `true` - use gRPC interface whenever possible in custom methods.                |
| https                                                                                                   | If `true` - use HTTPS(SSL) protocol.                                               |
| api\_key                                                                                                | API key for authentication in Qdrant Cloud.                                        |
| prefix                                                                                                  | If set, add `prefix` to the REST URL path.                                         |
| Example: `service/v1` will result in `http://localhost:6333/service/v1/{qdrant-endpoint}` for REST API. |                                                                                    |
| timeout                                                                                                 | Timeout for REST and gRPC API requests.                                            |
| Default: 5.0 seconds for REST and unlimited for gRPC                                                    |                                                                                    |
| host                                                                                                    | Host name of Qdrant service. If url and host are not set, defaults to 'localhost'. |
| path                                                                                                    | Persistence path for QdrantLocal. Eg. `local_data/private_gpt/qdrant`              |
| force\_disable\_check\_same\_thread                                                                     | Force disable check\_same\_thread for QdrantLocal sqlite connection.               |

## Next steps

Find the PrivateGPT docs [here](https://docs.privategpt.dev/).
