> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardreleasesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardreleasesresponse)

# GameCenterLeaderboardReleasesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response that contains multiple leaderboard release resource.

## Declaration

```
object GameCenterLeaderboardReleasesResponse
```

## Properties

- `data` — `[GameCenterLeaderboardRelease]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterDetail`, `GameCenterLeaderboard`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterLeaderboardRelease](gamecenterleaderboardrelease.md): Deprecated. A record indicating that a Game Center leaderboard has been released to players, making it visible in the game.
- [GameCenterLeaderboardReleaseCreateRequest](gamecenterleaderboardreleasecreaterequest.md): Deprecated. The request body you use to create a leaderboard release.
- [GameCenterLeaderboardReleaseResponse](gamecenterleaderboardreleaseresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard release.
- [GameCenterLeaderboardReleasesLinkagesResponse](gamecenterleaderboardreleaseslinkagesresponse.md): Deprecated.
