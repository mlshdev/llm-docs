> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller/present(animated:completionhandler:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller/present(animated:completionhandler:))

# present(animated:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the picker from a view controller of your app.

## Declaration

```swift
func present(animated: Bool, completionHandler completion: UIPrinterPickerController.CompletionHandler? = nil) -> Bool
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the display of the picker or [false](https://developer.apple.com/documentation/swift/false) to display it without animations.
- `completion`: A block to execute when the picker is dismissed. Use this block to receive information about the selected printer or information about any errors that occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the picker was displayed or [false](https://developer.apple.com/documentation/swift/false) if the picker was already visible.

<a id="Discussion"></a>

## Discussion

This method presents the picker from one of your app’s view controllers and returns immediately. If you provide a delegate object and that object implements the [printerPickerControllerParentViewController(\_:)](../uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md) method, UIKit uses the view controller you provide to present the picker. If you do not provide a delegate, or your delegate object does not implement the [printerPickerControllerParentViewController(\_:)](../uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md) method, UIKit presents the picker from the root view controller of your app’s main window.

After presenting the picker, the picker interface runs until the user or your app dismisses it. The picker interface provides ways for the user to cancel printing directly, all of which dismiss the picker. You can also dismiss the printer picker programmatically by calling the [dismiss(animated:)](dismiss%28animated_%29.md) method.

## See Also

### Presenting and dismissing the picker

- [present(from:animated:completionHandler:)](present%28from_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to the specified bar button item.
- [present(from:in:animated:completionHandler:)](present%28from_in_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to a rectangle in the specified view.
- [dismiss(animated:)](dismiss%28animated_%29.md): Dismisses the picker.

# presentAnimated:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Presents the picker from a view controller of your app.

## Declaration

```objectivec
- (BOOL) presentAnimated:(BOOL) animated completionHandler:(UIPrinterPickerCompletionHandler) completion;
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the display of the picker or [false](https://developer.apple.com/documentation/swift/false) to display it without animations.
- `completion`: A block to execute when the picker is dismissed. Use this block to receive information about the selected printer or information about any errors that occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the picker was displayed or [false](https://developer.apple.com/documentation/swift/false) if the picker was already visible.

<a id="Discussion"></a>

## Discussion

This method presents the picker from one of your app’s view controllers and returns immediately. If you provide a delegate object and that object implements the [printerPickerControllerParentViewController:](../uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md) method, UIKit uses the view controller you provide to present the picker. If you do not provide a delegate, or your delegate object does not implement the [printerPickerControllerParentViewController:](../uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md) method, UIKit presents the picker from the root view controller of your app’s main window.

After presenting the picker, the picker interface runs until the user or your app dismisses it. The picker interface provides ways for the user to cancel printing directly, all of which dismiss the picker. You can also dismiss the printer picker programmatically by calling the [dismissAnimated:](dismiss%28animated_%29.md) method.

## See Also

### Presenting and dismissing the picker

- [presentFromBarButtonItem:animated:completionHandler:](present%28from_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to the specified bar button item.
- [presentFromRect:inView:animated:completionHandler:](present%28from_in_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to a rectangle in the specified view.
- [dismissAnimated:](dismiss%28animated_%29.md): Dismisses the picker.
