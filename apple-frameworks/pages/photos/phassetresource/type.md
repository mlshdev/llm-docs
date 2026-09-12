> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource/type](https://developer.apple.com/documentation/photos/phassetresource/type)

# type (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The relationship of an asset resource to its owning asset.

## Declaration

```swift
var type: PHAssetResourceType { get }
```

<a id="Discussion"></a>

## Discussion

An asset can contain multiple resources, and different resources contribute to the asset in different ways. For details and examples, see [PHAssetResourceType](../phassetresourcetype.md).

## See Also

### Inspecting an Asset Resource

- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](datasize-5lxva.md): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)

# type (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The relationship of an asset resource to its owning asset.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHAssetResourceType type;
```

<a id="Discussion"></a>

## Discussion

An asset can contain multiple resources, and different resources contribute to the asset in different ways. For details and examples, see [PHAssetResourceType](../phassetresourcetype.md).

## See Also

### Inspecting an Asset Resource

- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)
