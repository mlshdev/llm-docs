> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterversionstate](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterversionstate)

# GameCenterVersionState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 3.0+

A string representing the state of a Game Center version.

## Declaration

```
string GameCenterVersionState
```

## Possible Values

- `PREPARE_FOR_SUBMISSION`:
- `READY_FOR_REVIEW`:
- `WAITING_FOR_REVIEW`:
- `IN_REVIEW`:
- `REJECTED`:
- `ACCEPTED`:
- `PENDING_RELEASE`:
- `LIVE`:
- `REPLACED_WITH_NEW_VERSION`:
- `DEVELOPER_REJECTED`:

## See Also

### Objects

- [GameCenterAppVersion](gamecenterappversion.md)
- [GameCenterAppVersionCompatibilityVersionsLinkagesRequest](gamecenterappversioncompatibilityversionslinkagesrequest.md): The request body you use to create a relationship between an app version and a compatibility version.
- [GameCenterAppVersionCompatibilityVersionsLinkagesResponse](gamecenterappversioncompatibilityversionslinkagesresponse.md): A response that confirms a relationship between an app version and a compatilibty version.
- [GameCenterAppVersionCreateRequest](gamecenterappversioncreaterequest.md): The request body you use to create an app version.
- [GameCenterAppVersionResponse](gamecenterappversionresponse.md): A response containing a single app version with its Game Center configuration.
- [GameCenterAppVersionUpdateRequest](gamecenterappversionupdaterequest.md): The request body you use to update an app version.
- [GameCenterAppVersionsResponse](gamecenterappversionsresponse.md): A response containing a list of app versions with Game Center enabled.
- [GameCenterAppVersionAppStoreVersionLinkageResponse](gamecenterappversionappstoreversionlinkageresponse.md)
