> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterenabledversioncompatibleversionslinkagesrequest](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterenabledversioncompatibleversionslinkagesrequest)

# GameCenterEnabledVersionCompatibleVersionsLinkagesRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

A request body you use to add or remove compatible versions from a Game Center-enabled version.

> This object is deprecated. Use [GameCenterAppVersionCompatibilityVersionsLinkagesRequest](gamecenterappversioncompatibilityversionslinkagesrequest.md) instead.

## Declaration

```
object GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
```

## Properties

- `data` — `[GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.Data]` (required):

## Topics

### Objects

- [GameCenterEnabledVersionCompatibleVersionsLinkagesRequest.Data](gamecenterenabledversioncompatibleversionslinkagesrequest/data-data.dictionary.md): Deprecated. The data element of the request body.

## See Also

### Objects

- [GameCenterEnabledVersion](gamecenterenabledversion.md): Deprecated. An app version with Game Center enabled. Deprecated in API version 3.0; use [GameCenterAppVersion](gamecenterappversion.md) instead.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesResponse](gamecenterenabledversioncompatibleversionslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [GameCenterEnabledVersionsResponse](gamecenterenabledversionsresponse.md): Deprecated. A response containing a list of app versions with Game Center enabled (deprecated; use GameCenterAppVersion).
- [AppGameCenterEnabledVersionsLinkagesResponse](appgamecenterenabledversionslinkagesresponse.md): Deprecated.
