> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller/dismiss(animated:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller/dismiss(animated:))

# dismiss(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the picker.

## Declaration

```swift
func dismiss(animated: Bool)
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the picker or [false](https://developer.apple.com/documentation/swift/false) to remove it without animations.

<a id="Discussion"></a>

## Discussion

This method dismisses a picker that you previously presented. When using this method to dismiss a picker, the picker does not call the [printerPickerControllerWillDismiss(\_:)](../uiprinterpickercontrollerdelegate/printerpickercontrollerwilldismiss%28__%29.md) or [printerPickerControllerDidDismiss(\_:)](../uiprinterpickercontrollerdelegate/printerpickercontrollerdiddismiss%28__%29.md) methods of your delegate object.

User interactions with the picker can also dismiss the picker automatically. For example, if the user selects a printer or cancels the picker, the picker dismisses itself automatically. Use this method to dismiss a picker programmatically in response to other events in your app.

## See Also

### Presenting and dismissing the picker

- [present(animated:completionHandler:)](present%28animated_completionhandler_%29.md): Presents the picker from a view controller of your app.
- [present(from:animated:completionHandler:)](present%28from_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to the specified bar button item.
- [present(from:in:animated:completionHandler:)](present%28from_in_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to a rectangle in the specified view.

# dismissAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the picker.

## Declaration

```objectivec
- (void) dismissAnimated:(BOOL) animated;
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the picker or [false](https://developer.apple.com/documentation/swift/false) to remove it without animations.

<a id="Discussion"></a>

## Discussion

This method dismisses a picker that you previously presented. When using this method to dismiss a picker, the picker does not call the [printerPickerControllerWillDismiss:](../uiprinterpickercontrollerdelegate/printerpickercontrollerwilldismiss%28__%29.md) or [printerPickerControllerDidDismiss:](../uiprinterpickercontrollerdelegate/printerpickercontrollerdiddismiss%28__%29.md) methods of your delegate object.

User interactions with the picker can also dismiss the picker automatically. For example, if the user selects a printer or cancels the picker, the picker dismisses itself automatically. Use this method to dismiss a picker programmatically in response to other events in your app.

## See Also

### Presenting and dismissing the picker

- [presentAnimated:completionHandler:](present%28animated_completionhandler_%29.md): Presents the picker from a view controller of your app.
- [presentFromBarButtonItem:animated:completionHandler:](present%28from_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to the specified bar button item.
- [presentFromRect:inView:animated:completionHandler:](present%28from_in_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to a rectangle in the specified view.
