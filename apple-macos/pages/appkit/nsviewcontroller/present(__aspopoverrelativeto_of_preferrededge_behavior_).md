> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/present(_:aspopoverrelativeto:of:preferrededge:behavior:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/present(_:aspopoverrelativeto:of:preferrededge:behavior:))

# present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Presents another view controller as a popover.

## Declaration

```swift
func present(_ viewController: NSViewController, asPopoverRelativeTo positioningRect: NSRect, of positioningView: NSView, preferredEdge: NSRectEdge, behavior: NSPopover.Behavior)
```

## Parameters

- `viewController`: The other view controller to present as a popover.
- `positioningRect`: The content size of the popover.
- `positioningView`: The view relative to which the popover should be positioned. Must not be `nil`, or else the view controller raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception.
- `preferredEdge`: The edge of `positioningView` that the popover should prefer to be anchored to.
- `behavior`: The popover’s closing behavior. See the [NSPopover.Behavior](../nspopover/behavior-swift.enum.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method calls the [present(\_:animator:)](present%28__animator_%29.md) method on `self` (the presenting view controller), and passes a popover animator to that method.

The presented view controller is the delegate and the content view controller of the popover. You can use [NSPopoverDelegate](../nspopoverdelegate.md) methods to customize the popover.

To dismiss the popover, call the [dismiss(\_:)](dismiss%28__%29-91my5.md) method on `self` (the presenting view controller).

## See Also

### Presenting Another View Controller’s Content

- [present(\_:animator:)](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismiss(\_:)](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:hasFullSizeContent:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentAsModalWindow(\_:)](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentAsSheet(\_:)](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [present(inWidget:)](present%28inwidget_%29.md): Deprecated.

# presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Presents another view controller as a popover.

## Declaration

```objectivec
- (void) presentViewController:(NSViewController *) viewController asPopoverRelativeToRect:(NSRect) positioningRect ofView:(NSView *) positioningView preferredEdge:(NSRectEdge) preferredEdge behavior:(NSPopoverBehavior) behavior;
```

## Parameters

- `viewController`: The other view controller to present as a popover.
- `positioningRect`: The content size of the popover.
- `positioningView`: The view relative to which the popover should be positioned. Must not be `nil`, or else the view controller raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception.
- `preferredEdge`: The edge of `positioningView` that the popover should prefer to be anchored to.
- `behavior`: The popover’s closing behavior. See the [NSPopoverBehavior](../nspopover/behavior-swift.enum.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method calls the [presentViewController:animator:](present%28__animator_%29.md) method on `self` (the presenting view controller), and passes a popover animator to that method.

The presented view controller is the delegate and the content view controller of the popover. You can use [NSPopoverDelegate](../nspopoverdelegate.md) methods to customize the popover.

To dismiss the popover, call the [dismissViewController:](dismiss%28__%29-91my5.md) method on `self` (the presenting view controller).

## See Also

### Presenting Another View Controller’s Content

- [presentViewController:animator:](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismissViewController:](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:hasFullSizeContent:](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentViewControllerAsModalWindow:](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentViewControllerAsSheet:](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [presentViewControllerInWidget:](present%28inwidget_%29.md): Deprecated.
