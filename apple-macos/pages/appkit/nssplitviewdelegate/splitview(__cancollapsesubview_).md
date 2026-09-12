> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:cancollapsesubview:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:cancollapsesubview:))

# splitView(\_:canCollapseSubview:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to determine whether the user can collapse and expand the specified subview.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, canCollapseSubview subview: NSView) -> Bool
```

## Parameters

- `splitView`: The split view that sends the message.
- `subview`: The subview to collapse.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `subview` collapses when the user drags a divider beyond the halfway mark between its minimum size and its edge; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `subview` expands when the user drags the divider beyond the halfway mark between its minimum size and its edge.

To specify the minimum size, define the methods [splitView(\_:constrainMaxCoordinate:ofSubviewAt:)](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md) and [splitView(\_:constrainMinCoordinate:ofSubviewAt:)](splitview%28__constrainmincoordinate_ofsubviewat_%29.md). A subview can collapse only if you also define [splitView(\_:constrainMinCoordinate:ofSubviewAt:)](splitview%28__constrainmincoordinate_ofsubviewat_%29.md).

A collapsed subview isn’t visible, but the split view object retains it with the same size as before the collapse.

If the delegate doesn’t implement this method, the subviews can’t collapse.

## See Also

### Managing Subviews

- [splitViewWillResizeSubviews(\_:)](splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitViewDidResizeSubviews(\_:)](splitviewdidresizesubviews%28__%29.md): Notifies the delegate when the split view resizes its subviews.
- [splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:)](splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows a delegate to determine if a subview collapses in response to a double click.

# splitView:canCollapseSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to determine whether the user can collapse and expand the specified subview.

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView canCollapseSubview:(NSView *) subview;
```

## Parameters

- `splitView`: The split view that sends the message.
- `subview`: The subview to collapse.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `subview` collapses when the user drags a divider beyond the halfway mark between its minimum size and its edge; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The `subview` expands when the user drags the divider beyond the halfway mark between its minimum size and its edge.

To specify the minimum size, define the methods [splitView:constrainMaxCoordinate:ofSubviewAt:](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md) and [splitView:constrainMinCoordinate:ofSubviewAt:](splitview%28__constrainmincoordinate_ofsubviewat_%29.md). A subview can collapse only if you also define [splitView:constrainMinCoordinate:ofSubviewAt:](splitview%28__constrainmincoordinate_ofsubviewat_%29.md).

A collapsed subview isn’t visible, but the split view object retains it with the same size as before the collapse.

If the delegate doesn’t implement this method, the subviews can’t collapse.

## See Also

### Managing Subviews

- [splitViewWillResizeSubviews:](splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitViewDidResizeSubviews:](splitviewdidresizesubviews%28__%29.md): Notifies the delegate when the split view resizes its subviews.
- [splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex:](splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows a delegate to determine if a subview collapses in response to a double click.
