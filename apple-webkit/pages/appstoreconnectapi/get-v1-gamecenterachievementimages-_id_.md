> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterachievementimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterachievementimages-_id_)

# Read Achievement Image Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get information about an achievement image and its upload and processing status.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center achievement images resource ID from the [Read Achievement Information](get-v1-gamecenterachievements-_id_.md) response.

## Query Parameters

- `fields[gameCenterAchievementImages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `imageAsset`, `uploadOperations`, `assetDeliveryState`, `gameCenterAchievementLocalization`
- `include` — `[string]`: **Allowed values:** `gameCenterAchievementLocalization`
- `fields[gameCenterAchievementLocalizations]` — `[string]`: **Allowed values:** `locale`, `name`, `beforeEarnedDescription`, `afterEarnedDescription`, `gameCenterAchievement`, `gameCenterAchievementImage`

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
https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/38e6d9a7-9cbf-45f8-8246-1ef4728aecda
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
    “self” : “https://api.appstoreconnect.apple.com/v1/gameCenterAchievementImages/38e6d9a7-9cbf-45f8-8246-1ef4728aecda”
  }
}
```

## See Also

### Managing Game Center achievements images

- [Read Game Center Achievement Image Information](get-v2-gamecenterachievementimages-_id_.md): Get information about a specific Game Center achievement image.
- [Create a Game Center Achievement Image](post-v2-gamecenterachievementimages.md): Create a Game Center achievement image.
- [Modify a Game Center Achievement Image](patch-v2-gamecenterachievementimages-_id_.md): Update a specific Game Center achievement image.
- [Delete a Game Center Achievement Image](delete-v2-gamecenterachievementimages-_id_.md): Delete a specific Game Center achievement image.
- [Create an Achievement Image](post-v1-gamecenterachievementimages.md): Deprecated. Add a new achievement image.
- [Modify an Achievement Image](patch-v1-gamecenterachievementimages-_id_.md): Deprecated. Commit an achievement image after uploading it.
- [Delete an Achievement Image](delete-v1-gamecenterachievementimages-_id_.md): Deprecated. Delete an image that’s associated with an achievement.
