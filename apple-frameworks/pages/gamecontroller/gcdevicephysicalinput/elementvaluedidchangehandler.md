> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/elementvaluedidchangehandler](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/elementvaluedidchangehandler)

# elementValueDidChangeHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A block that the profile calls when an element’s value changes.

## Declaration

```swift
var elementValueDidChangeHandler: ((any GCDevicePhysicalInput, any GCPhysicalInputElement) -> Void)? { get set }
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Use this property to get the latest state of the element. If multiple elements change, Game Controller invokes this block for each element that changes. The block’s parameters are:

- **element**: The element whose value changes.

> **Important**

>  To track every element value change, set the [inputStateAvailableHandler](inputstateavailablehandler.md) property instead and use the [nextInputState()](nextinputstate%28%29.md) method to get all the buffered changes.

## See Also

### Handling device input

- [nextInputState()](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture()](capture%28%29.md): Returns a snapshot of the physical device inputs.

# elementValueDidChangeHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A block that the profile calls when an element’s value changes.

## Declaration

```objectivec
@property (atomic, copy, nullable) void (^elementValueDidChangeHandler)(id<GCDevicePhysicalInput>physicalInput, id<GCPhysicalInputElement>element);
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Use this property to get the latest state of the element. If multiple elements change, Game Controller invokes this block for each element that changes. The block’s parameters are:

- **element**: The element whose value changes.

> **Important**

>  To track every element value change, set the [inputStateAvailableHandler](inputstateavailablehandler.md) property instead and use the [nextInputState](nextinputstate%28%29.md) method to get all the buffered changes.

## See Also

### Handling device input

- [nextInputState](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture](capture%28%29.md): Returns a snapshot of the physical device inputs.
