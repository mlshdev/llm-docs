> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:constrainmincoordinate:ofsubviewat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:constrainmincoordinate:ofsubviewat:))

# splitView(\_:constrainMinCoordinate:ofSubviewAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, constrainMinCoordinate proposedMinimumPosition: CGFloat, ofSubviewAt dividerIndex: Int) -> CGFloat
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedMinimumPosition`: The proposed minimum coordinate limit of the subview in the split view’s flipped coordinate system.
- `dividerIndex`: Specifies the divider the user is moving, with the first divider being 0 and increasing from top to bottom (or left to right).

<a id="return-value"></a>

## Return Value

The minimum coordinate limit of the divider.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

The delegate receives this message before the split view begins tracking the cursor to position a divider. You can further constrain the limits, but you can’t extend the divider limits.

If the split bars are horizontal (views are one on top of the other), `proposedMin` is the top limit. If the split bars are vertical (views are side by side), `proposedMin` is the left limit. The initial value of `proposedMin` is the top (or left side) of the subview before the divider.

## See Also

### Adjusting Subviews Manually

- [splitView(\_:constrainMaxCoordinate:ofSubviewAt:)](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView(\_:resizeSubviewsWithOldSize:)](splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
- [splitView(\_:shouldAdjustSizeOfSubview:)](splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.

# splitView:constrainMinCoordinate:ofSubviewAt: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.

## Declaration

```objectivec
- (CGFloat) splitView:(NSSplitView *) splitView constrainMinCoordinate:(CGFloat) proposedMinimumPosition ofSubviewAt:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedMinimumPosition`: The proposed minimum coordinate limit of the subview in the split view’s flipped coordinate system.
- `dividerIndex`: Specifies the divider the user is moving, with the first divider being 0 and increasing from top to bottom (or left to right).

<a id="return-value"></a>

## Return Value

The minimum coordinate limit of the divider.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

The delegate receives this message before the split view begins tracking the cursor to position a divider. You can further constrain the limits, but you can’t extend the divider limits.

If the split bars are horizontal (views are one on top of the other), `proposedMin` is the top limit. If the split bars are vertical (views are side by side), `proposedMin` is the left limit. The initial value of `proposedMin` is the top (or left side) of the subview before the divider.

## See Also

### Adjusting Subviews Manually

- [splitView:constrainMaxCoordinate:ofSubviewAt:](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView:resizeSubviewsWithOldSize:](splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
- [splitView:shouldAdjustSizeOfSubview:](splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.
