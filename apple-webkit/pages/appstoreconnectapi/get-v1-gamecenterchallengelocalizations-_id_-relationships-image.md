> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecenterchallengelocalizations-_id_-relationships-image](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecenterchallengelocalizations-_id_-relationships-image)

# Get the image id for a challenge localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get the image ID for a specific Game Center challenge localization.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterChallengeLocalizations/{id}/relationships/image
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `GameCenterChallengeLocalizationImageLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing localizations

- [Read Challenge Localization Information](get-v1-gamecenterchallengelocalizations-_id_.md): Get information for a specific Game Center challenge localization.
- [Read Image Information for a Challenge Localization](get-v1-gamecenterchallengelocalizations-_id_-image.md): Get details about the image for a specific Game Center challenge localization.
- [List All Localizations for a Challenge Version](get-v1-gamecenterchallengeversions-_id_-localizations.md): Get details about the default localization for a specific Game Center challenge version.
- [Get the localization ids for a challenge version](get-v1-gamecenterchallengeversions-_id_-relationships-localizations.md): List all the localization IDs for a specific Game Center challenge version.
- [Add a Challenge Localization](post-v1-gamecenterchallengelocalizations.md): Add a localization for a specific Game Center challenge.
- [Modify a Challenge Localization](patch-v1-gamecenterchallengelocalizations-_id_.md): Update localization information for a specific Game Center challenge.
- [Delete a Challenge Localization](delete-v1-gamecenterchallengelocalizations-_id_.md): Remove a specific localization from a Game Center challenge.
