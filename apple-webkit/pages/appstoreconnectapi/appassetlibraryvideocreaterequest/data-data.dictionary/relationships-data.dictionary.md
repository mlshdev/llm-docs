> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryvideocreaterequest/data-data.dictionary/relationships-data.dictionary

# AppAssetLibraryVideoCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The relationships you include in the request and those on which you can operate.

## Declaration

```
object AppAssetLibraryVideoCreateRequest.Data.Relationships
```

## Properties

- `assetLibrary` — `AppAssetLibraryVideoCreateRequest.Data.Relationships.AssetLibrary` (required): The asset library that contains the asset.
- `placements` — `AppAssetLibraryVideoCreateRequest.Data.Relationships.Placements`: The placements that position this asset across your App Store content.

## Topics

### Objects

- [AppAssetLibraryVideoCreateRequest.Data.Relationships.AssetLibrary](relationships-data.dictionary/assetlibrary-data.dictionary.md): The asset library to associate with the new app asset library video.
- [AppAssetLibraryVideoCreateRequest.Data.Relationships.Placements](relationships-data.dictionary/placements-data.dictionary.md): The placements to associate with the new app asset library video.

## See Also

### Objects

- [AppAssetLibraryVideoCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the new app asset library video resource.
