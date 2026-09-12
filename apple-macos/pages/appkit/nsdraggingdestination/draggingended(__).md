> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingdestination/draggingended(_:)](https://developer.apple.com/documentation/appkit/nsdraggingdestination/draggingended(_:))

# draggingEnded(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called when a drag operation ends.

## Declaration

```swift
@MainActor optional func draggingEnded(_ sender: any NSDraggingInfo)
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to be notified when a drag operation ends, which can be useful if the drag ends in some other destination. For example, this method might be used by a destination doing auto-expansion in order to collapse any auto-expands.

## See Also

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered(\_:)](draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [wantsPeriodicDraggingUpdates()](wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated(\_:)](draggingupdated%28__%29.md) messages.
- [draggingUpdated(\_:)](draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited(\_:)](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).

# draggingEnded: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Called when a drag operation ends.

## Declaration

```objectivec
- (void) draggingEnded:(id<NSDraggingInfo>) sender;
```

## Parameters

- `sender`: The object sending the message; use it to get details about the dragging operation.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to be notified when a drag operation ends, which can be useful if the drag ends in some other destination. For example, this method might be used by a destination doing auto-expansion in order to collapse any auto-expands.

## See Also

### Managing a Dragging Session Before an Image Is Released

- [draggingEntered:](draggingentered%28__%29.md): Invoked when the dragged image enters destination bounds or frame; delegate returns dragging operation to perform.
- [wantsPeriodicDraggingUpdates](wantsperiodicdraggingupdates%28%29.md): Asks the destination object whether it wants to receive periodic [draggingUpdated:](draggingupdated%28__%29.md) messages.
- [draggingUpdated:](draggingupdated%28__%29.md): Invoked periodically as the image is held within the destination area, allowing modification of the dragging operation or mouse-pointer position.
- [draggingExited:](draggingexited%28__%29.md): Invoked when the dragged image exits the destination’s bounds rectangle (in the case of a view object) or its frame rectangle (in the case of a window object).
