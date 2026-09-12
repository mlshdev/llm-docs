> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontroller/present(_:animator:)](https://developer.apple.com/documentation/appkit/nsviewcontroller/present(_:animator:))

# present(\_:animator:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Presents another view controller using a specified, custom animator for presentation and dismissal.

## Declaration

```swift
func present(_ viewController: NSViewController, animator: any NSViewControllerPresentationAnimator)
```

## Parameters

- `viewController`: The other view controller to present from the view controller.

  > **Note**

  >  The view controller you provide in this parameter must not already be visible elsewhere, or else this method raises an exception.
  >
  > The view in the presented view controller must have a window, or else this method raises an exception.
- `animator`: The animation delegate to employ for presentation and dismissal of the other view controller. The animator that you specify is retained until the [dismiss(\_:)](dismiss%28__%29-91my5.md) method is called and the dismissal animation completes.

  > **Note**

  >  This parameter’s value must not be `nil`, or else this method raises an exception.

<a id="Discussion"></a>

## Discussion

Do not call this method unless you want to use a custom animator. To use one of the standard animators to present another view controller, instead call one of the dedicated presentation methods:

- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md)
- [presentAsModalWindow(\_:)](presentasmodalwindow%28__%29.md)
- [presentAsSheet(\_:)](presentassheet%28__%29.md)

Each of these methods calls this method in turn. User interaction is blocked during presentation and dismissal.

## See Also

### Presenting Another View Controller’s Content

- [dismiss(\_:)](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [present(\_:asPopoverRelativeTo:of:preferredEdge:behavior:hasFullSizeContent:)](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentAsModalWindow(\_:)](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentAsSheet(\_:)](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [present(inWidget:)](present%28inwidget_%29.md): Deprecated.

# presentViewController:animator: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Presents another view controller using a specified, custom animator for presentation and dismissal.

## Declaration

```objectivec
- (void) presentViewController:(NSViewController *) viewController animator:(id<NSViewControllerPresentationAnimator>) animator;
```

## Parameters

- `viewController`: The other view controller to present from the view controller.

  > **Note**

  >  The view controller you provide in this parameter must not already be visible elsewhere, or else this method raises an exception.
  >
  > The view in the presented view controller must have a window, or else this method raises an exception.
- `animator`: The animation delegate to employ for presentation and dismissal of the other view controller. The animator that you specify is retained until the [dismissViewController:](dismiss%28__%29-91my5.md) method is called and the dismissal animation completes.

  > **Note**

  >  This parameter’s value must not be `nil`, or else this method raises an exception.

<a id="Discussion"></a>

## Discussion

Do not call this method unless you want to use a custom animator. To use one of the standard animators to present another view controller, instead call one of the dedicated presentation methods:

- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md)
- [presentViewControllerAsModalWindow:](presentasmodalwindow%28__%29.md)
- [presentViewControllerAsSheet:](presentassheet%28__%29.md)

Each of these methods calls this method in turn. User interaction is blocked during presentation and dismissal.

## See Also

### Presenting Another View Controller’s Content

- [dismissViewController:](dismiss%28__%29-91my5.md): Dismisses a presented view controller, using the same animator that presented it.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:](present%28__aspopoverrelativeto_of_preferrededge_behavior_%29.md): Presents another view controller as a popover.
- [presentViewController:asPopoverRelativeToRect:ofView:preferredEdge:behavior:hasFullSizeContent:](present%28__aspopoverrelativeto_of_preferrededge_behavior_hasfullsizecontent_%29.md)
- [presentViewControllerAsModalWindow:](presentasmodalwindow%28__%29.md): Presents another view controller as a modal window, also known as an alert.
- [presentViewControllerAsSheet:](presentassheet%28__%29.md): Presents another view controller as a sheet.
- [presentViewControllerInWidget:](present%28inwidget_%29.md): Deprecated.
