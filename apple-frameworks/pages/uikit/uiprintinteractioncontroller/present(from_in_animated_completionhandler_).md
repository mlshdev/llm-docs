> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/present(from:in:animated:completionhandler:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/present(from:in:animated:completionhandler:))

# present(from:in:animated:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.

## Declaration

```swift
func present(from rect: CGRect, in view: UIView, animated: Bool, completionHandler completion: UIPrintInteractionController.CompletionHandler? = nil) -> Bool
```

## Parameters

- `rect`: A rectangle that defines the area from which the printing popover view is animated.
- `view`: The view providing the coordinate system for `rect`.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the printing popover view from `item`, [false](https://developer.apple.com/documentation/swift/false) to display it immediately.
- `completion`: A block of type [UIPrintInteractionController.CompletionHandler](completionhandler.md) that you implement to handle the conclusion of the print job (for instance, to reset state) and to handle any errors encountered in printing.

<a id="Discussion"></a>

## Discussion

It is valid to call this method for applications on iPad devices. Calling this method on an iPhone or iPod touch with `animated` set to [true](https://developer.apple.com/documentation/swift/true) causes the printing options view to animate upward from the bottom of the screen.

If you call this method when the printing options are already displayed, `UIPrintInteractionController` hides the printing-options popover view. You must call the method again to display the options.

## See Also

### Presenting the printing user interface

- [present(animated:completionHandler:)](present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [present(from:animated:completionHandler:)](present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [dismiss(animated:)](dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.

# presentFromRect:inView:animated:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.

## Declaration

```objectivec
- (BOOL) presentFromRect:(CGRect) rect inView:(UIView *) view animated:(BOOL) animated completionHandler:(UIPrintInteractionCompletionHandler) completion;
```

## Parameters

- `rect`: A rectangle that defines the area from which the printing popover view is animated.
- `view`: The view providing the coordinate system for `rect`.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the printing popover view from `item`, [false](https://developer.apple.com/documentation/swift/false) to display it immediately.
- `completion`: A block of type [UIPrintInteractionCompletionHandler](completionhandler.md) that you implement to handle the conclusion of the print job (for instance, to reset state) and to handle any errors encountered in printing.

<a id="Discussion"></a>

## Discussion

It is valid to call this method for applications on iPad devices. Calling this method on an iPhone or iPod touch with `animated` set to [true](https://developer.apple.com/documentation/swift/true) causes the printing options view to animate upward from the bottom of the screen.

If you call this method when the printing options are already displayed, `UIPrintInteractionController` hides the printing-options popover view. You must call the method again to display the options.

## See Also

### Presenting the printing user interface

- [presentAnimated:completionHandler:](present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [presentFromBarButtonItem:animated:completionHandler:](present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [dismissAnimated:](dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.
