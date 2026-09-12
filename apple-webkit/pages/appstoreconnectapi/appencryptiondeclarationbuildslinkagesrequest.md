> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appencryptiondeclarationbuildslinkagesrequest](https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclarationbuildslinkagesrequest)

# AppEncryptionDeclarationBuildsLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+ (deprecated in 2.4)

A request body you use to add builds to an app encryption declaration.

> This object is deprecated. Use [BuildUpdateRequest.Data.Relationships.AppEncryptionDeclaration](buildupdaterequest/data-data.dictionary/relationships-data.dictionary/appencryptiondeclaration-data.dictionary.md) instead.

## Declaration

```
object AppEncryptionDeclarationBuildsLinkagesRequest
```

## Properties

- `data` — `[AppEncryptionDeclarationBuildsLinkagesRequest.Data]` (required): The object types and IDs of the related resources.

## Topics

### Objects

- [AppEncryptionDeclarationBuildsLinkagesRequest.Data](appencryptiondeclarationbuildslinkagesrequest/data-data.dictionary.md): Deprecated. The data element of the request body.

## See Also

### Objects and Data Types

- [AppEncryptionDeclarationCreateRequest](appencryptiondeclarationcreaterequest.md): The request body you use to create an app encryption declaration.
- [AppEncryptionDeclarationDocument](appencryptiondeclarationdocument.md): An uploaded export compliance document supporting an app encryption declaration.
- [AppEncryptionDeclarationDocumentCreateRequest](appencryptiondeclarationdocumentcreaterequest.md): The request body for uploading an encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentResponse](appencryptiondeclarationdocumentresponse.md): A response containing a single encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentUpdateRequest](appencryptiondeclarationdocumentupdaterequest.md): The request body you use to update an app encryption declaration document update request.
- [AppEncryptionDeclaration](appencryptiondeclaration.md): A declaration of an app’s use of encryption, required for export compliance and App Store submission.
- [AppEncryptionDeclarationResponse](appencryptiondeclarationresponse.md): A response containing a single app encryption declaration.
- [AppEncryptionDeclarationWithoutIncludesResponse](appencryptiondeclarationwithoutincludesresponse.md): A response containing a single encryption declaration, without related resources.
- [AppEncryptionDeclarationsResponse](appencryptiondeclarationsresponse.md): A response containing a list of encryption declarations for an app.
- [AppEncryptionDeclarationState](appencryptiondeclarationstate.md): Strings that represent the review or acceptance status of an app encryption declaration submitted to Apple.
- [AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse](appencryptiondeclarationappencryptiondeclarationdocumentlinkageresponse.md)
- [AppEncryptionDeclarationAppLinkageResponse](appencryptiondeclarationapplinkageresponse.md): Deprecated.
