> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appclipadvancedexperienceimages](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appclipadvancedexperienceimages)

# Create an app clip card image for an advanced app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Reserve an image asset that appears on the App Clip card of an advanced App Clip experience.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appClipAdvancedExperienceImages
```

## HTTP Body

Content type: `application/json`

Type: `AppClipAdvancedExperienceImageCreateRequest`

The request body you use to reserve an image asset for an advanced App Clip experience.

## Response Codes

- `201` Created — `AppClipAdvancedExperienceImageResponse`: The request completed successfully and a new Advanced App Clip Experience Images resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing Images for Advanced App Clip Experiences

- [Read image information for an advanced app clip experience](get-v1-appclipadvancedexperienceimages-_id_.md): Get information about the image that appears on the App Clip card of an advanced App Clip experience.
- [Modify the image for an advanced app clip experience](patch-v1-appclipadvancedexperienceimages-_id_.md): Update image information or commit the image asset of an advanced App Clip experience.
