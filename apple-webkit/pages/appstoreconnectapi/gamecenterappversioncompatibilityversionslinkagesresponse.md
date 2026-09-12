> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterappversioncompatibilityversionslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterappversioncompatibilityversionslinkagesresponse)

# GameCenterAppVersionCompatibilityVersionsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response that confirms a relationship between an app version and a compatilibty version.

## Declaration

```
object GameCenterAppVersionCompatibilityVersionsLinkagesResponse
```

## Properties

- `data` — `[GameCenterAppVersionCompatibilityVersionsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Objects

- [GameCenterAppVersionCompatibilityVersionsLinkagesResponse.Data](gamecenterappversioncompatibilityversionslinkagesresponse/data-data.dictionary.md): The type and ID of a related Game Center app version resource.

## See Also

### Objects

- [GameCenterAppVersion](gamecenterappversion.md)
- [GameCenterAppVersionCompatibilityVersionsLinkagesRequest](gamecenterappversioncompatibilityversionslinkagesrequest.md): The request body you use to create a relationship between an app version and a compatibility version.
- [GameCenterAppVersionCreateRequest](gamecenterappversioncreaterequest.md): The request body you use to create an app version.
- [GameCenterAppVersionResponse](gamecenterappversionresponse.md): A response containing a single app version with its Game Center configuration.
- [GameCenterAppVersionUpdateRequest](gamecenterappversionupdaterequest.md): The request body you use to update an app version.
- [GameCenterAppVersionsResponse](gamecenterappversionsresponse.md): A response containing a list of app versions with Game Center enabled.
- [GameCenterAppVersionAppStoreVersionLinkageResponse](gamecenterappversionappstoreversionlinkageresponse.md)
- [GameCenterVersionState](gamecenterversionstate.md): A string representing the state of a Game Center version.
