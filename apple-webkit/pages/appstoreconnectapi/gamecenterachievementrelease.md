> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterachievementrelease](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterachievementrelease)

# GameCenterAchievementRelease

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

The data structure that represent an achievements release resource.

## Declaration

```
object GameCenterAchievementRelease
```

## Properties

- `attributes` — `GameCenterAchievementRelease.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterAchievementRelease.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterAchievementReleases`

## Topics

### Objects

- [GameCenterAchievementRelease.Attributes](gamecenterachievementrelease/attributes-data.dictionary.md): Deprecated. Attributes that describe a achievement resource.
- [GameCenterAchievementRelease.Relationships](gamecenterachievementrelease/relationships-data.dictionary.md): Deprecated. The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterAchievementReleaseCreateRequest](gamecenterachievementreleasecreaterequest.md): Deprecated. The request body you use to create an achievement release.
- [GameCenterAchievementReleaseResponse](gamecenterachievementreleaseresponse.md): Deprecated. The response body for endpoints that create, read, or modify a single Game Center achievement release.
- [GameCenterAchievementReleasesResponse](gamecenterachievementreleasesresponse.md): Deprecated. The response body for endpoints that list Game Center achievement releases.
- [GameCenterAchievementReleasesLinkagesResponse](gamecenterachievementreleaseslinkagesresponse.md): Deprecated.
