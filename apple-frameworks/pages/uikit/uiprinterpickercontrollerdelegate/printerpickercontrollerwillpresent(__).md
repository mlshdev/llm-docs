> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerwillpresent(_:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerwillpresent(_:))

# printerPickerControllerWillPresent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the printer picker is about to be displayed.

## Declaration

```swift
optional func printerPickerControllerWillPresent(_ printerPickerController: UIPrinterPickerController)
```

## Parameters

- `printerPickerController`: The printer picker controller object being displayed.

<a id="Discussion"></a>

## Discussion

Use this method to perform any tasks associated with displaying the printer picker controller.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController(\_:)](printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerDidPresent(\_:)](printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerWillDismiss(\_:)](printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss(\_:)](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.

# printerPickerControllerWillPresent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the printer picker is about to be displayed.

## Declaration

```objectivec
- (void) printerPickerControllerWillPresent:(UIPrinterPickerController *) printerPickerController;
```

## Parameters

- `printerPickerController`: The printer picker controller object being displayed.

<a id="Discussion"></a>

## Discussion

Use this method to perform any tasks associated with displaying the printer picker controller.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController:](printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerDidPresent:](printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerWillDismiss:](printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss:](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.
