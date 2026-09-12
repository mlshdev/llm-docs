> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appencryptiondeclarationdocuments](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appencryptiondeclarationdocuments)

# Upload an app encryption declaration document

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.2+

Add an App Encryption Declaration Document to an existing App Encryption Declaration.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appEncryptionDeclarationDocuments
```

## HTTP Body

Content type: `application/json`

Type: `AppEncryptionDeclarationDocumentCreateRequest`

## Response Codes

- `201` Created — `AppEncryptionDeclarationDocumentResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Uploading App Encryption Declaration Documents

- [Modify an app encryption declaration document](patch-v1-appencryptiondeclarationdocuments-_id_.md): Commit an App Encryption Declaration Document after uploading it.
