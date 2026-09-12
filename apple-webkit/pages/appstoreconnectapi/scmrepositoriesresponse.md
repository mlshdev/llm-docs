> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepositoriesresponse](https://developer.apple.com/documentation/appstoreconnectapi/scmrepositoriesresponse)

# ScmRepositoriesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that list SCM repositories connected to Xcode Cloud.

## Declaration

```
object ScmRepositoriesResponse
```

## Properties

- `data` — `[ScmRepository]` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `ScmGitReference`, `ScmProvider`
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [ScmRepository](scmrepository.md): A source code repository connected to Xcode Cloud, used as the source for workflow builds.
- [ScmRepositoryResponse](scmrepositoryresponse.md): The response body for endpoints that read a single SCM repository connected to Xcode Cloud.
- [ScmRepositoryGitReferencesLinkagesResponse](scmrepositorygitreferenceslinkagesresponse.md)
- [ScmRepositoryPullRequestsLinkagesResponse](scmrepositorypullrequestslinkagesresponse.md)
