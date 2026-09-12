> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource/uniformtypeidentifier](https://developer.apple.com/documentation/photos/phassetresource/uniformtypeidentifier)

# uniformTypeIdentifier (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The uniform type identifier for the asset resource’s image or video data.

> Use contentType instead

## Declaration

```swift
var uniformTypeIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](datasize-5lxva.md): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)

# uniformTypeIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The uniform type identifier for the asset resource’s image or video data.

> Use contentType instead

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * uniformTypeIdentifier;
```

<a id="Discussion"></a>

## Discussion

For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).

## See Also

### Inspecting an Asset Resource

- [type](type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](../phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [originalFilename](originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)
