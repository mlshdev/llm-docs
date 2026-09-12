> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstatediff/changedelements()-2zzwm](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstatediff/changedelements()-2zzwm)

# changedElements()

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Returns the elements that changed since the previous input state.

## Declaration

```swift
func changedElements() -> (some Sequence<any GCPhysicalInputElement>)?

```

<a id="return-value"></a>

## Return Value

A sequence that contains the changed elements in no particular order.

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

Returns `nil` if there’s no previous input state, either because this is the first input state or Game Controller discards the prior input state because the queue is full.

## See Also

### Getting changes

- [change(for:)](change%28for_%29.md): Returns whether the input value of an element changes.
- [GCDevicePhysicalInputElementChange](../gcdevicephysicalinputelementchange.md): Possible values that describe whether the input value of an element changes.
- [changedElements()](changedelements%28%29-9cdq4.md): Returns the elements that changed since the previous input state.
