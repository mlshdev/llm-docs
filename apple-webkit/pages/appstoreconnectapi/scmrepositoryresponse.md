> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepositoryresponse](https://developer.apple.com/documentation/appstoreconnectapi/scmrepositoryresponse)

# ScmRepositoryResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single SCM repository connected to Xcode Cloud.

## Declaration

```
object ScmRepositoryResponse
```

## Properties

- `data` — `ScmRepository` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `ScmGitReference`, `ScmProvider`
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [ScmRepository](scmrepository.md): A source code repository connected to Xcode Cloud, used as the source for workflow builds.
- [ScmRepositoriesResponse](scmrepositoriesresponse.md): The response body for endpoints that list SCM repositories connected to Xcode Cloud.
- [ScmRepositoryGitReferencesLinkagesResponse](scmrepositorygitreferenceslinkagesresponse.md)
- [ScmRepositoryPullRequestsLinkagesResponse](scmrepositorypullrequestslinkagesresponse.md)
