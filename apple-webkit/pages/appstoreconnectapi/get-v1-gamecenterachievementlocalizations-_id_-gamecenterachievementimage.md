> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterachievementlocalizations-_id_-gamecenterachievementimage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterachievementlocalizations-_id_-gamecenterachievementimage)

# Read the Image for a Specific Achievement Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read the achievement image associated with specific localized information.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAchievementLocalizations/{id}/gameCenterAchievementImage
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Apps resource. Obtain the app resource ID from the [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md) response.

## Query Parameters

- `fields[gameCenterAchievementImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `gameCenterAchievementLocalization`
- `fields[gameCenterAchievementLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `beforeEarnedDescription`, `afterEarnedDescription`, `gameCenterAchievement`, `gameCenterAchievementImage`
- `include` — `[string]`: **Allowed values:** `gameCenterAchievementLocalization`

## Response Codes

- `200` OK — `GameCenterAchievementImageResponse`:
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
https://api.appstoreconnect.apple.com/v1/gameCenterAchievementLocalizations/ca329301-e7ad-4784-97cd-02faade43c2f/gameCenterAchievementImage
```

**Response**

```json
{
  “data” : {
    “type” : “gameCenterAchievementImages”,
    “id” : “38e6d9a7-9cbf-45f8-8246-1ef4728aecda”,
    “attributes” : {
      “fileSize” : 357407,
      “fileName” : “coffee1.png”,
      “imageAsset” : {
        “templateUrl” : “https://isq11.mzstatic.com/image/thumb/PurpleSource113/v4/64/14/07/641407e3-602f-ce23-10b8-c91b1762986c/38e6d9a7-9cbf-45f8-8246-1ef4728aecda_coffee1.png/{w}x{h}bb.{f}”,
        “width” : 512,
        “height” : 512
      },
      “uploadOperations” : [ ],
      “assetDeliveryState” : {
        “errors” : null,
        “warnings” : null,
        “state” : “COMPLETE”
      }
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/38e6d9a7-9cbf-45f8-8246-1ef4728aecda”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementLocalizations/ca329301-e7ad-4784-97cd-02faade43c2f/gameCenterAchievementImage”
  }

```

## See Also

### Reading achievements localizations

- [Read Game Center Achievement Localization Information](get-v2-gamecenterachievementlocalizations-_id_.md): Get information about a specific Game Center achievement localization.
- [List All Images for a Game Center Achievement Localization](get-v2-gamecenterachievementlocalizations-_id_-image.md): Get a list of images for a specific Game Center achievement localization.
- [Get All Image IDs for a Game Center Achievement Localization](get-v2-gamecenterachievementlocalizations-_id_-relationships-image.md): Get a list of image resource IDs for a specific Game Center achievement localization.
- [List All Localizations for an Achievement](get-v1-gamecenterachievements-_id_-localizations.md): Deprecated. Read information about the release for specific achievement.
- [List localization IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-localizations.md): Deprecated.
- [Read Achievement Localization Information](get-v1-gamecenterachievementlocalizations-_id_.md): Deprecated. Read localized information for a specific locale for a specific achievement.
- [Read the Achievement Localization Information](get-v1-gamecenterachievementlocalizations-_id_-gamecenterachievement.md): Deprecated. Read the achievement associated with specific localized information.
- [Read the achievement id for a  localization](get-v1-gamecenterachievementlocalizations-_id_-relationships-gamecenterachievement.md): Deprecated. Read the achievement ID associated with specific localized information.
- [Get the achievement image ID for a Game Center achievement localization](get-v1-gamecenterachievementlocalizations-_id_-relationships-gamecenterachievementimage.md): Deprecated.
