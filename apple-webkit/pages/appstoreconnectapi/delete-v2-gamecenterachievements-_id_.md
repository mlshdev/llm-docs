> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-gamecenterachievements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-gamecenterachievements-_id_)

# Delete a Game Center Achievement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.6+

Delete a specific Game Center achievement.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/gameCenterAchievements/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id:
- 204:
- 400:
- 401:
- 403:
- 404:
- 409:
- 429:

## See Also

### Creating, modifying, and deleting achievements

- [Create a Game Center Achievement](post-v2-gamecenterachievements.md): Create a Game Center achievement.
- [Modify a Game Center Achievement](patch-v2-gamecenterachievements-_id_.md): Update a specific Game Center achievement.
- [Modify the Activity for a Game Center Achievement](patch-v2-gamecenterachievements-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center achievement.
- [Create an Achievement](post-v1-gamecenterachievements.md): Deprecated. Add an achievement to a Game Center detail.
- [Modify an Achievement](patch-v1-gamecenterachievements-_id_.md): Deprecated. Modify properties for a specific achievement.
- [Modify the Group for an Achievement](patch-v1-gamecenterachievements-_id_-relationships-groupachievement.md): Deprecated. Modify the achievement group for a specific achievement.
- [Modify the activity for a Game Center achievement](patch-v1-gamecenterachievements-_id_-relationships-activity.md): Deprecated.
- [Delete an Achievement](delete-v1-gamecenterachievements-_id_.md): Deprecated. Delete a specific achievement.
