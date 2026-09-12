> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkmousehandling/mousemoved(oncharacterindex:coordinate:withmodifier:client:)](https://developer.apple.com/documentation/inputmethodkit/imkmousehandling/mousemoved(oncharacterindex:coordinate:withmodifier:client:))

# mouseMoved(onCharacterIndex:coordinate:withModifier:client:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Handles a mouse-moved event sent to an input method.

## Declaration

```swift
func mouseMoved(onCharacterIndex index: Int, coordinate point: NSPoint, withModifier flags: Int, client sender: Any!) -> Bool
```

## Parameters

- `index`: The index within the sender’s text storage where the mouse-moved event occurred.
- `point`: The point at which the mouse-moved event occurred.
- `flags`: The modifier keys.
- `sender`: The client object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if handled; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method if your input method handles mouse-moved events.

## See Also

### Handling Mouse Events

- [mouseDown(onCharacterIndex:coordinate:withModifier:continueTracking:client:)](mousedown%28oncharacterindex_coordinate_withmodifier_continuetracking_client_%29.md): Handles mouse-down event send to an input method.
- [mouseUp(onCharacterIndex:coordinate:withModifier:client:)](mouseup%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-up event sent to an input method.

# mouseMovedOnCharacterIndex:coordinate:withModifier:client: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Handles a mouse-moved event sent to an input method.

## Declaration

```objectivec
- (BOOL) mouseMovedOnCharacterIndex:(NSUInteger) index coordinate:(NSPoint) point withModifier:(NSUInteger) flags client:(id) sender;
```

## Parameters

- `index`: The index within the sender’s text storage where the mouse-moved event occurred.
- `point`: The point at which the mouse-moved event occurred.
- `flags`: The modifier keys.
- `sender`: The client object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if handled; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method if your input method handles mouse-moved events.

## See Also

### Handling Mouse Events

- [mouseDownOnCharacterIndex:coordinate:withModifier:continueTracking:client:](mousedown%28oncharacterindex_coordinate_withmodifier_continuetracking_client_%29.md): Handles mouse-down event send to an input method.
- [mouseUpOnCharacterIndex:coordinate:withModifier:client:](mouseup%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-up event sent to an input method.
