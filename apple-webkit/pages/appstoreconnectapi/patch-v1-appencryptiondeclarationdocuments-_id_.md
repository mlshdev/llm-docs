> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appencryptiondeclarationdocuments-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appencryptiondeclarationdocuments-_id_)

# Modify an app encryption declaration document

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.2+

Commit an App Encryption Declaration Document after uploading it.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarationDocuments/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app encryption declaration document resource ID from the [Read the declaration document for an app encryption declaration](get-v1-appencryptiondeclarations-_id_-appencryptiondeclarationdocument.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppEncryptionDeclarationDocumentUpdateRequest`

## Response Codes

- `200` OK — `AppEncryptionDeclarationDocumentResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Uploading App Encryption Declaration Documents

- [Upload an app encryption declaration document](post-v1-appencryptiondeclarationdocuments.md): Add an App Encryption Declaration Document to an existing App Encryption Declaration.
