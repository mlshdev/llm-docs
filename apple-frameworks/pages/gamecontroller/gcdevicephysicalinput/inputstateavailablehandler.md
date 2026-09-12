> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/inputstateavailablehandler](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/inputstateavailablehandler)

# inputStateAvailableHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when Game Controller adds an input state to the queue.

## Declaration

```swift
var inputStateAvailableHandler: ((any GCDevicePhysicalInput) -> Void)? { get set }
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Set this property to track every element value change, not just the current value. When Game Controller invokes the handler, invoke the [nextInputState()](nextinputstate%28%29.md) method repeatedly to get all the buffered changes until the queue is empty.

To get just the current element value, use the [elementValueDidChangeHandler](elementvaluedidchangehandler.md) property instead.

## See Also

### Handling device input

- [nextInputState()](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture()](capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.

# inputStateAvailableHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The block that the profile calls when Game Controller adds an input state to the queue.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^inputStateAvailableHandler)(id<GCDevicePhysicalInput>physicalInput);
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Set this property to track every element value change, not just the current value. When Game Controller invokes the handler, invoke the [nextInputState](nextinputstate%28%29.md) method repeatedly to get all the buffered changes until the queue is empty.

To get just the current element value, use the [elementValueDidChangeHandler](elementvaluedidchangehandler.md) property instead.

## See Also

### Handling device input

- [nextInputState](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture](capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.
