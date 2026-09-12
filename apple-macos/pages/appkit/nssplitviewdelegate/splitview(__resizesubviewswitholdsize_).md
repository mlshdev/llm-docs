> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:resizesubviewswitholdsize:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:resizesubviewswitholdsize:))

# splitView(\_:resizeSubviewsWithOldSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify custom sizing behavior for the subviews of the split view.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, resizeSubviewsWithOldSize oldSize: NSSize)
```

## Parameters

- `splitView`: The split view that sends the message.
- `oldSize`: The size of the split view before the user resizes it.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

If the delegate implements this method, it receives this message after the split view resizes.

Resize the subviews so that the sum of the sizes of the subviews plus the sum of the thickness of the dividers equals the size of the new frame of the [NSSplitView](../nssplitview.md). You can get the thickness of a divider through the [dividerThickness](../nssplitview/dividerthickness.md) method.

If you implement this delegate method to resize subviews on your own, the [NSSplitView](../nssplitview.md) doesn’t perform any error checking for you. However, you can invoke [adjustSubviews()](../nssplitview/adjustsubviews%28%29.md) to perform the default sizing behavior.

## See Also

### Adjusting Subviews Manually

- [splitView(\_:constrainMinCoordinate:ofSubviewAt:)](splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView(\_:constrainMaxCoordinate:ofSubviewAt:)](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView(\_:shouldAdjustSizeOfSubview:)](splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.

# splitView:resizeSubviewsWithOldSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to specify custom sizing behavior for the subviews of the split view.

## Declaration

```objectivec
- (void) splitView:(NSSplitView *) splitView resizeSubviewsWithOldSize:(NSSize) oldSize;
```

## Parameters

- `splitView`: The split view that sends the message.
- `oldSize`: The size of the split view before the user resizes it.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

If the delegate implements this method, it receives this message after the split view resizes.

Resize the subviews so that the sum of the sizes of the subviews plus the sum of the thickness of the dividers equals the size of the new frame of the [NSSplitView](../nssplitview.md). You can get the thickness of a divider through the [dividerThickness](../nssplitview/dividerthickness.md) method.

If you implement this delegate method to resize subviews on your own, the [NSSplitView](../nssplitview.md) doesn’t perform any error checking for you. However, you can invoke [adjustSubviews](../nssplitview/adjustsubviews%28%29.md) to perform the default sizing behavior.

## See Also

### Adjusting Subviews Manually

- [splitView:constrainMinCoordinate:ofSubviewAt:](splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView:constrainMaxCoordinate:ofSubviewAt:](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView:shouldAdjustSizeOfSubview:](splitview%28__shouldadjustsizeofsubview_%29.md): Allows the delegate to specify whether to resize the subview.
