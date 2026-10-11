> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideocommonattributes

# AppAssetLibraryVideoCommonAttributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The attributes common to an app asset library video in any state.

## Declaration

```
object AppAssetLibraryVideoCommonAttributes
```

## Properties

- `category` — `AppAssetLibraryAssetCategory`: The category that determines how you can use the asset across your App Store content.
- `createdDate` — `date-time`: The date and time when App Store Connect created the resource.
- `lastModifiedDate` — `date-time`: The date and time when App Store Connect last modified the resource.
- `fileName` — `string`: The name of the asset file you upload.
- `fileSize` — `int64`: The size, in bytes, of the asset file.
  **Minimum:** `1`  
  **Maximum:** `9007199254740991`
- `previewFrameImage` — `PreviewFrameImage`: The still image that represents the video before playback.
- `previewFrameTimeCode` — `string`: The timecode of the video frame to use as the preview image.
- `referenceName` — `string`: A name that identifies the asset within its asset library.
- `specId` — `string`: The identifier of the specification to which the asset conforms; App Store Connect populates this identifier after it validates the upload.
- `state` — `AppAssetLibraryAssetState` (required): The current state of the resource in App Store Connect.
- `stateDetails` — `[StateDetail]`: Additional details about the current state, such as validation errors.
- `videoAsset` — `uri`: The URL for uploading or downloading the video file.

## Relationships

### Inherited By

- [AppAssetLibraryVideoAcceptedAttributes](appassetlibraryvideoacceptedattributes.md)
- [AppAssetLibraryVideoApprovedAttributes](appassetlibraryvideoapprovedattributes.md)
- [AppAssetLibraryVideoArchivedAttributes](appassetlibraryvideoarchivedattributes.md)
- [AppAssetLibraryVideoAwaitingUploadAttributes](appassetlibraryvideoawaitinguploadattributes.md)
- [AppAssetLibraryVideoFailedAttributes](appassetlibraryvideofailedattributes.md)
- [AppAssetLibraryVideoInReviewAttributes](appassetlibraryvideoinreviewattributes.md)
- [AppAssetLibraryVideoReadyForReviewAttributes](appassetlibraryvideoreadyforreviewattributes.md)
- [AppAssetLibraryVideoRejectedAttributes](appassetlibraryvideorejectedattributes.md)
- [AppAssetLibraryVideoUploadCompleteAttributes](appassetlibraryvideouploadcompleteattributes.md)
- [AppAssetLibraryVideoWaitingForReviewAttributes](appassetlibraryvideowaitingforreviewattributes.md)

## See Also

### Asset state attributes

- [AppAssetLibraryVideoAwaitingUploadAttributes](appassetlibraryvideoawaitinguploadattributes.md): The attributes of an app asset library video that’s in the awaiting upload state.
- [AppAssetLibraryVideoUploadCompleteAttributes](appassetlibraryvideouploadcompleteattributes.md): The attributes of an app asset library video that’s in the upload complete state.
- [AppAssetLibraryVideoReadyForReviewAttributes](appassetlibraryvideoreadyforreviewattributes.md): The attributes of an app asset library video that’s in the ready for review state.
- [AppAssetLibraryVideoWaitingForReviewAttributes](appassetlibraryvideowaitingforreviewattributes.md): The attributes of an app asset library video that’s in the waiting for review state.
- [AppAssetLibraryVideoInReviewAttributes](appassetlibraryvideoinreviewattributes.md): The attributes of an app asset library video that’s in the in review state.
- [AppAssetLibraryVideoAcceptedAttributes](appassetlibraryvideoacceptedattributes.md): The attributes of an app asset library video that’s in the accepted state.
- [AppAssetLibraryVideoApprovedAttributes](appassetlibraryvideoapprovedattributes.md): The attributes of an app asset library video that’s in the approved state.
- [AppAssetLibraryVideoRejectedAttributes](appassetlibraryvideorejectedattributes.md): The attributes of an app asset library video that’s in the rejected state.
- [AppAssetLibraryVideoFailedAttributes](appassetlibraryvideofailedattributes.md): The attributes of an app asset library video that’s in the failed state.
- [AppAssetLibraryVideoArchivedAttributes](appassetlibraryvideoarchivedattributes.md): The attributes of an app asset library video that’s in the archived state.
