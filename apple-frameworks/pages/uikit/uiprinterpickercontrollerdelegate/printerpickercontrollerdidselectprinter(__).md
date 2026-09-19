> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiprinterpickercontrollerdelegate/printerpickercontrollerdidselectprinter(_:)

# printerPickerControllerDidSelectPrinter(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that a printer was selected.

## Declaration

```swift
optional func printerPickerControllerDidSelectPrinter(_ printerPickerController: UIPrinterPickerController)
```

## Parameters

- `printerPickerController`: The printer picker controller that is providing your delegate with information.

<a id="Discussion"></a>

## Discussion

Implement this method if you want your delegate to be notified of the selected printer. The selected printer can be either one that the user selected or the initially selected printer that you specified when creating your [UIPrinterPickerController](../uiprinterpickercontroller.md) object.

# printerPickerControllerDidSelectPrinter: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that a printer was selected.

## Declaration

```objectivec
- (void) printerPickerControllerDidSelectPrinter:(UIPrinterPickerController *) printerPickerController;
```

## Parameters

- `printerPickerController`: The printer picker controller that is providing your delegate with information.

<a id="Discussion"></a>

## Discussion

Implement this method if you want your delegate to be notified of the selected printer. The selected printer can be either one that the user selected or the initially selected printer that you specified when creating your [UIPrinterPickerController](../uiprinterpickercontroller.md) object.
