> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcetype/alternatephoto](https://developer.apple.com/documentation/photos/phassetresourcetype/alternatephoto)

# PHAssetResourceType.alternatePhoto (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Provides photo data that isn’t the primary form of its asset.

## Declaration

```swift
case alternatePhoto
```

<a id="Discussion"></a>

## Discussion

For example, a photo asset imported from an external camera may contain both a JPEG file (the primary form of the asset) and a RAW file (the alternate photo).

## See Also

### Resource Types

- [PHAssetResourceType.photo](photo.md): Provides the original photo data for its asset.
- [PHAssetResourceType.video](video.md): Provides the original video data for its asset.
- [PHAssetResourceType.audio](audio.md): Provides the original audio data for its asset.
- [PHAssetResourceType.fullSizePhoto](fullsizephoto.md): Provides a modified version of the original photo asset.
- [PHAssetResourceType.fullSizeVideo](fullsizevideo.md): Provides a modified version of the original video asset.
- [PHAssetResourceType.adjustmentData](adjustmentdata.md): Provides data for use in reconstructing recent edits to its asset.
- [PHAssetResourceType.adjustmentBasePhoto](adjustmentbasephoto.md): Provides an unaltered version of its photo asset for use in for use in reconstructing recent edits.
- [PHAssetResourceType.pairedVideo](pairedvideo.md): Provides the original video data component of a Live Photo asset.
- [PHAssetResourceType.fullSizePairedVideo](fullsizepairedvideo.md): Provides the current video data component of a Live Photo asset.
- [PHAssetResourceType.adjustmentBaseVideo](adjustmentbasevideo.md): Provides an unaltered version of its video asset.
- [PHAssetResourceType.adjustmentBasePairedVideo](adjustmentbasepairedvideo.md): Provides an unaltered version of the video data for a Live Photo asset for use in reconstructing recent edits.

# PHAssetResourceTypeAlternatePhoto (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Provides photo data that isn’t the primary form of its asset.

## Declaration

```objectivec
PHAssetResourceTypeAlternatePhoto
```

<a id="Discussion"></a>

## Discussion

For example, a photo asset imported from an external camera may contain both a JPEG file (the primary form of the asset) and a RAW file (the alternate photo).

## See Also

### Resource Types

- [PHAssetResourceTypePhoto](photo.md): Provides the original photo data for its asset.
- [PHAssetResourceTypeVideo](video.md): Provides the original video data for its asset.
- [PHAssetResourceTypeAudio](audio.md): Provides the original audio data for its asset.
- [PHAssetResourceTypeFullSizePhoto](fullsizephoto.md): Provides a modified version of the original photo asset.
- [PHAssetResourceTypeFullSizeVideo](fullsizevideo.md): Provides a modified version of the original video asset.
- [PHAssetResourceTypeAdjustmentData](adjustmentdata.md): Provides data for use in reconstructing recent edits to its asset.
- [PHAssetResourceTypeAdjustmentBasePhoto](adjustmentbasephoto.md): Provides an unaltered version of its photo asset for use in for use in reconstructing recent edits.
- [PHAssetResourceTypePairedVideo](pairedvideo.md): Provides the original video data component of a Live Photo asset.
- [PHAssetResourceTypeFullSizePairedVideo](fullsizepairedvideo.md): Provides the current video data component of a Live Photo asset.
- [PHAssetResourceTypeAdjustmentBaseVideo](adjustmentbasevideo.md): Provides an unaltered version of its video asset.
- [PHAssetResourceTypeAdjustmentBasePairedVideo](adjustmentbasepairedvideo.md): Provides an unaltered version of the video data for a Live Photo asset for use in reconstructing recent edits.
