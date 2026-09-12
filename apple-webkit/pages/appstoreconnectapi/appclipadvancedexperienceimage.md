> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperienceimage](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperienceimage)

# AppClipAdvancedExperienceImage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The image displayed on the App Clip card for an advanced App Clip experience, shown when a user scans an NFC tag, QR code, or location-based trigger.

## Declaration

```
object AppClipAdvancedExperienceImage
```

## Properties

- `attributes` — `AppClipAdvancedExperienceImage.Attributes`: The attributes that describe the Advanced App Clip Experience Images resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an Advanced App Clip Experience Images resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipAdvancedExperienceImages`

## Topics

### Objects

- [AppClipAdvancedExperienceImage.Attributes](appclipadvancedexperienceimage/attributes-data.dictionary.md): The attributes that describe an Advanced App Clip Experience Images resource.

## See Also

### Objects

- [AppClipAdvancedExperienceImageResponse](appclipadvancedexperienceimageresponse.md): A response containing a single image for an App Clip advanced experience card.
- [AppClipAdvancedExperienceImageCreateRequest](appclipadvancedexperienceimagecreaterequest.md): The request body you use to reserve an image asset for an advanced App Clip experience.
- [AppClipAdvancedExperienceImageUpdateRequest](appclipadvancedexperienceimageupdaterequest.md): The request body you use to commit the image asset for an advanced App Clip experience.
