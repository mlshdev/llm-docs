> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/webcontentfilterpluginauthenticationobject](https://developer.apple.com/documentation/devicemanagement/webcontentfilterpluginauthenticationobject)

# WebContentFilterPluginAuthenticationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Settings that control authentication.

## Declaration

```
object WebContentFilterPluginAuthenticationObject
```

## Properties

- `CredentialsAssetReference` — `string`: The identifier of an asset declaration that contains the credentials (user name and password) to authenticate with the service.
- `IdentityAssetReference` — `string`: The identifier of a credential asset declaration that contains the identity that this account requires to authenticate with the service.

## See Also

### Objects

- [WebContentFilterPluginFilterObject](webcontentfilterpluginfilterobject.md): Settings that control authentication.
- [WebContentFilterPluginVendorConfigObject](webcontentfilterpluginvendorconfigobject.md): The custom dictionary that the filtering service plug-in needs.
