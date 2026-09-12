> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/dismiss(_:)-91my5](https://developer.apple.com/documentation/appkit/nsviewcontroller/dismiss(_:)-91my5)

# dismiss(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Dismisses a presented view controller, using the same animator that presented it.

## Declaration

```swift
func dismiss(_ viewController: NSViewController)
```

## Parameters

- `viewController`: The presented view controller that you are dismissing.

<a id="Discussion"></a>

## Discussion

In macOS, this is the universal way to dismiss a view controller, no matter how it was presented.

## See Also

### Presenting Another View Controller’s Content

- [present(\_:animator:)](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:hasFullSizeContent:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentAsModalWindow(\_:)](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentAsSheet(\_:)](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [present(inWidget:)](present%28inwidget_%29.md): Deprecated.

# dismissViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Dismisses a presented view controller, using the same animator that presented it.

## Declaration

```objectivec
- (void) dismissViewController:(NSViewController *) viewController;
```

## Parameters

- `viewController`: The presented view controller that you are dismissing.

<a id="Discussion"></a>

## Discussion

In macOS, this is the universal way to dismiss a view controller, no matter how it was presented.

## See Also

### Presenting Another View Controller’s Content

- [presentViewController:animator:](present%28__animator_%29.md): Presents another view controller using a specified, custom animator for presentation and dismissal.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:hasFullSizeContent:](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentViewControllerAsModalWindow:](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentViewControllerAsSheet:](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [presentViewControllerInWidget:](present%28inwidget_%29.md): Deprecated.
