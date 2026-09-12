> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitviewdidresizesubviews(_:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitviewdidresizesubviews(_:))

# splitViewDidResizeSubviews(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the delegate when the split view resizes its subviews.

## Declaration

```swift
@MainActor optional func splitViewDidResizeSubviews(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didResizeSubviewsNotification](../nssplitview/didresizesubviewsnotification.md), which posts after a change to the size of some or all subviews of a split view.

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, the system automatically registers it to receive this notification.

The default notification center invokes this method after the split view resizes two of its subviews in response to the repositioning of a divider.

## See Also

### Managing Subviews

- [splitViewWillResizeSubviews(\_:)](splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitView(\_:canCollapseSubview:)](splitview%28__cancollapsesubview_%29.md): Allows the delegate to determine whether the user can collapse and expand the specified subview.
- [splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:)](splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows a delegate to determine if a subview collapses in response to a double click.

# splitViewDidResizeSubviews: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the delegate when the split view resizes its subviews.

## Declaration

```objectivec
- (void) splitViewDidResizeSubviews:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSSplitViewDidResizeSubviewsNotification](../nssplitview/didresizesubviewsnotification.md), which posts after a change to the size of some or all subviews of a split view.

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, the system automatically registers it to receive this notification.

The default notification center invokes this method after the split view resizes two of its subviews in response to the repositioning of a divider.

## See Also

### Managing Subviews

- [splitViewWillResizeSubviews:](splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitView:canCollapseSubview:](splitview%28__cancollapsesubview_%29.md): Allows the delegate to determine whether the user can collapse and expand the specified subview.
- [splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex:](splitview%28__shouldcollapsesubview_fordoubleclickondividerat_%29.md): Deprecated. Allows a delegate to determine if a subview collapses in response to a double click.
