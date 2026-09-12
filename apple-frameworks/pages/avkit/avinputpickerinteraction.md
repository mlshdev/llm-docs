> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avinputpickerinteraction](https://developer.apple.com/documentation/avkit/avinputpickerinteraction)

# AVInputPickerInteraction (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Use `AVInputPickerInteraction` to present an input picker.

## Declaration

```swift
@MainActor class AVInputPickerInteraction
```

## Topics

### Creating an input picker

- [init()](avinputpickerinteraction/init%28%29.md): Creates a new instance of AVInputPickerController using a default sharedInstance from `AVAudioSession`.
- [init(audioSession:)](avinputpickerinteraction/init%28audiosession_%29.md): Creates a new instance of AVInputPickerInteraction using a specific `AVAudioSession`.

### Managing presentation

- [isPresented](avinputpickerinteraction/ispresented.md): A Boolean value that indicates whether the picker is currently visible.
- [present()](avinputpickerinteraction/present%28%29.md): Presents the input picker.
- [dismiss()](avinputpickerinteraction/dismiss%28%29.md): Dismisses the input picker.

### Setting the delegate

- [delegate](avinputpickerinteraction/delegate-swift.property.md): The input picker view’s delegate.
- [AVInputPickerInteraction.Delegate](avinputpickerinteraction/delegate-swift.protocol.md): The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

### Accessing the audio session

- [audioSession](avinputpickerinteraction/audiosession.md): The audio session for the picker.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### iOS playback and capture

- [Playing video content in a standard user interface](playing-video-content-in-a-standard-user-interface.md): Play media full screen, embedded inline, or in a floating Picture in Picture (PiP) window using a player view controller.
- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

# AVInputPickerInteraction (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Use `AVInputPickerInteraction` to present an input picker.

## Declaration

```objectivec
@interface AVInputPickerInteraction : NSObject
```

## Topics

### Creating an input picker

- [init](avinputpickerinteraction/init%28%29.md): Creates a new instance of AVInputPickerController using a default sharedInstance from `AVAudioSession`.
- [initWithAudioSession:](avinputpickerinteraction/init%28audiosession_%29.md): Creates a new instance of AVInputPickerInteraction using a specific `AVAudioSession`.

### Managing presentation

- [presented](avinputpickerinteraction/ispresented.md): A Boolean value that indicates whether the picker is currently visible.
- [present](avinputpickerinteraction/present%28%29.md): Presents the input picker.
- [dismiss](avinputpickerinteraction/dismiss%28%29.md): Dismisses the input picker.

### Setting the delegate

- [delegate](avinputpickerinteraction/delegate-swift.property.md): The input picker view’s delegate.
- [AVInputPickerInteractionDelegate](avinputpickerinteraction/delegate-swift.protocol.md): The `AVInputPickerInteractionDelegate` protocol defines methods you use to receive notifications about transitions in an `AVInputPickerInteraction` object.

### Accessing the audio session

- [audioSession](avinputpickerinteraction/audiosession.md): The audio session for the picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### iOS playback and capture

- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEventInteraction](avcaptureeventinteraction.md): An object that registers handlers to respond to capture events from system hardware buttons.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
