> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerwilldismiss(_:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerwilldismiss(_:))

# printerPickerControllerWillDismiss(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the printer picker is about to be dismissed.

## Declaration

```swift
optional func printerPickerControllerWillDismiss(_ printerPickerController: UIPrinterPickerController)
```

## Parameters

- `printerPickerController`: The printer picker controller object being dismissed.

<a id="Discussion"></a>

## Discussion

Use this method to perform any tasks associated with displaying the printer picker controller.

This method is called when the user dismisses the picker, either by selecting a printer or by canceling the picker interface. This method is not called when you dismiss the picker programmatically using the [dismiss(animated:)](../uiprinterpickercontroller/dismiss%28animated_%29.md) method.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController(\_:)](printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerWillPresent(\_:)](printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerDidPresent(\_:)](printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerDidDismiss(\_:)](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.

# printerPickerControllerWillDismiss: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the printer picker is about to be dismissed.

## Declaration

```objectivec
- (void) printerPickerControllerWillDismiss:(UIPrinterPickerController *) printerPickerController;
```

## Parameters

- `printerPickerController`: The printer picker controller object being dismissed.

<a id="Discussion"></a>

## Discussion

Use this method to perform any tasks associated with displaying the printer picker controller.

This method is called when the user dismisses the picker, either by selecting a printer or by canceling the picker interface. This method is not called when you dismiss the picker programmatically using the [dismissAnimated:](../uiprinterpickercontroller/dismiss%28animated_%29.md) method.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController:](printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerWillPresent:](printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerDidPresent:](printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerDidDismiss:](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.
