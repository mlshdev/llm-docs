> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/scmprovidertype](https://developer.apple.com/documentation/appstoreconnectapi/scmprovidertype)

# ScmProviderType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The source code management provider’s type.

## Declaration

```
object ScmProviderType
```

## Properties

- `displayName` — `string`: The source code management provider’s display name; for example, `Bitbucket Server`.
- `isOnPremise` — `boolean`: A Boolean value that indicates whether it’s a self-hosted source code management provider.
- `kind` — `string`: A string that represents the kind of a Providers resource.
  **Allowed values:** `BITBUCKET_CLOUD`, `BITBUCKET_SERVER`, `GITHUB_CLOUD`, `GITHUB_ENTERPRISE`, `GITLAB_CLOUD`, `GITLAB_SELF_MANAGED`

## See Also

### Objects and types

- [ScmProvider.Attributes](scmprovider/attributes-data.dictionary.md): The attributes that describe a Providers resource.
