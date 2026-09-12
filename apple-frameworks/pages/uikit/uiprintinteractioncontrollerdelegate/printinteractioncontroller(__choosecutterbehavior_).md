> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontroller(_:choosecutterbehavior:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontroller(_:choosecutterbehavior:))

# printInteractionController(\_:chooseCutterBehavior:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the cutter behavior for the print job.

## Declaration

```swift
optional func printInteractionController(_ printInteractionController: UIPrintInteractionController, chooseCutterBehavior availableBehaviors: [Any]) -> UIPrinter.CutterBehavior
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.
- `availableBehaviors`: An array of [NSNumber](../../foundation/nsnumber.md) objects identifying the printer’s available cutter behaviors. Each number corresponds to one of the constants defined in [UIPrinter.CutterBehavior](../uiprinter/cutterbehavior.md).

<a id="return-value"></a>

## Return Value

The cutter behavior to use for the print job. The value must correspond to one of the constants in the `availableBehaviors` parameter.

<a id="Discussion"></a>

## Discussion

Some roll-fed printers support different options for cutting the paper. If you implement this method in your delegate, then it may be called during a print job. Your delegate method should determine when to make cuts and return the appropriate value.

## See Also

### Choosing a Paper Size for the Print Job

- [printInteractionController(\_:choosePaper:)](printinteractioncontroller%28__choosepaper_%29.md): Asks the delegate for an object that encapsulates the paper size and printing area for the print job.
- [printInteractionController(\_:cutLengthFor:)](printinteractioncontroller%28__cutlengthfor_%29.md): Asks the delegate for a length to use when cutting the page.

# printInteractionController:chooseCutterBehavior: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for the cutter behavior for the print job.

## Declaration

```objectivec
- (UIPrinterCutterBehavior) printInteractionController:(UIPrintInteractionController *) printInteractionController chooseCutterBehavior:(NSArray *) availableBehaviors;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.
- `availableBehaviors`: An array of [NSNumber](../../foundation/nsnumber.md) objects identifying the printer’s available cutter behaviors. Each number corresponds to one of the constants defined in [UIPrinterCutterBehavior](../uiprinter/cutterbehavior.md).

<a id="return-value"></a>

## Return Value

The cutter behavior to use for the print job. The value must correspond to one of the constants in the `availableBehaviors` parameter.

<a id="Discussion"></a>

## Discussion

Some roll-fed printers support different options for cutting the paper. If you implement this method in your delegate, then it may be called during a print job. Your delegate method should determine when to make cuts and return the appropriate value.

## See Also

### Choosing a Paper Size for the Print Job

- [printInteractionController:choosePaper:](printinteractioncontroller%28__choosepaper_%29.md): Asks the delegate for an object that encapsulates the paper size and printing area for the print job.
- [printInteractionController:cutLengthForPaper:](printinteractioncontroller%28__cutlengthfor_%29.md): Asks the delegate for a length to use when cutting the page.
