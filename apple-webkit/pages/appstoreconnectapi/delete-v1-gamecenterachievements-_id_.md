> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterachievements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterachievements-_id_)

# Delete an Achievement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Delete a specific achievement.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievements/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List All Achievements](get-v1-gamecenterdetails-_id_-gamecenterachievements.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievements/082314fb-8b23-49db-b62a-08aad519e5aa
```

**Response**

```json
HTTP/1.1 204 No Content
```

## See Also

### Creating, modifying, and deleting achievements

- [Create a Game Center Achievement](post-v2-gamecenterachievements.md): Create a Game Center achievement.
- [Modify a Game Center Achievement](patch-v2-gamecenterachievements-_id_.md): Update a specific Game Center achievement.
- [Modify the Activity for a Game Center Achievement](patch-v2-gamecenterachievements-_id_-relationships-activity.md): Update the activity relationship for a specific Game Center achievement.
- [Delete a Game Center Achievement](delete-v2-gamecenterachievements-_id_.md): Delete a specific Game Center achievement.
- [Create an Achievement](post-v1-gamecenterachievements.md): Deprecated. Add an achievement to a Game Center detail.
- [Modify an Achievement](patch-v1-gamecenterachievements-_id_.md): Deprecated. Modify properties for a specific achievement.
- [Modify the Group for an Achievement](patch-v1-gamecenterachievements-_id_-relationships-groupachievement.md): Deprecated. Modify the achievement group for a specific achievement.
- [Modify the activity for a Game Center achievement](patch-v1-gamecenterachievements-_id_-relationships-activity.md): Deprecated.
