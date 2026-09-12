> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/supportedmaxphotodimensions](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supportedmaxphotodimensions)

# supportedMaxPhotoDimensions

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

The maximum photo dimension this format supports.

## Declaration

```swift
@nonobjc var supportedMaxPhotoDimensions: [CMVideoDimensions] { get }
```

## See Also

### Determining photo quality

- [isHighPhotoQualitySupported](ishighphotoqualitysupported.md): A Boolean value that indicates whether this format supports high-quality capture with the current quality prioritization setting.
- [isHighestPhotoQualitySupported](ishighestphotoqualitysupported.md): A Boolean value that indicates whether this format supports the highest photo quality that the platform delivers.
