> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideo

# AppAssetLibraryVideo

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A video asset uploaded to an app’s asset library that you can reuse across App Store surfaces through placements.

## Declaration

```
object AppAssetLibraryVideo
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryVideos`
- `id` — `string` (required):
- `attributes` — `*`: **Allowed types:** `AppAssetLibraryVideoAwaitingUploadAttributes`, `AppAssetLibraryVideoUploadCompleteAttributes`, `AppAssetLibraryVideoFailedAttributes`, `AppAssetLibraryVideoCommonAttributes`, `AppAssetLibraryVideoCommonAttributes`, `AppAssetLibraryVideoReadyForReviewAttributes`, `AppAssetLibraryVideoWaitingForReviewAttributes`, `AppAssetLibraryVideoInReviewAttributes`, `AppAssetLibraryVideoAcceptedAttributes`, `AppAssetLibraryVideoApprovedAttributes`, `AppAssetLibraryVideoRejectedAttributes`, `AppAssetLibraryVideoArchivedAttributes`
- `relationships` — `AppAssetLibraryVideo.Relationships`:
- `links` — `ResourceLinks`:

## Mentioned In

- [Placing assets on your App Store surfaces](placing-assets-on-your-app-store-surfaces.md)

## Topics

### Objects

- [AppAssetLibraryVideo.Relationships](appassetlibraryvideo/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [AppAssetLibraryMediaType](appassetlibrarymediatype.md): String that represents the media type of an app asset library asset.
- [AppAssetLibraryVideoCreateRequest](appassetlibraryvideocreaterequest.md): The request body you use to create an app asset library video.
- [AppAssetLibraryVideoUpdateRequest](appassetlibraryvideoupdaterequest.md): The request body you use to update an app asset library video.
- [AppAssetLibraryVideoResponse](appassetlibraryvideoresponse.md): The response body for endpoints that create, read, or modify an app asset library video.
- [AppAssetLibraryVideoPlacementsLinkagesResponse](appassetlibraryvideoplacementslinkagesresponse.md): A response body that contains a list of related resource IDs.
