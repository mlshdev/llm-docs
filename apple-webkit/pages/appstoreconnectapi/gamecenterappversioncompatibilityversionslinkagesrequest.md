> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterappversioncompatibilityversionslinkagesrequest](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterappversioncompatibilityversionslinkagesrequest)

# GameCenterAppVersionCompatibilityVersionsLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The request body you use to create a relationship between an app version and a compatibility version.

## Declaration

```
object GameCenterAppVersionCompatibilityVersionsLinkagesRequest
```

## Properties

- `data` — `[GameCenterAppVersionCompatibilityVersionsLinkagesRequest.Data]` (required):

## Topics

### Objects

- [GameCenterAppVersionCompatibilityVersionsLinkagesRequest.Data](gamecenterappversioncompatibilityversionslinkagesrequest/data-data.dictionary.md): The type and ID of a related Game Center app version resource.

## See Also

### Objects

- [GameCenterAppVersion](gamecenterappversion.md)
- [GameCenterAppVersionCompatibilityVersionsLinkagesResponse](gamecenterappversioncompatibilityversionslinkagesresponse.md): A response that confirms a relationship between an app version and a compatilibty version.
- [GameCenterAppVersionCreateRequest](gamecenterappversioncreaterequest.md): The request body you use to create an app version.
- [GameCenterAppVersionResponse](gamecenterappversionresponse.md): A response containing a single app version with its Game Center configuration.
- [GameCenterAppVersionUpdateRequest](gamecenterappversionupdaterequest.md): The request body you use to update an app version.
- [GameCenterAppVersionsResponse](gamecenterappversionsresponse.md): A response containing a list of app versions with Game Center enabled.
- [GameCenterAppVersionAppStoreVersionLinkageResponse](gamecenterappversionappstoreversionlinkageresponse.md)
- [GameCenterVersionState](gamecenterversionstate.md): A string representing the state of a Game Center version.
