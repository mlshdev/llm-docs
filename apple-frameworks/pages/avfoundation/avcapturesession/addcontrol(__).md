> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/addcontrol(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/addcontrol(_:))

# addControl(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Adds a control to a capture session.

## Declaration

```swift
func addControl(_ control: AVCaptureControl)
```

## Parameters

- `control`: The capture control to add.

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

A capture session may not be able to add a control due to configuration reasons or limits of the host platform. Before calling this method, determine whether you can successfully add a control by calling the capture session’s [canAddControl(\_:)](canaddcontrol%28__%29.md) method.

You may call this method while the session is running.

> **Important**

>  For a control to become active, you must set a [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md) on the session.

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl(\_:)](canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [removeControl(\_:)](removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate(\_:queue:)](setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

# addControl: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Adds a control to a capture session.

## Declaration

```objectivec
- (void) addControl:(AVCaptureControl *) control;
```

## Parameters

- `control`: The capture control to add.

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

A capture session may not be able to add a control due to configuration reasons or limits of the host platform. Before calling this method, determine whether you can successfully add a control by calling the capture session’s [canAddControl:](canaddcontrol%28__%29.md) method.

You may call this method while the session is running.

> **Important**

>  For a control to become active, you must set a [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md) on the session.

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl:](canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [removeControl:](removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate:queue:](setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.
