> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetreleaseresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetreleaseresponse)

# GameCenterLeaderboardSetReleaseResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that create, read, or modify a single Game Center leaderboard set release.

## Declaration

```
object GameCenterLeaderboardSetReleaseResponse
```

## Properties

- `data` — `GameCenterLeaderboardSetRelease` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterDetail`, `GameCenterLeaderboardSet`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterLeaderboardSetRelease](gamecenterleaderboardsetrelease.md): Deprecated. The data structure that represent a leaderboard set release.
- [GameCenterLeaderboardSetReleaseCreateRequest](gamecenterleaderboardsetreleasecreaterequest.md): Deprecated. The request body you use to create a leaderboard set release.
- [GameCenterLeaderboardSetReleasesResponse](gamecenterleaderboardsetreleasesresponse.md): Deprecated. A response that contains multiple leaderboard set release resource.
- [GameCenterLeaderboardSetReleasesLinkagesResponse](gamecenterleaderboardsetreleaseslinkagesresponse.md): Deprecated.
