> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperienceimageresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperienceimageresponse)

# AppClipAdvancedExperienceImageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a single image for an App Clip advanced experience card.

## Declaration

```
object AppClipAdvancedExperienceImageResponse
```

## Properties

- `data` — `AppClipAdvancedExperienceImage` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppClipAdvancedExperienceImage](appclipadvancedexperienceimage.md): The image displayed on the App Clip card for an advanced App Clip experience, shown when a user scans an NFC tag, QR code, or location-based trigger.
- [AppClipAdvancedExperienceImageCreateRequest](appclipadvancedexperienceimagecreaterequest.md): The request body you use to reserve an image asset for an advanced App Clip experience.
- [AppClipAdvancedExperienceImageUpdateRequest](appclipadvancedexperienceimageupdaterequest.md): The request body you use to commit the image asset for an advanced App Clip experience.
