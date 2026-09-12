> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-achievementreleases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-relationships-achievementreleases)

# List achievement release IDs for a Game Center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/relationships/achievementReleases
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterDetailAchievementReleasesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center achievement releases

- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [Read game center achievement release information](get-v1-gamecenterachievementreleases-_id_.md): Deprecated. Read the state of a specific achievement release.
- [Create a game center achievement release](post-v1-gamecenterachievementreleases.md): Deprecated. Create a release for an achievement and a Game Center detail.
- [Delete a game center achievement release](delete-v1-gamecenterachievementreleases-_id_.md): Deprecated. Delete a release of an achievement or Game Center detail.
