> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appclipheaderimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appclipheaderimages-_id_)

# Modify an app clip card image

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Change the image that appears on the App Clip card of a default App Clip experience.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appClipHeaderImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app clip header image resource ID from the [Create an app clip card image for a default app clip experience](post-v1-appclipheaderimages.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppClipHeaderImageUpdateRequest`

The request body you use to update the image asset of an App Clip experience.

## Response Codes

- `200` OK — `AppClipHeaderImageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing App Clip Card Images

- [Read the app clip card image](get-v1-appclipheaderimages-_id_.md): Get the image that appears on the App Clip card of a default App Clip experience.
- [Create an app clip card image for a default app clip experience](post-v1-appclipheaderimages.md): Reserve an image asset that appears on the App Clip card of a default App Clip experience.
- [Delete a default app clip experience image](delete-v1-appclipheaderimages-_id_.md): Delete the image asset that appears on the App Clip card for a default App Clip experience.
