> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-clip-header-images](https://developer.apple.com/documentation/appstoreconnectapi/app-clip-header-images)

# App Clip Header Images

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Read and manage image assets that appear on the App Clip card.

<a id="overview"></a>

## Overview

The `appClipHeaderImages` resource represents the image that appears on the App Clip card. Use it to read the image you provided for use on the App Clip card, to add new imagery, to update image information, and to delete an existing image.

## Topics

### Managing App Clip Card Images

- [Read the app clip card image](get-v1-appclipheaderimages-_id_.md): Get the image that appears on the App Clip card of a default App Clip experience.
- [Create an app clip card image for a default app clip experience](post-v1-appclipheaderimages.md): Reserve an image asset that appears on the App Clip card of a default App Clip experience.
- [Modify an app clip card image](patch-v1-appclipheaderimages-_id_.md): Change the image that appears on the App Clip card of a default App Clip experience.
- [Delete a default app clip experience image](delete-v1-appclipheaderimages-_id_.md): Delete the image asset that appears on the App Clip card for a default App Clip experience.

### Objects

- [AppClipHeaderImage](appclipheaderimage.md): The image displayed on the App Clip card for a default App Clip experience, uploaded as part of App Clip configuration.
- [AppClipHeaderImageResponse](appclipheaderimageresponse.md): A response containing a single header image for a default App Clip experience.
- [AppClipHeaderImageCreateRequest](appclipheaderimagecreaterequest.md): The request body you use to reserve an image asset that appears on the App Clip card of a default App Clip experience.
- [AppClipHeaderImageUpdateRequest](appclipheaderimageupdaterequest.md): The request body you use to commit the image asset for a default App Clip experience.

## See Also

### Managing Default App Clip Experience Metadata

- [Default App Clip Experience Localizations](default-app-clip-experience-localizations.md): Read and manage the metadata of your default App Clip experience.
