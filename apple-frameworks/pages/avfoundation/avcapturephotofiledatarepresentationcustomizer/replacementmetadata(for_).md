> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/replacementmetadata(for:)](https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/replacementmetadata(for:))

# replacementMetadata(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A callback in which you can provide replacement metadata or direct [AVCapturePhoto](../avcapturephoto.md) to strip existing metadata from the flattened file.

## Declaration

```swift
optional func replacementMetadata(for photo: AVCapturePhoto) -> [String : Any]?
```

## Parameters

- `photo`: The calling instance of [AVCapturePhoto](../avcapturephoto.md) whose file metadata you’re modifying.

<a id="return-value"></a>

## Return Value

A dictionary of keys and valyes from `CGImageProperties`. To preserve existing metadata, return `photo.metadata`. To strip existing metadata, return `nil`. To replace metadata, pass a replacement dictionary.

<a id="Discussion"></a>

## Discussion

This callback is optional. If your delegate doesn’t implement this callback, the existing metadata in the in-memory [AVCapturePhoto](../avcapturephoto.md) container is written directly to the file data representation.

## See Also

### Replacing or removing metadata

- [replacementEmbeddedThumbnailPixelBuffer(withPhotoFormat:for:)](replacementembeddedthumbnailpixelbuffer%28withphotoformat_for_%29.md): A callback in which you can provide a replacement embedded thumbnail image with compression settings, or strip the existing embedded thumbnail image from the flattened file.
- [replacementDepthData(for:)](replacementdepthdata%28for_%29.md): A callback in which you can provide replacement depth data or strip existing depth data from the file.
- [replacementPortraitEffectsMatte(for:)](replacementportraiteffectsmatte%28for_%29.md): A callback in which you can provide a replacement portrait effects matte, or strip the existing portrait effects matte from the file.
- [replacementSemanticSegmentationMatte(ofType:for:)](replacementsemanticsegmentationmatte%28oftype_for_%29.md): Replaces or removes the semantic segmentation matte of the specified type from the flattened file data representation.
- [replacementAppleProRAWCompressionSettings(for:defaultSettings:maximumBitDepth:)](replacementappleprorawcompressionsettings%28for_defaultsettings_maximumbitdepth_%29.md): Replaces the compression settings the system uses when writing Apple ProRAW data to a Linear DNG file.

# replacementMetadataForPhoto: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A callback in which you can provide replacement metadata or direct [AVCapturePhoto](../avcapturephoto.md) to strip existing metadata from the flattened file.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) replacementMetadataForPhoto:(AVCapturePhoto *) photo;
```

## Parameters

- `photo`: The calling instance of [AVCapturePhoto](../avcapturephoto.md) whose file metadata you’re modifying.

<a id="return-value"></a>

## Return Value

A dictionary of keys and valyes from `CGImageProperties`. To preserve existing metadata, return `photo.metadata`. To strip existing metadata, return `nil`. To replace metadata, pass a replacement dictionary.

<a id="Discussion"></a>

## Discussion

This callback is optional. If your delegate doesn’t implement this callback, the existing metadata in the in-memory [AVCapturePhoto](../avcapturephoto.md) container is written directly to the file data representation.

## See Also

### Replacing or removing metadata

- [replacementEmbeddedThumbnailPixelBufferWithPhotoFormat:forPhoto:](replacementembeddedthumbnailpixelbuffer%28withphotoformat_for_%29.md): A callback in which you can provide a replacement embedded thumbnail image with compression settings, or strip the existing embedded thumbnail image from the flattened file.
- [replacementDepthDataForPhoto:](replacementdepthdata%28for_%29.md): A callback in which you can provide replacement depth data or strip existing depth data from the file.
- [replacementPortraitEffectsMatteForPhoto:](replacementportraiteffectsmatte%28for_%29.md): A callback in which you can provide a replacement portrait effects matte, or strip the existing portrait effects matte from the file.
- [replacementSemanticSegmentationMatteOfType:forPhoto:](replacementsemanticsegmentationmatte%28oftype_for_%29.md): Replaces or removes the semantic segmentation matte of the specified type from the flattened file data representation.
- [replacementAppleProRAWCompressionSettingsForPhoto:defaultSettings:maximumBitDepth:](replacementappleprorawcompressionsettings%28for_defaultsettings_maximumbitdepth_%29.md): Replaces the compression settings the system uses when writing Apple ProRAW data to a Linear DNG file.
