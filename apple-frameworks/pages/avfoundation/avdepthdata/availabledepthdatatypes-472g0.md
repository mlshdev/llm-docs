> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdepthdata/availabledepthdatatypes-472g0](https://developer.apple.com/documentation/avfoundation/avdepthdata/availabledepthdatatypes-472g0)

# availableDepthDataTypes

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The list of depth data formats to which you can convert this depth data.

## Declaration

```objectivec
@property (readonly) NSArray<NSNumber *> * availableDepthDataTypes;
```

<a id="Discussion"></a>

## Discussion

Use the [depthDataByConvertingToDepthDataType:](converting%28todepthdatatype_%29.md) method to obtain a converted depth data object using one of the types in this list.

## See Also

### Transforming and processing

- [depthDataByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a derivative depth data object by mirroring or rotating it to the specified orientation.
- [depthDataByConvertingToDepthDataType:](converting%28todepthdatatype_%29.md): Returns a derivative depth data object by converting the depth data map to the specified data type.
- [depthDataByReplacingDepthDataMapWithPixelBuffer:error:](replacingdepthdatamap%28with_%29.md): Returns a derivative depth data object by replacing the depth data map.
