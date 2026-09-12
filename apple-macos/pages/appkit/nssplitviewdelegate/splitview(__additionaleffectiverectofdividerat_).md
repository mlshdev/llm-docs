> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:additionaleffectiverectofdividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:additionaleffectiverectofdividerat:))

# splitView(\_:additionalEffectiveRectOfDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, additionalEffectiveRectOfDividerAt dividerIndex: Int) -> NSRect
```

## Parameters

- `splitView`: The split view that sends the message.
- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

An additional rectangle, in the coordinate system that `splitView` defines, where mouse clicks can initiate divider dragging. Returning [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) indicates no additional dragging rectangle is necessary.

<a id="Discussion"></a>

## Discussion

If a split view has no delegate, or if its delegate doesn’t respond to this message, only mouse clicks within the effective frame of a divider initiate divider dragging.

## See Also

### Configuring and Drawing View Dividers

- [splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:)](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView(\_:shouldHideDividerAt:)](splitview%28__shouldhidedividerat_%29.md): Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.

# splitView:additionalEffectiveRectOfDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.

## Declaration

```objectivec
- (NSRect) splitView:(NSSplitView *) splitView additionalEffectiveRectOfDividerAtIndex:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

An additional rectangle, in the coordinate system that `splitView` defines, where mouse clicks can initiate divider dragging. Returning [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) indicates no additional dragging rectangle is necessary.

<a id="Discussion"></a>

## Discussion

If a split view has no delegate, or if its delegate doesn’t respond to this message, only mouse clicks within the effective frame of a divider initiate divider dragging.

## See Also

### Configuring and Drawing View Dividers

- [splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView:shouldHideDividerAtIndex:](splitview%28__shouldhidedividerat_%29.md): Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.
