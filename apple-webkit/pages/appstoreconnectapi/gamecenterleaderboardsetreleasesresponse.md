> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterleaderboardsetreleasesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetreleasesresponse)

# GameCenterLeaderboardSetReleasesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response that contains multiple leaderboard set release resource.

## Declaration

```
object GameCenterLeaderboardSetReleasesResponse
```

## Properties

- `data` — `[GameCenterLeaderboardSetRelease]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterDetail`, `GameCenterLeaderboardSet`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterLeaderboardSetRelease](gamecenterleaderboardsetrelease.md): Deprecated. The data structure that represent a leaderboard set release.
- [GameCenterLeaderboardSetReleaseCreateRequest](gamecenterleaderboardsetreleasecreaterequest.md): Deprecated. The request body you use to create a leaderboard set release.
- [GameCenterLeaderboardSetReleaseResponse](gamecenterleaderboardsetreleaseresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard set release.
- [GameCenterLeaderboardSetReleasesLinkagesResponse](gamecenterleaderboardsetreleaseslinkagesresponse.md): Deprecated.
