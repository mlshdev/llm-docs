> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appencryptiondeclaration](https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclaration)

# AppEncryptionDeclaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A declaration of an app’s use of encryption, required for export compliance and App Store submission.

## Declaration

```
object AppEncryptionDeclaration
```

## Properties

- `attributes` — `AppEncryptionDeclaration.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `AppEncryptionDeclaration.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appEncryptionDeclarations`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [AppEncryptionDeclaration.Attributes](appencryptiondeclaration/attributes-data.dictionary.md): Attributes that describe an App Encryption Declarations resource.
- [AppEncryptionDeclaration.Relationships](appencryptiondeclaration/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and Data Types

- [AppEncryptionDeclarationCreateRequest](appencryptiondeclarationcreaterequest.md): The request body you use to create an app encryption declaration.
- [AppEncryptionDeclarationDocument](appencryptiondeclarationdocument.md): An uploaded export compliance document supporting an app encryption declaration.
- [AppEncryptionDeclarationDocumentCreateRequest](appencryptiondeclarationdocumentcreaterequest.md): The request body for uploading an encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentResponse](appencryptiondeclarationdocumentresponse.md): A response containing a single encryption compliance document for an app.
- [AppEncryptionDeclarationDocumentUpdateRequest](appencryptiondeclarationdocumentupdaterequest.md): The request body you use to update an app encryption declaration document update request.
- [AppEncryptionDeclarationBuildsLinkagesRequest](appencryptiondeclarationbuildslinkagesrequest.md): Deprecated. A request body you use to add builds to an app encryption declaration.
- [AppEncryptionDeclarationResponse](appencryptiondeclarationresponse.md): A response containing a single app encryption declaration.
- [AppEncryptionDeclarationWithoutIncludesResponse](appencryptiondeclarationwithoutincludesresponse.md): A response containing a single encryption declaration, without related resources.
- [AppEncryptionDeclarationsResponse](appencryptiondeclarationsresponse.md): A response containing a list of encryption declarations for an app.
- [AppEncryptionDeclarationState](appencryptiondeclarationstate.md): Strings that represent the review or acceptance status of an app encryption declaration submitted to Apple.
- [AppEncryptionDeclarationAppEncryptionDeclarationDocumentLinkageResponse](appencryptiondeclarationappencryptiondeclarationdocumentlinkageresponse.md)
- [AppEncryptionDeclarationAppLinkageResponse](appencryptiondeclarationapplinkageresponse.md): Deprecated.
