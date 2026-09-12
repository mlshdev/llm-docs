> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureframing](https://developer.apple.com/documentation/avfoundation/avcaptureframing)

# AVCaptureFraming (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A framing, consisting of an aspect ratio and a zoom factor.

## Declaration

```swift
class AVCaptureFraming
```

<a id="overview"></a>

## Overview

An [AVCaptureSmartFramingMonitor](avcapturesmartframingmonitor.md) provides framing recommendations using this object.

## Topics

### Inspecting a framing

- [aspectRatio](avcaptureframing/aspectratio.md): An aspect ratio.
- [zoomFactor](avcaptureframing/zoomfactor.md): A zoom factor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring smart framing

- [smartFramingMonitor](avcapturedevice/smartframingmonitor.md): A monitor owned by the device that recommends an optimal framing based on the content in the scene.
- [AVCaptureSmartFramingMonitor](avcapturesmartframingmonitor.md): An object associated with a capture device that monitors the scene and suggests an optimal framing.

# AVCaptureFraming (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A framing, consisting of an aspect ratio and a zoom factor.

## Declaration

```objectivec
@interface AVCaptureFraming : NSObject
```

<a id="overview"></a>

## Overview

An [AVCaptureSmartFramingMonitor](avcapturesmartframingmonitor.md) provides framing recommendations using this object.

## Topics

### Inspecting a framing

- [aspectRatio](avcaptureframing/aspectratio.md): An aspect ratio.
- [zoomFactor](avcaptureframing/zoomfactor.md): A zoom factor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring smart framing

- [smartFramingMonitor](avcapturedevice/smartframingmonitor.md): A monitor owned by the device that recommends an optimal framing based on the content in the scene.
- [AVCaptureSmartFramingMonitor](avcapturesmartframingmonitor.md): An object associated with a capture device that monitors the scene and suggests an optimal framing.
