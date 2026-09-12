> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appencryptiondeclarationresponse](https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclarationresponse)

# AppEncryptionDeclarationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A response containing a single app encryption declaration.

## Declaration

```
object AppEncryptionDeclarationResponse
```

## Properties

- `data` — `AppEncryptionDeclaration` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[*]`: **Allowed types:** `AppEncryptionDeclarationDocument`, `App`, `Build`

## See Also

### Related Documentation

- [Read app encryption declaration information](get-v1-appencryptiondeclarations-_id_.md): Get information about a specific app encryption declaration.

### Objects and Data Types

- [AppEncryptionDeclarationCreateRequest](appencryptiondeclarationcreaterequest.md): The request body you use to create an app encryption declaration.
- [AppEncryptionDeclarationDocument](appencryptiondeclarationdocument.md): An uploaded export compliance document supporting an app encryption declaration.
- [AppEncryptionDeclarationDocumentCreateRequest](appencryptiondeclarationdocumentcreaterequest.md): The request body for uploading an encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentResponse](appencryptiondeclarationdocumentresponse.md): A response containing a single encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentUpdateRequest](appencryptiondeclarationdocumentupdaterequest.md): The request body you use to update an app encryption declaration document update request.
- [AppEncryptionDeclaration](appencryptiondeclaration.md): A declaration of an app’s use of encryption, required for export compliance and App Store submission.
- [AppEncryptionDeclarationBuildsLinkagesRequest](appencryptiondeclarationbuildslinkagesrequest.md): Deprecated. A request body you use to add builds to an app encryption declaration.
- [AppEncryptionDeclarationWithoutIncludesResponse](appencryptiondeclarationwithoutincludesresponse.md): A response containing a single encryption declaration, without related resources.
- [AppEncryptionDeclarationsResponse](appencryptiondeclarationsresponse.md): A response containing a list of encryption declarations for an app.
- [AppEncryptionDeclarationState](appencryptiondeclarationstate.md): Strings that represent the review or acceptance status of an app encryption declaration submitted to Apple.
- [AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse](appencryptiondeclarationappencryptiondeclarationdocumentlinkageresponse.md)
- [AppEncryptionDeclarationAppLinkageResponse](appencryptiondeclarationapplinkageresponse.md): Deprecated.
