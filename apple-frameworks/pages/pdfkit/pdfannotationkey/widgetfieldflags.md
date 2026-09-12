> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationkey/widgetfieldflags](https://developer.apple.com/documentation/pdfkit/pdfannotationkey/widgetfieldflags)

# widgetFieldFlags (Swift)

**Framework:** PDFKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An integer value that specifies flags for a widget.

## Declaration

```swift
static let widgetFieldFlags: PDFAnnotationKey
```

<a id="Discussion"></a>

## Discussion

For a full description of the possible widget field flags, see [Table 221](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=441), [Table 226](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=447), [Table 228](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=451), and [Table 230](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=452) in the [Adobe PDF 1.7 Specification](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf).

## See Also

### Configuring Widget Annotations

- [widgetAppearanceDictionary](widgetappearancedictionary.md): A dictionary or appearance characteristic object that contains properties for controlling the widget’s visual appearance.
- [widgetBackgroundColor](widgetbackgroundcolor.md): An array of floating point values or a PDF color object that specifies the widget’s background color.
- [widgetBorderColor](widgetbordercolor.md): An array of floating point values or a PDF color object that specifies the widget’s border color.
- [widgetCaption](widgetcaption.md): A string that a push button widget displays when it isn’t in a pressed state.
- [widgetDefaultValue](widgetdefaultvalue.md): A default value for the widget.
- [widgetDownCaption](widgetdowncaption.md): A string that a push button widgets displays when it’s in a pressed state.
- [widgetFieldType](widgetfieldtype.md): A string that specifies the type of widget, such as button, checkbox, or signature field.
- [widgetMaxLen](widgetmaxlen.md): An integer value that specifies the maximum length of a text field, in characters.
- [widgetOptions](widgetoptions.md): An array that specifies the options to present in radio buttons or choice lists.
- [widgetRolloverCaption](widgetrollovercaption.md): A string that push button widgets display when the pointer is over the button, but not clicking it.
- [widgetRotation](widgetrotation.md): An integer value that specifies the rotation of the widget.
- [widgetTextLabelUI](widgettextlabelui.md): A user-visible alternative field name that identifies the widget, typically for accessibility purposes.
- [widgetValue](widgetvalue.md): The widget’s value, typically for text and choice widgets.
- [PDFAnnotationWidgetSubtype](../pdfannotationwidgetsubtype.md)

# PDFAnnotationKeyWidgetFieldFlags (Objective-C)

**Framework:** PDFKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An integer value that specifies flags for a widget.

## Declaration

```objectivec
extern PDFAnnotationKey PDFAnnotationKeyWidgetFieldFlags;
```

<a id="Discussion"></a>

## Discussion

For a full description of the possible widget field flags, see [Table 221](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=441), [Table 226](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=447), [Table 228](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=451), and [Table 230](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf#page=452) in the [Adobe PDF 1.7 Specification](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf).

## See Also

### Configuring Widget Annotations

- [PDFAnnotationKeyWidgetAppearanceDictionary](widgetappearancedictionary.md): A dictionary or appearance characteristic object that contains properties for controlling the widget’s visual appearance.
- [PDFAnnotationKeyWidgetBackgroundColor](widgetbackgroundcolor.md): An array of floating point values or a PDF color object that specifies the widget’s background color.
- [PDFAnnotationKeyWidgetBorderColor](widgetbordercolor.md): An array of floating point values or a PDF color object that specifies the widget’s border color.
- [PDFAnnotationKeyWidgetCaption](widgetcaption.md): A string that a push button widget displays when it isn’t in a pressed state.
- [PDFAnnotationKeyWidgetDefaultValue](widgetdefaultvalue.md): A default value for the widget.
- [PDFAnnotationKeyWidgetDownCaption](widgetdowncaption.md): A string that a push button widgets displays when it’s in a pressed state.
- [PDFAnnotationKeyWidgetFieldType](widgetfieldtype.md): A string that specifies the type of widget, such as button, checkbox, or signature field.
- [PDFAnnotationKeyWidgetMaxLen](widgetmaxlen.md): An integer value that specifies the maximum length of a text field, in characters.
- [PDFAnnotationKeyWidgetOptions](widgetoptions.md): An array that specifies the options to present in radio buttons or choice lists.
- [PDFAnnotationKeyWidgetRolloverCaption](widgetrollovercaption.md): A string that push button widgets display when the pointer is over the button, but not clicking it.
- [PDFAnnotationKeyWidgetRotation](widgetrotation.md): An integer value that specifies the rotation of the widget.
- [PDFAnnotationKeyWidgetTextLabelUI](widgettextlabelui.md): A user-visible alternative field name that identifies the widget, typically for accessibility purposes.
- [PDFAnnotationKeyWidgetValue](widgetvalue.md): The widget’s value, typically for text and choice widgets.
- [PDFAnnotationWidgetSubtype](../pdfannotationwidgetsubtype.md)
