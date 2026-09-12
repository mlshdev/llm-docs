> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-gamecenterchallengeversions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecenterchallengeversions)

# Create a Challenge Version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Add a version for a specific Game Center challenge.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/gameCenterChallengeVersions
```

## HTTP Body

Content type: `application/json`

Type: `GameCenterChallengeVersionCreateRequest`

## Response Codes

- `201` Created — `GameCenterChallengeVersionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game Center challenges](configuring-game-center-challenges.md)

## See Also

### Creating and listing versions

- [Read the versions for a Game Center challenge](get-v1-gamecenterchallenges-_id_-relationships-versions.md): Get version information for a specific Game Center challenge.
- [Read the Versions for a Challenge](get-v1-gamecenterchallenges-_id_-versions.md): Get a list of versions for a specific Game Center challenge.
- [Read Challenge Version Information](get-v1-gamecenterchallengeversions-_id_.md): Get information for a specific Game Center challenge localization.
- [Read Default Image Information for a Challenge Version](get-v1-gamecenterchallengeversions-_id_-defaultimage.md): Get details about the default image for a specific Game Center challenge version.
- [List All Localizations for a Challenge Version](get-v1-gamecenterchallengeversions-_id_-localizations.md): Get details about the default localization for a specific Game Center challenge version.
- [Get the default image id for a challenge version](get-v1-gamecenterchallengeversions-_id_-relationships-defaultimage.md): Get the default image ID for a specific Game Center challenge version.
- [Get the localization ids for a challenge version](get-v1-gamecenterchallengeversions-_id_-relationships-localizations.md): List all the localization IDs for a specific Game Center challenge version.
