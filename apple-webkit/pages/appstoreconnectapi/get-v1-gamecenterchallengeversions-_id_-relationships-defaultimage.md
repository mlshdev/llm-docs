> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterchallengeversions-_id_-relationships-defaultimage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterchallengeversions-_id_-relationships-defaultimage)

# Get the default image id for a challenge version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the default image ID for a specific Game Center challenge version.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterChallengeVersions/{id}/relationships/defaultImage
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `GameCenterChallengeVersionDefaultImageLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and listing versions

- [Create a Challenge Version](post-v1-gamecenterchallengeversions.md): Add a version for a specific Game Center challenge.
- [Read the versions for a Game Center challenge](get-v1-gamecenterchallenges-_id_-relationships-versions.md): Get version information for a specific Game Center challenge.
- [Read the Versions for a Challenge](get-v1-gamecenterchallenges-_id_-versions.md): Get a list of versions for a specific Game Center challenge.
- [Read Challenge Version Information](get-v1-gamecenterchallengeversions-_id_.md): Get information for a specific Game Center challenge localization.
- [Read Default Image Information for a Challenge Version](get-v1-gamecenterchallengeversions-_id_-defaultimage.md): Get details about the default image for a specific Game Center challenge version.
- [List All Localizations for a Challenge Version](get-v1-gamecenterchallengeversions-_id_-localizations.md): Get details about the default localization for a specific Game Center challenge version.
- [Get the localization ids for a challenge version](get-v1-gamecenterchallengeversions-_id_-relationships-localizations.md): List all the localization IDs for a specific Game Center challenge version.
