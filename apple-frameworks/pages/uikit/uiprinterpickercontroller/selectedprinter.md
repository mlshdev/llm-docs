> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprinterpickercontroller/selectedprinter](https://developer.apple.com/documentation/uikit/uiprinterpickercontroller/selectedprinter)

# selectedPrinter (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The selected printer.

## Declaration

```swift
var selectedPrinter: UIPrinter? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set to the picker you specified at creation time initially. When the picker is dismissed, the value is updated to reflect the printer that the user selected, if any. If the user cancels the picker without selecting a printer, the value of this property does not change.

# selectedPrinter (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The selected printer.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIPrinter * selectedPrinter;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set to the picker you specified at creation time initially. When the picker is dismissed, the value is updated to reflect the printer that the user selected, if any. If the user cancels the picker without selecting a printer, the value of this property does not change.
