> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-gamecenterchallengelocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-gamecenterchallengelocalizations-_id_)

# Delete a Challenge Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Remove a specific localization from a Game Center challenge.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/gameCenterChallengeLocalizations/{id}
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

### Managing localizations

- [Read Challenge Localization Information](get-v1-gamecenterchallengelocalizations-_id_.md): Get information for a specific Game Center challenge localization.
- [Read Image Information for a Challenge Localization](get-v1-gamecenterchallengelocalizations-_id_-image.md): Get details about the image for a specific Game Center challenge localization.
- [Get the image id for a challenge localization](get-v1-gamecenterchallengelocalizations-_id_-relationships-image.md): Get the image ID for a specific Game Center challenge localization.
- [List All Localizations for a Challenge Version](get-v1-gamecenterchallengeversions-_id_-localizations.md): Get details about the default localization for a specific Game Center challenge version.
- [Get the localization ids for a challenge version](get-v1-gamecenterchallengeversions-_id_-relationships-localizations.md): List all the localization IDs for a specific Game Center challenge version.
- [Add a Challenge Localization](post-v1-gamecenterchallengelocalizations.md): Add a localization for a specific Game Center challenge.
- [Modify a Challenge Localization](patch-v1-gamecenterchallengelocalizations-_id_.md): Update localization information for a specific Game Center challenge.
