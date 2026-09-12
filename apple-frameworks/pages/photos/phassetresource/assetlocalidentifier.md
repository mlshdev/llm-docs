> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource/assetlocalidentifier](https://developer.apple.com/documentation/photos/phassetresource/assetlocalidentifier)

# assetLocalIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The unique identifier the system associates for a local asset object.

## Declaration

```swift
var assetLocalIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value corresponds to the [localIdentifier](../phobject/localidentifier.md) property of the [PHAsset](../phasset.md) object that owns this asset resource. If you’ve obtained an asset resource without a reference to its owning asset, use the [fetchAssets(withLocalIdentifiers:options:)](../phasset/fetchassets%28withlocalidentifiers_options_%29.md) method with this identifier to retrieve the correct [PHAsset](../phasset.md) object.

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](datasize-5lxva.md): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)

# assetLocalIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The unique identifier the system associates for a local asset object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * assetLocalIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property’s value corresponds to the [localIdentifier](../phobject/localidentifier.md) property of the [PHAsset](../phasset.md) object that owns this asset resource. If you’ve obtained an asset resource without a reference to its owning asset, use the [fetchAssetsWithLocalIdentifiers:options:](../phasset/fetchassets%28withlocalidentifiers_options_%29.md) method with this identifier to retrieve the correct [PHAsset](../phasset.md) object.

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)
