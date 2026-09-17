> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/scmpullrequestsresponse

# ScmPullRequestsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that list SCM pull requests linked to Xcode Cloud.

## Declaration

```
object ScmPullRequestsResponse
```

## Properties

- `data` — `[ScmPullRequest]` (required): The resource data.
- `included` — `[ScmRepository]`: The requested relationship data.
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [ScmPullRequest](scmpullrequest.md): A pull request in a source code repository connected to Xcode Cloud, which can automatically trigger workflow builds.
- [ScmPullRequestResponse](scmpullrequestresponse.md): The response body for endpoints that read a single SCM pull request linked to Xcode Cloud.
