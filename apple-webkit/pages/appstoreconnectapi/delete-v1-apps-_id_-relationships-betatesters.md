> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-apps-_id_-relationships-betatesters](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-apps-_id_-relationships-betatesters)

# Remove specified beta testers from all groups and builds of an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Remove one or more beta testers’ access to test any builds of a specific app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/betaTesters
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppBetaTestersLinkagesRequest`

## Response Codes

- `202` Accepted:
- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/apps/1000001234/relationships/betaTesters -d
"{
  "data": [
    {
      "type": "betaTesters",
      "id": "b6318884-4aa6-4586-bf0b-be97cf991817"
    }
  ]
}
"
```

**Response**

```json
204 No Content
```

## See Also

### Getting beta tester information for TestFlight

- [List all beta groups for an app](get-v1-apps-_id_-betagroups.md): Get a list of beta groups associated with a specific app.
- [List beta group IDs for an app](get-v1-apps-_id_-relationships-betagroups.md)
