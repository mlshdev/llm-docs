> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescreeninput](https://developer.apple.com/documentation/avfoundation/avcapturescreeninput)

# AVCaptureScreenInput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A capture input for recording from a screen in macOS.

## Declaration

```swift
class AVCaptureScreenInput
```

<a id="overview"></a>

## Overview

> **Important**

>  Starting in macOS 12.3, use the [ScreenCaptureKit](../screencapturekit.md) framework for screen recording instead.

This class is a concrete capture input subclass that provides an interface to capture media from a screen or a portion of a screen.

Use instances of this class as input sources for [AVCaptureSession](avcapturesession.md) objects that provide media data from one of the screens connected to the system, represented by [CGDirectDisplayID](../coregraphics/cgdirectdisplayid.md).

## Topics

### Initializing a capture screen input

- [init(displayID:)](avcapturescreeninput/init%28displayid_%29.md): Initializes a capture screen input that provides media data from the specified display.
- [init()](avcapturescreeninput/init%28%29.md): Initializes a capture screen input that provides media data from the main screen.

### Setting video capture options

- [minFrameDuration](avcapturescreeninput/minframeduration.md): The screen input’s minimum frame duration.
- [cropRect](avcapturescreeninput/croprect.md): Indicates the bounding rectangle of the screen area to be captured, in pixels.
- [scaleFactor](avcapturescreeninput/scalefactor.md): Indicates the factor by which video buffers captured from the screen are to be scaled.

### Capturing mouse activity

- [capturesCursor](avcapturescreeninput/capturescursor.md): A Boolean value that specifies whether the mouse cursor appears in the captured output.
- [capturesMouseClicks](avcapturescreeninput/capturesmouseclicks.md): A Boolean value that specifies whether mouse clicks appear highlighted in the captured output.

### Deprecated

- [removesDuplicateFrames](avcapturescreeninput/removesduplicateframes.md): Deprecated. A Boolean value that specifies whether the capture input skips duplicate frames.

## Relationships

### Inherits From

- [AVCaptureInput](avcaptureinput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVCaptureScreenInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A capture input for recording from a screen in macOS.

## Declaration

```objectivec
@interface AVCaptureScreenInput : AVCaptureInput
```

<a id="overview"></a>

## Overview

> **Important**

>  Starting in macOS 12.3, use the [ScreenCaptureKit](../screencapturekit.md) framework for screen recording instead.

This class is a concrete capture input subclass that provides an interface to capture media from a screen or a portion of a screen.

Use instances of this class as input sources for [AVCaptureSession](avcapturesession.md) objects that provide media data from one of the screens connected to the system, represented by [CGDirectDisplayID](../coregraphics/cgdirectdisplayid.md).

## Topics

### Initializing a capture screen input

- [initWithDisplayID:](avcapturescreeninput/init%28displayid_%29.md): Initializes a capture screen input that provides media data from the specified display.
- [init](avcapturescreeninput/init%28%29.md): Initializes a capture screen input that provides media data from the main screen.
- [new](avcapturescreeninput/new.md): Creates a capture screen input that provides media data from the main screen.

### Setting video capture options

- [minFrameDuration](avcapturescreeninput/minframeduration.md): The screen input’s minimum frame duration.
- [cropRect](avcapturescreeninput/croprect.md): Indicates the bounding rectangle of the screen area to be captured, in pixels.
- [scaleFactor](avcapturescreeninput/scalefactor.md): Indicates the factor by which video buffers captured from the screen are to be scaled.

### Capturing mouse activity

- [capturesCursor](avcapturescreeninput/capturescursor.md): A Boolean value that specifies whether the mouse cursor appears in the captured output.
- [capturesMouseClicks](avcapturescreeninput/capturesmouseclicks.md): A Boolean value that specifies whether mouse clicks appear highlighted in the captured output.

### Deprecated

- [removesDuplicateFrames](avcapturescreeninput/removesduplicateframes.md): Deprecated. A Boolean value that specifies whether the capture input skips duplicate frames.

## Relationships

### Inherits From

- [AVCaptureInput](avcaptureinput.md)
