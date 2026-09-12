> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenteractivityversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenteractivityversionresponse)

# GameCenterActivityVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single version of a Game Center activity.

## Declaration

```
object GameCenterActivityVersionResponse
```

## Properties

- `data` — `GameCenterActivityVersion` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterActivity`, `GameCenterActivityImage`, `GameCenterActivityLocalization`, `GameCenterActivityVersionRelease`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterActivityVersionRelease](gamecenteractivityversionrelease.md): Deprecated. A record indicating that a version of a Game Center activity has been released to players.
- [GameCenterActivityVersionReleaseCreateRequest](gamecenteractivityversionreleasecreaterequest.md): Deprecated. The request body for releasing a Game Center activity version to players.
- [GameCenterActivityVersionReleaseResponse](gamecenteractivityversionreleaseresponse.md): Deprecated. A response containing a single release record for a Game Center activity version.
- [GameCenterActivityVersionReleasesResponse](gamecenteractivityversionreleasesresponse.md): Deprecated. A response containing a list of release records for a Game Center activity version.
