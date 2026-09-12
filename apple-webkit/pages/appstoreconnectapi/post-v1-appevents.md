> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appevents](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appevents)

# Create an in-app event

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Create a new in-app event for your app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appEvents
```

## HTTP Body

Content type: `application/json`

Type: `AppEventCreateRequest`

## Response Codes

- `201` Created — `AppEventResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read In-App Event Information](get-v1-appevents-_id_.md): Get information about a specific in-app event.
- [List all localizations for an in-app event](get-v1-appevents-_id_-localizations.md): Get a list of all localizations for a specific in-app event.
- [List localization IDs for an app event](get-v1-appevents-_id_-relationships-localizations.md)
- [List all in-app events for an app](get-v1-apps-_id_-appevents.md): Get a list of in-app events for a specific app.
- [Modify an in-app event](patch-v1-appevents-_id_.md): Update the metadata for a specific in-app event.
- [Delete an app event](delete-v1-appevents-_id_.md): Delete an in-app event and its related metadata.
