> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmprovidersresponse](https://developer.apple.com/documentation/appstoreconnectapi/scmprovidersresponse)

# ScmProvidersResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that list SCM providers connected to Xcode Cloud.

## Declaration

```
object ScmProvidersResponse
```

## Properties

- `data` — `[ScmProvider]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): The navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## See Also

### Objects

- [ScmProvider](scmprovider.md): A source code management provider, such as GitHub or Bitbucket, connected to Xcode Cloud for accessing repositories.
- [ScmProviderResponse](scmproviderresponse.md): The response body for endpoints that read a single SCM provider connected to Xcode Cloud.
- [ScmProviderRepositoriesLinkagesResponse](scmproviderrepositorieslinkagesresponse.md)
