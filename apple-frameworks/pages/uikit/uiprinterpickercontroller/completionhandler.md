> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller/completionhandler](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller/completionhandler)

# UIPrinterPickerController.CompletionHandler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The completion handler to execute when dismissing a printer picker controller.

## Declaration

```swift
typealias CompletionHandler = (UIPrinterPickerController, Bool, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

A printer picker completion handler takes the following parameters:

- **printerPickerController**: The printer picker controller object that is being dismissed. This parameter contains information about the selected printer, if any.
- **userDidSelect**: [true](https://developer.apple.com/documentation/swift/true) if the user selected a printer or [false](https://developer.apple.com/documentation/swift/false) if the user canceled the selection process. When this parameter is [true](https://developer.apple.com/documentation/swift/true), use the `printerPickerController` object to retrieve the selected printer object.
- **error**: An [NSError](../../foundation/nserror.md) object if there was a problem with the printer picker or `nil` if a printer was selected or the user canceled the picker.

# UIPrinterPickerCompletionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The completion handler to execute when dismissing a printer picker controller.

## Declaration

```objectivec
typedef void (^)(UIPrinterPickerController *, _Bool, NSError *) UIPrinterPickerCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

A printer picker completion handler takes the following parameters:

- **printerPickerController**: The printer picker controller object that is being dismissed. This parameter contains information about the selected printer, if any.
- **userDidSelect**: [true](https://developer.apple.com/documentation/swift/true) if the user selected a printer or [false](https://developer.apple.com/documentation/swift/false) if the user canceled the selection process. When this parameter is [true](https://developer.apple.com/documentation/swift/true), use the `printerPickerController` object to retrieve the selected printer object.
- **error**: An [NSError](../../foundation/nserror.md) object if there was a problem with the printer picker or `nil` if a printer was selected or the user canceled the picker.
