> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterachievementlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterachievementlocalizations-_id_)

# Delete an Achievement Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Delete localization metadata that’s associated with an achievement.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievementLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md) response.

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
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievementLocalizations/ca329301-e7ad-4784-97cd-02faade43c2f -d
{
    “data”: {
        “type”: “gameCenterAchievementLocalizations”,
        “id”: “ca329301-e7ad-4784-97cd-02faade43c2f”,
        “attributes”: {
            “beforeEarnedDescription”: “You can earn this achievement upon steaming milk to the perfect texture.”
        }
    }
}

```

**Response**

```json
HTTP/1.1 204 No Content
```

## See Also

### Creating, modifying, and deleting achievements localizations

- [Create a Game Center Achievement Localization](post-v2-gamecenterachievementlocalizations.md): Create a Game Center achievement localization.
- [Modify a Game Center Achievement Localization](patch-v2-gamecenterachievementlocalizations-_id_.md): Update a specific Game Center achievement localization.
- [Delete a Game Center Achievement Localization](delete-v2-gamecenterachievementlocalizations-_id_.md): Delete a specific Game Center achievement localization.
- [Create an Achievement Localization](post-v1-gamecenterachievementlocalizations.md): Deprecated. Add Game Center achievement localized information for a new locale.
- [Edit an Achievement Localization](patch-v1-gamecenterachievementlocalizations-_id_.md): Deprecated. Modify localized Game Center achievement information for a particular language.
