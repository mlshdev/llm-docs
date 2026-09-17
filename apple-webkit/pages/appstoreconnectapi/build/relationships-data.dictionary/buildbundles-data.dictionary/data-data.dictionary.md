> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/build/relationships-data.dictionary/buildbundles-data.dictionary/data-data.dictionary

# Build.Relationships.BuildBundles.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The type and ID of a related Build Bundles resource.

## Declaration

```
object Build.Relationships.BuildBundles.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Build Bundles resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `buildBundles`
