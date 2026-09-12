> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevice/handlerqueue](https://developer.apple.com/documentation/gamecontroller/gcdevice/handlerqueue)

# handlerQueue (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The dispatch queue that the framework uses to call element value change handlers.

## Declaration

```swift
var handlerQueue: dispatch_queue_t { get set }
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

The default queue is the main queue. Set this property to another queue to asynchronously call value change handlers (see [GCControllerAxisInput](../gccontrolleraxisinput.md), [GCControllerButtonInput](../gccontrollerbuttoninput.md), [GCControllerDirectionPad](../gccontrollerdirectionpad.md), and [GCMotion](../gcmotion.md)). For example, if you handle input on another queue, set this property when you first access the input device.

## See Also

### Handling input

- [physicalInputProfile](physicalinputprofile.md): Deprecated. The device’s physical input profile, such as a controller’s extended gamepad.

# handlerQueue (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The dispatch queue that the framework uses to call element value change handlers.

## Declaration

```objectivec
@property (nonatomic, strong) dispatch_queue_t handlerQueue;
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

The default queue is the main queue. Set this property to another queue to asynchronously call value change handlers (see [GCControllerAxisInput](../gccontrolleraxisinput.md), [GCControllerButtonInput](../gccontrollerbuttoninput.md), [GCControllerDirectionPad](../gccontrollerdirectionpad.md), and [GCMotion](../gcmotion.md)). For example, if you handle input on another queue, set this property when you first access the input device.

## See Also

### Handling input

- [physicalInputProfile](physicalinputprofile.md): Deprecated. The device’s physical input profile, such as a controller’s extended gamepad.
