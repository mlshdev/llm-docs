> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller)

# UIPrinterPickerController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays the standard interface for selecting a printer.

## Declaration

```swift
@MainActor class UIPrinterPickerController
```

<a id="overview"></a>

## Overview

You can use a printer picker controller to display a list of printers to the user prior to printing a document, photo, or other content. Printer pickers display all pickers normally but you can filter out printers by assigning an appropriate delegate object to the picker before displaying it.

A printer picker controller coordinates the presentation and dismissal of its interface with its associated delegate object. The delegate object is an object that you provide and that conforms to the [UIPrinterPickerControllerDelegate](uiprinterpickercontrollerdelegate.md) protocol. When the user selects a printer, the picker also notifies the delegate of the selection.

A printer picker controller isn’t a view controller, so you don’t present it the way you do other view controllers. You present the picker using one of the presentation methods of this class. Those methods work with the picker’s delegate object to determine the most appropriate way to present the picker. If the delegate implements the [printerPickerControllerParentViewController(\_:)](uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md) method, the picker presents itself using the view controller returned by that method. Some presentation methods may present the picker using a popover instead.

For more information about the picker delegate methods, see [UIPrinterPickerControllerDelegate](uiprinterpickercontrollerdelegate.md).

## Topics

### Creating a picker controller

- [init(initiallySelectedPrinter:)](uiprinterpickercontroller/init%28initiallyselectedprinter_%29.md): Creates and returns a printer picker with an initially selected printer object.

### Managing the printer picker interface

- [delegate](uiprinterpickercontroller/delegate.md): The delegate for the printer picker controller.
- [UIPrinterPickerControllerDelegate](uiprinterpickercontrollerdelegate.md): A set of methods for managing the presentation and dismissal of a printer picker interface.

### Presenting and dismissing the picker

- [present(animated:completionHandler:)](uiprinterpickercontroller/present%28animated_completionhandler_%29.md): Presents the picker from a view controller of your app.
- [present(from:animated:completionHandler:)](uiprinterpickercontroller/present%28from_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to the specified bar button item.
- [present(from:in:animated:completionHandler:)](uiprinterpickercontroller/present%28from_in_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to a rectangle in the specified view.
- [dismiss(animated:)](uiprinterpickercontroller/dismiss%28animated_%29.md): Dismisses the picker.

### Getting the selected printer

- [selectedPrinter](uiprinterpickercontroller/selectedprinter.md): The selected printer.

### Constants

- [UIPrinterPickerController.CompletionHandler](uiprinterpickercontroller/completionhandler.md): The completion handler to execute when dismissing a printer picker controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Print panels

- [UIPrintInteractionController](uiprintinteractioncontroller.md): A user interface that manages the printing of documents, images, and other printable content in iOS.

# UIPrinterPickerController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays the standard interface for selecting a printer.

## Declaration

```objectivec
@interface UIPrinterPickerController : NSObject
```

<a id="overview"></a>

## Overview

You can use a printer picker controller to display a list of printers to the user prior to printing a document, photo, or other content. Printer pickers display all pickers normally but you can filter out printers by assigning an appropriate delegate object to the picker before displaying it.

A printer picker controller coordinates the presentation and dismissal of its interface with its associated delegate object. The delegate object is an object that you provide and that conforms to the [UIPrinterPickerControllerDelegate](uiprinterpickercontrollerdelegate.md) protocol. When the user selects a printer, the picker also notifies the delegate of the selection.

A printer picker controller isn’t a view controller, so you don’t present it the way you do other view controllers. You present the picker using one of the presentation methods of this class. Those methods work with the picker’s delegate object to determine the most appropriate way to present the picker. If the delegate implements the [printerPickerControllerParentViewController:](uiprinterpickercontrollerdelegate/printerpickercontrollerparentviewcontroller%28__%29.md) method, the picker presents itself using the view controller returned by that method. Some presentation methods may present the picker using a popover instead.

For more information about the picker delegate methods, see [UIPrinterPickerControllerDelegate](uiprinterpickercontrollerdelegate.md).

## Topics

### Creating a picker controller

- [printerPickerControllerWithInitiallySelectedPrinter:](uiprinterpickercontroller/init%28initiallyselectedprinter_%29.md): Creates and returns a printer picker with an initially selected printer object.

### Managing the printer picker interface

- [delegate](uiprinterpickercontroller/delegate.md): The delegate for the printer picker controller.
- [UIPrinterPickerControllerDelegate](uiprinterpickercontrollerdelegate.md): A set of methods for managing the presentation and dismissal of a printer picker interface.

### Presenting and dismissing the picker

- [presentAnimated:completionHandler:](uiprinterpickercontroller/present%28animated_completionhandler_%29.md): Presents the picker from a view controller of your app.
- [presentFromBarButtonItem:animated:completionHandler:](uiprinterpickercontroller/present%28from_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to the specified bar button item.
- [presentFromRect:inView:animated:completionHandler:](uiprinterpickercontroller/present%28from_in_animated_completionhandler_%29.md): Presents the picker in a popover that anchors to a rectangle in the specified view.
- [dismissAnimated:](uiprinterpickercontroller/dismiss%28animated_%29.md): Dismisses the picker.

### Getting the selected printer

- [selectedPrinter](uiprinterpickercontroller/selectedprinter.md): The selected printer.

### Constants

- [UIPrinterPickerCompletionHandler](uiprinterpickercontroller/completionhandler.md): The completion handler to execute when dismissing a printer picker controller.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Print panels

- [UIPrintInteractionController](uiprintinteractioncontroller.md): A user interface that manages the printing of documents, images, and other printable content in iOS.
