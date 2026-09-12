> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmpullrequest](https://developer.apple.com/documentation/appstoreconnectapi/scmpullrequest)

# ScmPullRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A pull request in a source code repository connected to Xcode Cloud, which can automatically trigger workflow builds.

## Declaration

```
object ScmPullRequest
```

## Properties

- `attributes` — `ScmPullRequest.Attributes`: The attributes that describe the Pull Requests resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Pull Request resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `ScmPullRequest.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmPullRequests`

## Topics

### Objects

- [ScmPullRequest.Attributes](scmpullrequest/attributes-data.dictionary.md): The attributes that describe a Pull Requests resource.
- [ScmPullRequest.Relationships](scmpullrequest/relationships-data.dictionary.md): The relationships of the Pull Requests resource you included in the request and those on which you can operate.

## See Also

### Objects

- [ScmPullRequestResponse](scmpullrequestresponse.md): The response body for endpoints that read a single SCM pull request linked to Xcode Cloud.
- [ScmPullRequestsResponse](scmpullrequestsresponse.md): The response body for endpoints that list SCM pull requests linked to Xcode Cloud.
