> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:shouldbeginselectionat:)](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:shouldbeginselectionat:))

# selectionManager(\_:shouldBeginSelectionAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Asks the delegate whether a selection can begin at the specified point.

## Declaration

```swift
optional func selectionManager(_ selectionManager: NSTextSelectionManager, shouldBeginSelectionAt point: NSPoint) -> Bool
```

## Parameters

- `selectionManager`: The selection manager requesting permission.
- `point`: The point in the view’s coordinate system where the selection gesture began.

<a id="return-value"></a>

## Return Value

`YES` if selection can begin at the point; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

Return `YES` to allow a text selection to begin at the specified point, `NO` to prevent it. If the delegate doesn’t implement this method, selection is always allowed. The selection manager calls this method when the user initiates a selection gesture at the given point in the coordinate system of the view containing the selection manager.

# selectionManager:shouldBeginSelectionAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Asks the delegate whether a selection can begin at the specified point.

## Declaration

```objectivec
- (BOOL) selectionManager:(NSTextSelectionManager *) selectionManager shouldBeginSelectionAtPoint:(NSPoint) point;
```

## Parameters

- `selectionManager`: The selection manager requesting permission.
- `point`: The point in the view’s coordinate system where the selection gesture began.

<a id="return-value"></a>

## Return Value

`YES` if selection can begin at the point; otherwise, `NO`.

<a id="discussion"></a>

## Discussion

Return `YES` to allow a text selection to begin at the specified point, `NO` to prevent it. If the delegate doesn’t implement this method, selection is always allowed. The selection manager calls this method when the user initiates a selection gesture at the given point in the coordinate system of the view containing the selection manager.
