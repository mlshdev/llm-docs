> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterachievementreleasesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterachievementreleasesresponse)

# GameCenterAchievementReleasesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that list Game Center achievement releases.

## Declaration

```
object GameCenterAchievementReleasesResponse
```

## Properties

- `data` — `[GameCenterAchievementRelease]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterAchievement`, `GameCenterDetail`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterAchievementRelease](gamecenterachievementrelease.md): Deprecated. The data structure that represent an achievements release resource.
- [GameCenterAchievementReleaseCreateRequest](gamecenterachievementreleasecreaterequest.md): Deprecated. The request body you use to create an achievement release.
- [GameCenterAchievementReleaseResponse](gamecenterachievementreleaseresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center achievement release.
- [GameCenterAchievementReleasesLinkagesResponse](gamecenterachievementreleaseslinkagesresponse.md): Deprecated.
