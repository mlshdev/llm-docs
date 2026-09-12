> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventsound](https://developer.apple.com/documentation/avkit/avcaptureeventsound)

# AVCaptureEventSound (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A sound object for a capture event.

## Declaration

```swift
class AVCaptureEventSound
```

<a id="overview"></a>

## Overview

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## Topics

### Creating a sound

- [init(url:)](avcaptureeventsound/init%28url_%29-2a6o4.md): Creates a sound object for a capture event.

### Accessing default sounds

- [cameraShutter](avcaptureeventsound/camerashutter.md): The default sound for photo capture.
- [beginVideoRecording](avcaptureeventsound/beginvideorecording.md): The default sound for starting a video recording.
- [endVideoRecording](avcaptureeventsound/endvideorecording.md): The default sound for ending a video recording.

### Initializers

- [init(URL:)](avcaptureeventsound/init%28url_%29-3e9o9.md)

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

### iOS playback and capture

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

# AVCaptureEventSound (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A sound object for a capture event.

## Declaration

```objectivec
@interface AVCaptureEventSound : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

> To use AirPods Camera Control, it must be available in your country or region. AirPods Camera Control is not currently available in the European Union.

## Topics

### Creating a sound

- [initWithURL:error:](avcaptureeventsound/init%28url_%29-2a6o4.md): Creates a sound object for a capture event.

### Accessing default sounds

- [cameraShutterSound](avcaptureeventsound/camerashutter.md): The default sound for photo capture.
- [beginVideoRecordingSound](avcaptureeventsound/beginvideorecording.md): The default sound for starting a video recording.
- [endVideoRecordingSound](avcaptureeventsound/endvideorecording.md): The default sound for ending a video recording.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### iOS playback and capture

- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
