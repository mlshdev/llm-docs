> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/presentasmodalwindow(_:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/presentasmodalwindow(_:))

# presentAsModalWindow(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Presents another view controller as a modal window, also known as an alert.

## Declaration

```swift
func presentAsModalWindow(_ viewController: NSViewController)
```

## Parameters

- `viewController`: The other view controller to present as a modal window.

<a id="Discussion"></a>

## Discussion

This method calls the [present(\_:animator:)](present%28__animator_%29.md) method on `self` (the presenting view controller), and passes a modal window animator to that method.

The presented view controller is the delegate and the content view controller of its window. You can use [NSWindowDelegate](../nswindowdelegate.md) methods to prevent the closing of the modal window, if needed.

To dismiss the modal window, call the [dismiss(\_:)](dismiss%28__%29-91my5.md) method on `self` (the presenting view controller).

## See Also

### Presenting Another View Controller’s Content

- [present(\_:animator:)](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismiss(\_:)](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:hasFullSizeContent:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentAsSheet(\_:)](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [present(inWidget:)](present%28inwidget_%29.md): Deprecated.

# presentViewControllerAsModalWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Presents another view controller as a modal window, also known as an alert.

## Declaration

```objectivec
- (void) presentViewControllerAsModalWindow:(NSViewController *) viewController;
```

## Parameters

- `viewController`: The other view controller to present as a modal window.

<a id="Discussion"></a>

## Discussion

This method calls the [presentViewController:animator:](present%28__animator_%29.md) method on `self` (the presenting view controller), and passes a modal window animator to that method.

The presented view controller is the delegate and the content view controller of its window. You can use [NSWindowDelegate](../nswindowdelegate.md) methods to prevent the closing of the modal window, if needed.

To dismiss the modal window, call the [dismissViewController:](dismiss%28__%29-91my5.md) method on `self` (the presenting view controller).

## See Also

### Presenting Another View Controller’s Content

- [presentViewController:animator:](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismissViewController:](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:hasFullSizeContent:](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentViewControllerAsSheet:](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [presentViewControllerInWidget:](present%28inwidget_%29.md): Deprecated.
