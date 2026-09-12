> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterappversion](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterappversion)

# GameCenterAppVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object GameCenterAppVersion
```

## Properties

- `attributes` — `GameCenterAppVersion.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterAppVersion.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterAppVersions`

## Topics

### Dictionaries

- [GameCenterAppVersion.Attributes](gamecenterappversion/attributes-data.dictionary.md): Attributes that describe a Game Center app version resource.
- [GameCenterAppVersion.Relationships](gamecenterappversion/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterAppVersionCompatibilityVersionsLinkagesRequest](gamecenterappversioncompatibilityversionslinkagesrequest.md): The request body you use to create a relationship between an app version and a compatibility version.
- [GameCenterAppVersionCompatibilityVersionsLinkagesResponse](gamecenterappversioncompatibilityversionslinkagesresponse.md): A response that confirms a relationship between an app version and a compatilibty version.
- [GameCenterAppVersionCreateRequest](gamecenterappversioncreaterequest.md): The request body you use to create an app version.
- [GameCenterAppVersionResponse](gamecenterappversionresponse.md): A response containing a single app version with its Game Center configuration.
- [GameCenterAppVersionUpdateRequest](gamecenterappversionupdaterequest.md): The request body you use to update an app version.
- [GameCenterAppVersionsResponse](gamecenterappversionsresponse.md): A response containing a list of app versions with Game Center enabled.
- [GameCenterAppVersionAppStoreVersionLinkageResponse](gamecenterappversionappstoreversionlinkageresponse.md)
- [GameCenterVersionState](gamecenterversionstate.md): A string representing the state of a Game Center version.
