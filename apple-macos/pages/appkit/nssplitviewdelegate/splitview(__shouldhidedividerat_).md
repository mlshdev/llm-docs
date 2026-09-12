> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:shouldhidedividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:shouldhidedividerat:))

# splitView(\_:shouldHideDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, shouldHideDividerAt dividerIndex: Int) -> Bool
```

## Parameters

- `splitView`: The split view that sends the message.
- `dividerIndex`: The zero-based index of the divider.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can drag the divider off the edge of the split view, resulting in it not being visible.

<a id="Discussion"></a>

## Discussion

If a split view has no delegate, or if its delegate doesn’t respond to this message, the split view behaves as if it has a delegate that returns [false](https://developer.apple.com/documentation/swift/false) when it receives this message.

## See Also

### Configuring and Drawing View Dividers

- [splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:)](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView(\_:additionalEffectiveRectOfDividerAt:)](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.

# splitView:shouldHideDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView shouldHideDividerAtIndex:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `dividerIndex`: The zero-based index of the divider.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user can drag the divider off the edge of the split view, resulting in it not being visible.

<a id="Discussion"></a>

## Discussion

If a split view has no delegate, or if its delegate doesn’t respond to this message, the split view behaves as if it has a delegate that returns [false](https://developer.apple.com/documentation/swift/false) when it receives this message.

## See Also

### Configuring and Drawing View Dividers

- [splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:](splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView:additionalEffectiveRectOfDividerAtIndex:](splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.
