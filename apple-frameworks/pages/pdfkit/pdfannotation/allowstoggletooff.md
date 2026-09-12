> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/allowstoggletooff](https://developer.apple.com/documentation/pdfkit/pdfannotation/allowstoggletooff)

# allowsToggleToOff (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.

## Declaration

```swift
var allowsToggleToOff: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

To implement a group of radio buttons where at least one option must remain in a selected state, set [allowsToggleToOff](allowstoggletooff.md) to [false](https://developer.apple.com/documentation/swift/false) on each button in the group.

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](buttonwidgetstate.md): The current state of the button widget annotation.
- [PDFWidgetCellState](../pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [buttonWidgetStateString](buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](caption.md): The title of push button widget annotations.
- [radiosInUnison](radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.

# allowsToggleToOff (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsToggleToOff;
```

<a id="Discussion"></a>

## Discussion

To implement a group of radio buttons where at least one option must remain in a selected state, set [allowsToggleToOff](allowstoggletooff.md) to [false](https://developer.apple.com/documentation/swift/false) on each button in the group.

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](buttonwidgetstate.md): The current state of the button widget annotation.
- [PDFWidgetCellState](../pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [buttonWidgetStateString](buttonwidgetstatestring.md): A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.
- [caption](caption.md): The title of push button widget annotations.
- [radiosInUnison](radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.
