> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/cibuildruncreaterequest/data-data.dictionary/relationships-data.dictionary/buildrun-data.dictionary/data-data.dictionary

# CiBuildRunCreateRequest.Data.Relationships.BuildRun.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of the Build Runs resource that you’re relating with the Build Runs resource you’re creating.

## Declaration

```
object CiBuildRunCreateRequest.Data.Relationships.BuildRun.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Build Runs resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciBuildRuns`
