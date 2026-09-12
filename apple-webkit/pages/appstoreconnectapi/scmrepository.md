> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmrepository](https://developer.apple.com/documentation/appstoreconnectapi/scmrepository)

# ScmRepository

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A source code repository connected to Xcode Cloud, used as the source for workflow builds.

## Declaration

```
object ScmRepository
```

## Properties

- `attributes` — `ScmRepository.Attributes`: The attributes that describe the Repositories resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Repositories resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `ScmRepository.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmRepositories`

## Topics

### Objects

- [ScmRepository.Attributes](scmrepository/attributes-data.dictionary.md): The attributes that describe a Repositories resource.
- [ScmRepository.Relationships](scmrepository/relationships-data.dictionary.md): The relationships of the Repositories resource you included in the request and those on which you can operate.

## See Also

### Objects

- [ScmRepositoryResponse](scmrepositoryresponse.md): The response body for endpoints that read a single SCM repository connected to Xcode Cloud.
- [ScmRepositoriesResponse](scmrepositoriesresponse.md): The response body for endpoints that list SCM repositories connected to Xcode Cloud.
- [ScmRepositoryGitReferencesLinkagesResponse](scmrepositorygitreferenceslinkagesresponse.md)
- [ScmRepositoryPullRequestsLinkagesResponse](scmrepositorypullrequestslinkagesresponse.md)
