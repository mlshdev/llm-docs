> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterachievementreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterachievementreleases-_id_)

# Delete a game center achievement release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Delete a release of an achievement or Game Center detail.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterAchievementReleases/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center achievement release resource ID from the [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Game Center achievement releases

- [List achievement releases](get-v1-gamecenterdetails-_id_-achievementreleases.md): Deprecated. Read information about the achievement releases for specific Game Center detail.
- [List achievement release IDs for a Game Center detail](get-v1-gamecenterdetails-_id_-relationships-achievementreleases.md): Deprecated.
- [Read Release Information for an Achievement](get-v1-gamecenterachievements-_id_-releases.md): Deprecated. Read the state of an achievement release and related information.
- [List release IDs for a Game Center achievement](get-v1-gamecenterachievements-_id_-relationships-releases.md): Deprecated.
- [Read game center achievement release information](get-v1-gamecenterachievementreleases-_id_.md): Deprecated. Read the state of a specific achievement release.
- [Create a game center achievement release](post-v1-gamecenterachievementreleases.md): Deprecated. Create a release for an achievement and a Game Center detail.
