> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v2-gamecenterachievementlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v2-gamecenterachievementlocalizations)

# Create a Game Center Achievement Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Create a Game Center achievement localization.

## URL

```http
POST https://api.appstoreconnect.apple.com/v2/gameCenterAchievementLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterAchievementLocalizationV2CreateRequest`

## Response Codes

- `201` Created — `GameCenterAchievementLocalizationV2Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- 201:
- 400:
- 401:
- 403:
- 409:
- 422:
- 429:

## See Also

### Creating, modifying, and deleting achievements localizations

- [Modify a Game Center Achievement Localization](patch-v2-gamecenterachievementlocalizations-_id_.md): Update a specific Game Center achievement localization.
- [Delete a Game Center Achievement Localization](delete-v2-gamecenterachievementlocalizations-_id_.md): Delete a specific Game Center achievement localization.
- [Create an Achievement Localization](post-v1-gamecenterachievementlocalizations.md): Deprecated. Add Game Center achievement localized information for a new locale.
- [Edit an Achievement Localization](patch-v1-gamecenterachievementlocalizations-_id_.md): Deprecated. Modify localized Game Center achievement information for a particular language.
- [Delete an Achievement Localization](delete-v1-gamecenterachievementlocalizations-_id_.md): Deprecated. Delete localization metadata that’s associated with an achievement.
