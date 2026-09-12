> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/capture()](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/capture())

# capture() (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a snapshot of the physical device inputs.

## Declaration

```swift
func capture() -> any GCDevicePhysicalInputState
```

<a id="return-value"></a>

## Return Value

A new instance containing the current state of the physical device input.

## Mentioned In

- [Handling input events](../handling-input-events.md)

## See Also

### Handling device input

- [nextInputState()](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.

# capture (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns a snapshot of the physical device inputs.

## Declaration

```objectivec
- (id<GCDevicePhysicalInputState>) capture;
```

<a id="return-value"></a>

## Return Value

A new instance containing the current state of the physical device input.

## Mentioned In

- [Handling input events](../handling-input-events.md)

## See Also

### Handling device input

- [nextInputState](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [inputStateQueueDepth](inputstatequeuedepth.md): The maximum number of input values that the queue stores.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.
