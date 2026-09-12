> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstatediff/changedelements](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstatediff/changedelements)

# changedElements

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the elements that changed since the previous input state.

## Declaration

```objectivec
- (NSEnumerator<id<GCPhysicalInputElement>> *) changedElements;
```

<a id="return-value"></a>

## Return Value

An enumerator that contains the changed elements in no particular order.

<a id="Discussion"></a>

## Discussion

Returns `nil` if there’s no previous input state, either because this is the first input state or Game Controller discards the prior input state because the queue is full.

## See Also

### Getting changes

- [changeForElement:](change%28for_%29.md): Returns whether the input value of an element changes.
- [GCDevicePhysicalInputElementChange](../gcdevicephysicalinputelementchange.md): Possible values that describe whether the input value of an element changes.
