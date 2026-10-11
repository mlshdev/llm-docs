> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryimage

# AppAssetLibraryImage

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

An image asset uploaded to an app’s asset library that you can reuse across App Store surfaces through placements.

## Declaration

```
object AppAssetLibraryImage
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraryImages`
- `id` — `string` (required):
- `attributes` — `*`: **Allowed types:** `AppAssetLibraryImageAwaitingUploadAttributes`, `AppAssetLibraryImageUploadCompleteAttributes`, `AppAssetLibraryImageFailedAttributes`, `AppAssetLibraryImageCommonAttributes`, `AppAssetLibraryImageCommonAttributes`, `AppAssetLibraryImageReadyForReviewAttributes`, `AppAssetLibraryImageWaitingForReviewAttributes`, `AppAssetLibraryImageInReviewAttributes`, `AppAssetLibraryImageAcceptedAttributes`, `AppAssetLibraryImageApprovedAttributes`, `AppAssetLibraryImageRejectedAttributes`, `AppAssetLibraryImageArchivedAttributes`
- `relationships` — `AppAssetLibraryImage.Relationships`:
- `links` — `ResourceLinks`:

## Mentioned In

- [Placing assets on your App Store surfaces](placing-assets-on-your-app-store-surfaces.md)

## Topics

### Objects

- [AppAssetLibraryImage.Relationships](appassetlibraryimage/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [AppAssetLibraryImageCreateRequest](appassetlibraryimagecreaterequest.md): The request body you use to create an app asset library image.
- [AppAssetLibraryImageUpdateRequest](appassetlibraryimageupdaterequest.md): The request body you use to update an app asset library image.
- [AppAssetLibraryImageResponse](appassetlibraryimageresponse.md): The response body for endpoints that create, read, or modify an app asset library image.
- [AppAssetLibraryImagePlacementsLinkagesResponse](appassetlibraryimageplacementslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [AppAssetLibraryMediaType](appassetlibrarymediatype.md): String that represents the media type of an app asset library asset.
