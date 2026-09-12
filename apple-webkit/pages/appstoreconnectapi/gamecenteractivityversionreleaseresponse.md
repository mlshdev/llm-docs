> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivityversionreleaseresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivityversionreleaseresponse)

# GameCenterActivityVersionReleaseResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single release record for a Game Center activity version.

## Declaration

```
object GameCenterActivityVersionReleaseResponse
```

## Properties

- `data` — `GameCenterActivityVersionRelease` (required):
- `included` — `[GameCenterActivityVersion]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterActivityVersionRelease](gamecenteractivityversionrelease.md): Deprecated. A record indicating that a version of a Game Center activity has been released to players.
- [GameCenterActivityVersionReleaseCreateRequest](gamecenteractivityversionreleasecreaterequest.md): Deprecated. The request body for releasing a Game Center activity version to players.
- [GameCenterActivityVersionReleasesResponse](gamecenteractivityversionreleasesresponse.md): Deprecated. A response containing a list of release records for a Game Center activity version.
- [GameCenterActivityVersionResponse](gamecenteractivityversionresponse.md): A response containing a single version of a Game Center activity.
