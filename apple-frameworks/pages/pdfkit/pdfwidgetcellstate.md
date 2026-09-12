> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfwidgetcellstate](https://developer.apple.com/documentation/pdfkit/pdfwidgetcellstate)

# PDFWidgetCellState (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The state of a button annotation, either on, off, or mixed.

## Declaration

```swift
enum PDFWidgetCellState
```

## Topics

### Choosing a Cell State

- [PDFWidgetCellState.onState](pdfwidgetcellstate/onstate.md): The button widget is in a selected state.
- [PDFWidgetCellState.offState](pdfwidgetcellstate/offstate.md): The button widget is in an unselected state.
- [PDFWidgetCellState.mixedState](pdfwidgetcellstate/mixedstate.md): The button widget is in a mixed state, neither on nor off.

### Initializers

- [init(rawValue:)](pdfwidgetcellstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](pdfannotation/widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](pdfannotation/buttonwidgetstate.md): The current state of the button widget annotation.
- [buttonWidgetStateString](pdfannotation/buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](pdfannotation/caption.md): The title of push button widget annotations.
- [allowsToggleToOff](pdfannotation/allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](pdfannotation/radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.

# PDFWidgetCellState (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The state of a button annotation, either on, off, or mixed.

## Declaration

```objectivec
enum PDFWidgetCellState : NSInteger;
```

## Topics

### Choosing a Cell State

- [kPDFWidgetOnState](pdfwidgetcellstate/onstate.md): The button widget is in a selected state.
- [kPDFWidgetOffState](pdfwidgetcellstate/offstate.md): The button widget is in an unselected state.
- [kPDFWidgetMixedState](pdfwidgetcellstate/mixedstate.md): The button widget is in a mixed state, neither on nor off.

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](pdfannotation/widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](pdfannotation/buttonwidgetstate.md): The current state of the button widget annotation.
- [buttonWidgetStateString](pdfannotation/buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](pdfannotation/caption.md): The title of push button widget annotations.
- [allowsToggleToOff](pdfannotation/allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](pdfannotation/radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.
