> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/cibuildaction/relationships-data.dictionary/buildrun-data.dictionary/data-data.dictionary

# CiBuildAction.Relationships.BuildRun.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Build Runs resource.

## Declaration

```
object CiBuildAction.Relationships.BuildRun.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Build Runs resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciBuildRuns`
