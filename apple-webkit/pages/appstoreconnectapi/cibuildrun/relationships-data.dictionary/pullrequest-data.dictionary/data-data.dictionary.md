> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/pullrequest-data.dictionary/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cibuildrun/relationships-data.dictionary/pullrequest-data.dictionary/data-data.dictionary)

# CiBuildRun.Relationships.PullRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The type and ID of a related Pull Requests resource.

## Declaration

```
object CiBuildRun.Relationships.PullRequest.Data
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the related Pull Requests resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmPullRequests`
