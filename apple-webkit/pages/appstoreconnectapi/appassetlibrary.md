> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibrary

# AppAssetLibrary

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The per-app library that holds an app’s reusable image and video assets.

## Declaration

```
object AppAssetLibrary
```

## Properties

- `type` — `string` (required): **Allowed values:** `appAssetLibraries`
- `id` — `string` (required):
- `relationships` — `AppAssetLibrary.Relationships`:
- `links` — `ResourceLinks`:

## Topics

### Objects

- [AppAssetLibrary.Relationships](appassetlibrary/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [AppAssetLibraryResponse](appassetlibraryresponse.md): The response body for endpoints that read an app’s asset library.
- [AppAssetLibraryImagesResponse](appassetlibraryimagesresponse.md): The response body for endpoints that list the image assets in an app’s asset library.
- [AppAssetLibraryImagesLinkagesResponse](appassetlibraryimageslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [AppAssetLibraryVideosResponse](appassetlibraryvideosresponse.md): The response body for endpoints that list the video assets in an app’s asset library.
- [AppAssetLibraryVideosLinkagesResponse](appassetlibraryvideoslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [AppAssetLibraryAssetCategory](appassetlibraryassetcategory.md): String that represents the category of an app asset library asset.
- [AppAssetLibraryAssetState](appassetlibraryassetstate.md): String that represents the state of an app asset library asset.
- [AppAssetLibraryDisplayClass](appassetlibrarydisplayclass.md): String that represents the display class of an app asset library asset.
- [AppAssetLibraryFeature](appassetlibraryfeature.md): String that represents the App Store feature an app asset library asset supports.
- [AppAssetLibraryMediaType](appassetlibrarymediatype.md): String that represents the media type of an app asset library asset.
