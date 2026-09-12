> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appclipheaderimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appclipheaderimages)

# Create an app clip card image for a default app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Reserve an image asset that appears on the App Clip card of a default App Clip experience.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appClipHeaderImages
```

## HTTP Body

Content type: `application/json`

Type: `AppClipHeaderImageCreateRequest`

The request body you use to create an App Clip header image.

## Response Codes

- `201` Created — `AppClipHeaderImageResponse`: The request completed successfully and a new App Clip Header Images resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing App Clip Card Images

- [Read the app clip card image](get-v1-appclipheaderimages-_id_.md): Get the image that appears on the App Clip card of a default App Clip experience.
- [Modify an app clip card image](patch-v1-appclipheaderimages-_id_.md): Change the image that appears on the App Clip card of a default App Clip experience.
- [Delete a default app clip experience image](delete-v1-appclipheaderimages-_id_.md): Delete the image asset that appears on the App Clip card for a default App Clip experience.
