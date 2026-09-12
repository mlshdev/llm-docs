> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller/init(initiallyselectedprinter:)](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller/init(initiallyselectedprinter:))

# init(initiallySelectedPrinter:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates and returns a printer picker with an initially selected printer object.

## Declaration

```swift
init(initiallySelectedPrinter printer: UIPrinter?)
```

## Parameters

- `printer`: A printer object to select initially. Specify `nil` if you do not want to display a selected printer initially.

<a id="return-value"></a>

## Return Value

An initialized printer picker controller object.

<a id="Discussion"></a>

## Discussion

After creating a printer picker controller, assign your delegate as needed and present the controller.

# printerPickerControllerWithInitiallySelectedPrinter: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates and returns a printer picker with an initially selected printer object.

## Declaration

```objectivec
+ (UIPrinterPickerController *) printerPickerControllerWithInitiallySelectedPrinter:(UIPrinter *) printer;
```

## Parameters

- `printer`: A printer object to select initially. Specify `nil` if you do not want to display a selected printer initially.

<a id="return-value"></a>

## Return Value

An initialized printer picker controller object.

<a id="Discussion"></a>

## Discussion

After creating a printer picker controller, assign your delegate as needed and present the controller.
