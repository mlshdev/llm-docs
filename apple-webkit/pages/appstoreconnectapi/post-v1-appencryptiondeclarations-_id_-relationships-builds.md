> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appencryptiondeclarations-_id_-relationships-builds](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appencryptiondeclarations-_id_-relationships-builds)

# Assign builds to an app encryption declaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+ (deprecated in 2.4)

Assign one or more builds to an app encryption declaration.

> Use [Modify a build](patch-v1-builds-_id_.md) to update the relationship to an app encryption declaration instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations/{id}/relationships/builds
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app encryption declaration resource ID from the [List app encryption declarations](get-v1-appencryptiondeclarations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppEncryptionDeclarationBuildsLinkagesRequest`

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Assigning App Encryption Declarations

- [Create an app encryption declaration](post-v1-appencryptiondeclarations.md): Add an app encryption delcaration for a specific app.
