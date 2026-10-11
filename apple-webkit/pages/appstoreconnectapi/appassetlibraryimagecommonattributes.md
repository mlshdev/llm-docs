> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryimagecommonattributes

# AppAssetLibraryImageCommonAttributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The attributes common to an app asset library image in any state.

## Declaration

```
object AppAssetLibraryImageCommonAttributes
```

## Properties

- `category` — `AppAssetLibraryAssetCategory`: The category that determines how you can use the asset across your App Store content.
- `createdDate` — `date-time`: The date and time when App Store Connect created the resource.
- `lastModifiedDate` — `date-time`: The date and time when App Store Connect last modified the resource.
- `fileName` — `string`: The name of the asset file you upload.
- `fileSize` — `int64`: The size, in bytes, of the asset file.
  **Minimum:** `1`  
  **Maximum:** `9007199254740991`
- `imageAsset` — `ImageAsset`: The uploaded image, including its dimensions and the URLs for uploading and delivering the file.
- `referenceName` — `string`: A name that identifies the asset within its asset library.
- `specId` — `string`: The identifier of the specification to which the asset conforms; App Store Connect populates this identifier after it validates the upload.
- `state` — `AppAssetLibraryAssetState` (required): The current state of the resource in App Store Connect.
- `stateDetails` — `[StateDetail]`: Additional details about the current state, such as validation errors.

## Relationships

### Inherited By

- [AppAssetLibraryImageAcceptedAttributes](appassetlibraryimageacceptedattributes.md)
- [AppAssetLibraryImageApprovedAttributes](appassetlibraryimageapprovedattributes.md)
- [AppAssetLibraryImageArchivedAttributes](appassetlibraryimagearchivedattributes.md)
- [AppAssetLibraryImageAwaitingUploadAttributes](appassetlibraryimageawaitinguploadattributes.md)
- [AppAssetLibraryImageFailedAttributes](appassetlibraryimagefailedattributes.md)
- [AppAssetLibraryImageInReviewAttributes](appassetlibraryimageinreviewattributes.md)
- [AppAssetLibraryImageReadyForReviewAttributes](appassetlibraryimagereadyforreviewattributes.md)
- [AppAssetLibraryImageRejectedAttributes](appassetlibraryimagerejectedattributes.md)
- [AppAssetLibraryImageUploadCompleteAttributes](appassetlibraryimageuploadcompleteattributes.md)
- [AppAssetLibraryImageWaitingForReviewAttributes](appassetlibraryimagewaitingforreviewattributes.md)

## See Also

### Asset state attributes

- [AppAssetLibraryImageAwaitingUploadAttributes](appassetlibraryimageawaitinguploadattributes.md): The attributes of an app asset library image that’s in the awaiting upload state.
- [AppAssetLibraryImageUploadCompleteAttributes](appassetlibraryimageuploadcompleteattributes.md): The attributes of an app asset library image that’s in the upload complete state.
- [AppAssetLibraryImageReadyForReviewAttributes](appassetlibraryimagereadyforreviewattributes.md): The attributes of an app asset library image that’s in the ready for review state.
- [AppAssetLibraryImageWaitingForReviewAttributes](appassetlibraryimagewaitingforreviewattributes.md): The attributes of an app asset library image that’s in the waiting for review state.
- [AppAssetLibraryImageInReviewAttributes](appassetlibraryimageinreviewattributes.md): The attributes of an app asset library image that’s in the in review state.
- [AppAssetLibraryImageAcceptedAttributes](appassetlibraryimageacceptedattributes.md): The attributes of an app asset library image that’s in the accepted state.
- [AppAssetLibraryImageApprovedAttributes](appassetlibraryimageapprovedattributes.md): The attributes of an app asset library image that’s in the approved state.
- [AppAssetLibraryImageRejectedAttributes](appassetlibraryimagerejectedattributes.md): The attributes of an app asset library image that’s in the rejected state.
- [AppAssetLibraryImageFailedAttributes](appassetlibraryimagefailedattributes.md): The attributes of an app asset library image that’s in the failed state.
- [AppAssetLibraryImageArchivedAttributes](appassetlibraryimagearchivedattributes.md): The attributes of an app asset library image that’s in the archived state.
