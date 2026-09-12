> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:constrainmaxcoordinate:ofsubviewat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:constrainmaxcoordinate:ofsubviewat:))

# splitView(\_:constrainMaxCoordinate:ofSubviewAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, constrainMaxCoordinate proposedMaximumPosition: CGFloat, ofSubviewAt dividerIndex: Int) -> CGFloat
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedMaximumPosition`: The proposed maximum coordinate limit of the subview in the split view’s flipped coordinate system.
- `dividerIndex`: Specifies the divider the user is moving, with the first divider being 0 and increasing from top to bottom (or left to right).

<a id="return-value"></a>

## Return Value

The maximum coordinate limit of the divider.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

The delegate receives this message before the split view begins tracking the mouse to position a divider. You can further constrain the limits, but you can’t extend the divider limits.

If the split bars are horizontal (views are one on top of the other), `proposedMax` is the bottom limit. If the split bars are vertical (views are side by side), `proposedMax` is the right limit. The initial value of `proposedMax` is the bottom (or right side) of the subview after the divider.

## See Also

### Adjusting Subviews Manually

- [splitView(\_:constrainMinCoordinate:ofSubviewAt:)](splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView(\_:resizeSubviewsWithOldSize:)](splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
- [splitView(\_:shouldAdjustSizeOfSubview:)](splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.

# splitView:constrainMaxCoordinate:ofSubviewAt: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.

## Declaration

```objectivec
- (CGFloat) splitView:(NSSplitView *) splitView constrainMaxCoordinate:(CGFloat) proposedMaximumPosition ofSubviewAt:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `proposedMaximumPosition`: The proposed maximum coordinate limit of the subview in the split view’s flipped coordinate system.
- `dividerIndex`: Specifies the divider the user is moving, with the first divider being 0 and increasing from top to bottom (or left to right).

<a id="return-value"></a>

## Return Value

The maximum coordinate limit of the divider.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

The delegate receives this message before the split view begins tracking the mouse to position a divider. You can further constrain the limits, but you can’t extend the divider limits.

If the split bars are horizontal (views are one on top of the other), `proposedMax` is the bottom limit. If the split bars are vertical (views are side by side), `proposedMax` is the right limit. The initial value of `proposedMax` is the bottom (or right side) of the subview after the divider.

## See Also

### Adjusting Subviews Manually

- [splitView:constrainMinCoordinate:ofSubviewAt:](splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView:resizeSubviewsWithOldSize:](splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
- [splitView:shouldAdjustSizeOfSubview:](splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.
