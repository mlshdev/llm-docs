> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/maxcontrolscount](https://developer.apple.com/documentation/avfoundation/avcapturesession/maxcontrolscount)

# maxControlsCount (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The maximum number of controls a capture session supports.

## Declaration

```swift
var maxControlsCount: Int { get }
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl(\_:)](canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl(\_:)](addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl(\_:)](removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate(\_:queue:)](setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

# maxControlsCount (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The maximum number of controls a capture session supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger maxControlsCount;
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl:](canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl:](addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl:](removecontrol%28__%29.md): Removes a control from a capture session.
- [setControlsDelegate:queue:](setcontrolsdelegate%28__queue_%29.md): Sets a delegate object for the system to call when it activates and presents controls.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.
