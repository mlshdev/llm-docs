> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/wantsperiodicdraggingupdates()](https://developer.apple.com/documentation/appkit/nsdraggingdestination/wantsperiodicdraggingupdates())

# wantsPeriodicDraggingUpdates() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the destination object whether it wants to receive periodic [draggingUpdated(\_:)](draggingupdated%28__%29.md) messages.

## Declaration

```swift
@MainActor optional func wantsPeriodicDraggingUpdates() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the destination wants to receive periodic [draggingUpdated(\_:)](draggingupdated%28__%29.md) messages, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the destination returns [false](https://developer.apple.com/documentation/swift/false), these messages are sent only when the mouse moves or a modifier flag changes. Otherwise the destination gets the default behavior, where it receives periodic dragging-updated messages even if nothing changes.

## See Also

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered(\_:)](draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [draggingUpdated(\_:)](draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited(\_:)](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded(\_:)](draggingended%28__%29.md): Called when a drag operation ends.

# wantsPeriodicDraggingUpdates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the destination object whether it wants to receive periodic [draggingUpdated:](draggingupdated%28__%29.md) messages.

## Declaration

```objectivec
- (BOOL) wantsPeriodicDraggingUpdates;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the destination wants to receive periodic [draggingUpdated:](draggingupdated%28__%29.md) messages, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the destination returns [false](https://developer.apple.com/documentation/swift/false), these messages are sent only when the mouse moves or a modifier flag changes. Otherwise the destination gets the default behavior, where it receives periodic dragging-updated messages even if nothing changes.

## See Also

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered:](draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [draggingUpdated:](draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited:](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
- [draggingEnded:](draggingended%28__%29.md): Called when a drag operation ends.
