> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/ciproduct/relationships-data.dictionary/app-data.dictionary/data-data.dictionary

# CiProduct.Relationships.App.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Apps resource.

## Declaration

```
object CiProduct.Relationships.App.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Apps resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `apps`
