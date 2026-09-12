> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmproviderresponse](https://developer.apple.com/documentation/appstoreconnectapi/scmproviderresponse)

# ScmProviderResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The response body for endpoints that read a single SCM provider connected to Xcode Cloud.

## Declaration

```
object ScmProviderResponse
```

## Properties

- `data` — `ScmProvider` (required): The resource data.
- `links` — `DocumentLinks` (required): The navigational links that include the self-link.

## See Also

### Objects

- [ScmProvider](scmprovider.md): A source code management provider, such as GitHub or Bitbucket, connected to Xcode Cloud for accessing repositories.
- [ScmProvidersResponse](scmprovidersresponse.md): The response body for endpoints that list SCM providers connected to Xcode Cloud.
- [ScmProviderRepositoriesLinkagesResponse](scmproviderrepositorieslinkagesresponse.md)
