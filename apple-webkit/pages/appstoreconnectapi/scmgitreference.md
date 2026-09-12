> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmgitreference](https://developer.apple.com/documentation/appstoreconnectapi/scmgitreference)

# ScmGitReference

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

A Git branch, tag, or commit reference in a source code repository connected to Xcode Cloud.

## Declaration

```
object ScmGitReference
```

## Properties

- `attributes` — `ScmGitReference.Attributes`: The attributes that describe the Git References resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Git References resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `ScmGitReference.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `scmGitReferences`

## Topics

### Objects and types

- [ScmGitReference.Attributes](scmgitreference/attributes-data.dictionary.md): The attributes that describe a Git Reference resource.
- [ScmGitReference.Relationships](scmgitreference/relationships-data.dictionary.md): The relationships of the Git References resource you included in the request and those on which you can operate.
- [CiGitRefKind](cigitrefkind.md): A string that represents the kind of a Git References resource.

## See Also

### Objects

- [ScmGitReferenceResponse](scmgitreferenceresponse.md): The response body for endpoints that read a single SCM Git reference in Xcode Cloud.
- [ScmGitReferencesResponse](scmgitreferencesresponse.md): The response body for endpoints that list Git references in an Xcode Cloud repository.
