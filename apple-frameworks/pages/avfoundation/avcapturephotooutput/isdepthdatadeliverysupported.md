> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isdepthdatadeliverysupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isdepthdatadeliverysupported)

# isDepthDataDeliverySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the capture output currently supports depth data capture.

## Declaration

```swift
var isDepthDataDeliverySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Depth data captures a per-pixel map of scene depth information delivered alongside the photo image and optionally embedded in image file output. Depth data can be used for purposes such as applying depth-sensitive photo filter effects (like that seen in the iOS Camera app’s Portrait mode) and performing computer vision tasks.

Not all devices and capture formats support depth capture. This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes. If a camera or format change causes this property’s value to become [false](https://developer.apple.com/documentation/swift/false), the [isDepthDataDeliveryEnabled](isdepthdatadeliveryenabled.md) property’s value also becomes [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring depth data capture

- [isDepthDataDeliveryEnabled](isdepthdatadeliveryenabled.md): A Boolean value that specifies whether to configure the capture pipeline for depth data capture.

# depthDataDeliverySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value indicating whether the capture output currently supports depth data capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDepthDataDeliverySupported) BOOL depthDataDeliverySupported;
```

<a id="Discussion"></a>

## Discussion

Depth data captures a per-pixel map of scene depth information delivered alongside the photo image and optionally embedded in image file output. Depth data can be used for purposes such as applying depth-sensitive photo filter effects (like that seen in the iOS Camera app’s Portrait mode) and performing computer vision tasks.

Not all devices and capture formats support depth capture. This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes. If a camera or format change causes this property’s value to become [false](https://developer.apple.com/documentation/swift/false), the [depthDataDeliveryEnabled](isdepthdatadeliveryenabled.md) property’s value also becomes [false](https://developer.apple.com/documentation/swift/false).

This property is key-value observable.

## See Also

### Configuring depth data capture

- [depthDataDeliveryEnabled](isdepthdatadeliveryenabled.md): A Boolean value that specifies whether to configure the capture pipeline for depth data capture.
