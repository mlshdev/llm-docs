> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate](https://developer.apple.com/documentation/appkit/nssplitviewdelegate)

# NSSplitViewDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that a delegate of a split view implements.

## Declaration

```swift
protocol NSSplitViewDelegate : NSObjectProtocol
```

## Topics

### Managing Subviews

- [splitViewWillResizeSubviews(\_:)](nssplitviewdelegate/splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitViewDidResizeSubviews(\_:)](nssplitviewdelegate/splitviewdidresizesubviews%28__%29.md): Notifies the delegate when the split view resizes its subviews.
- [splitView(\_:canCollapseSubview:)](nssplitviewdelegate/splitview%28__cancollapsesubview_%29.md): Allows the delegate to determine whether the user can collapse and expand the specified subview.
- [splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:)](nssplitviewdelegate/splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows a delegate to determine if a subview collapses in response to a double click.

### Configuring and Drawing View Dividers

- [splitView(\_:effectiveRect:forDrawnRect:ofDividerAt:)](nssplitviewdelegate/splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView(\_:shouldHideDividerAt:)](nssplitviewdelegate/splitview%28__shouldhidedividerat_%29.md): Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView(\_:additionalEffectiveRectOfDividerAt:)](nssplitviewdelegate/splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.

### Constraining Split Position

- [splitView(\_:constrainSplitPosition:ofSubviewAt:)](nssplitviewdelegate/splitview%28__constrainsplitposition_ofsubviewat_%29.md): Allows the delegate to constrain the divider to certain positions.

### Adjusting Subviews Manually

- [splitView(\_:constrainMinCoordinate:ofSubviewAt:)](nssplitviewdelegate/splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView(\_:constrainMaxCoordinate:ofSubviewAt:)](nssplitviewdelegate/splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView(\_:resizeSubviewsWithOldSize:)](nssplitviewdelegate/splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
- [splitView(\_:shouldAdjustSizeOfSubview:)](nssplitviewdelegate/splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSSplitViewController](nssplitviewcontroller.md)

## See Also

### Customizing the Split View Behavior

- [delegate](nssplitview/delegate.md): The split view’s delegate.

# NSSplitViewDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that a delegate of a split view implements.

## Declaration

```objectivec
@protocol NSSplitViewDelegate <NSObject>
```

## Topics

### Managing Subviews

- [splitViewWillResizeSubviews:](nssplitviewdelegate/splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitViewDidResizeSubviews:](nssplitviewdelegate/splitviewdidresizesubviews%28__%29.md): Notifies the delegate when the split view resizes its subviews.
- [splitView:canCollapseSubview:](nssplitviewdelegate/splitview%28__cancollapsesubview_%29.md): Allows the delegate to determine whether the user can collapse and expand the specified subview.
- [splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex:](nssplitviewdelegate/splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows a delegate to determine if a subview collapses in response to a double click.

### Configuring and Drawing View Dividers

- [splitView:effectiveRect:forDrawnRect:ofDividerAtIndex:](nssplitviewdelegate/splitview%28__effectiverect_fordrawnrect_ofdividerat_%29.md): Allows the delegate to modify the rectangle where mouse clicks initiate divider dragging.
- [splitView:shouldHideDividerAtIndex:](nssplitviewdelegate/splitview%28__shouldhidedividerat_%29.md): Allows the delegate to determine whether the user can drag a divider or adjust it off the edge of the split view.
- [splitView:additionalEffectiveRectOfDividerAtIndex:](nssplitviewdelegate/splitview%28__additionaleffectiverectofdividerat_%29.md): Allows the delegate to return an additional rectangle where mouse clicks can initiate divider dragging.

### Constraining Split Position

- [splitView:constrainSplitPosition:ofSubviewAt:](nssplitviewdelegate/splitview%28__constrainsplitposition_ofsubviewat_%29.md): Allows the delegate to constrain the divider to certain positions.

### Adjusting Subviews Manually

- [splitView:constrainMinCoordinate:ofSubviewAt:](nssplitviewdelegate/splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView:constrainMaxCoordinate:ofSubviewAt:](nssplitviewdelegate/splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView:resizeSubviewsWithOldSize:](nssplitviewdelegate/splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
- [splitView:shouldAdjustSizeOfSubview:](nssplitviewdelegate/splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSSplitViewController](nssplitviewcontroller.md)

## See Also

### Customizing the Split View Behavior

- [delegate](nssplitview/delegate.md): The split view’s delegate.
