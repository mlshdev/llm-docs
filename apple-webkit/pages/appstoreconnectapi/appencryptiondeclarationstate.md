> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appencryptiondeclarationstate](https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclarationstate)

# AppEncryptionDeclarationState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.0+

Strings that represent the review or acceptance status of an app encryption declaration submitted to Apple.

## Declaration

```
string AppEncryptionDeclarationState
```

## Possible Values

- `APPROVED`:
- `INVALID`:
- `EXPIRED`:
- `IN_REVIEW`:
- `REJECTED`:
- `CREATED`:

## See Also

### Objects and Data Types

- [AppEncryptionDeclarationCreateRequest](appencryptiondeclarationcreaterequest.md): The request body you use to create an app encryption declaration.
- [AppEncryptionDeclarationDocument](appencryptiondeclarationdocument.md): An uploaded export compliance document supporting an app encryption declaration.
- [AppEncryptionDeclarationDocumentCreateRequest](appencryptiondeclarationdocumentcreaterequest.md): The request body for uploading an encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentResponse](appencryptiondeclarationdocumentresponse.md): A response containing a single encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentUpdateRequest](appencryptiondeclarationdocumentupdaterequest.md): The request body you use to update an app encryption declaration document update request.
- [AppEncryptionDeclaration](appencryptiondeclaration.md): A declaration of an app’s use of encryption, required for export compliance and App Store submission.
- [AppEncryptionDeclarationBuildsLinkagesRequest](appencryptiondeclarationbuildslinkagesrequest.md): Deprecated. A request body you use to add builds to an app encryption declaration.
- [AppEncryptionDeclarationResponse](appencryptiondeclarationresponse.md): A response containing a single app encryption declaration.
- [AppEncryptionDeclarationWithoutIncludesResponse](appencryptiondeclarationwithoutincludesresponse.md): A response containing a single encryption declaration, without related resources.
- [AppEncryptionDeclarationsResponse](appencryptiondeclarationsresponse.md): A response containing a list of encryption declarations for an app.
- [AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse](appencryptiondeclarationappencryptiondeclarationdocumentlinkageresponse.md)
- [AppEncryptionDeclarationAppLinkageResponse](appencryptiondeclarationapplinkageresponse.md): Deprecated.
