> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerdidpresent(_:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerdidpresent(_:))

# printerPickerControllerDidPresent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the printer picker was displayed and is now visible.

## Declaration

```swift
optional func printerPickerControllerDidPresent(_ printerPickerController: UIPrinterPickerController)
```

## Parameters

- `printerPickerController`: The printer picker controller object being displayed.

<a id="Discussion"></a>

## Discussion

Use this method to perform any tasks associated with displaying the printer picker controller.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController(\_:)](printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerWillPresent(\_:)](printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerWillDismiss(\_:)](printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss(\_:)](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.

# printerPickerControllerDidPresent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the printer picker was displayed and is now visible.

## Declaration

```objectivec
- (void) printerPickerControllerDidPresent:(UIPrinterPickerController *) printerPickerController;
```

## Parameters

- `printerPickerController`: The printer picker controller object being displayed.

<a id="Discussion"></a>

## Discussion

Use this method to perform any tasks associated with displaying the printer picker controller.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController:](printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerWillPresent:](printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerWillDismiss:](printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss:](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.
