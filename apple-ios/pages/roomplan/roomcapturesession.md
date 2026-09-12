> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcapturesession](https://developer.apple.com/documentation/roomplan/roomcapturesession)

# RoomCaptureSession

**Framework:** RoomPlan  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An object that manages the room-scanning process.

## Declaration

```swift
class RoomCaptureSession
```

## Mentioned In

- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md)

<a id="overview"></a>

## Overview

This class scans a room on the app’s behalf and provides the necessary callbacks for you to display your own UI.

As an alternate approach to the UX of the framework-provided view ([RoomCaptureView](roomcaptureview.md)), this class is appropriate for apps that intend to display their own view and scanning experience. You can start your own AR experience by accessing this class’s [arSession](roomcapturesession/arsession.md), or by providing your own [ARSession](https://developer.apple.com/documentation/arkit/arsession) instance to the [init(arSession:)](roomcapturesession/init%28arsession_%29.md) initializer.

To produce a 3D asset of the user’s environment, this class:

- Utilizes an ARKit session ([arSession](roomcapturesession/arsession.md)) that enables the device’s LiDAR Scanner to capture the environment’s physical layout.
- Provides instructions that you display to the user to coach them on moving the device appropriately to collect the necessary data.

## Topics

### Creating a session

- [init(arSession:)](roomcapturesession/init%28arsession_%29.md)

### Ensuring device support

- [isSupported](roomcapturesession/issupported.md): A Boolean value that indicates whether the user’s device supports the framework.

### Controlling a session

- [run(configuration:)](roomcapturesession/run%28configuration_%29.md): Starts a room-capture session with the specified configuration.
- [RoomCaptureSession.Configuration](roomcapturesession/configuration.md): Settings that configure the room-scanning process.
- [stop()](roomcapturesession/stop%28%29.md): Stops the room-capture session.
- [stop(pauseARSession:)](roomcapturesession/stop%28pausearsession_%29.md): Stops the room-capture session and indicates whether the app pauses the underlying AR session.

### Responding to events

- [delegate](roomcapturesession/delegate.md): An object that observes important events in the room-scanning process.
- [RoomCaptureSession.CaptureError](roomcapturesession/captureerror.md): Errors that can occur during a room-capture session.

### Accessing the AR session

- [arSession](roomcapturesession/arsession.md): An object that manages an ARKit session.

### Displaying user instructions

- [RoomCaptureSession.Instruction](roomcapturesession/instruction.md): Instructions that the framework recommends the app display to the user.

### Initializers

- [init()](roomcapturesession/init%28%29.md): Creates a room-capture session with the given AR session.

## See Also

### Scanning Protocol

- [RoomCaptureSessionDelegate](roomcapturesessiondelegate.md): A specification of important events in the room-scanning process.
