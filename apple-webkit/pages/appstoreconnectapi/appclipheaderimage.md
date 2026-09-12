> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipheaderimage](https://developer.apple.com/documentation/appstoreconnectapi/appclipheaderimage)

# AppClipHeaderImage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The image displayed on the App Clip card for a default App Clip experience, uploaded as part of App Clip configuration.

## Declaration

```
object AppClipHeaderImage
```

## Properties

- `attributes` — `AppClipHeaderImage.Attributes`: The attributes that describe the App Clip Header Images resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an App Clip Header Images resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `AppClipHeaderImage.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipHeaderImages`

## Topics

### Objects

- [AppClipHeaderImage.Attributes](appclipheaderimage/attributes-data.dictionary.md): The attributes that describe the image that appears on the App Clip card of a default App Clip experience.
- [AppClipHeaderImage.Relationships](appclipheaderimage/relationships-data.dictionary.md): The relationships of the App Clip Header Images resource you included in the request and those on which you can operate.

## See Also

### Objects

- [AppClipHeaderImageResponse](appclipheaderimageresponse.md): A response containing a single header image for a default App Clip experience.
- [AppClipHeaderImageCreateRequest](appclipheaderimagecreaterequest.md): The request body you use to reserve an image asset that appears on the App Clip card of a default App Clip experience.
- [AppClipHeaderImageUpdateRequest](appclipheaderimageupdaterequest.md): The request body you use to commit the image asset for a default App Clip experience.
