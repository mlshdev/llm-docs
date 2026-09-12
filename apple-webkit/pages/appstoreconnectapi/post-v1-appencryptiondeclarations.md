> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appencryptiondeclarations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appencryptiondeclarations)

# Create an app encryption declaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Add an app encryption delcaration for a specific app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarations
```

## HTTP Body

Content type: `application/json`

Type: `AppEncryptionDeclarationCreateRequest`

## Response Codes

- `201` Created — `AppEncryptionDeclarationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md)

## See Also

### Assigning App Encryption Declarations

- [Assign builds to an app encryption declaration](post-v1-appencryptiondeclarations-_id_-relationships-builds.md): Deprecated. Assign one or more builds to an app encryption declaration.
