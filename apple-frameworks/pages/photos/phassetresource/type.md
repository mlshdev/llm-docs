> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetresource/type

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
- [contentType](contenttype.md): The content type of the data associated with this asset resource
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](datasize-5lxva.md): The size of the resource in bytes

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
- [contentType](contenttype.md): The content type of the data associated with this asset resource
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes
