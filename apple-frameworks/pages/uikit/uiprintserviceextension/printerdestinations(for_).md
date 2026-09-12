> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintserviceextension/printerdestinations(for:)](https://developer.apple.com/documentation/uikit/uiprintserviceextension/printerdestinations(for:))

# printerDestinations(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

Searches for a printer destination that matches the print-job attributes.

## Declaration

```swift
func printerDestinations(for printInfo: UIPrintInfo) -> [UIPrinterDestination]
```

## Parameters

- `printInfo`: The characteristics of a print job.

<a id="return-value"></a>

## Return Value

A printer or printers that fulfill the printing options in `printInfo`.

<a id="Discussion"></a>

## Discussion

This method inspects the [UIPrintInfo](../uiprintinfo.md) record to determine which printers to display to the user.

# printerDestinationsForPrintInfo: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

Searches for a printer destination that matches the print-job attributes.

## Declaration

```objectivec
- (NSArray<UIPrinterDestination *> *) printerDestinationsForPrintInfo:(UIPrintInfo *) printInfo;
```

## Parameters

- `printInfo`: The characteristics of a print job.

<a id="return-value"></a>

## Return Value

A printer or printers that fulfill the printing options in `printInfo`.

<a id="Discussion"></a>

## Discussion

This method inspects the [UIPrintInfo](../uiprintinfo.md) record to determine which printers to display to the user.
