> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterenabledversioncompatibleversionslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterenabledversioncompatibleversionslinkagesresponse)

# GameCenterEnabledVersionCompatibleVersionsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

A response body that contains a list of related resource IDs.

> This object is deprecated. Use [GameCenterAppVersionCompatibilityVersionsLinkagesResponse](gamecenterappversioncompatibilityversionslinkagesresponse.md) instead.

## Declaration

```
object GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
```

## Properties

- `data` — `[GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Objects

- [GameCenterEnabledVersionCompatibleVersionsLinkagesResponse.Data](gamecenterenabledversioncompatibleversionslinkagesresponse/data-data.dictionary.md): Deprecated. The data element of the response body.

## See Also

### Objects

- [GameCenterEnabledVersion](gamecenterenabledversion.md): Deprecated. An app version with Game Center enabled. Deprecated in API version 3.0; use [GameCenterAppVersion](gamecenterappversion.md) instead.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesRequest](gamecenterenabledversioncompatibleversionslinkagesrequest.md): Deprecated. A request body you use to add or remove compatible versions from a Game Center-enabled version.
- [GameCenterEnabledVersionsResponse](gamecenterenabledversionsresponse.md): Deprecated. A response containing a list of app versions with Game Center enabled (deprecated; use GameCenterAppVersion).
- [AppGameCenterEnabledVersionsLinkagesResponse](appgamecenterenabledversionslinkagesresponse.md): Deprecated.
