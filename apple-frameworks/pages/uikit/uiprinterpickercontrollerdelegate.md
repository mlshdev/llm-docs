> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontrollerdelegate](https://developer.apple.com/documentation/uikit/uiprinterpickercontrollerdelegate)

# UIPrinterPickerControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of methods for managing the presentation and dismissal of a printer picker interface.

## Declaration

```swift
@MainActor protocol UIPrinterPickerControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You also use the methods of this protocol to influence the content displayed in the picker and to respond when the user selects a printer. Implement the methods of this protocol in your own custom object and assign that object to the delegate property of your [UIPrinterPickerController](uiprinterpickercontroller.md) object before presenting it. When you present the picker, it calls the methods of your delegate at appropriate times to ask for information or provide you with information about the state of the picker interface. For more information about presenting a printer picker interface, see [UIPrinterPickerController](uiprinterpickercontroller.md).

## Topics

### Filtering the List of Printers

- [printerPickerController(\_:shouldShow:)](uiprinterpickercontrollerdelegate/printerpickercontroller%28__shouldshow_%29.md): Asks the delegate if the specified printer should be included in the picker.

### Handling the Printer Selection

- [printerPickerControllerDidSelectPrinter(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerdidselectprinter%28__%29.md): Tells the delegate that a printer was selected.

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerWillPresent(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerDidPresent(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerWillDismiss(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the printer picker interface

- [delegate](uiprinterpickercontroller/delegate.md): The delegate for the printer picker controller.

# UIPrinterPickerControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of methods for managing the presentation and dismissal of a printer picker interface.

## Declaration

```objectivec
@protocol UIPrinterPickerControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You also use the methods of this protocol to influence the content displayed in the picker and to respond when the user selects a printer. Implement the methods of this protocol in your own custom object and assign that object to the delegate property of your [UIPrinterPickerController](uiprinterpickercontroller.md) object before presenting it. When you present the picker, it calls the methods of your delegate at appropriate times to ask for information or provide you with information about the state of the picker interface. For more information about presenting a printer picker interface, see [UIPrinterPickerController](uiprinterpickercontroller.md).

## Topics

### Filtering the List of Printers

- [printerPickerController:shouldShowPrinter:](uiprinterpickercontrollerdelegate/printerpickercontroller%28__shouldshow_%29.md): Asks the delegate if the specified printer should be included in the picker.

### Handling the Printer Selection

- [printerPickerControllerDidSelectPrinter:](uiprinterpickercontrollerdelegate/printerpickercontrollerdidselectprinter%28__%29.md): Tells the delegate that a printer was selected.

### Responding to Printer Picker Events

- [printerPickerControllerParentViewController:](uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md): Asks the delegate to provide the view controller to act as the parent of the printer picker.
- [printerPickerControllerWillPresent:](uiprinterpickercontrollerdelegate/printerpickercontrollerwillpresent%28__%29.md): Tells the delegate that the printer picker is about to be displayed.
- [printerPickerControllerDidPresent:](uiprinterpickercontrollerdelegate/printerpickercontrollerdidpresent%28__%29.md): Tells the delegate that the printer picker was displayed and is now visible.
- [printerPickerControllerWillDismiss:](uiprinterpickercontrollerdelegate/printerpickercontrollerwilldismiss%28__%29.md): Tells the delegate that the printer picker is about to be dismissed.
- [printerPickerControllerDidDismiss:](uiprinterpickercontrollerdelegate/printerpickercontrollerdiddismiss%28__%29.md): Tells the delegate that the printer picker was dismissed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the printer picker interface

- [delegate](uiprinterpickercontroller/delegate.md): The delegate for the printer picker controller.
