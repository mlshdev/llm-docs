> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/present(animated:completionhandler:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/present(animated:completionhandler:))

# present(animated:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.

## Declaration

```swift
func present(animated: Bool, completionHandler completion: UIPrintInteractionController.CompletionHandler? = nil) -> Bool
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the display of the sheet, [false](https://developer.apple.com/documentation/swift/false) to display the sheet immediately.
- `completion`: A block of type [UIPrintInteractionController.CompletionHandler](completionhandler.md) that you implement to handle the conclusion of the print job (for instance, to reset state) and to handle any errors encountered in printing.

<a id="Discussion"></a>

## Discussion

It is valid to call this method for applications on iPhone and iPod touch devices. Calling this method on an iPad with `animated` set to [true](https://developer.apple.com/documentation/swift/true) causes the printing options view to animate from the window frame.

If you call this method when the printing options are already displayed, `UIPrintInteractionController` hides the printing-options sheet. You must call the method again to display the options.

## See Also

### Presenting the printing user interface

- [present(from:animated:completionHandler:)](present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [present(from:in:animated:completionHandler:)](present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
- [dismiss(animated:)](dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.

# presentAnimated:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.

## Declaration

```objectivec
- (BOOL) presentAnimated:(BOOL) animated completionHandler:(UIPrintInteractionCompletionHandler) completion;
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the display of the sheet, [false](https://developer.apple.com/documentation/swift/false) to display the sheet immediately.
- `completion`: A block of type [UIPrintInteractionCompletionHandler](completionhandler.md) that you implement to handle the conclusion of the print job (for instance, to reset state) and to handle any errors encountered in printing.

<a id="Discussion"></a>

## Discussion

It is valid to call this method for applications on iPhone and iPod touch devices. Calling this method on an iPad with `animated` set to [true](https://developer.apple.com/documentation/swift/true) causes the printing options view to animate from the window frame.

If you call this method when the printing options are already displayed, `UIPrintInteractionController` hides the printing-options sheet. You must call the method again to display the options.

## See Also

### Presenting the printing user interface

- [presentFromBarButtonItem:animated:completionHandler:](present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [presentFromRect:inView:animated:completionHandler:](present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
- [dismissAnimated:](dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.
