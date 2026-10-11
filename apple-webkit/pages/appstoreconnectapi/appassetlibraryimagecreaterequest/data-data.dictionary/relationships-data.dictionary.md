> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/appassetlibraryimagecreaterequest/data-data.dictionary/relationships-data.dictionary

# AppAssetLibraryImageCreateRequest.Data.Relationships

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.5+

The relationships you include in the request and those on which you can operate.

## Declaration

```
object AppAssetLibraryImageCreateRequest.Data.Relationships
```

## Properties

- `assetLibrary` — `AppAssetLibraryImageCreateRequest.Data.Relationships.AssetLibrary` (required): The asset library that contains the asset.
- `placements` — `AppAssetLibraryImageCreateRequest.Data.Relationships.Placements`: The placements that position this asset across your App Store content.

## Topics

### Objects

- [AppAssetLibraryImageCreateRequest.Data.Relationships.AssetLibrary](relationships-data.dictionary/assetlibrary-data.dictionary.md): The asset library to associate with the new app asset library image.
- [AppAssetLibraryImageCreateRequest.Data.Relationships.Placements](relationships-data.dictionary/placements-data.dictionary.md): The placements to associate with the new app asset library image.

## See Also

### Objects

- [AppAssetLibraryImageCreateRequest.Data.Attributes](attributes-data.dictionary.md): The attributes you set that describe the new app asset library image resource.
