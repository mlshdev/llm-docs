> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/scmpullrequest/relationships-data.dictionary/repository-data.dictionary/data-data.dictionary

# ScmPullRequest.Relationships.Repository.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Repositories resource.

## Declaration

```
object ScmPullRequest.Relationships.Repository.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Repositories resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmRepositories`
