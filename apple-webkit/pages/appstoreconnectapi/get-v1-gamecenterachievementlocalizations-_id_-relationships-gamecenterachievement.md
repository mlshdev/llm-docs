> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterachievementlocalizations-_id_-relationships-gamecenterachievement](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterachievementlocalizations-_id_-relationships-gamecenterachievement)

# Read the achievement id for a  localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read the achievement ID associated with specific localized information.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAchievementLocalizations/{id}/relationships/gameCenterAchievement
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Apps resource. Obtain the app resource ID from the [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md) response.

## Response Codes

- `200` OK — `GameCenterAchievementLocalizationGameCenterAchievementLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading achievements localizations

- [Read Game Center Achievement Localization Information](get-v2-gamecenterachievementlocalizations-_id_.md): Get information about a specific Game Center achievement localization.
- [List All Images for a Game Center Achievement Localization](get-v2-gamecenterachievementlocalizations-_id_-image.md): Get a list of images for a specific Game Center achievement localization.
- [Get All Image IDs for a Game Center Achievement Localization](get-v2-gamecenterachievementlocalizations-_id_-relationships-image.md): Get a list of image resource IDs for a specific Game Center achievement localization.
- [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md): Deprecated. Read information about the release for specific achievement.
- [List localization IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-localizations.md): Deprecated.
- [Read Achievement Localization Information](get-v1-gamecenterachievementlocalizations-_id_.md): Deprecated. Read localized information for a specific locale for a specific achievement.
- [Read the Achievement Localization Information](get-v1-gamecenterachievementlocalizations-_id_-gamecenterachievement.md): Deprecated. Read the achievement associated with specific localized information.
- [Read the Image for a Specific Achievement Localization](get-v1-gamecenterachievementlocalizations-_id_-gamecenterachievementimage.md): Deprecated. Read the achievement image associated with specific localized information.
- [Get the achievement image ID for a Game Center achievement localization](get-v1-gamecenterachievementlocalizations-_id_-relationships-gamecenterachievementimage.md): Deprecated.
