> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate)

# UIPrintInteractionControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An optional set of methods that the delegate of the shared print-interaction controller implements.

## Declaration

```swift
@MainActor protocol UIPrintInteractionControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

If the application has special requirements for content sizes, it can implement [printInteractionController(\_:choosePaper:)](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) to return a [UIPrintPaper](uiprintpaper.md) object encapsulating the page size and the printing area to use for a print job. If you want more control of the presentation of the printing options, the delegate can return a view controller that owns the printing-options view in an implementation of [printInteractionControllerParentViewController(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerparentviewcontroller%28__%29.md). The delegate can also implement methods that are invoked when the printing user interface is presented and when it is dismissed, and when the print job begins and ends.

## Topics

### Returning a Parent View Controller

- [printInteractionControllerParentViewController(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerparentviewcontroller%28__%29.md): Returns a parent view controller for managing the printing-options view.

### Choosing a Paper Size for the Print Job

- [printInteractionController(\_:choosePaper:)](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md): Asks the delegate for an object that encapsulates the paper size and printing area for the print job.
- [printInteractionController(\_:cutLengthFor:)](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__cutlengthfor_%29.md): Asks the delegate for a length to use when cutting the page.
- [printInteractionController(\_:chooseCutterBehavior:)](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosecutterbehavior_%29.md): Asks the delegate for the cutter behavior for the print job.

### Responding to the Presentation and Dismissal of the Printing Interface

- [printInteractionControllerWillPresentPrinterOptions(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillpresentprinteroptions%28__%29.md): Tells the delegate that the device is about to display the printing-options user interface.
- [printInteractionControllerDidPresentPrinterOptions(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerdidpresentprinteroptions%28__%29.md): Tells the delegate that the device has presented the printing-options user interface.
- [printInteractionControllerWillDismissPrinterOptions(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerwilldismissprinteroptions%28__%29.md): Tells the delegate that the device is about to dismiss the printing-options user interface.
- [printInteractionControllerDidDismissPrinterOptions(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerdiddismissprinteroptions%28__%29.md): Tells the delegate that the device is dismissing the printing-options user interface.

### Responding to the Start and End of a Print Job

- [printInteractionControllerWillStartJob(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md): Tells the delegate that the print job is about to start.
- [printInteractionControllerDidFinishJob(\_:)](uiprintinteractioncontrollerdelegate/printinteractioncontrollerdidfinishjob%28__%29.md): Tells the delegate that the print job has ended.

### Constants

- [UIPrinter.CutterBehavior](uiprinter/cutterbehavior.md): Constants that specify the cutter behavior of a roll-fed printer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Assigning the delegate

- [delegate](uiprintinteractioncontroller/delegate.md): The delegate of the print-interaction controller.

# UIPrintInteractionControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An optional set of methods that the delegate of the shared print-interaction controller implements.

## Declaration

```objectivec
@protocol UIPrintInteractionControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

If the application has special requirements for content sizes, it can implement [printInteractionController:choosePaper:](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md) to return a [UIPrintPaper](uiprintpaper.md) object encapsulating the page size and the printing area to use for a print job. If you want more control of the presentation of the printing options, the delegate can return a view controller that owns the printing-options view in an implementation of [printInteractionControllerParentViewController:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerparentviewcontroller%28__%29.md). The delegate can also implement methods that are invoked when the printing user interface is presented and when it is dismissed, and when the print job begins and ends.

## Topics

### Returning a Parent View Controller

- [printInteractionControllerParentViewController:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerparentviewcontroller%28__%29.md): Returns a parent view controller for managing the printing-options view.

### Choosing a Paper Size for the Print Job

- [printInteractionController:choosePaper:](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosepaper_%29.md): Asks the delegate for an object that encapsulates the paper size and printing area for the print job.
- [printInteractionController:cutLengthForPaper:](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__cutlengthfor_%29.md): Asks the delegate for a length to use when cutting the page.
- [printInteractionController:chooseCutterBehavior:](uiprintinteractioncontrollerdelegate/printinteractioncontroller%28__choosecutterbehavior_%29.md): Asks the delegate for the cutter behavior for the print job.

### Responding to the Presentation and Dismissal of the Printing Interface

- [printInteractionControllerWillPresentPrinterOptions:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillpresentprinteroptions%28__%29.md): Tells the delegate that the device is about to display the printing-options user interface.
- [printInteractionControllerDidPresentPrinterOptions:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerdidpresentprinteroptions%28__%29.md): Tells the delegate that the device has presented the printing-options user interface.
- [printInteractionControllerWillDismissPrinterOptions:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerwilldismissprinteroptions%28__%29.md): Tells the delegate that the device is about to dismiss the printing-options user interface.
- [printInteractionControllerDidDismissPrinterOptions:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerdiddismissprinteroptions%28__%29.md): Tells the delegate that the device is dismissing the printing-options user interface.

### Responding to the Start and End of a Print Job

- [printInteractionControllerWillStartJob:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob%28__%29.md): Tells the delegate that the print job is about to start.
- [printInteractionControllerDidFinishJob:](uiprintinteractioncontrollerdelegate/printinteractioncontrollerdidfinishjob%28__%29.md): Tells the delegate that the print job has ended.

### Constants

- [UIPrinterCutterBehavior](uiprinter/cutterbehavior.md): Constants that specify the cutter behavior of a roll-fed printer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Assigning the delegate

- [delegate](uiprintinteractioncontroller/delegate.md): The delegate of the print-interaction controller.
