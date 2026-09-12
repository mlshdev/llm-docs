> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceformat/supportedmaxphotodimensions](https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/supportedmaxphotodimensions)

# supportedMaxPhotoDimensions

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The maximum photo dimension this format supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSValue *> * supportedMaxPhotoDimensions;
```

<a id="Discussion"></a>

## Discussion

The array contains [NSValue](../../foundation/nsvalue.md) objects that hold a [CMVideoDimensions](../../coremedia/cmvideodimensions.md) structure.

## See Also

### Determining photo quality

- [highPhotoQualitySupported](../avcapturedevice/format/ishighphotoqualitysupported.md): A Boolean value that indicates whether this format supports high-quality capture with the current quality prioritization setting.
- [highestPhotoQualitySupported](../avcapturedevice/format/ishighestphotoqualitysupported.md): A Boolean value that indicates whether this format supports the highest photo quality that the platform delivers.
