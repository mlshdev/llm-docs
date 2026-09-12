> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-apptags-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-apptags-_id_)

# Modify App Tags

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.1+

Opt out of app tags for a specific app.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appTags/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app tag resource ID from the [List App Tags](get-v1-apps-_id_-apptags.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppTagUpdateRequest`

## Response Codes

- `200` OK — `AppTagResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
