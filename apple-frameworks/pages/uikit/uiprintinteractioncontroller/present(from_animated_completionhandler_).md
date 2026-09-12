> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/present(from:animated:completionhandler:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/present(from:animated:completionhandler:))

# present(from:animated:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.

## Declaration

```swift
func present(from item: UIBarButtonItem, animated: Bool, completionHandler completion: UIPrintInteractionController.CompletionHandler? = nil) -> Bool
```

## Parameters

- `item`: The [UIBarButtonItem](../uibarbuttonitem.md) object that the user tapped for printing. You are encouraged to use the constant [UIBarButtonItem.SystemItem.action](../uibarbuttonitem/systemitem/action.md) when creating a bar-button item for this purpose.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the printing popover view from `item`, [false](https://developer.apple.com/documentation/swift/false) to display it immediately.
- `completion`: A block of type [UIPrintInteractionController.CompletionHandler](completionhandler.md) that you implement to handle the conclusion of the print job (for instance, to reset state) and to handle any errors encountered in printing.

<a id="Discussion"></a>

## Discussion

It is valid to call this method for applications on iPad devices. Calling this method on an iPhone or iPod touch with `animated` set to [true](https://developer.apple.com/documentation/swift/true) causes the printing options view to animate upward from the bottom of the screen.

If you call this method when the printing options are already displayed, `UIPrintInteractionController` hides the printing-options popover view. You must call the method again to display the options.

## See Also

### Presenting the printing user interface

- [present(animated:completionHandler:)](present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [present(from:in:animated:completionHandler:)](present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
- [dismiss(animated:)](dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.

# presentFromBarButtonItem:animated:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.

## Declaration

```objectivec
- (BOOL) presentFromBarButtonItem:(UIBarButtonItem *) item animated:(BOOL) animated completionHandler:(UIPrintInteractionCompletionHandler) completion;
```

## Parameters

- `item`: The [UIBarButtonItem](../uibarbuttonitem.md) object that the user tapped for printing. You are encouraged to use the constant [UIBarButtonSystemItemAction](../uibarbuttonitem/systemitem/action.md) when creating a bar-button item for this purpose.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the printing popover view from `item`, [false](https://developer.apple.com/documentation/swift/false) to display it immediately.
- `completion`: A block of type [UIPrintInteractionCompletionHandler](completionhandler.md) that you implement to handle the conclusion of the print job (for instance, to reset state) and to handle any errors encountered in printing.

<a id="Discussion"></a>

## Discussion

It is valid to call this method for applications on iPad devices. Calling this method on an iPhone or iPod touch with `animated` set to [true](https://developer.apple.com/documentation/swift/true) causes the printing options view to animate upward from the bottom of the screen.

If you call this method when the printing options are already displayed, `UIPrintInteractionController` hides the printing-options popover view. You must call the method again to display the options.

## See Also

### Presenting the printing user interface

- [presentAnimated:completionHandler:](present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [presentFromRect:inView:animated:completionHandler:](present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
- [dismissAnimated:](dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.
