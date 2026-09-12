> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterchallengeversionreleases-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterchallengeversionreleases-_id_)

# Read Challenge Version Release Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information for a specific Game Center challenge version release.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterChallengeVersionReleases/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[gameCenterChallengeVersionReleases]` — `[string]`: **Allowed values:** `version`
- `include` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterChallengeVersions]` — `[string]`: **Allowed values:** `version`, `state`, `challenge`, `localizations`, `releases`, `defaultImage`

## Response Codes

- `200` OK — `GameCenterChallengeVersionReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing version releases

- [Add a Challenge Version Release](post-v1-gamecenterchallengeversionreleases.md): Deprecated. Add a version release for a specific Game Center challenge version.
- [Delete a Challenge Version Release](delete-v1-gamecenterchallengeversionreleases-_id_.md): Deprecated. Remove a specific version release from a Game Center challenge version.
