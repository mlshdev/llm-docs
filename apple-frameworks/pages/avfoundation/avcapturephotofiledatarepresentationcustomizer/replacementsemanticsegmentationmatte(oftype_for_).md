> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte(oftype:for:)](https://developer.apple.com/documentation/avfoundation/avcapturephotofiledatarepresentationcustomizer/replacementsemanticsegmentationmatte(oftype:for:))

# replacementSemanticSegmentationMatte(ofType:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Replaces or removes the semantic segmentation matte of the specified type from the flattened file data representation.

## Declaration

```swift
optional func replacementSemanticSegmentationMatte(ofType semanticSegmentationMatteType: AVSemanticSegmentationMatte.MatteType, for photo: AVCapturePhoto) -> AVSemanticSegmentationMatte?
```

## Parameters

- `semanticSegmentationMatteType`: The type of semantic segmentation matte to be replaced or stripped.
- `photo`: The calling instance of [AVCapturePhoto](../avcapturephoto.md).

<a id="return-value"></a>

## Return Value

An instance of [AVSemanticSegmentationMatte](../avsemanticsegmentationmatte.md). To preserve the existing matte, return ````photo.```AVCapturePhoto/semanticSegmentationMatte(for:)``. To strip the existing one, return ````nil\`. To replace, provide a replacement [AVSemanticSegmentationMatte](../avsemanticsegmentationmatte.md) instance.

<a id="Discussion"></a>

## Discussion

This callback is optional. If your delegate doesn’t implement this callback, the existing semantic segmentation matte of the specified type in the in-memory [AVCapturePhoto](../avcapturephoto.md) container is written to the file data representation.

## See Also

### Replacing or removing metadata

- [replacementMetadata(for:)](replacementmetadata%28for_%29.md): A callback in which you can provide replacement metadata or direct [AVCapturePhoto](../avcapturephoto.md) to strip existing metadata from the flattened file.
- [replacementEmbeddedThumbnailPixelBuffer(withPhotoFormat:for:)](replacementembeddedthumbnailpixelbuffer%28withphotoformat_for_%29.md): A callback in which you can provide a replacement embedded thumbnail image with compression settings, or strip the existing embedded thumbnail image from the flattened file.
- [replacementDepthData(for:)](replacementdepthdata%28for_%29.md): A callback in which you can provide replacement depth data or strip existing depth data from the file.
- [replacementPortraitEffectsMatte(for:)](replacementportraiteffectsmatte%28for_%29.md): A callback in which you can provide a replacement portrait effects matte, or strip the existing portrait effects matte from the file.
- [replacementAppleProRAWCompressionSettings(for:defaultSettings:maximumBitDepth:)](replacementappleprorawcompressionsettings%28for_defaultsettings_maximumbitdepth_%29.md): Replaces the compression settings the system uses when writing Apple ProRAW data to a Linear DNG file.

# replacementSemanticSegmentationMatteOfType:forPhoto: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Replaces or removes the semantic segmentation matte of the specified type from the flattened file data representation.

## Declaration

```objectivec
- (AVSemanticSegmentationMatte *) replacementSemanticSegmentationMatteOfType:(AVSemanticSegmentationMatteType) semanticSegmentationMatteType forPhoto:(AVCapturePhoto *) photo;
```

## Parameters

- `semanticSegmentationMatteType`: The type of semantic segmentation matte to be replaced or stripped.
- `photo`: The calling instance of [AVCapturePhoto](../avcapturephoto.md).

<a id="return-value"></a>

## Return Value

An instance of [AVSemanticSegmentationMatte](../avsemanticsegmentationmatte.md). To preserve the existing matte, return ````photo.```AVCapturePhoto/semanticSegmentationMatte(for:)``. To strip the existing one, return ````nil\`. To replace, provide a replacement [AVSemanticSegmentationMatte](../avsemanticsegmentationmatte.md) instance.

<a id="Discussion"></a>

## Discussion

This callback is optional. If your delegate doesn’t implement this callback, the existing semantic segmentation matte of the specified type in the in-memory [AVCapturePhoto](../avcapturephoto.md) container is written to the file data representation.

## See Also

### Replacing or removing metadata

- [replacementMetadataForPhoto:](replacementmetadata%28for_%29.md): A callback in which you can provide replacement metadata or direct [AVCapturePhoto](../avcapturephoto.md) to strip existing metadata from the flattened file.
- [replacementEmbeddedThumbnailPixelBufferWithPhotoFormat:forPhoto:](replacementembeddedthumbnailpixelbuffer%28withphotoformat_for_%29.md): A callback in which you can provide a replacement embedded thumbnail image with compression settings, or strip the existing embedded thumbnail image from the flattened file.
- [replacementDepthDataForPhoto:](replacementdepthdata%28for_%29.md): A callback in which you can provide replacement depth data or strip existing depth data from the file.
- [replacementPortraitEffectsMatteForPhoto:](replacementportraiteffectsmatte%28for_%29.md): A callback in which you can provide a replacement portrait effects matte, or strip the existing portrait effects matte from the file.
- [replacementAppleProRAWCompressionSettingsForPhoto:defaultSettings:maximumBitDepth:](replacementappleprorawcompressionsettings%28for_defaultsettings_maximumbitdepth_%29.md): Replaces the compression settings the system uses when writing Apple ProRAW data to a Linear DNG file.
