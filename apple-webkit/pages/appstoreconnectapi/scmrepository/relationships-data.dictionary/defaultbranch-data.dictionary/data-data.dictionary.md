> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary/defaultbranch-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/scmrepository/relationships-data.dictionary/defaultbranch-data.dictionary/data-data.dictionary)

# ScmRepository.Relationships.DefaultBranch.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Git References resource that represents the repository’s default branch.

## Declaration

```
object ScmRepository.Relationships.DefaultBranch.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Git References resource that represents the default branch.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmGitReferences`
