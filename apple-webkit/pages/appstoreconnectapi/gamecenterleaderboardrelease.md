> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardrelease](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardrelease)

# GameCenterLeaderboardRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A record indicating that a Game Center leaderboard has been released to players, making it visible in the game.

## Declaration

```
object GameCenterLeaderboardRelease
```

## Properties

- `attributes` — `GameCenterLeaderboardRelease.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterLeaderboardRelease.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterLeaderboardReleases`

## Topics

### Objects

- [GameCenterLeaderboardRelease.Attributes](gamecenterleaderboardrelease/attributes-data.dictionary.md): Deprecated. Attributes that describe a leaderboard resource.
- [GameCenterLeaderboardRelease.Relationships](gamecenterleaderboardrelease/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterLeaderboardReleaseCreateRequest](gamecenterleaderboardreleasecreaterequest.md): Deprecated. The request body you use to create a leaderboard release.
- [GameCenterLeaderboardReleaseResponse](gamecenterleaderboardreleaseresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard release.
- [GameCenterLeaderboardReleasesResponse](gamecenterleaderboardreleasesresponse.md): Deprecated. A response that contains multiple leaderboard release resource.
- [GameCenterLeaderboardReleasesLinkagesResponse](gamecenterleaderboardreleaseslinkagesresponse.md): Deprecated.
