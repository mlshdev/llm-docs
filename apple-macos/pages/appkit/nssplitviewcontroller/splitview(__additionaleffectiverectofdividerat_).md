> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitview(_:additionaleffectiverectofdividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview(_:additionaleffectiverectofdividerat:))

# splitView(\_:additionalEffectiveRectOfDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.

## Declaration

```swift
@MainActor func splitView(_ splitView: NSSplitView, additionalEffectiveRectOfDividerAt dividerIndex: Int) -> NSRect
```

## See Also

### Configuring and Drawing View Dividers

- [splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:)](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView(\_:shouldHideDividerAt:)](splitview%28__shouldhidedividerat_%29.md): Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.

# splitView:additionalEffectiveRectOfDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.

## Declaration

```objectivec
- (NSRect) splitView:(NSSplitView *) splitView additionalEffectiveRectOfDividerAtIndex:(NSInteger) dividerIndex;
```

## See Also

### Configuring and Drawing View Dividers

- [splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView:shouldHideDividerAtIndex:](splitview%28__shouldhidedividerat_%29.md): Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.
