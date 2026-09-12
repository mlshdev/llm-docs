> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmgitreferencesresponse](https://developer.apple.com/documentation/appstoreconnectapi/scmgitreferencesresponse)

# ScmGitReferencesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that list Git references in an Xcode Cloud repository.

## Declaration

```
object ScmGitReferencesResponse
```

## Properties

- `data` — `[ScmGitReference]` (required): The resource data.
- `included` — `[ScmRepository]`: The requested relationship data.
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [ScmGitReference](scmgitreference.md): A Git branch, tag, or commit reference in a source code repository connected to Xcode Cloud.
- [ScmGitReferenceResponse](scmgitreferenceresponse.md): The response body for endpoints that read a single SCM Git reference in Xcode Cloud.
