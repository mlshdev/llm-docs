> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor/enabledframings](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/enabledframings)

# enabledFramings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An array of framings that the monitor is allowed to suggest.

## Declaration

```swift
var enabledFramings: [AVCaptureFraming] { get set }
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor is capable of recommending any of the framings in the [supportedFramings](supportedframings.md) array. This property contains the subset of [supportedFramings](supportedframings.md) you would like to have recommended to you. You may set this property at any time while running your [AVCaptureSession](../avcapturesession.md). This property’s default value is the empty array.

## See Also

### Configuring framings

- [supportedFramings](supportedframings.md): An array of framings supported by the monitor in its current configuration.
- [recommendedFraming](recommendedframing.md): The latest recommended framing from the monitor.

# enabledFramings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An array of framings that the monitor is allowed to suggest.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVCaptureFraming *> * enabledFramings;
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor is capable of recommending any of the framings in the [supportedFramings](supportedframings.md) array. This property contains the subset of [supportedFramings](supportedframings.md) you would like to have recommended to you. You may set this property at any time while running your [AVCaptureSession](../avcapturesession.md). This property’s default value is the empty array.

## See Also

### Configuring framings

- [supportedFramings](supportedframings.md): An array of framings supported by the monitor in its current configuration.
- [recommendedFraming](recommendedframing.md): The latest recommended framing from the monitor.
