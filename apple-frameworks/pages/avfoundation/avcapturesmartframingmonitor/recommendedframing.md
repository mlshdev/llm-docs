> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor/recommendedframing](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/recommendedframing)

# recommendedFraming (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The latest recommended framing from the monitor.

## Declaration

```swift
var recommendedFraming: AVCaptureFraming? { get }
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

While your [AVCaptureSession](../avcapturesession.md) is running, the monitor continuously observes its device’s scene to recommend the best framing. This recommended framing is always one of the values in [enabledFramings](enabledframings.md). This property may return `nil` if smart framing isn’t supported for the device in its current configuration. Its default value is `nil`. This property is key-value observable, and when you observe a change, you may respond to the new recommendation by calling [setDynamicAspectRatio(\_:completionHandler:)](../avcapturedevice/setdynamicaspectratio%28__completionhandler_%29.md) and setting [videoZoomFactor](../avcapturedevice/videozoomfactor.md) on the associated device in whatever order best matches your animation between old and new framings.

## See Also

### Configuring framings

- [supportedFramings](supportedframings.md): An array of framings supported by the monitor in its current configuration.
- [enabledFramings](enabledframings.md): An array of framings that the monitor is allowed to suggest.

# recommendedFraming (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The latest recommended framing from the monitor.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCaptureFraming * recommendedFraming;
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

While your [AVCaptureSession](../avcapturesession.md) is running, the monitor continuously observes its device’s scene to recommend the best framing. This recommended framing is always one of the values in [enabledFramings](enabledframings.md). This property may return `nil` if smart framing isn’t supported for the device in its current configuration. Its default value is `nil`. This property is key-value observable, and when you observe a change, you may respond to the new recommendation by calling [setDynamicAspectRatio:completionHandler:](../avcapturedevice/setdynamicaspectratio%28__completionhandler_%29.md) and setting [videoZoomFactor](../avcapturedevice/videozoomfactor.md) on the associated device in whatever order best matches your animation between old and new framings.

## See Also

### Configuring framings

- [supportedFramings](supportedframings.md): An array of framings supported by the monitor in its current configuration.
- [enabledFramings](enabledframings.md): An array of framings that the monitor is allowed to suggest.
