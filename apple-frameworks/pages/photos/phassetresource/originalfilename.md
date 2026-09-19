> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetresource/originalfilename

# originalFilename (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The original filename of the asset resource from when it was created or imported.

> Use filename instead

## Declaration

```swift
var originalFilename: String { get }
```

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](datasize-5lxva.md): The size of the resource in bytes

# originalFilename (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The original filename of the asset resource from when it was created or imported.

> Use filename instead

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * originalFilename;
```

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes
