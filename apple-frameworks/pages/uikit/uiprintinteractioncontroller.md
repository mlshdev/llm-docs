> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller)

# UIPrintInteractionController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user interface that manages the printing of documents, images, and other printable content in iOS.

## Declaration

```swift
@MainActor class UIPrintInteractionController
```

<a id="overview"></a>

## Overview

[UIPrintInteractionController](uiprintinteractioncontroller.md) is the central class for printing in iOS. The shared instance of it represents a print job. A print job includes the content to print and information and options related to its printing, such as output type, job name, paper size, and orientation.

[UIPrintInteractionController](uiprintinteractioncontroller.md) has four mutually exclusive properties for giving it the content to print:

- [printingItem](uiprintinteractioncontroller/printingitem.md) takes a single print-ready object.
- [printingItems](uiprintinteractioncontroller/printingitems.md) takes an array of print-ready objects.
- [printFormatter](uiprintinteractioncontroller/printformatter.md) takes a print formatter, an object that knows how to lay out content of a certain type.
- [printPageRenderer](uiprintinteractioncontroller/printpagerenderer.md) takes a page renderer, a custom object that draws the content for printing.

If the [showsPageRange](uiprintinteractioncontroller/showspagerange.md) property is [true](https://developer.apple.com/documentation/swift/true), the number of pages is more than 1, and you assign an object to any of these properties except for the [printingItems](uiprintinteractioncontroller/printingitems.md) property, the printing options include a control that allows users to select a page range.

When users tap a print button on the app’s user interface, a controller object of the app should respond to the action message by obtaining the shared instance of [UIPrintInteractionController](uiprintinteractioncontroller.md) and preparing it for the print job. When the app calls one of the `present...` methods (for example, [present(animated:completionHandler:)](uiprintinteractioncontroller/present%28animated_completionhandler_%29.md)), [UIPrintInteractionController](uiprintinteractioncontroller.md) displays a view containing printing options. This interface is simple, allowing users to select a printer, specify the number of copies and possibly a range of pages, and choose single-sided or double-sided printing (if the printer supports duplex printing). When users make their selections and tap Print, the print job begins.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/printing/).

## Topics

### Getting the shared controller instance

- [shared](uiprintinteractioncontroller/shared.md): The shared print-interaction controller object.

### Assigning the delegate

- [delegate](uiprintinteractioncontroller/delegate.md): The delegate of the print-interaction controller.
- [UIPrintInteractionControllerDelegate](uiprintinteractioncontrollerdelegate.md): An optional set of methods that the delegate of the shared print-interaction controller implements.

### Determining printability

- [isPrintingAvailable](uiprintinteractioncontroller/isprintingavailable.md): A Boolean value that indicates whether the device supports printing.
- [canPrint(\_:)](uiprintinteractioncontroller/canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [canPrint(\_:)](uiprintinteractioncontroller/canprint%28__%29-364vj.md): Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.
- [printableUTIs](uiprintinteractioncontroller/printableutis.md): Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.

### Providing the source of printable content

- [printingItem](uiprintinteractioncontroller/printingitem.md): A single ready-to-print object.
- [printingItems](uiprintinteractioncontroller/printingitems.md): An array of ready-to-print objects.
- [printPageRenderer](uiprintinteractioncontroller/printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
- [printFormatter](uiprintinteractioncontroller/printformatter.md): An object that lays out the content of pages according to the kind of content.

### Presenting the printing user interface

- [present(animated:completionHandler:)](uiprintinteractioncontroller/present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [present(from:animated:completionHandler:)](uiprintinteractioncontroller/present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [present(from:in:animated:completionHandler:)](uiprintinteractioncontroller/present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
- [dismiss(animated:)](uiprintinteractioncontroller/dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.

### Printing directly to a printer

- [print(to:completionHandler:)](uiprintinteractioncontroller/print%28to_completionhandler_%29.md): Prints directly to the specified printer.
- [UIPrintInteractionController.CompletionHandler](uiprintinteractioncontroller/completionhandler.md): A completion handler for responding to the completion of a print job or for handling printing errors.

### Accessing print-job information

- [printInfo](uiprintinteractioncontroller/printinfo.md): An object that encapsulates information about the print job.
- [printPaper](uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](uiprintinteractioncontroller/showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](uiprintinteractioncontroller/showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](uiprintinteractioncontroller/showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](uiprintinteractioncontroller/showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.

### Handling printing errors

- [UIPrintErrorDomain](uiprinterrordomain.md): The string constant that defines the UIKit printing error domain.
- [UIPrintError](uiprinterror.md): A structure that contains information about a printing error.
- [UIPrintError.Code](uiprinterror/code.md): Constants that specify the print error code.

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

- [UIPrinterPickerController](uiprinterpickercontroller.md): A view controller that displays the standard interface for selecting a printer.

# UIPrintInteractionController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user interface that manages the printing of documents, images, and other printable content in iOS.

## Declaration

```objectivec
@interface UIPrintInteractionController : NSObject
```

<a id="overview"></a>

## Overview

[UIPrintInteractionController](uiprintinteractioncontroller.md) is the central class for printing in iOS. The shared instance of it represents a print job. A print job includes the content to print and information and options related to its printing, such as output type, job name, paper size, and orientation.

[UIPrintInteractionController](uiprintinteractioncontroller.md) has four mutually exclusive properties for giving it the content to print:

- [printingItem](uiprintinteractioncontroller/printingitem.md) takes a single print-ready object.
- [printingItems](uiprintinteractioncontroller/printingitems.md) takes an array of print-ready objects.
- [printFormatter](uiprintinteractioncontroller/printformatter.md) takes a print formatter, an object that knows how to lay out content of a certain type.
- [printPageRenderer](uiprintinteractioncontroller/printpagerenderer.md) takes a page renderer, a custom object that draws the content for printing.

If the [showsPageRange](uiprintinteractioncontroller/showspagerange.md) property is [true](https://developer.apple.com/documentation/swift/true), the number of pages is more than 1, and you assign an object to any of these properties except for the [printingItems](uiprintinteractioncontroller/printingitems.md) property, the printing options include a control that allows users to select a page range.

When users tap a print button on the app’s user interface, a controller object of the app should respond to the action message by obtaining the shared instance of [UIPrintInteractionController](uiprintinteractioncontroller.md) and preparing it for the print job. When the app calls one of the `present...` methods (for example, [presentAnimated:completionHandler:](uiprintinteractioncontroller/present%28animated_completionhandler_%29.md)), [UIPrintInteractionController](uiprintinteractioncontroller.md) displays a view containing printing options. This interface is simple, allowing users to select a printer, specify the number of copies and possibly a range of pages, and choose single-sided or double-sided printing (if the printer supports duplex printing). When users make their selections and tap Print, the print job begins.

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/system-capabilities/printing/).

## Topics

### Getting the shared controller instance

- [sharedPrintController](uiprintinteractioncontroller/shared.md): The shared print-interaction controller object.

### Assigning the delegate

- [delegate](uiprintinteractioncontroller/delegate.md): The delegate of the print-interaction controller.
- [UIPrintInteractionControllerDelegate](uiprintinteractioncontrollerdelegate.md): An optional set of methods that the delegate of the shared print-interaction controller implements.

### Determining printability

- [printingAvailable](uiprintinteractioncontroller/isprintingavailable.md): A Boolean value that indicates whether the device supports printing.
- [canPrintData:](uiprintinteractioncontroller/canprint%28__%29-4e0bs.md): Returns a Boolean value that indicates whether UIKit can print the contents of a data object.
- [canPrintURL:](uiprintinteractioncontroller/canprint%28__%29-364vj.md): Returns a Boolean value that indicates whether UIKit can print the file that the specified URL references.
- [printableUTIs](uiprintinteractioncontroller/printableutis.md): Returns a set of the Uniform Type Identifiers for the types of data that UIKit can print.

### Providing the source of printable content

- [printingItem](uiprintinteractioncontroller/printingitem.md): A single ready-to-print object.
- [printingItems](uiprintinteractioncontroller/printingitems.md): An array of ready-to-print objects.
- [printPageRenderer](uiprintinteractioncontroller/printpagerenderer.md): An object that draws pages of printable content when UIKit requests it.
- [printFormatter](uiprintinteractioncontroller/printformatter.md): An object that lays out the content of pages according to the kind of content.

### Presenting the printing user interface

- [presentAnimated:completionHandler:](uiprintinteractioncontroller/present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [presentFromBarButtonItem:animated:completionHandler:](uiprintinteractioncontroller/present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [presentFromRect:inView:animated:completionHandler:](uiprintinteractioncontroller/present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
- [dismissAnimated:](uiprintinteractioncontroller/dismiss%28animated_%29.md): Dismisses the printing-options sheet or popover.

### Printing directly to a printer

- [printToPrinter:completionHandler:](uiprintinteractioncontroller/print%28to_completionhandler_%29.md): Prints directly to the specified printer.
- [UIPrintInteractionCompletionHandler](uiprintinteractioncontroller/completionhandler.md): A completion handler for responding to the completion of a print job or for handling printing errors.

### Accessing print-job information

- [printInfo](uiprintinteractioncontroller/printinfo.md): An object that encapsulates information about the print job.
- [printPaper](uiprintinteractioncontroller/printpaper.md): An object that represents the paper size and printing area for the print job.
- [showsNumberOfCopies](uiprintinteractioncontroller/showsnumberofcopies.md): A Boolean value that determines whether the printing options include the number of copies.
- [showsPaperSelectionForLoadedPapers](uiprintinteractioncontroller/showspaperselectionforloadedpapers.md): A Boolean value that determines whether the paper selection menu displays.
- [showsPaperOrientation](uiprintinteractioncontroller/showspaperorientation.md): A Boolean value that indicates whether the printing options include the paper-orientation control.
- [showsPageRange](uiprintinteractioncontroller/showspagerange.md): Deprecated. A Boolean value that determines whether the printing options include a page-range control.

### Handling printing errors

- [UIPrintErrorDomain](uiprinterrordomain.md): The string constant that defines the UIKit printing error domain.
- [UIPrintErrorCode](uiprinterror/code.md): Constants that specify the print error code.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Print panels

- [UIPrinterPickerController](uiprinterpickercontroller.md): A view controller that displays the standard interface for selecting a printer.
