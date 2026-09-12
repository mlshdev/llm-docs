> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterachievementreleaseresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterachievementreleaseresponse)

# GameCenterAchievementReleaseResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The response body for endpoints that create, read, or modify a single Game Center achievement release.

## Declaration

```
object GameCenterAchievementReleaseResponse
```

## Properties

- `data` — `GameCenterAchievementRelease` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterAchievement`, `GameCenterDetail`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterAchievementRelease](gamecenterachievementrelease.md): Deprecated. The data structure that represent an achievements release resource.
- [GameCenterAchievementReleaseCreateRequest](gamecenterachievementreleasecreaterequest.md): Deprecated. The request body you use to create an achievement release.
- [GameCenterAchievementReleasesResponse](gamecenterachievementreleasesresponse.md): Deprecated. The response body for endpoints that list Game Center achievement releases.
- [GameCenterAchievementReleasesLinkagesResponse](gamecenterachievementreleaseslinkagesresponse.md): Deprecated.
