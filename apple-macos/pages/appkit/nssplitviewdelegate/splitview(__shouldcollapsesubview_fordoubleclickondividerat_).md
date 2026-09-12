> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewdelegate/splitview(_:shouldcollapsesubview:fordoubleclickondividerat:)](https://developer.apple.com/documentation/appkit/nssplitviewdelegate/splitview(_:shouldcollapsesubview:fordoubleclickondividerat:))

# splitView(\_:shouldCollapseSubview:forDoubleClickOnDividerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Allows a delegate to determine if a subview collapses in response to a double click.

> NSSplitView no longer supports collapsing sections via double-click. This delegate method is never called.

## Declaration

```swift
optional func splitView(_ splitView: NSSplitView, shouldCollapseSubview subview: NSView, forDoubleClickOnDividerAt dividerIndex: Int) -> Bool
```

## Parameters

- `splitView`: The split view that sends the message.
- `subview`: The subview to collapse.
- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the subview should collapse; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, it receives this message once for the subview before a divider when the user double-clicks that divider, and again for the subview after the divider, but only if the delegate returns [true](https://developer.apple.com/documentation/swift/true) when it receives [splitView(\_:canCollapseSubview:)](splitview%28__cancollapsesubview_%29.md) for the subview in question. When the delegate indicates that both subviews should collapse, the behavior of [NSSplitView](../nssplitview.md) is undefined.

## See Also

### Managing Subviews

- [splitViewWillResizeSubviews(\_:)](splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitViewDidResizeSubviews(\_:)](splitviewdidresizesubviews%28__%29.md): Notifies the delegate when the split view resizes its subviews.
- [splitView(\_:canCollapseSubview:)](splitview%28__cancollapsesubview_%29.md): Allows the delegate to determine whether the user can collapse and expand the specified subview.

# splitView:shouldCollapseSubview:forDoubleClickOnDividerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Allows a delegate to determine if a subview collapses in response to a double click.

> NSSplitView no longer supports collapsing sections via double-click. This delegate method is never called.

## Declaration

```objectivec
- (BOOL) splitView:(NSSplitView *) splitView shouldCollapseSubview:(NSView *) subview forDoubleClickOnDividerAtIndex:(NSInteger) dividerIndex;
```

## Parameters

- `splitView`: The split view that sends the message.
- `subview`: The subview to collapse.
- `dividerIndex`: The index of the divider.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the subview should collapse; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the delegate implements this method, it receives this message once for the subview before a divider when the user double-clicks that divider, and again for the subview after the divider, but only if the delegate returns [true](https://developer.apple.com/documentation/swift/true) when it receives [splitView:canCollapseSubview:](splitview%28__cancollapsesubview_%29.md) for the subview in question. When the delegate indicates that both subviews should collapse, the behavior of [NSSplitView](../nssplitview.md) is undefined.

## See Also

### Managing Subviews

- [splitViewWillResizeSubviews:](splitviewwillresizesubviews%28__%29.md): Notifies the delegate when the split view is about to resize its subviews.
- [splitViewDidResizeSubviews:](splitviewdidresizesubviews%28__%29.md): Notifies the delegate when the split view resizes its subviews.
- [splitView:canCollapseSubview:](splitview%28__cancollapsesubview_%29.md): Allows the delegate to determine whether the user can collapse and expand the specified subview.
