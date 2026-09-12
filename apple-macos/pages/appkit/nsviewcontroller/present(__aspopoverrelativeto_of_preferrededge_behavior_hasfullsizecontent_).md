> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/present(_:aspopoverrelativeto:of:preferrededge:behavior:hasfullsizecontent:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/present(_:aspopoverrelativeto:of:preferrededge:behavior:hasfullsizecontent:))

# present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:hasFullSizeContent:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func present(_ viewController: NSViewController, asPopoverRelativeTo positioningRect: NSRect, of positioningView: NSView, preferredEdge: NSRectEdge, behavior: NSPopover.Behavior, hasFullSizeContent: Bool)
```

## See Also

### Presenting Another View Controller’s Content

- [present(\_:animator:)](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismiss(\_:)](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [presentAsModalWindow(\_:)](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentAsSheet(\_:)](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [present(inWidget:)](present%28inwidget_%29.md): Deprecated.

# presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:hasFullSizeContent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (void) presentViewController:(NSViewController *) viewController asPopoverRelativeToRect:(NSRect) positioningRect ofView:(NSView *) positioningView preferredEdge:(NSRectEdge) preferredEdge behavior:(NSPopoverBehavior) behavior hasFullSizeContent:(BOOL) hasFullSizeContent;
```

## See Also

### Presenting Another View Controller’s Content

- [presentViewController:animator:](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [dismissViewController:](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [presentViewControllerAsModalWindow:](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentViewControllerAsSheet:](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [presentViewControllerInWidget:](present%28inwidget_%29.md): Deprecated.
