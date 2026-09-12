> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:effectiverect:fordrawnrect:ofdividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:effectiverect:fordrawnrect:ofdividerat:))

# splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, effectiveRect proposedEffectiveRect: NSRect, forDrawnRect drawnRect: NSRect, ofDividerAt dividerIndex: Int) -> NSRect
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedEffectiveRect`: The proposed rectangle where mouse clicks initiate divider dragging. The rectangle uses the coordinate system that `splitView` defines.
- `drawnRect`: The frame of the divider in the coordinate system that `splitView` defines.
- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

A rectangle, in the coordinate system that `splitView` defines, where mouse clicks initiate divider dragging.

<a id="Discussion"></a>

## Discussion

A split view with thick dividers proposes the drawn frame as the effective frame. A split view with thin dividers proposes an effective frame that’s a little larger than the drawn frame to make it easier for the user to grab the divider.

If a split view has no delegate, or if its delegate doesn’t respond to this message, the split view behaves as if it has a delegate that returns `proposedEffectiveRect` when it receives this message.

## See Also

### Configuring and Drawing View Dividers

- [splitView(\_:shouldHideDividerAt:)](splitview%28__shouldhidedividerat_%29.md): Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView(\_:additionalEffectiveRectOfDividerAt:)](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.

# splitView:effectiveRect:forDrawnRect:ofDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.

## Declaration

```objectivec
- (NSRect) splitView:(NSSplitView *) splitView effectiveRect:(NSRect) proposedEffectiveRect forDrawnRect:(NSRect) drawnRect ofDividerAtIndex:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedEffectiveRect`: The proposed rectangle where mouse clicks initiate divider dragging. The rectangle uses the coordinate system that `splitView` defines.
- `drawnRect`: The frame of the divider in the coordinate system that `splitView` defines.
- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

A rectangle, in the coordinate system that `splitView` defines, where mouse clicks initiate divider dragging.

<a id="Discussion"></a>

## Discussion

A split view with thick dividers proposes the drawn frame as the effective frame. A split view with thin dividers proposes an effective frame that’s a little larger than the drawn frame to make it easier for the user to grab the divider.

If a split view has no delegate, or if its delegate doesn’t respond to this message, the split view behaves as if it has a delegate that returns `proposedEffectiveRect` when it receives this message.

## See Also

### Configuring and Drawing View Dividers

- [splitView:shouldHideDividerAtIndex:](splitview%28__shouldhidedividerat_%29.md): Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView:additionalEffectiveRectOfDividerAtIndex:](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.
