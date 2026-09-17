> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/accessibilitydeclarationupdaterequest/data-data.dictionary

# AccessibilityDeclarationUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The data structure of the request body you use to update an accessibility declaration.

## Declaration

```
object AccessibilityDeclarationUpdateRequest.Data
```

## Properties

- `attributes` — `AccessibilityDeclarationUpdateRequest.Data.Attributes`:
- `id` — `string` (required):
- `type` — `string` (required): **Allowed values:** `accessibilityDeclarations`

## Topics

### Dictionaries

- [AccessibilityDeclarationUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): Attributes you set that describe the updated accessibility declaration resource.
