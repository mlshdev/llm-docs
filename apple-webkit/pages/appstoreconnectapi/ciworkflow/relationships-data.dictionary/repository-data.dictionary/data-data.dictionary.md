> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow/relationships-data.dictionary/repository-data.dictionary/data-data.dictionary

# CiWorkflow.Relationships.Repository.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Repositories resource.

## Declaration

```
object CiWorkflow.Relationships.Repository.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Repositories resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmRepositories`
