> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/sourcebranchortag-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/sourcebranchortag-data.dictionary/data-data.dictionary)

# CiBuildRun.Relationships.SourceBranchOrTag.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Git References resource that represents the source branch or tag.

## Declaration

```
object CiBuildRun.Relationships.SourceBranchOrTag.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Git References resource that represents the source branch or tag.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmGitReferences`
