> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillpresentprinteroptions(_:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillpresentprinteroptions(_:))

# printInteractionControllerWillPresentPrinterOptions(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the device is about to display the printing-options user interface.

## Declaration

```swift
optional func printInteractionControllerWillPresentPrinterOptions(_ printInteractionController: UIPrintInteractionController)
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

## See Also

### Responding to the Presentation and Dismissal of the Printing Interface

- [printInteractionControllerDidPresentPrinterOptions(\_:)](printinteractioncontrollerdidpresentprinteroptions%28__%29.md): Tells the delegate that the device has presented the printing-options user interface.
- [printInteractionControllerWillDismissPrinterOptions(\_:)](printinteractioncontrollerwilldismissprinteroptions%28__%29.md): Tells the delegate that the device is about to dismiss the printing-options user interface.
- [printInteractionControllerDidDismissPrinterOptions(\_:)](printinteractioncontrollerdiddismissprinteroptions%28__%29.md): Tells the delegate that the device is dismissing the printing-options user interface.

# printInteractionControllerWillPresentPrinterOptions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the device is about to display the printing-options user interface.

## Declaration

```objectivec
- (void) printInteractionControllerWillPresentPrinterOptions:(UIPrintInteractionController *) printInteractionController;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

## See Also

### Responding to the Presentation and Dismissal of the Printing Interface

- [printInteractionControllerDidPresentPrinterOptions:](printinteractioncontrollerdidpresentprinteroptions%28__%29.md): Tells the delegate that the device has presented the printing-options user interface.
- [printInteractionControllerWillDismissPrinterOptions:](printinteractioncontrollerwilldismissprinteroptions%28__%29.md): Tells the delegate that the device is about to dismiss the printing-options user interface.
- [printInteractionControllerDidDismissPrinterOptions:](printinteractioncontrollerdiddismissprinteroptions%28__%29.md): Tells the delegate that the device is dismissing the printing-options user interface.
