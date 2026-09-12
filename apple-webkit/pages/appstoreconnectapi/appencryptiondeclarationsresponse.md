> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appencryptiondeclarationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclarationsresponse)

# AppEncryptionDeclarationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A response containing a list of encryption declarations for an app.

## Declaration

```
object AppEncryptionDeclarationsResponse
```

## Properties

- `data` — `[AppEncryptionDeclaration]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[*]`: **Allowed types:** `AppEncryptionDeclarationDocument`, `App`, `Build`

## See Also

### Related Documentation

- [List app encryption declarations](get-v1-appencryptiondeclarations.md): Find and list all available app encryption declarations.

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
- [AppEncryptionDeclarationState](appencryptiondeclarationstate.md): Strings that represent the review or acceptance status of an app encryption declaration submitted to Apple.
- [AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse](appencryptiondeclarationappencryptiondeclarationdocumentlinkageresponse.md)
- [AppEncryptionDeclarationAppLinkageResponse](appencryptiondeclarationapplinkageresponse.md): Deprecated.
