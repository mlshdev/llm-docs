> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeversionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeversionsresponse)

# GameCenterChallengeVersionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response that contains multiple challenge version  resources.

## Declaration

```
object GameCenterChallengeVersionsResponse
```

## Properties

- `data` — `[GameCenterChallengeVersion]` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterChallengeImage`, `GameCenterChallengeLocalization`, `GameCenterChallengeVersionRelease`, `GameCenterChallenge`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [GameCenterChallengeVersion](gamecenterchallengeversion.md): The data structure that represent a challenge version.
- [GameCenterChallengeVersionCreateRequest](gamecenterchallengeversioncreaterequest.md): The request body you use to create a challenge version.
- [GameCenterChallengeVersionResponse](gamecenterchallengeversionresponse.md): A response containing a single version of a Game Center challenge.
