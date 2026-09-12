> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/print(to:completionhandler:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/print(to:completionhandler:))

# print(to:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prints directly to the specified printer.

## Declaration

```swift
func print(to printer: UIPrinter, completionHandler completion: UIPrintInteractionController.CompletionHandler? = nil) -> Bool
```

## Parameters

- `printer`: The printer to use for printing. You can obtain a list of available printers using a [UIPrinterPickerController](../uiprinterpickercontroller.md) object.
- `completion`: The block to execute when the print operation finishes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if printing was successful or [false](https://developer.apple.com/documentation/swift/false) if there was a problem.

<a id="Discussion"></a>

## Discussion

This method starts the print job and displays the printing progress indicator to the user. This method associates the current printing information (available in the [printInfo](printinfo.md) property) with the job but disables duplex printing. Upon completion of the print job, the print interaction controller executes the block in the `completion` parameter.

## See Also

### Printing directly to a printer

- [UIPrintInteractionController.CompletionHandler](completionhandler.md): A completion handler for responding to the completion of a print job or for handling printing errors.

# printToPrinter:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prints directly to the specified printer.

## Declaration

```objectivec
- (BOOL) printToPrinter:(UIPrinter *) printer completionHandler:(UIPrintInteractionCompletionHandler) completion;
```

## Parameters

- `printer`: The printer to use for printing. You can obtain a list of available printers using a [UIPrinterPickerController](../uiprinterpickercontroller.md) object.
- `completion`: The block to execute when the print operation finishes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if printing was successful or [false](https://developer.apple.com/documentation/swift/false) if there was a problem.

<a id="Discussion"></a>

## Discussion

This method starts the print job and displays the printing progress indicator to the user. This method associates the current printing information (available in the [printInfo](printinfo.md) property) with the job but disables duplex printing. Upon completion of the print job, the print interaction controller executes the block in the `completion` parameter.

## See Also

### Printing directly to a printer

- [UIPrintInteractionCompletionHandler](completionhandler.md): A completion handler for responding to the completion of a print job or for handling printing errors.
