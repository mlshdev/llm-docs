> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterchallengeversionreleases](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterchallengeversionreleases)

# Add a Challenge Version Release

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Add a version release for a specific Game Center challenge version.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterChallengeVersionReleases
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterChallengeVersionReleaseCreateRequest`

## Response Codes

- `201` Created — `GameCenterChallengeVersionReleaseResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game Center challenges](configuring-game-center-challenges.md)

## See Also

### Managing version releases

- [Read Challenge Version Release Information](get-v1-gamecenterchallengeversionreleases-_id_.md): Deprecated. Get information for a specific Game Center challenge version release.
- [Delete a Challenge Version Release](delete-v1-gamecenterchallengeversionreleases-_id_.md): Deprecated. Remove a specific version release from a Game Center challenge version.
