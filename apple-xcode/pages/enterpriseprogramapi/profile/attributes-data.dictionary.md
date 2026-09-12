> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/profile/attributes-data.dictionary](https://developer.apple.com/documentation/enterpriseprogramapi/profile/attributes-data.dictionary)

# Profile.Attributes

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

Attributes that describe a Profiles resource.

## Declaration

```
object Profile.Attributes
```

## Properties

- `createdDate` — `date-time`:
- `expirationDate` — `date-time`:
- `name` — `string`:
- `platform` — `BundleIdPlatform`:
- `profileContent` — `string`:
- `profileState` — `string`: **Allowed values:** `ACTIVE`, `INVALID`
- `profileType` — `string`: **Allowed values:** `IOS_APP_DEVELOPMENT`, `IOS_APP_STORE`, `IOS_APP_ADHOC`, `IOS_APP_INHOUSE`, `MAC_APP_DEVELOPMENT`, `MAC_APP_STORE`, `MAC_APP_DIRECT`, `TVOS_APP_DEVELOPMENT`, `TVOS_APP_STORE`, `TVOS_APP_ADHOC`, `TVOS_APP_INHOUSE`, `MAC_CATALYST_APP_DEVELOPMENT`, `MAC_CATALYST_APP_STORE`, `MAC_CATALYST_APP_DIRECT`
- `uuid` — `string`:

## See Also

### Objects

- [Profile.Relationships](relationships-data.dictionary.md): The relationships you included in the request and those on which you can operate.
