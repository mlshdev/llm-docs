> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinput/inputstatequeuedepth](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinput/inputstatequeuedepth)

# inputStateQueueDepth (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum number of input values that the queue stores.

## Declaration

```swift
var inputStateQueueDepth: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When the queue reaches this limit, Game Controller starts removing the oldest input states from the queue. The default value for this property is `1` which indicates no buffering.

## See Also

### Handling device input

- [nextInputState()](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [capture()](capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.

# inputStateQueueDepth (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The maximum number of input values that the queue stores.

## Declaration

```objectivec
@property (atomic, readwrite) NSInteger inputStateQueueDepth;
```

<a id="Discussion"></a>

## Discussion

When the queue reaches this limit, Game Controller starts removing the oldest input states from the queue. The default value for this property is `1` which indicates no buffering.

## See Also

### Handling device input

- [nextInputState](nextinputstate%28%29.md): Returns the next input state from the queue.
- [inputStateAvailableHandler](inputstateavailablehandler.md): The block that the profile calls when Game Controller adds an input state to the queue.
- [capture](capture%28%29.md): Returns a snapshot of the physical device inputs.
- [elementValueDidChangeHandler](elementvaluedidchangehandler.md): A block that the profile calls when an element’s value changes.
