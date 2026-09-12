> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmprovider](https://developer.apple.com/documentation/appstoreconnectapi/scmprovider)

# ScmProvider

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A source code management provider, such as GitHub or Bitbucket, connected to Xcode Cloud for accessing repositories.

## Declaration

```
object ScmProvider
```

## Properties

- `attributes` — `ScmProvider.Attributes`: The attributes that describe the Providers resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Providers resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `ScmProvider.Relationships`:
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmProviders`

## Topics

### Objects and types

- [ScmProvider.Attributes](scmprovider/attributes-data.dictionary.md): The attributes that describe a Providers resource.
- [ScmProviderType](scmprovidertype.md): The source code management provider’s type.

### Dictionaries

- [ScmProvider.Relationships](scmprovider/relationships-data.dictionary.md)

## See Also

### Objects

- [ScmProviderResponse](scmproviderresponse.md): The response body for endpoints that read a single SCM provider connected to Xcode Cloud.
- [ScmProvidersResponse](scmprovidersresponse.md): The response body for endpoints that list SCM providers connected to Xcode Cloud.
- [ScmProviderRepositoriesLinkagesResponse](scmproviderrepositorieslinkagesresponse.md)
