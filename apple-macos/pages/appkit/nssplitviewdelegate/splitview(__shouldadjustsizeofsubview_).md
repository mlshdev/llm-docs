> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:shouldadjustsizeofsubview:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:shouldadjustsizeofsubview:))

# splitView(\_:shouldAdjustSizeOfSubview:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Allows the delegate to specify whether to resize the subview.

## Declaration

```swift
@MainActor optional func splitView(_ splitView: NSSplitView, shouldAdjustSizeOfSubview view: NSView) -> Bool
```

## Parameters

- `splitView`: The split view that sends the message.
- `view`: The subview to resize.

<a id="return-value"></a>

## Return Value

If [adjustSubviews()](../nssplitview/adjustsubviews%28%29.md) can change the size of the subview, [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false). By returning [false](https://developer.apple.com/documentation/swift/false), you lock the size of the split view `subview` while the split view resizes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

Regardless of the value that this method returns, [adjustSubviews()](../nssplitview/adjustsubviews%28%29.md) may change the origin of the subview. Nonresizable subviews may resize to prevent an invalid subview layout.

If a split view has no delegate, or if its delegate doesn’t respond to this message, the split view behaves as if this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Adjusting Subviews Manually

- [splitView(\_:constrainMinCoordinate:ofSubviewAt:)](splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView(\_:constrainMaxCoordinate:ofSubviewAt:)](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView(\_:resizeSubviewsWithOldSize:)](splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.

# splitView:shouldAdjustSizeOfSubview: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Allows the delegate to specify whether to resize the subview.

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView shouldAdjustSizeOfSubview:(NSView *) view;
```

## Parameters

- `splitView`: The split view that sends the message.
- `view`: The subview to resize.

<a id="return-value"></a>

## Return Value

If [adjustSubviews](../nssplitview/adjustsubviews%28%29.md) can change the size of the subview, [true](https://developer.apple.com/documentation/swift/true); otherwise, [false](https://developer.apple.com/documentation/swift/false). By returning [false](https://developer.apple.com/documentation/swift/false), you lock the size of the split view `subview` while the split view resizes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If your split view uses Auto Layout to size its subviews, don’t implement this method.

Regardless of the value that this method returns, [adjustSubviews](../nssplitview/adjustsubviews%28%29.md) may change the origin of the subview. Nonresizable subviews may resize to prevent an invalid subview layout.

If a split view has no delegate, or if its delegate doesn’t respond to this message, the split view behaves as if this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Adjusting Subviews Manually

- [splitView:constrainMinCoordinate:ofSubviewAt:](splitview%28__constrainmincoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the minimum coordinate limit of a divider when the user drags it.
- [splitView:constrainMaxCoordinate:ofSubviewAt:](splitview%28__constrainmaxcoordinate_ofsubviewat_%29.md): Allows the delegate to constrain the maximum coordinate limit of a divider when the user drags it.
- [splitView:resizeSubviewsWithOldSize:](splitview%28__resizesubviewswitholdsize_%29.md): Allows the delegate to specify custom sizing behavior for the subviews of the split view.
