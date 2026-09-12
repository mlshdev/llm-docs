> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/gamecenterchallengelocalization](https://developer.apple.com/documentation/appstoreconnectapi/gamecenterchallengelocalization)

# GameCenterChallengeLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

The data structure that represent a challenge localization.

## Declaration

```
object GameCenterChallengeLocalization
```

## Properties

- `attributes` — `GameCenterChallengeLocalization.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `GameCenterChallengeLocalization.Relationships`:
- `type` — `string` (required): **Allowed values:** `gameCenterChallengeLocalizations`

## Topics

### Dictionaries

- [GameCenterChallengeLocalization.Attributes](gamecenterchallengelocalization/attributes-data.dictionary.md): Attributes that describe a challenge resource.
- [GameCenterChallengeLocalization.Relationships](gamecenterchallengelocalization/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [GameCenterChallengeLocalizationCreateRequest](gamecenterchallengelocalizationcreaterequest.md): The request body for creating a localization for a Game Center challenge.
- [GameCenterChallengeLocalizationImageLinkageResponse](gamecenterchallengelocalizationimagelinkageresponse.md)
- [GameCenterChallengeLocalizationResponse](gamecenterchallengelocalizationresponse.md): A response containing a single localization for a Game Center challenge.
- [GameCenterChallengeLocalizationUpdateRequest](gamecenterchallengelocalizationupdaterequest.md): The request body you use to update a challenge.
- [GameCenterChallengeLocalizationsResponse](gamecenterchallengelocalizationsresponse.md): A response containing a list of localizations for a Game Center challenge.
- [GameCenterChallengeVersionLocalizationsLinkagesResponse](gamecenterchallengeversionlocalizationslinkagesresponse.md)
