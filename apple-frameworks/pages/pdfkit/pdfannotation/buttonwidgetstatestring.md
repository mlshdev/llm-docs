> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/buttonwidgetstatestring](https://developer.apple.com/documentation/pdfkit/pdfannotation/buttonwidgetstatestring)

# buttonWidgetStateString (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.

## Declaration

```swift
var buttonWidgetStateString: String { get set }
```

## Mentioned In

- [Adding Widgets to a PDF Document](../adding-widgets-to-a-pdf-document.md)

<a id="Discussion"></a>

## Discussion

The default value is `Yes`.

To group button widgets, set the same [fieldName](fieldname.md) on the button widgets. The [buttonWidgetStateString](buttonwidgetstatestring.md) property allows you to identify individual button widgets in that group.

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](buttonwidgetstate.md): The current state of the button widget annotation.
- [PDFWidgetCellState](../pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [caption](caption.md): The title of push button widget annotations.
- [allowsToggleToOff](allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.

# buttonWidgetStateString (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A string value that differentiates button widgets in the same group, such as to identify mutually exclusive radio buttons from each other.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * buttonWidgetStateString;
```

## Mentioned In

- [Adding Widgets to a PDF Document](../adding-widgets-to-a-pdf-document.md)

<a id="Discussion"></a>

## Discussion

The default value is `Yes`.

To group button widgets, set the same [fieldName](fieldname.md) on the button widgets. The [buttonWidgetStateString](buttonwidgetstatestring.md) property allows you to identify individual button widgets in that group.

## See Also

### Configuring Button Widget Annotations

- [widgetControlType](widgetcontroltype.md): The type of button widget control, either radio button, push button, or checkbox.
- [buttonWidgetState](buttonwidgetstate.md): The current state of the button widget annotation.
- [PDFWidgetCellState](../pdfwidgetcellstate.md): The state of a button annotation, either on, off, or mixed.
- [caption](caption.md): The title of push button widget annotations.
- [allowsToggleToOff](allowstoggletooff.md): A Boolean value that indicates whether clicking or tapping a selected radio button toggles it to an unselected state.
- [radiosInUnison](radiosinunison.md): A Boolean value that indicates whether radio buttons in a group turn on and off in unison.
