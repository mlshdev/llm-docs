> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitview(_:effectiverect:fordrawnrect:ofdividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview(_:effectiverect:fordrawnrect:ofdividerat:))

# splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.

## Declaration

```swift
@MainActor func splitView(_ splitView: NSSplitView, effectiveRect proposedEffectiveRect: NSRect, forDrawnRect drawnRect: NSRect, ofDividerAt dividerIndex: Int) -> NSRect
```

## See Also

### Configuring and Drawing View Dividers

- [splitView(\_:shouldHideDividerAt:)](splitview%28__shouldhidedividerat_%29.md): Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView(\_:additionalEffectiveRectOfDividerAt:)](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.

# splitView:effectiveRect:forDrawnRect:ofDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.

## Declaration

```objectivec
- (NSRect) splitView:(NSSplitView *) splitView effectiveRect:(NSRect) proposedEffectiveRect forDrawnRect:(NSRect) drawnRect ofDividerAtIndex:(NSInteger) dividerIndex;
```

## See Also

### Configuring and Drawing View Dividers

- [splitView:shouldHideDividerAtIndex:](splitview%28__shouldhidedividerat_%29.md): Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView:additionalEffectiveRectOfDividerAtIndex:](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.
