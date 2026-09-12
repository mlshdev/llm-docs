> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcetype](https://developer.apple.com/documentation/photos/phassetresourcetype)

# PHAssetResourceType (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Describes the relationship of an asset resource to its owning asset.

## Declaration

```swift
enum PHAssetResourceType
```

## Topics

### Resource Types

- [PHAssetResourceType.photo](phassetresourcetype/photo.md): Provides the original photo data for its asset.
- [PHAssetResourceType.video](phassetresourcetype/video.md): Provides the original video data for its asset.
- [PHAssetResourceType.audio](phassetresourcetype/audio.md): Provides the original audio data for its asset.
- [PHAssetResourceType.alternatePhoto](phassetresourcetype/alternatephoto.md): Provides photo data that isn’t the primary form of its asset.
- [PHAssetResourceType.fullSizePhoto](phassetresourcetype/fullsizephoto.md): Provides a modified version of the original photo asset.
- [PHAssetResourceType.fullSizeVideo](phassetresourcetype/fullsizevideo.md): Provides a modified version of the original video asset.
- [PHAssetResourceType.adjustmentData](phassetresourcetype/adjustmentdata.md): Provides data for use in reconstructing recent edits to its asset.
- [PHAssetResourceType.adjustmentBasePhoto](phassetresourcetype/adjustmentbasephoto.md): Provides an unaltered version of its photo asset for use in for use in reconstructing recent edits.
- [PHAssetResourceType.pairedVideo](phassetresourcetype/pairedvideo.md): Provides the original video data component of a Live Photo asset.
- [PHAssetResourceType.fullSizePairedVideo](phassetresourcetype/fullsizepairedvideo.md): Provides the current video data component of a Live Photo asset.
- [PHAssetResourceType.adjustmentBaseVideo](phassetresourcetype/adjustmentbasevideo.md): Provides an unaltered version of its video asset.
- [PHAssetResourceType.adjustmentBasePairedVideo](phassetresourcetype/adjustmentbasepairedvideo.md): Provides an unaltered version of the video data for a Live Photo asset for use in reconstructing recent edits.

### Enumeration Cases

- [PHAssetResourceType.photoProxy](phassetresourcetype/photoproxy.md)

### Initializers

- [init(rawValue:)](phassetresourcetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an Asset Resource

- [type](phassetresource/type.md): The relationship of an asset resource to its owning asset.
- [contentType](phassetresource/contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](phassetresource/assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](phassetresource/uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](phassetresource/originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](phassetresource/filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](phassetresource/pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](phassetresource/pixelwidth.md): The width of the resource, in pixels.
- [dataSize](phassetresource/datasize-5lxva.md): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)

# PHAssetResourceType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Describes the relationship of an asset resource to its owning asset.

## Declaration

```objectivec
enum PHAssetResourceType : NSInteger;
```

## Topics

### Resource Types

- [PHAssetResourceTypePhoto](phassetresourcetype/photo.md): Provides the original photo data for its asset.
- [PHAssetResourceTypeVideo](phassetresourcetype/video.md): Provides the original video data for its asset.
- [PHAssetResourceTypeAudio](phassetresourcetype/audio.md): Provides the original audio data for its asset.
- [PHAssetResourceTypeAlternatePhoto](phassetresourcetype/alternatephoto.md): Provides photo data that isn’t the primary form of its asset.
- [PHAssetResourceTypeFullSizePhoto](phassetresourcetype/fullsizephoto.md): Provides a modified version of the original photo asset.
- [PHAssetResourceTypeFullSizeVideo](phassetresourcetype/fullsizevideo.md): Provides a modified version of the original video asset.
- [PHAssetResourceTypeAdjustmentData](phassetresourcetype/adjustmentdata.md): Provides data for use in reconstructing recent edits to its asset.
- [PHAssetResourceTypeAdjustmentBasePhoto](phassetresourcetype/adjustmentbasephoto.md): Provides an unaltered version of its photo asset for use in for use in reconstructing recent edits.
- [PHAssetResourceTypePairedVideo](phassetresourcetype/pairedvideo.md): Provides the original video data component of a Live Photo asset.
- [PHAssetResourceTypeFullSizePairedVideo](phassetresourcetype/fullsizepairedvideo.md): Provides the current video data component of a Live Photo asset.
- [PHAssetResourceTypeAdjustmentBaseVideo](phassetresourcetype/adjustmentbasevideo.md): Provides an unaltered version of its video asset.
- [PHAssetResourceTypeAdjustmentBasePairedVideo](phassetresourcetype/adjustmentbasepairedvideo.md): Provides an unaltered version of the video data for a Live Photo asset for use in reconstructing recent edits.

### Enumeration Cases

- [PHAssetResourceTypePhotoProxy](phassetresourcetype/photoproxy.md)

## See Also

### Inspecting an Asset Resource

- [type](phassetresource/type.md): The relationship of an asset resource to its owning asset.
- [contentType](phassetresource/contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](phassetresource/assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](phassetresource/uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](phassetresource/originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](phassetresource/filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](phassetresource/pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](phassetresource/pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)
