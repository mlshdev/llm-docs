> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardreleaseresponse

# GameCenterLeaderboardReleaseResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+ (deprecated in 4.3)

The response body for endpoints that create, read, or modify a single Game Center leaderboard release.

> This object is deprecated.

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
