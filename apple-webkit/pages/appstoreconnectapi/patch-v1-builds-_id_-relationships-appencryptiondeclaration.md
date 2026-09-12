> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-builds-_id_-relationships-appencryptiondeclaration](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-builds-_id_-relationships-appencryptiondeclaration)

# Assign the app encryption declaration for a build

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Assign an app encryption declaration to a build.

> Use [Modify a build](patch-v1-builds-_id_.md) to update the relationship to an app encryption declaration instead.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/builds/{id}/relationships/appEncryptionDeclaration
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BuildAppEncryptionDeclarationLinkageRequest`

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

### Modifying Builds

- [Modify a build](patch-v1-builds-_id_.md): Expire a build or change its encryption exemption setting.
