> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclarationdocumentcreaterequest/data-data.dictionary

# AppEncryptionDeclarationDocumentCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.2+

The request body you use to create an app encryption declaration document.

## Declaration

```
object AppEncryptionDeclarationDocumentCreateRequest.Data
```

## Properties

- `attributes` — `AppEncryptionDeclarationDocumentCreateRequest.Data.Attributes` (required):
- `relationships` — `AppEncryptionDeclarationDocumentCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `appEncryptionDeclarationDocuments`

## Topics

### Objects

- [AppEncryptionDeclarationDocumentCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
- [AppEncryptionDeclarationDocumentCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes that describe an app encryption declaration document create request resource.
