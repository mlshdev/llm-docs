> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor/supportedframings](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/supportedframings)

# supportedFramings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An array of framings supported by the monitor in its current configuration.

## Declaration

```swift
var supportedFramings: [AVCaptureFraming] { get }
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor is capable of recommending any of the framings in this array. This property is key-value observable and may change as the target capture device’s [activeFormat](../avcapturedevice/activeformat.md) property changes. This array contains the full set of framings supported by the monitor in the device’s current configuration. You must tell the monitor which smart framings you are interested in having recommended to you by setting the [enabledFramings](enabledframings.md) property.

## See Also

### Configuring framings

- [enabledFramings](enabledframings.md): An array of framings that the monitor is allowed to suggest.
- [recommendedFraming](recommendedframing.md): The latest recommended framing from the monitor.

# supportedFramings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An array of framings supported by the monitor in its current configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureFraming *> * supportedFramings;
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor is capable of recommending any of the framings in this array. This property is key-value observable and may change as the target capture device’s [activeFormat](../avcapturedevice/activeformat.md) property changes. This array contains the full set of framings supported by the monitor in the device’s current configuration. You must tell the monitor which smart framings you are interested in having recommended to you by setting the [enabledFramings](enabledframings.md) property.

## See Also

### Configuring framings

- [enabledFramings](enabledframings.md): An array of framings that the monitor is allowed to suggest.
- [recommendedFraming](recommendedframing.md): The latest recommended framing from the monitor.
