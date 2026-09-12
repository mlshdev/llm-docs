> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterenabledversion](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterenabledversion)

# GameCenterEnabledVersion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+ (deprecated in 3.0)

An app version with Game Center enabled. Deprecated in API version 3.0; use [GameCenterAppVersion](gamecenterappversion.md) instead.

> This object is deprecated. Use [GameCenterAppVersion](gamecenterappversion.md) instead.

## Declaration

```
object GameCenterEnabledVersion
```

## Properties

- `attributes` — `GameCenterEnabledVersion.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterEnabledVersion.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterEnabledVersions`

## Topics

### Objects

- [GameCenterEnabledVersion.Attributes](gamecenterenabledversion/attributes-data.dictionary.md): Deprecated. Attributes that describe a Game Center Enabled Versions resource.
- [GameCenterEnabledVersion.Relationships](gamecenterenabledversion/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterEnabledVersionCompatibleVersionsLinkagesRequest](gamecenterenabledversioncompatibleversionslinkagesrequest.md): Deprecated. A request body you use to add or remove compatible versions from a Game Center-enabled version.
- [GameCenterEnabledVersionCompatibleVersionsLinkagesResponse](gamecenterenabledversioncompatibleversionslinkagesresponse.md): Deprecated. A response body that contains a list of related resource IDs.
- [GameCenterEnabledVersionsResponse](gamecenterenabledversionsresponse.md): Deprecated. A response containing a list of app versions with Game Center enabled (deprecated; use GameCenterAppVersion).
- [AppGameCenterEnabledVersionsLinkagesResponse](appgamecenterenabledversionslinkagesresponse.md): Deprecated.
