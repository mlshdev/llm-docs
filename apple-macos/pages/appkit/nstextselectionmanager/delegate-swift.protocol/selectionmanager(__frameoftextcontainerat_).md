> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:frameoftextcontainerat:)](https://developer.apple.com/documentation/appkit/nstextselectionmanager/delegate-swift.protocol/selectionmanager(_:frameoftextcontainerat:))

# selectionManager(\_:frameOfTextContainerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns the frame of the text container at the specified point.

## Declaration

```swift
optional func selectionManager(_ selectionManager: NSTextSelectionManager, frameOfTextContainerAt point: NSPoint) -> NSRect
```

## Parameters

- `selectionManager`: The selection manager requesting the frame.
- `point`: The point in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The frame of the text container at the point, in the view’s coordinate system, or `NSZeroRect` if no container exists there.

<a id="discussion"></a>

## Discussion

Implement this method whenever your text container is not positioned at the view’s origin (0, 0), or whenever your view hosts multiple text containers. The selection manager uses the returned frame to convert gesture points from view coordinates into container-local coordinates before forwarding them to [NSTextSelectionDataSource](../../nstextselectiondatasource.md). Without this method the selection manager assumes the container fills the view starting at the origin, which produces incorrect points for any other layout.

For multi-container layouts, also implement `selectionManager:locationOfTextContainerAtPoint:` so the selection manager can identify which container a gesture targets.

# selectionManager:frameOfTextContainerAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns the frame of the text container at the specified point.

## Declaration

```objectivec
- (NSRect) selectionManager:(NSTextSelectionManager *) selectionManager frameOfTextContainerAtPoint:(NSPoint) point;
```

## Parameters

- `selectionManager`: The selection manager requesting the frame.
- `point`: The point in the view’s coordinate system.

<a id="return-value"></a>

## Return Value

The frame of the text container at the point, in the view’s coordinate system, or `NSZeroRect` if no container exists there.

<a id="discussion"></a>

## Discussion

Implement this method whenever your text container is not positioned at the view’s origin (0, 0), or whenever your view hosts multiple text containers. The selection manager uses the returned frame to convert gesture points from view coordinates into container-local coordinates before forwarding them to [NSTextSelectionDataSource](../../nstextselectiondatasource.md). Without this method the selection manager assumes the container fills the view starting at the origin, which produces incorrect points for any other layout.

For multi-container layouts, also implement `selectionManager:locationOfTextContainerAtPoint:` so the selection manager can identify which container a gesture targets.
