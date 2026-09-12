> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/advanced-app-clip-experience-images](https://developer.apple.com/documentation/appstoreconnectapi/advanced-app-clip-experience-images)

# Advanced App Clip Experience Images

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Read, create, and update imagery that appears on the App Clip card for advanced App Clip experiences.

<a id="overview"></a>

## Overview

The `appClipAdvancedExperienceImages` resource represents an image asset that appears on the App Clip card for your advanced App Clip experiences. Use this resource to associate your advanced experience with new imagery or to update already associated imagery.

## Topics

### Managing Images for Advanced App Clip Experiences

- [Read image information for an advanced app clip experience](get-v1-appclipadvancedexperienceimages-_id_.md): Get information about the image that appears on the App Clip card of an advanced App Clip experience.
- [Create an app clip card image for an advanced app clip experience](post-v1-appclipadvancedexperienceimages.md): Reserve an image asset that appears on the App Clip card of an advanced App Clip experience.
- [Modify the image for an advanced app clip experience](patch-v1-appclipadvancedexperienceimages-_id_.md): Update image information or commit the image asset of an advanced App Clip experience.

### Objects

- [AppClipAdvancedExperienceImage](appclipadvancedexperienceimage.md): The image displayed on the App Clip card for an advanced App Clip experience, shown when a user scans an NFC tag, QR code, or location-based trigger.
- [AppClipAdvancedExperienceImageResponse](appclipadvancedexperienceimageresponse.md): A response containing a single image for an App Clip advanced experience card.
- [AppClipAdvancedExperienceImageCreateRequest](appclipadvancedexperienceimagecreaterequest.md): The request body you use to reserve an image asset for an advanced App Clip experience.
- [AppClipAdvancedExperienceImageUpdateRequest](appclipadvancedexperienceimageupdaterequest.md): The request body you use to commit the image asset for an advanced App Clip experience.
