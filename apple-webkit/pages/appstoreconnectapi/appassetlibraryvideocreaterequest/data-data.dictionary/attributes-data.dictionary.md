> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideocreaterequest/data-data.dictionary/attributes-data.dictionary

# AppAssetLibraryVideoCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The attributes you set that describe the new app asset library video resource.

## Declaration

```
object AppAssetLibraryVideoCreateRequest.Data.Attributes
```

## Properties

- `category` — `AppAssetLibraryAssetCategory` (required): The category that determines how you can use the asset across your App Store content.
- `fileName` — `string` (required): The name of the asset file you upload.
- `fileSize` — `int64` (required): The size, in bytes, of the asset file.
  **Minimum:** `1`  
  **Maximum:** `9007199254740991`
- `previewFrameTimeCode` — `string`: The timecode of the video frame to use as the preview image.
- `referenceName` — `string`: A name that identifies the asset within its asset library.

## See Also

### Objects

- [AppAssetLibraryVideoCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
