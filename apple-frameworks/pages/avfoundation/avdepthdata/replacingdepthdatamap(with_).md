> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/replacingdepthdatamap(with:)](https://developer.apple.com/documentation/avfoundation/avdepthdata/replacingdepthdatamap(with:))

# replacingDepthDataMap(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a derivative depth data object by replacing the depth data map.

## Declaration

```swift
func replacingDepthDataMap(with pixelBuffer: CVPixelBuffer) throws -> Self
```

## Parameters

- `pixelBuffer`: A pixel buffer containing depth or disparity information in a compatible format.

<a id="return-value"></a>

## Return Value

A new depth data object containing the pixel buffer.

<a id="Discussion"></a>

## Discussion

If you apply simple transforms to media containing depth data, you can use the [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md) method to apply parallel transforms to the corresponding depth data. More complex transforms and edits require creating a derivative depth map reflecting whatever edits you make to the corresponding image. In such cases, use this [replacingDepthDataMap(with:)](replacingdepthdatamap%28with_%29.md) method to create a derivative depth data object.

> **Note**

>  This method cannot ensure correspondence between an arbitrarily edited depth map and the camera parameters that generated the initial depth map, so the new depth data object’s [cameraCalibrationData](cameracalibrationdata.md) property is always `nil`.

## See Also

### Transforming and processing

- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a derivative depth data object by mirroring or rotating it to the specified orientation.
- [converting(toDepthDataType:)](converting%28todepthdatatype_%29.md): Returns a derivative depth data object by converting the depth data map to the specified data type.
- [availableDepthDataTypes](availabledepthdatatypes-3ifx1.md): The list of depth data formats to which you can convert this depth data.

# depthDataByReplacingDepthDataMapWithPixelBuffer:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a derivative depth data object by replacing the depth data map.

## Declaration

```objectivec
- (instancetype) depthDataByReplacingDepthDataMapWithPixelBuffer:(CVPixelBufferRef) pixelBuffer error:(NSError **) outError;
```

## Parameters

- `pixelBuffer`: A pixel buffer containing depth or disparity information in a compatible format.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="return-value"></a>

## Return Value

A new depth data object containing the pixel buffer.

<a id="Discussion"></a>

## Discussion

If you apply simple transforms to media containing depth data, you can use the [depthDataByApplyingExifOrientation:](applyingexiforientation%28__%29.md) method to apply parallel transforms to the corresponding depth data. More complex transforms and edits require creating a derivative depth map reflecting whatever edits you make to the corresponding image. In such cases, use this [depthDataByReplacingDepthDataMapWithPixelBuffer:error:](replacingdepthdatamap%28with_%29.md) method to create a derivative depth data object.

> **Note**

>  This method cannot ensure correspondence between an arbitrarily edited depth map and the camera parameters that generated the initial depth map, so the new depth data object’s [cameraCalibrationData](cameracalibrationdata.md) property is always `nil`.

## See Also

### Transforming and processing

- [depthDataByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a derivative depth data object by mirroring or rotating it to the specified orientation.
- [depthDataByConvertingToDepthDataType:](converting%28todepthdatatype_%29.md): Returns a derivative depth data object by converting the depth data map to the specified data type.
- [availableDepthDataTypes](availabledepthdatatypes-472g0.md): The list of depth data formats to which you can convert this depth data.
