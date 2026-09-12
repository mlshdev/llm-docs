> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/queue](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/queue)

# queue (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The dispatch queue that the system uses for callbacks.

## Declaration

```swift
var queue: dispatch_queue_t? { get set }
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Objects that conform to the [GCDevicePhysicalInput](../gcdevicephysicalinput.md) protocol dispatch callbacks on the device’s [handlerQueue](../gcdevice/handlerqueue.md) property by default. If you want to use a different dispatch queue, set this property to the preferred queue before you set callbacks.

# queue (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The dispatch queue that the system uses for callbacks.

## Declaration

```objectivec
@property (atomic, strong, nullable) dispatch_queue_t queue;
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Objects that conform to the [GCDevicePhysicalInput](../gcdevicephysicalinput.md) protocol dispatch callbacks on the device’s [handlerQueue](../gcdevice/handlerqueue.md) property by default. If you want to use a different dispatch queue, set this property to the preferred queue before you set callbacks.
