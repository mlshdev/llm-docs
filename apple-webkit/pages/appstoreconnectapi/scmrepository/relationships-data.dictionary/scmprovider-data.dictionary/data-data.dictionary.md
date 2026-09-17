> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary/scmprovider-data.dictionary/data-data.dictionary

# ScmRepository.Relationships.ScmProvider.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Providers resource.

## Declaration

```
object ScmRepository.Relationships.ScmProvider.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Providers resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmProviders`
