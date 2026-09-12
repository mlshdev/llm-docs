> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor)

# AVCaptureSmartFramingMonitor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object associated with a capture device that monitors the scene and suggests an optimal framing.

## Declaration

```swift
class AVCaptureSmartFramingMonitor
```

## Mentioned In

- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md)

<a id="overview"></a>

## Overview

A smart framing monitor observes its associated device for objects of interest entering and exiting the camera’s field of view and recommends an optimal framing for good photographic composition. This framing recommendation consists of an aspect ratio and zoom factor. You may respond to the device’s framing recommendation by calling [setDynamicAspectRatio(\_:completionHandler:)](avcapturedevice/setdynamicaspectratio%28__completionhandler_%29.md) and setting [videoZoomFactor](avcapturedevice/videozoomfactor.md) on the associated device in whatever order best matches your animation between old and new framings.

## Topics

### Configuring framings

- [supportedFramings](avcapturesmartframingmonitor/supportedframings.md): An array of framings supported by the monitor in its current configuration.
- [enabledFramings](avcapturesmartframingmonitor/enabledframings.md): An array of framings that the monitor is allowed to suggest.
- [recommendedFraming](avcapturesmartframingmonitor/recommendedframing.md): The latest recommended framing from the monitor.

### Managing the life cycle

- [isMonitoring](avcapturesmartframingmonitor/ismonitoring.md): Yes when the receiver is actively monitoring.
- [startMonitoring()](avcapturesmartframingmonitor/startmonitoring%28%29.md): Begins monitoring the device’s active scene and making framing recommendations.
- [stopMonitoring()](avcapturesmartframingmonitor/stopmonitoring%28%29.md): Stops monitoring the device’s active scene and making framing recommendations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### Configuring smart framing

- [smartFramingMonitor](avcapturedevice/smartframingmonitor.md): A monitor owned by the device that recommends an optimal framing based on the content in the scene.
- [AVCaptureFraming](avcaptureframing.md): A framing, consisting of an aspect ratio and a zoom factor.

# AVCaptureSmartFramingMonitor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An object associated with a capture device that monitors the scene and suggests an optimal framing.

## Declaration

```objectivec
@interface AVCaptureSmartFramingMonitor : NSObject
```

## Mentioned In

- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md)

<a id="overview"></a>

## Overview

A smart framing monitor observes its associated device for objects of interest entering and exiting the camera’s field of view and recommends an optimal framing for good photographic composition. This framing recommendation consists of an aspect ratio and zoom factor. You may respond to the device’s framing recommendation by calling [setDynamicAspectRatio:completionHandler:](avcapturedevice/setdynamicaspectratio%28__completionhandler_%29.md) and setting [videoZoomFactor](avcapturedevice/videozoomfactor.md) on the associated device in whatever order best matches your animation between old and new framings.

## Topics

### Configuring framings

- [supportedFramings](avcapturesmartframingmonitor/supportedframings.md): An array of framings supported by the monitor in its current configuration.
- [enabledFramings](avcapturesmartframingmonitor/enabledframings.md): An array of framings that the monitor is allowed to suggest.
- [recommendedFraming](avcapturesmartframingmonitor/recommendedframing.md): The latest recommended framing from the monitor.

### Managing the life cycle

- [monitoring](avcapturesmartframingmonitor/ismonitoring.md): Yes when the receiver is actively monitoring.
- [startMonitoringWithError:](avcapturesmartframingmonitor/startmonitoring%28%29.md): Begins monitoring the device’s active scene and making framing recommendations.
- [stopMonitoring](avcapturesmartframingmonitor/stopmonitoring%28%29.md): Stops monitoring the device’s active scene and making framing recommendations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring smart framing

- [smartFramingMonitor](avcapturedevice/smartframingmonitor.md): A monitor owned by the device that recommends an optimal framing based on the content in the scene.
- [AVCaptureFraming](avcaptureframing.md): A framing, consisting of an aspect ratio and a zoom factor.
