> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller/delegate](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate for the printer picker controller.

## Declaration

```swift
weak var delegate: (any UIPrinterPickerControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to filter out printers from the displayed list and to respond to events that occur during the presentation of the printer picker. The object you assign to this property must conform to the [UIPrinterPickerControllerDelegate](../uiprinterpickercontrollerdelegate.md) protocol.

## See Also

### Managing the printer picker interface

- [UIPrinterPickerControllerDelegate](../uiprinterpickercontrollerdelegate.md): A set of methods for managing the presentation and dismissal of a printer picker interface.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate for the printer picker controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPrinterPickerControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to filter out printers from the displayed list and to respond to events that occur during the presentation of the printer picker. The object you assign to this property must conform to the [UIPrinterPickerControllerDelegate](../uiprinterpickercontrollerdelegate.md) protocol.

## See Also

### Managing the printer picker interface

- [UIPrinterPickerControllerDelegate](../uiprinterpickercontrollerdelegate.md): A set of methods for managing the presentation and dismissal of a printer picker interface.
