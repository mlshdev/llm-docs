> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/converting(todepthdatatype:)](https://developer.apple.com/documentation/avfoundation/avdepthdata/converting(todepthdatatype:))

# converting(toDepthDataType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a derivative depth data object by converting the depth data map to the specified data type.

## Declaration

```swift
func converting(toDepthDataType depthDataType: OSType) -> Self
```

## Parameters

- `depthDataType`: The data type to convert to. This value must be one of the formats present in the [availableDepthDataTypes](availabledepthdatatypes-472g0.md) array.

<a id="return-value"></a>

## Return Value

A new, converted depth data object.

<a id="Discussion"></a>

## Discussion

This method raises an exception if you pass an invalid `depthDataType` value.

## See Also

### Transforming and processing

- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a derivative depth data object by mirroring or rotating it to the specified orientation.
- [availableDepthDataTypes](availabledepthdatatypes-3ifx1.md): The list of depth data formats to which you can convert this depth data.
- [replacingDepthDataMap(with:)](replacingdepthdatamap%28with_%29.md): Returns a derivative depth data object by replacing the depth data map.

# depthDataByConvertingToDepthDataType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a derivative depth data object by converting the depth data map to the specified data type.

## Declaration

```objectivec
- (instancetype) depthDataByConvertingToDepthDataType:(OSType) depthDataType;
```

## Parameters

- `depthDataType`: The data type to convert to. This value must be one of the formats present in the [availableDepthDataTypes](availabledepthdatatypes-472g0.md) array.

<a id="return-value"></a>

## Return Value

A new, converted depth data object.

<a id="Discussion"></a>

## Discussion

This method raises an exception if you pass an invalid `depthDataType` value.

## See Also

### Transforming and processing

- [depthDataByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a derivative depth data object by mirroring or rotating it to the specified orientation.
- [availableDepthDataTypes](availabledepthdatatypes-472g0.md): The list of depth data formats to which you can convert this depth data.
- [depthDataByReplacingDepthDataMapWithPixelBuffer:error:](replacingdepthdatamap%28with_%29.md): Returns a derivative depth data object by replacing the depth data map.
