> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/profile/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/profile/attributes-data.dictionary)

# Profile.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

Attributes that describe a Profiles resource.

## Declaration

```
object Profile.Attributes
```

## Properties

- `name` — `string`:
- `platform` — `BundleIdPlatform`:
- `profileContent` — `string`:
- `uuid` — `string`:
- `createdDate` — `date-time`:
- `profileState` — `string`: **Allowed values:** `ACTIVE`, `INVALID`
- `profileType` — `string`: **Allowed values:** `IOS_APP_DEVELOPMENT`, `IOS_APP_STORE`, `IOS_APP_ADHOC`, `IOS_APP_INHOUSE`, `MAC_APP_DEVELOPMENT`, `MAC_APP_STORE`, `MAC_APP_DIRECT`, `TVOS_APP_DEVELOPMENT`, `TVOS_APP_STORE`, `TVOS_APP_ADHOC`, `TVOS_APP_INHOUSE`, `MAC_CATALYST_APP_DEVELOPMENT`, `MAC_CATALYST_APP_STORE`, `MAC_CATALYST_APP_DIRECT`
- `expirationDate` — `date-time`:

## See Also

### Objects

- [Profile.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
