> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-scmproviders-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-scmproviders-_id_)

# Get a source code management provider

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a specific source code management provider you connected to Xcode Cloud.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/scmProviders/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Providers resource.

## Query Parameters

- `fields[scmProviders]` — `[string]`: Additional fields to include for the Providers resource returned by the response.
  **Allowed values:** `scmProviderType`, `url`, `repositories`

## Response Codes

- `200` OK — `ScmProviderResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below retrieves information about a specific source code management provider you connected to Xcode Cloud. Use the data provided in the response to read additional information; for example, repository information.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/scmProviders/d1b5479e-ce72-402c-8b9a-ea26ef6773f4
```

**Response**

```json
{
    "data": {
        "type": "scmProviders",
        "id": "d1b5479e-ce72-402c-8b9a-ea26ef6773f4",
        "attributes": {
            "scmProviderType": {
                "kind": "GITHUB_CLOUD",
                "displayName": "GitHub",
                "isOnPremise": false
            },
            "url": "github.com"
        },
        "relationships": {
            "repositories": {
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/scmProviders/d1b5479e-ce72-402c-8b9a-ea26ef6773f4/relationships/repositories",
                    "related": "https://api.appstoreconnect.apple.com/v1/scmProviders/d1b5479e-ce72-402c-8b9a-ea26ef6773f4/repositories"
                }
            }
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/scmProviders/d1b5479e-ce72-402c-8b9a-ea26ef6773f4"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/scmProviders/d1b5479e-ce72-402c-8b9a-ea26ef6773f4"
    }
}
```

## See Also

### Getting Provider Information

- [List all source code management providers](get-v1-scmproviders.md): List all source code management providers you connected to Xcode Cloud.
- [List all repositories for a source code management provider](get-v1-scmproviders-_id_-repositories.md): List all Git repositories for a specific source code management provider you connected to Xcode Cloud.
- [List repository IDs for an SCM provider](get-v1-scmproviders-_id_-relationships-repositories.md)
