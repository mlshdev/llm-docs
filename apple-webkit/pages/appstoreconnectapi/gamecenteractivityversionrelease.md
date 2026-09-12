> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivityversionrelease](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivityversionrelease)

# GameCenterActivityVersionRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A record indicating that a version of a Game Center activity has been released to players.

## Declaration

```
object GameCenterActivityVersionRelease
```

## Properties

- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterActivityVersionRelease.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterActivityVersionReleases`

## Topics

### Dictionaries

- [GameCenterActivityVersionRelease.Relationships](gamecenteractivityversionrelease/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterActivityVersionReleaseCreateRequest](gamecenteractivityversionreleasecreaterequest.md): Deprecated. The request body for releasing a Game Center activity version to players.
- [GameCenterActivityVersionReleaseResponse](gamecenteractivityversionreleaseresponse.md): Deprecated. A response containing a single release record for a Game Center activity version.
- [GameCenterActivityVersionReleasesResponse](gamecenteractivityversionreleasesresponse.md): Deprecated. A response containing a list of release records for a Game Center activity version.
- [GameCenterActivityVersionResponse](gamecenteractivityversionresponse.md): A response containing a single version of a Game Center activity.
