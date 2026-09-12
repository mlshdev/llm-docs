> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller(_:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller(_:))

# printerPickerControllerParentViewController(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to provide the view controller to act as the parent of the printer picker.

## Declaration

```swift
optional func printerPickerControllerParentViewController(_ printerPickerController: UIPrinterPickerController) -> UIViewController?
```

## Parameters

- `printerPickerController`: The printer picker controller object that made the request.

<a id="return-value"></a>

## Return Value

A view controller from your app’s interface.

<a id="Discussion"></a>

## Discussion

Use this method when you want the printer picker controller to be presented from a specific view controller in your app’s interface. When you specify a navigation controller as the parent, UIKit pushes the printer picker onto your navigation stack. For other types of view controllers, UIKit presents the picker interface from the view controller you specify.

If you do not implement this method or your implementation returns `nil`, UIKit presents the printer picker from the root view controller of your app’s main window.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerWillPresent(\_:)](printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerDidPresent(\_:)](printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerWillDismiss(\_:)](printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss(\_:)](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.

# printerPickerControllerParentViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to provide the view controller to act as the parent of the printer picker.

## Declaration

```objectivec
- (UIViewController *) printerPickerControllerParentViewController:(UIPrinterPickerController *) printerPickerController;
```

## Parameters

- `printerPickerController`: The printer picker controller object that made the request.

<a id="return-value"></a>

## Return Value

A view controller from your app’s interface.

<a id="Discussion"></a>

## Discussion

Use this method when you want the printer picker controller to be presented from a specific view controller in your app’s interface. When you specify a navigation controller as the parent, UIKit pushes the printer picker onto your navigation stack. For other types of view controllers, UIKit presents the picker interface from the view controller you specify.

If you do not implement this method or your implementation returns `nil`, UIKit presents the printer picker from the root view controller of your app’s main window.

## See Also

### Responding to Printer Picker Events

- [printerPickerControllerWillPresent:](printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerDidPresent:](printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerWillDismiss:](printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss:](printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.
