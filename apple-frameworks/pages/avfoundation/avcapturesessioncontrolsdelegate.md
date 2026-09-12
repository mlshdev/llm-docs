> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesessioncontrolsdelegate](https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate)

# AVCaptureSessionControlsDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A protocol that defines the interface to respond to capture control activation and presentation events.

## Declaration

```swift
protocol AVCaptureSessionControlsDelegate : NSObjectProtocol
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

## Topics

### Responding to control events

- [sessionControlsDidBecomeActive(\_:)](avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillEnterFullscreenAppearance(\_:)](avcapturesessioncontrolsdelegate/sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsWillExitFullscreenAppearance(\_:)](avcapturesessioncontrolsdelegate/sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
- [sessionControlsDidBecomeInactive(\_:)](avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring capture controls

- [supportsControls](avcapturesession/supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](avcapturesession/maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](avcapturesession/controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl(\_:)](avcapturesession/canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl(\_:)](avcapturesession/addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl(\_:)](avcapturesession/removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate(\_:queue:)](avcapturesession/setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [controlsDelegate](avcapturesession/controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](avcapturesession/controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

# AVCaptureSessionControlsDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A protocol that defines the interface to respond to capture control activation and presentation events.

## Declaration

```objectivec
@protocol AVCaptureSessionControlsDelegate <NSObject>
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](enhancing-your-app-experience-with-the-camera-control.md)

## Topics

### Responding to control events

- [sessionControlsDidBecomeActive:](avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive%28__%29.md): Tells the delegate when a capture session’s controls become active and available for interaction.
- [sessionControlsWillEnterFullscreenAppearance:](avcapturesessioncontrolsdelegate/sessioncontrolswillenterfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to enter a fullscreen appearance.
- [sessionControlsWillExitFullscreenAppearance:](avcapturesessioncontrolsdelegate/sessioncontrolswillexitfullscreenappearance%28__%29.md): Tells the delegate when a capture session’s controls are about to exit a fullscreen appearance.
- [sessionControlsDidBecomeInactive:](avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeinactive%28__%29.md): Tells the delegate when a capture session’s controls become inactive and unavailable for interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring capture controls

- [supportsControls](avcapturesession/supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](avcapturesession/maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](avcapturesession/controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl:](avcapturesession/canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl:](avcapturesession/addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl:](avcapturesession/removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate:queue:](avcapturesession/setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [controlsDelegate](avcapturesession/controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](avcapturesession/controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.
