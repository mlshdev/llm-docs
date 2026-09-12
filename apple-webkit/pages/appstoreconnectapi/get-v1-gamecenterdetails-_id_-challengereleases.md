> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-challengereleases](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterdetails-_id_-challengereleases)

# Get challenge releases for a game center detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

List all challenge release information for a specific Game Center detail.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterDetails/{id}/challengeReleases
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the Game Center detail resource ID from the [Read the state of game center for an app](get-v1-apps-_id_-gamecenterdetail.md) response.

## Query Parameters

- `fields[gameCenterChallengeVersionReleases]` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterChallengeVersions]` — `[string]`: **Allowed values:** `version`, `state`, `challenge`, `localizations`, `releases`, `defaultImage`
- `include` — `[string]`: **Allowed values:** `version`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `GameCenterChallengeVersionReleasesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game Center challenges](configuring-game-center-challenges.md)

## See Also

### Reading Game center challenge information

- [Read challenge release ids for a game center detail](get-v1-gamecenterdetails-_id_-relationships-challengereleases.md): Deprecated. List all the challenge release IDs for a specific Game Center detail.
