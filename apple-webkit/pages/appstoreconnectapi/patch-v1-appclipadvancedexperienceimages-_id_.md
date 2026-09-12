> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appclipadvancedexperienceimages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appclipadvancedexperienceimages-_id_)

# Modify the image for an advanced app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Update image information or commit the image asset of an advanced App Clip experience.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appClipAdvancedExperienceImages/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the advanced App Clip experience image resource ID from the [Create an app clip card image for an advanced app clip experience](post-v1-appclipadvancedexperienceimages.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppClipAdvancedExperienceImageUpdateRequest`

The request body you use to update the image asset for an advanced App Clip experience.

## Response Codes

- `200` OK — `AppClipAdvancedExperienceImageResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Images for Advanced App Clip Experiences

- [Read image information for an advanced app clip experience](get-v1-appclipadvancedexperienceimages-_id_.md): Get information about the image that appears on the App Clip card of an advanced App Clip experience.
- [Create an app clip card image for an advanced app clip experience](post-v1-appclipadvancedexperienceimages.md): Reserve an image asset that appears on the App Clip card of an advanced App Clip experience.
