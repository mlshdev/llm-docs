> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/ishighestphotoqualitysupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/ishighestphotoqualitysupported)

# isHighestPhotoQualitySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether this format supports the highest photo quality that the platform delivers.

## Declaration

```swift
var isHighestPhotoQualitySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The simplest way to capture the highest quality photos is to set [photo](../../avcapturesession/preset/photo.md) as your session’s preset. If you’re instead manually setting the capture device’s [activeFormat](../activeformat.md) value, select the format whose [isHighestPhotoQualitySupported](ishighestphotoqualitysupported.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Determining photo quality

- [supportedMaxPhotoDimensions](supportedmaxphotodimensions.md): The maximum photo dimension this format supports.
- [isHighPhotoQualitySupported](ishighphotoqualitysupported.md): A Boolean value that indicates whether this format supports high-quality capture with the current quality prioritization setting.

# highestPhotoQualitySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether this format supports the highest photo quality that the platform delivers.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHighestPhotoQualitySupported) BOOL highestPhotoQualitySupported;
```

<a id="Discussion"></a>

## Discussion

The simplest way to capture the highest quality photos is to set [AVCaptureSessionPresetPhoto](../../avcapturesession/preset/photo.md) as your session’s preset. If you’re instead manually setting the capture device’s [activeFormat](../activeformat.md) value, select the format whose [highestPhotoQualitySupported](ishighestphotoqualitysupported.md) property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Determining photo quality

- [supportedMaxPhotoDimensions](../../avcapturedeviceformat/supportedmaxphotodimensions.md): The maximum photo dimension this format supports.
- [highPhotoQualitySupported](ishighphotoqualitysupported.md): A Boolean value that indicates whether this format supports high-quality capture with the current quality prioritization setting.
