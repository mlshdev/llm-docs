> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclipdefaultexperiencelocalizations-_id_-relationships-appclipheaderimage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclipdefaultexperiencelocalizations-_id_-relationships-appclipheaderimage)

# Get the header image ID for an App Clip default experience localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClipDefaultExperienceLocalizations/{id}/relationships/appClipHeaderImage
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppClipDefaultExperienceLocalizationAppClipHeaderImageLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Metadata for Your Default App Clip Experience

- [Read localization information of a default app clip experience](get-v1-appclipdefaultexperiencelocalizations-_id_.md): Get localized metadata that appears on the App Clip card of a specific default App Clip experience.
- [Read app clip card image information for a localized default app clip experience](get-v1-appclipdefaultexperiencelocalizations-_id_-appclipheaderimage.md): Get the image that appears on the App Clip card, specific to a locale, for a default App Clip experience.
