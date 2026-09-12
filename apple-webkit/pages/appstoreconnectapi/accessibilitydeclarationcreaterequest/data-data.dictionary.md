> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/accessibilitydeclarationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/accessibilitydeclarationcreaterequest/data-data.dictionary)

# AccessibilityDeclarationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The data structure of the request body you use to create an accessibility declaration.

## Declaration

```
object AccessibilityDeclarationCreateRequest.Data
```

## Properties

- `attributes` — `AccessibilityDeclarationCreateRequest.Data.Attributes` (required):
- `relationships` — `AccessibilityDeclarationCreateRequest.Data.Relationships` (required):
- `type` — `string` (required): **Allowed values:** `accessibilityDeclarations`

## Topics

### Dictionaries

- [AccessibilityDeclarationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes you set that describe the new accessibility declaration resource.
- [AccessibilityDeclarationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
