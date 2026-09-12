> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventinteraction](https://developer.apple.com/documentation/avkit/avcaptureeventinteraction)

# AVCaptureEventInteraction (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

An object that registers handlers to respond to capture events from system hardware buttons.

## Declaration

```swift
@MainActor class AVCaptureEventInteraction
```

<a id="overview"></a>

## Overview

The system Camera app allows people to perform capture functions by pressing hardware buttons on their iOS device. UIKit apps can add similar functionality by using this type to register handlers that respond to interactions from device hardware.

> **Note**

>  In SwiftUI, respond to capture events from hardware buttons using [onCameraCaptureEvent(isEnabled:action:)](https://developer.apple.com/documentation/swiftui/view/oncameracaptureevent%28isenabled:action:%29) and [onCameraCaptureEvent(isEnabled:primaryAction:secondaryAction:)](https://developer.apple.com/documentation/swiftui/view/oncameracaptureevent%28isenabled:primaryaction:secondaryaction:%29) instead.

The following example shows how to add a handler that captures a photo when a user presses a hardware button on their device.

```swift
class CameraViewController: UIViewController {
    
    /// An object that manages the camera functionality.
    private let camera = CameraModel()
    
    /// A capture event interaction to handle hardware button presses.
    private var eventInteraction: AVCaptureEventInteraction?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Configure the app to take a photo on hardware button press.
        configureHardwareInteraction()
    }
    
    private func configureHardwareInteraction() {
        // Create a new capture event interaction with a handler that captures a photo.
        let interaction = AVCaptureEventInteraction { [weak self] event in
            // Capture a photo on "press up" of a hardware button.
            if event.phase == .ended {
                self?.camera.capturePhoto()
            }
        }
        // Add the interaction to the view controller's view.
        view.addInteraction(interaction)
        eventInteraction = interaction
    }
}
```

The event handler queries the capture event to determine its phase, and when the interaction ends, captures a photo.

> **Important**

>  You can only use this API for capture use cases. The system sends capture events only to apps that actively use the camera. Backgrounded capture apps, and apps not performing capture, don’t receive events.
>
> Adopting this API overrides default hardware button behavior, so apps must always respond appropriately to any events received. Failing to handle events results in a nonfunctional button that provides a poor user experience. If your app is temporarily unable to handle events, disable the interaction by setting its [isEnabled](avcaptureeventinteraction/isenabled.md) property to `false`, which restores the system button behavior.

## Topics

### Creating an interaction

- [init(handler:)](avcaptureeventinteraction/init%28handler_%29.md): Creates a capture event interaction with a handler that responds to presses of hardware buttons.
- [init(primary:secondary:)](avcaptureeventinteraction/init%28primary_secondary_%29.md): Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.

### Inspecting the interaction

- [isEnabled](avcaptureeventinteraction/isenabled.md): A Boolean value that indicates whether this capture event interaction is in an enabled state.
- [defaultCaptureSoundDisabled](avcaptureeventinteraction/defaultcapturesounddisabled.md): A Boolean value that indicates whether the default sound is in a disabled state.

### Initializers

- [init(eventHandler:)](avcaptureeventinteraction/init%28eventhandler_%29.md)
- [init(primaryEventHandler:secondaryEventHandler:)](avcaptureeventinteraction/init%28primaryeventhandler_secondaryeventhandler_%29.md)

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
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.

# AVCaptureEventInteraction (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

An object that registers handlers to respond to capture events from system hardware buttons.

## Declaration

```objectivec
@interface AVCaptureEventInteraction : NSObject
```

<a id="overview"></a>

## Overview

The system Camera app allows people to perform capture functions by pressing hardware buttons on their iOS device. UIKit apps can add similar functionality by using this type to register handlers that respond to interactions from device hardware.

> **Note**

>  In SwiftUI, respond to capture events from hardware buttons using [onCameraCaptureEvent(isEnabled:action:)](https://developer.apple.com/documentation/swiftui/view/oncameracaptureevent%28isenabled:action:%29) and [onCameraCaptureEvent(isEnabled:primaryAction:secondaryAction:)](https://developer.apple.com/documentation/swiftui/view/oncameracaptureevent%28isenabled:primaryaction:secondaryaction:%29) instead.

The following example shows how to add a handler that captures a photo when a user presses a hardware button on their device.

```swift
class CameraViewController: UIViewController {
    
    /// An object that manages the camera functionality.
    private let camera = CameraModel()
    
    /// A capture event interaction to handle hardware button presses.
    private var eventInteraction: AVCaptureEventInteraction?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Configure the app to take a photo on hardware button press.
        configureHardwareInteraction()
    }
    
    private func configureHardwareInteraction() {
        // Create a new capture event interaction with a handler that captures a photo.
        let interaction = AVCaptureEventInteraction { [weak self] event in
            // Capture a photo on "press up" of a hardware button.
            if event.phase == .ended {
                self?.camera.capturePhoto()
            }
        }
        // Add the interaction to the view controller's view.
        view.addInteraction(interaction)
        eventInteraction = interaction
    }
}
```

The event handler queries the capture event to determine its phase, and when the interaction ends, captures a photo.

> **Important**

>  You can only use this API for capture use cases. The system sends capture events only to apps that actively use the camera. Backgrounded capture apps, and apps not performing capture, don’t receive events.
>
> Adopting this API overrides default hardware button behavior, so apps must always respond appropriately to any events received. Failing to handle events results in a nonfunctional button that provides a poor user experience. If your app is temporarily unable to handle events, disable the interaction by setting its [enabled](avcaptureeventinteraction/isenabled.md) property to `false`, which restores the system button behavior.

## Topics

### Creating an interaction

- [initWithEventHandler:](avcaptureeventinteraction/init%28handler_%29.md): Creates a capture event interaction with a handler that responds to presses of hardware buttons.
- [initWithPrimaryEventHandler:secondaryEventHandler:](avcaptureeventinteraction/init%28primary_secondary_%29.md): Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.

### Inspecting the interaction

- [enabled](avcaptureeventinteraction/isenabled.md): A Boolean value that indicates whether this capture event interaction is in an enabled state.
- [defaultCaptureSoundDisabled](avcaptureeventinteraction/defaultcapturesounddisabled.md): A Boolean value that indicates whether the default sound is in a disabled state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### iOS playback and capture

- [AVPlayerViewController](avplayerviewcontroller.md): A view controller that displays content from a player and presents a native user interface to control playback.
- [AVPlayerViewControllerDelegate](avplayerviewcontrollerdelegate.md): A protocol that defines the methods to implement to respond to player view controller events.
- [AVCaptureEvent](avcaptureevent.md): An object that describes a user interaction with a system hardware button.
- [AVCaptureEventSound](avcaptureeventsound.md): A sound object for a capture event.
- [AVInputPickerInteraction](avinputpickerinteraction.md): Use `AVInputPickerInteraction` to present an input picker.
- [Third-party casting support](third-party-casting-support.md): Provide custom playback controls for third-party casting services and other media sources.
