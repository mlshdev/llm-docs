> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/gamecenterleaderboardsetrelease

# GameCenterLeaderboardSetRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The data structure that represent a leaderboard set release.

## Declaration

```
object GameCenterLeaderboardSetRelease
```

## Properties

- `attributes` — `GameCenterLeaderboardSetRelease.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterLeaderboardSetRelease.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterLeaderboardSetReleases`

## Topics

### Objects

- [GameCenterLeaderboardSetRelease.Attributes](gamecenterleaderboardsetrelease/attributes-data.dictionary.md): Deprecated. Attributes that describe a leaderboard resource.
- [GameCenterLeaderboardSetRelease.Relationships](gamecenterleaderboardsetrelease/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterLeaderboardSetReleaseCreateRequest](gamecenterleaderboardsetreleasecreaterequest.md): Deprecated. The request body you use to create a leaderboard set release.
- [GameCenterLeaderboardSetReleaseResponse](gamecenterleaderboardsetreleaseresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center leaderboard set release.
- [GameCenterLeaderboardSetReleasesResponse](gamecenterleaderboardsetreleasesresponse.md): Deprecated. A response that contains multiple leaderboard set release resource.
- [GameCenterLeaderboardSetReleasesLinkagesResponse](gamecenterleaderboardsetreleaseslinkagesresponse.md): Deprecated.
