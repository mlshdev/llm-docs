> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isstudiolightsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isstudiolightsupported)

# isStudioLightSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports Studio Light.

## Declaration

```swift
var isStudioLightSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

See [isStudioLightEnabled](../isstudiolightenabled.md) for more information on the Studio Light feature.

## See Also

### Determining Studio Light support

- [videoFrameRateRangeForStudioLight](videoframeraterangeforstudiolight.md): A value that indicates the minimum and maximum frame rates available when a user enables Studio Light.

# studioLightSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports Studio Light.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStudioLightSupported) BOOL studioLightSupported;
```

<a id="Discussion"></a>

## Discussion

See [studioLightEnabled](../isstudiolightenabled.md) for more information on the Studio Light feature.

## See Also

### Determining Studio Light support

- [videoFrameRateRangeForStudioLight](videoframeraterangeforstudiolight.md): A value that indicates the minimum and maximum frame rates available when a user enables Studio Light.
