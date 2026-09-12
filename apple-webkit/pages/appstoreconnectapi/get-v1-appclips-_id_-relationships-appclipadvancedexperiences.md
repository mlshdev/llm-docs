> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appclips-_id_-relationships-appclipadvancedexperiences](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appclips-_id_-relationships-appclipadvancedexperiences)

# List App Clip advanced experience IDs for an App Clip

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appClips/{id}/relationships/appClipAdvancedExperiences
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppClipAppClipAdvancedExperiencesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting App Clip Experiences

- [List all default app clip experiences for an app clip](get-v1-appclips-_id_-appclipdefaultexperiences.md): Get all default App Clip experiences for an App Clip.
- [List all advanced app clip experiences for an app clip](get-v1-appclips-_id_-appclipadvancedexperiences.md): Get all advanced App Clip experiences for an App Clip.
- [List default experience IDs for an App Clip](get-v1-appclips-_id_-relationships-appclipdefaultexperiences.md)
