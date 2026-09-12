> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengelocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengelocalizationresponse)

# GameCenterChallengeLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single localization for a Game Center challenge.

## Declaration

```
object GameCenterChallengeLocalizationResponse
```

## Properties

- `data` — `GameCenterChallengeLocalization` (required):
- `included` — `[*]`: **Allowed types:** `GameCenterChallengeImage`, `GameCenterChallengeVersion`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [GameCenterChallengeLocalization](gamecenterchallengelocalization.md): The data structure that represent a challenge localization.
- [GameCenterChallengeLocalizationCreateRequest](gamecenterchallengelocalizationcreaterequest.md): The request body for creating a localization for a Game Center challenge.
- [GameCenterChallengeLocalizationImageLinkageResponse](gamecenterchallengelocalizationimagelinkageresponse.md)
- [GameCenterChallengeLocalizationUpdateRequest](gamecenterchallengelocalizationupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeLocalizationsResponse](gamecenterchallengelocalizationsresponse.md): A response containing a list of localizations for a Game Center challenge.
- [GameCenterChallengeVersionLocalizationsLinkagesResponse](gamecenterchallengeversionlocalizationslinkagesresponse.md)
