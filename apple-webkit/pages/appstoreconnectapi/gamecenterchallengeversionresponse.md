> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengeversionresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengeversionresponse)

# GameCenterChallengeVersionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single version of a Game Center challenge.

## Declaration

```
object GameCenterChallengeVersionResponse
```

## Properties

- `data` — `GameCenterChallengeVersion` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterChallengeImage`, `GameCenterChallengeLocalization`, `GameCenterChallengeVersionRelease`, `GameCenterChallenge`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterChallengeVersion](gamecenterchallengeversion.md): The data structure that represent a challenge version.
- [GameCenterChallengeVersionCreateRequest](gamecenterchallengeversioncreaterequest.md): The request body you use to create a challenge version.
- [GameCenterChallengeVersionsResponse](gamecenterchallengeversionsresponse.md): A response that contains multiple challenge version resources.
