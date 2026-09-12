> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterenabledversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterenabledversionsresponse)

# GameCenterEnabledVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

A response containing a list of app versions with Game Center enabled (deprecated; use GameCenterAppVersion).

> This object is deprecated. Use [GameCenterAppVersionsResponse](gamecenterappversionsresponse.md) instead.

## Declaration

```
object GameCenterEnabledVersionsResponse
```

## Properties

- `data` — `[GameCenterEnabledVersion]` (required):
- `included` — `[*]`: **Allowed types:** `App`, `GameCenterEnabledVersion`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterEnabledVersion](gamecenterenabledversion.md): Deprecated. An app version with Game Center enabled. Deprecated in API version 3.0; use [GameCenterAppVersion](gamecenterappversion.md) instead.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesRequest](gamecenterenabledversioncompatibleversionslinkagesrequest.md): Deprecated. A request body you use to add or remove compatible versions from a Game Center-enabled version.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesResponse](gamecenterenabledversioncompatibleversionslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [AppGameCenterEnabledVersionsLinkagesResponse](appgamecenterenabledversionslinkagesresponse.md): Deprecated.
