> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideoresponse

# AppAssetLibraryVideoResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The response body for endpoints that create, read, or modify an app asset library video.

## Declaration

```
object AppAssetLibraryVideoResponse
```

## Properties

- `data` — `AppAssetLibraryVideo` (required):
- `included` — `[AppAssetLibraryPlacement]`:
- `links` — `DocumentLinks` (required):

## See Also

### Objects and types

- [AppAssetLibraryMediaType](appassetlibrarymediatype.md): String that represents the media type of an app asset library asset.
- [AppAssetLibraryVideo](appassetlibraryvideo.md): A video asset uploaded to an app’s asset library that you can reuse across App Store surfaces through placements.
- [AppAssetLibraryVideoCreateRequest](appassetlibraryvideocreaterequest.md): The request body you use to create an app asset library video.
- [AppAssetLibraryVideoUpdateRequest](appassetlibraryvideoupdaterequest.md): The request body you use to update an app asset library video.
- [AppAssetLibraryVideoPlacementsLinkagesResponse](appassetlibraryvideoplacementslinkagesresponse.md): A response body that contains a list of related resource IDs.
