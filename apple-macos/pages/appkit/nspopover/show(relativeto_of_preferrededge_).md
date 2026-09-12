> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/show(relativeto:of:preferrededge:)](https://developer.apple.com/documentation/appkit/nspopover/show(relativeto:of:preferrededge:))

# show(relativeTo:of:preferredEdge:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Shows the popover anchored to the specified view.

## Declaration

```swift
func show(relativeTo positioningRect: NSRect, of positioningView: NSView, preferredEdge: NSRectEdge)
```

## Parameters

- `positioningRect`: The rectangle within `positioningView` relative to which the popover should be positioned. Normally set to the bounds of `positioningView`. May be an empty rectangle, which will default to the bounds of `positioningView`.
- `positioningView`: The view relative to which the popover should be positioned. Causes the method to raise  [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if `nil`.
- `preferredEdge`: The edge of `positioningView` the popover should prefer to be anchored to.

<a id="Discussion"></a>

## Discussion

This method raises [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) if [contentViewController](contentviewcontroller.md) or the view controller’s view is `nil`. If the popover is already being shown, this method updates the anchored view, rectangle, and preferred edge. If the positioning view is not visible, this method does nothing.

## See Also

### Managing a Popover’s Position and Size

- [behavior](behavior-swift.property.md): Specifies the behavior of the popover.
- [positioningRect](positioningrect.md): The rectangle within the positioning view relative to which the popover should be positioned.

# showRelativeToRect:ofView:preferredEdge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Shows the popover anchored to the specified view.

## Declaration

```objectivec
- (void) showRelativeToRect:(NSRect) positioningRect ofView:(NSView *) positioningView preferredEdge:(NSRectEdge) preferredEdge;
```

## Parameters

- `positioningRect`: The rectangle within `positioningView` relative to which the popover should be positioned. Normally set to the bounds of `positioningView`. May be an empty rectangle, which will default to the bounds of `positioningView`.
- `positioningView`: The view relative to which the popover should be positioned. Causes the method to raise  [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if `nil`.
- `preferredEdge`: The edge of `positioningView` the popover should prefer to be anchored to.

<a id="Discussion"></a>

## Discussion

This method raises [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) if [contentViewController](contentviewcontroller.md) or the view controller’s view is `nil`. If the popover is already being shown, this method updates the anchored view, rectangle, and preferred edge. If the positioning view is not visible, this method does nothing.

## See Also

### Managing a Popover’s Position and Size

- [behavior](behavior-swift.property.md): Specifies the behavior of the popover.
- [positioningRect](positioningrect.md): The rectangle within the positioning view relative to which the popover should be positioned.
