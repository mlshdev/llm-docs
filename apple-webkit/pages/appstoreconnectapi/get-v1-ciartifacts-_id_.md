> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciartifacts-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciartifacts-_id_)

# Read xcode cloud artifact information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about the artifact Xcode Cloud created for a specific action when it performed a build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciArtifacts/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Artifacts resource.

## Query Parameters

- `fields[ciArtifacts]` — `[string]`: Additional fields to include for the Artifacts resource returned by the response.
  **Allowed values:** `fileType`, `fileName`, `fileSize`, `downloadUrl`

## Response Codes

- `200` OK — `CiArtifactResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below retrieves detailed information about a specific artifact Xcode Cloud created when it performed a build. Use the information provided to download the artifact and store it on your own servers. Note that the returned download URL is only valid for a limited amount of time.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/ciArtifacts/73be0e4e-6da2-471a-b652-47bd99885dbc
```

**Response**

```json
{    
"data": {
        "type": "ciArtifacts",
        "id": "73be0e4e-6da2-471a-b652-47bd99885dbc",
        "attributes": {
            "fileType": "LOG_BUNDLE",
            "fileName": "exampleName",
            "fileSize": 19,
            "downloadUrl": "https://example.com/url-to-artifact"
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/ciArtifacts/73be0e4e-6da2-471a-b652-47bd99885dbc"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciArtifacts/73be0e4e-6da2-471a-b652-47bd99885dbc"
    }
}

```
