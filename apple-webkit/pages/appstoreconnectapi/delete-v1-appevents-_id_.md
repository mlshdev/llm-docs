> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appevents-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appevents-_id_)

# Delete an app event

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Delete an in-app event and its related metadata.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appEvents/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app event resource ID from the [List all in-app events for an app](get-v1-apps-_id_-appevents.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Read In-App Event Information](get-v1-appevents-_id_.md): Get information about a specific in-app event.
- [List all localizations for an in-app event](get-v1-appevents-_id_-localizations.md): Get a list of all localizations for a specific in-app event.
- [List localization IDs for an app event](get-v1-appevents-_id_-relationships-localizations.md)
- [List all in-app events for an app](get-v1-apps-_id_-appevents.md): Get a list of in-app events for a specific app.
- [Modify an in-app event](patch-v1-appevents-_id_.md): Update the metadata for a specific in-app event.
- [Create an in-app event](post-v1-appevents.md): Create a new in-app event for your app.
