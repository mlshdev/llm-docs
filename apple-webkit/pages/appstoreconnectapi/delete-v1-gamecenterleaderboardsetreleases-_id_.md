> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterleaderboardsetreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterleaderboardsetreleases-_id_)

# Delete a Leaderboard Set Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Delete a new leaderboard set release.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterLeaderboardSetReleases/{id}
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

## See Also

### Managing leaderboard set releases

- [Read Leaderboard Set Release Information](get-v1-gamecenterleaderboardsetreleases-_id_.md): Deprecated. Get information about a leaderboard set release.
- [Create a Leaderboard Set Release](post-v1-gamecenterleaderboardsetreleases.md): Deprecated. Add a new leaderboard set release.
