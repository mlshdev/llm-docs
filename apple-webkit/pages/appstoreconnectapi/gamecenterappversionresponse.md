> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterappversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterappversionresponse)

# GameCenterAppVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a single app version with its Game Center configuration.

## Declaration

```
object GameCenterAppVersionResponse
```

## Properties

- `data` — `GameCenterAppVersion` (required):
- `included` — `[*]`: **Allowed types:** `AppStoreVersion`, `GameCenterAppVersion`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterAppVersion](gamecenterappversion.md)
- [GameCenterAppVersionCompatibilityVersionsLinkagesRequest](gamecenterappversioncompatibilityversionslinkagesrequest.md): The request body you use to create a relationship between an app version and a compatibility version.
- [GameCenterAppVersionCompatibilityVersionsLinkagesResponse](gamecenterappversioncompatibilityversionslinkagesresponse.md): A response that confirms a relationship between an app version and a compatilibty version.
- [GameCenterAppVersionCreateRequest](gamecenterappversioncreaterequest.md): The request body you use to create an app version.
- [GameCenterAppVersionUpdateRequest](gamecenterappversionupdaterequest.md): The request body you use to update an app version.
- [GameCenterAppVersionsResponse](gamecenterappversionsresponse.md): A response containing a list of app versions with Game Center enabled.
- [GameCenterAppVersionAppStoreVersionLinkageResponse](gamecenterappversionappstoreversionlinkageresponse.md)
- [GameCenterVersionState](gamecenterversionstate.md): A string representing the state of a Game Center version.
