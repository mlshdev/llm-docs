> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/scmpullrequestresponse

# ScmPullRequestResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single SCM pull request linked to Xcode Cloud.

## Declaration

```
object ScmPullRequestResponse
```

## Properties

- `data` — `ScmPullRequest` (required): The resource data.
- `included` — `[ScmRepository]`: The requested relationship data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [ScmPullRequest](scmpullrequest.md): A pull request in a source code repository connected to Xcode Cloud, which can automatically trigger workflow builds.
- [ScmPullRequestsResponse](scmpullrequestsresponse.md): The response body for endpoints that list SCM pull requests linked to Xcode Cloud.
