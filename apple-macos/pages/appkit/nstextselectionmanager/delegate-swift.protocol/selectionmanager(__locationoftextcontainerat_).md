> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:locationoftextcontainerat:)](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:locationoftextcontainerat:))

# selectionManager(\_:locationOfTextContainerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns the text location of the text container at the specified point.

## Declaration

```swift
optional func selectionManager(_ selectionManager: NSTextSelectionManager, locationOfTextContainerAt point: NSPoint) -> (any NSTextLocation)?
```

## Parameters

- `selectionManager`: The selection manager requesting the text location.
- `point`: The point in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The text location for the text container at the point, or `nil` if no container exists there.

<a id="discussion"></a>

## Discussion

Implement this method when your view hosts multiple text containers, such as multi-column or paginated layouts, so the selection manager can identify which container a gesture targets. Also implement `selectionManager:frameOfTextContainerAtPoint:` so the selection manager can convert gesture points into the correct container’s local coordinates.

# selectionManager:locationOfTextContainerAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns the text location of the text container at the specified point.

## Declaration

```objectivec
- (id<NSTextLocation>) selectionManager:(NSTextSelectionManager *) selectionManager locationOfTextContainerAtPoint:(NSPoint) point;
```

## Parameters

- `selectionManager`: The selection manager requesting the text location.
- `point`: The point in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The text location for the text container at the point, or `nil` if no container exists there.

<a id="discussion"></a>

## Discussion

Implement this method when your view hosts multiple text containers, such as multi-column or paginated layouts, so the selection manager can identify which container a gesture targets. Also implement `selectionManager:frameOfTextContainerAtPoint:` so the selection manager can convert gesture points into the correct container’s local coordinates.
