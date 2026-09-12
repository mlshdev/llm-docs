> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardreleaseresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardreleaseresponse)

# GameCenterLeaderboardReleaseResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that create, read, or modify a single Game Center leaderboard release.

## Declaration

```
object GameCenterLeaderboardReleaseResponse
```

## Properties

- `data` — `GameCenterLeaderboardRelease` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterDetail`, `GameCenterLeaderboard`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterLeaderboardRelease](gamecenterleaderboardrelease.md): Deprecated. A record indicating that a Game Center leaderboard has been released to players, making it visible in the game.
- [GameCenterLeaderboardReleaseCreateRequest](gamecenterleaderboardreleasecreaterequest.md): Deprecated. The request body you use to create a leaderboard release.
- [GameCenterLeaderboardReleasesResponse](gamecenterleaderboardreleasesresponse.md): Deprecated. A response that contains multiple leaderboard release resource.
- [GameCenterLeaderboardReleasesLinkagesResponse](gamecenterleaderboardreleaseslinkagesresponse.md): Deprecated.
