> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/setcontrolsdelegate(_:queue:)](https://developer.apple.com/documentation/avfoundation/avcapturesession/setcontrolsdelegate(_:queue:))

# setControlsDelegate(\_:queue:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Sets a delegate object for the system to call when it activates and presents controls.

## Declaration

```swift
func setControlsDelegate(_ controlsDelegate: (any AVCaptureSessionControlsDelegate)?, queue controlsDelegateCallbackQueue: dispatch_queue_t?)
```

## Parameters

- `controlsDelegate`: An object that adopts the controls delegate protocol.
- `controlsDelegateCallbackQueue`: A serial dispatch queue on which to call the delegate methods. You must specify a serial queue to ensure callbacks occur in order.

  This argument must not be `nil` unless the `controlsDelegate` argument is also `nil;` otherwise, the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

People interact with capture controls by performing specific gestures to enable their visibility. Specify a delegate to for the system to call when it presents and dismisses controls. The system calls the delegate’s methods on the specified callback queue.

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl(\_:)](canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl(\_:)](addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl(\_:)](removecontrol%28__%29.md): Removes a control from a capture session.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.

# setControlsDelegate:queue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Sets a delegate object for the system to call when it activates and presents controls.

## Declaration

```objectivec
- (void) setControlsDelegate:(id<AVCaptureSessionControlsDelegate>) controlsDelegate queue:(dispatch_queue_t) controlsDelegateCallbackQueue;
```

## Parameters

- `controlsDelegate`: An object that adopts the controls delegate protocol.
- `controlsDelegateCallbackQueue`: A serial dispatch queue on which to call the delegate methods. You must specify a serial queue to ensure callbacks occur in order.

  This argument must not be `nil` unless the `controlsDelegate` argument is also `nil;` otherwise, the system throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

People interact with capture controls by performing specific gestures to enable their visibility. Specify a delegate to for the system to call when it presents and dismisses controls. The system calls the delegate’s methods on the specified callback queue.

## See Also

### Configuring capture controls

- [supportsControls](supportscontrols.md): A Boolean value that indicates whether a capture session supports controls.
- [maxControlsCount](maxcontrolscount.md): The maximum number of controls a capture session supports.
- [controls](controls.md): The controls that allow configuring the camera system from device hardware.
- [canAddControl:](canaddcontrol%28__%29.md): Returns a Boolean value that indicates whether a capture session add the specified control.
- [addControl:](addcontrol%28__%29.md): Adds a control to a capture session.
- [removeControl:](removecontrol%28__%29.md): Removes a control from a capture session.
- [AVCaptureSessionControlsDelegate](../avcapturesessioncontrolsdelegate.md): A protocol that defines the interface to respond to capture control activation and presentation events.
- [controlsDelegate](controlsdelegate.md): A delegate object that observes changes to the state of capture controls.
- [controlsDelegateCallbackQueue](controlsdelegatecallbackqueue.md): The dispatch queue on which the system calls controls delegate methods.
