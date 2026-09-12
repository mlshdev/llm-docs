> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipheaderimageresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipheaderimageresponse)

# AppClipHeaderImageResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing a single header image for a default App Clip experience.

## Declaration

```
object AppClipHeaderImageResponse
```

## Properties

- `data` — `AppClipHeaderImage` (required): The resource data.
- `included` — `[AppClipDefaultExperienceLocalization]`: The requested relationship data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppClipHeaderImage](appclipheaderimage.md): The image displayed on the App Clip card for a default App Clip experience, uploaded as part of App Clip configuration.
- [AppClipHeaderImageCreateRequest](appclipheaderimagecreaterequest.md): The request body you use to reserve an image asset that appears on the App Clip card of a default App Clip experience.
- [AppClipHeaderImageUpdateRequest](appclipheaderimageupdaterequest.md): The request body you use to commit the image asset for a default App Clip experience.
