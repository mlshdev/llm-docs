> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/applyingexiforientation(_:)](https://developer.apple.com/documentation/avfoundation/avdepthdata/applyingexiforientation(_:))

# applyingExifOrientation(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a derivative depth data object by mirroring or rotating it to the specified orientation.

## Declaration

```swift
func applyingExifOrientation(_ exifOrientation: CGImagePropertyOrientation) -> Self
```

## Parameters

- `exifOrientation`: The image orientation to apply to the depth data map.

<a id="return-value"></a>

## Return Value

A new, transformed depth data object.

<a id="Discussion"></a>

## Discussion

When applying simple 90-degree rotation or mirroring edits to media containing depth data, you may use this method to create a derivative copy of the depth in which the specified orientation is applied to both the underlying pixel map data and the camera calibration data. This method throws an exception if you pass an unrecognized `exifOrientation` value.

A depth data object does not contain orientation metadata; this method assumes the data is in the default [CGImagePropertyOrientation.up](../../imageio/cgimagepropertyorientation/up.md) orientation and applies the transformation necessary to produce the orientation you specify.

## See Also

### Transforming and processing

- [converting(toDepthDataType:)](converting%28todepthdatatype_%29.md): Returns a derivative depth data object by converting the depth data map to the specified data type.
- [availableDepthDataTypes](availabledepthdatatypes-3ifx1.md): The list of depth data formats to which you can convert this depth data.
- [replacingDepthDataMap(with:)](replacingdepthdatamap%28with_%29.md): Returns a derivative depth data object by replacing the depth data map.

# depthDataByApplyingExifOrientation: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a derivative depth data object by mirroring or rotating it to the specified orientation.

## Declaration

```objectivec
- (instancetype) depthDataByApplyingExifOrientation:(CGImagePropertyOrientation) exifOrientation;
```

## Parameters

- `exifOrientation`: The image orientation to apply to the depth data map.

<a id="return-value"></a>

## Return Value

A new, transformed depth data object.

<a id="Discussion"></a>

## Discussion

When applying simple 90-degree rotation or mirroring edits to media containing depth data, you may use this method to create a derivative copy of the depth in which the specified orientation is applied to both the underlying pixel map data and the camera calibration data. This method throws an exception if you pass an unrecognized `exifOrientation` value.

A depth data object does not contain orientation metadata; this method assumes the data is in the default [kCGImagePropertyOrientationUp](../../imageio/cgimagepropertyorientation/up.md) orientation and applies the transformation necessary to produce the orientation you specify.

## See Also

### Transforming and processing

- [depthDataByConvertingToDepthDataType:](converting%28todepthdatatype_%29.md): Returns a derivative depth data object by converting the depth data map to the specified data type.
- [availableDepthDataTypes](availabledepthdatatypes-472g0.md): The list of depth data formats to which you can convert this depth data.
- [depthDataByReplacingDepthDataMapWithPixelBuffer:error:](replacingdepthdatamap%28with_%29.md): Returns a derivative depth data object by replacing the depth data map.
