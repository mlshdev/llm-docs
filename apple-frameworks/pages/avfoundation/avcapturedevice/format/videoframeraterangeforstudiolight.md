> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/videoframeraterangeforstudiolight](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videoframeraterangeforstudiolight)

# videoFrameRateRangeForStudioLight (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A value that indicates the minimum and maximum frame rates available when a user enables Studio Light.

## Declaration

```swift
var videoFrameRateRangeForStudioLight: AVFrameRateRange? { get }
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited frame rate range when Studio Light is active. If the format doesn’t support Studio Light, this property is `nil`.

## See Also

### Determining Studio Light support

- [isStudioLightSupported](isstudiolightsupported.md): A Boolean value that indicates whether the format supports Studio Light.

# videoFrameRateRangeForStudioLight (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A value that indicates the minimum and maximum frame rates available when a user enables Studio Light.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVFrameRateRange * videoFrameRateRangeForStudioLight;
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited frame rate range when Studio Light is active. If the format doesn’t support Studio Light, this property is `nil`.

## See Also

### Determining Studio Light support

- [studioLightSupported](isstudiolightsupported.md): A Boolean value that indicates whether the format supports Studio Light.
