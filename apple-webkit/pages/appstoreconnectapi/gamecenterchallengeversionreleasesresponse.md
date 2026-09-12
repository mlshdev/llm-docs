> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeversionreleasesresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeversionreleasesresponse)

# GameCenterChallengeVersionReleasesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a list of release records for a Game Center challenge version.

## Declaration

```
object GameCenterChallengeVersionReleasesResponse
```

## Properties

- `data` — `[GameCenterChallengeVersionRelease]` (required):
- `included` — `[GameCenterChallengeVersion]`:
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterChallengeVersionRelease](gamecenterchallengeversionrelease.md): Deprecated. The data structure that represent a challenge version release.
- [GameCenterChallengeVersionReleaseCreateRequest](gamecenterchallengeversionreleasecreaterequest.md): Deprecated. The request body for releasing a Game Center challenge version to players.
- [GameCenterChallengeVersionReleaseResponse](gamecenterchallengeversionreleaseresponse.md): Deprecated. A response containing a single release record for a Game Center challenge version.
