> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/nextinputstate()](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/nextinputstate())

# nextInputState() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the next input state from the queue.

## Declaration

```swift
func nextInputState() -> (any GCDevicePhysicalInputState & GCDevicePhysicalInputStateDiff)?
```

<a id="return-value"></a>

## Return Value

The next input state in the queue or `nil` if the queue is empty.

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

This method removes the next input state from the queue.

## See Also

### Handling device input

- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture()](capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.

# nextInputState (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the next input state from the queue.

## Declaration

```objectivec
- (id<GCDevicePhysicalInputState,GCDevicePhysicalInputStateDiff>) nextInputState;
```

<a id="return-value"></a>

## Return Value

The next input state in the queue or `nil` if the queue is empty.

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

This method removes the next input state from the queue.

## See Also

### Handling device input

- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [capture](capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.
