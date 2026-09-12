> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/canaddcontrol(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/canaddcontrol(_:))

# canAddControl(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Returns a Boolean value that indicates whether a capture session add the specified control.

## Declaration

```swift
func canAddControl(_ control: AVCaptureControl) -> Bool
```

## Parameters

- `control`: The capture control to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the capture session can add the control; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

Call this method to determine whether you can successfully add a control to a capture session using the [addControl(\_:)](addcontrol%28__%29.md) method. A capture session may not be able to add a control due to its current session configuration or if unsupported by the host platform.

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [addControl(\_:)](addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl(\_:)](removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate(\_:queue:)](setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

# canAddControl: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Returns a Boolean value that indicates whether a capture session add the specified control.

## Declaration

```objectivec
- (BOOL) canAddControl:(AVCaptureControl *) control;
```

## Parameters

- `control`: The capture control to add.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the capture session can add the control; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

Call this method to determine whether you can successfully add a control to a capture session using the [addControl:](addcontrol%28__%29.md) method. A capture session may not be able to add a control due to its current session configuration or if unsupported by the host platform.

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [addControl:](addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl:](removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate:queue:](setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.
