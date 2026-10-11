> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideoslinkagesresponse

# AppAssetLibraryVideosLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

A response body that contains a list of related resource IDs.

## Declaration

```
object AppAssetLibraryVideosLinkagesResponse
```

## Properties

- `data` — `[AppAssetLibraryVideosLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [AppAssetLibraryVideosLinkagesResponse.Data](appassetlibraryvideoslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects and types

- [AppAssetLibrary](appassetlibrary.md): The per-app library that holds an app’s reusable image and video assets.
- [AppAssetLibraryResponse](appassetlibraryresponse.md): The response body for endpoints that read an app’s asset library.
- [AppAssetLibraryImagesResponse](appassetlibraryimagesresponse.md): The response body for endpoints that list the image assets in an app’s asset library.
- [AppAssetLibraryImagesLinkagesResponse](appassetlibraryimageslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [AppAssetLibraryVideosResponse](appassetlibraryvideosresponse.md): The response body for endpoints that list the video assets in an app’s asset library.
- [AppAssetLibraryAssetCategory](appassetlibraryassetcategory.md): String that represents the category of an app asset library asset.
- [AppAssetLibraryAssetState](appassetlibraryassetstate.md): String that represents the state of an app asset library asset.
- [AppAssetLibraryDisplayClass](appassetlibrarydisplayclass.md): String that represents the display class of an app asset library asset.
- [AppAssetLibraryFeature](appassetlibraryfeature.md): String that represents the App Store feature an app asset library asset supports.
- [AppAssetLibraryMediaType](appassetlibrarymediatype.md): String that represents the media type of an app asset library asset.
