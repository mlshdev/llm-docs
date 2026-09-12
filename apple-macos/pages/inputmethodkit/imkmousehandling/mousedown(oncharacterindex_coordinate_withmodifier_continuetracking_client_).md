> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkmousehandling/mousedown(oncharacterindex:coordinate:withmodifier:continuetracking:client:)](https://developer.apple.com/documentation/inputmethodkit/imkmousehandling/mousedown(oncharacterindex:coordinate:withmodifier:continuetracking:client:))

# mouseDown(onCharacterIndex:coordinate:withModifier:continueTracking:client:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Handles mouse-down event send to an input method.

## Declaration

```swift
func mouseDown(onCharacterIndex index: Int, coordinate point: NSPoint, withModifier flags: Int, continueTracking keepTracking: UnsafeMutablePointer<ObjCBool>!, client sender: Any!) -> Bool
```

## Parameters

- `index`: The index within the sender’s text storage where the mouse-down event occurred.
- `point`: The point at which the mouse-down event occurred.
- `flags`: The modifier keys.
- `keepTracking`: Set this parameter to [true](https://developer.apple.com/documentation/swift/true) if you want to receive subsequent mouse-moved and mouse -up events.
- `sender`: The client object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if handled; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method if your input method handles mouse-down events.

## See Also

### Handling Mouse Events

- [mouseUp(onCharacterIndex:coordinate:withModifier:client:)](mouseup%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-up event sent to an input method.
- [mouseMoved(onCharacterIndex:coordinate:withModifier:client:)](mousemoved%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-moved event sent to an input method.

# mouseDownOnCharacterIndex:coordinate:withModifier:continueTracking:client: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Handles mouse-down event send to an input method.

## Declaration

```objectivec
- (BOOL) mouseDownOnCharacterIndex:(NSUInteger) index coordinate:(NSPoint) point withModifier:(NSUInteger) flags continueTracking:(BOOL *) keepTracking client:(id) sender;
```

## Parameters

- `index`: The index within the sender’s text storage where the mouse-down event occurred.
- `point`: The point at which the mouse-down event occurred.
- `flags`: The modifier keys.
- `keepTracking`: Set this parameter to [true](https://developer.apple.com/documentation/swift/true) if you want to receive subsequent mouse-moved and mouse -up events.
- `sender`: The client object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if handled; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method if your input method handles mouse-down events.

## See Also

### Handling Mouse Events

- [mouseUpOnCharacterIndex:coordinate:withModifier:client:](mouseup%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-up event sent to an input method.
- [mouseMovedOnCharacterIndex:coordinate:withModifier:client:](mousemoved%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-moved event sent to an input method.
