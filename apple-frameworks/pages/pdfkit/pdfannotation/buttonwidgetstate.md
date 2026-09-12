> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/buttonwidgetstate](https://developer.apple.com/documentation/pdfkit/pdfannotation/buttonwidgetstate)

# buttonWidgetState (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The current state of the button widget annotation.

## Declaration

```swift
var buttonWidgetState: PDFWidgetCellState { get set }
```

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [PDFWidgetCellState](../pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [buttonWidgetStateString](buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](caption.md): The title of push button widget annotations.
- [allowsToggleToOff](allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.

# buttonWidgetState (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The current state of the button widget annotation.

## Declaration

```objectivec
@property (nonatomic) PDFWidgetCellState buttonWidgetState;
```

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [PDFWidgetCellState](../pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [buttonWidgetStateString](buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](caption.md): The title of push button widget annotations.
- [allowsToggleToOff](allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.
