> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/destinationbranch-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/destinationbranch-data.dictionary/data-data.dictionary)

# CiBuildRun.Relationships.DestinationBranch.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Git References resource that represents the build run’s destination branch.

## Declaration

```
object CiBuildRun.Relationships.DestinationBranch.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Git References resource that represents the destination branch.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmGitReferences`
