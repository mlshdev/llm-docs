> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/splitview(_:shouldhidedividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/splitview(_:shouldhidedividerat:))

# splitView(\_:shouldHideDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.

## Declaration

```swift
@MainActor func splitView(_ splitView: NSSplitView, shouldHideDividerAt dividerIndex: Int) -> Bool
```

<a id="Discussion"></a>

## Discussion

By default, [NSSplitViewController](../nssplitviewcontroller.md) hides the first and last dividers if their outer neighbor is in a collapsed state.

## See Also

### Configuring and Drawing View Dividers

- [splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:)](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView(\_:additionalEffectiveRectOfDividerAt:)](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.

# splitView:shouldHideDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Allows the split view controller to determine whether the user can drag a divider or adjust it off the edge of the split view.

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView shouldHideDividerAtIndex:(NSInteger) dividerIndex;
```

<a id="Discussion"></a>

## Discussion

By default, [NSSplitViewController](../nssplitviewcontroller.md) hides the first and last dividers if their outer neighbor is in a collapsed state.

## See Also

### Configuring and Drawing View Dividers

- [splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the split view controller to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView:additionalEffectiveRectOfDividerAtIndex:](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the split view controller to return an additional rectangle where mouse clicks can initiate divider dragging.
