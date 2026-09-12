> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationsubtype](https://developer.apple.com/documentation/pdfkit/pdfannotationsubtype)

# PDFAnnotationSubtype (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The type of annotation, such as circle, text, or ink.

## Declaration

```swift
struct PDFAnnotationSubtype
```

## Topics

### Choosing an Annotation Subtype

- [circle](pdfannotationsubtype/circle.md): An annotation that renders a circle shape.
- [freeText](pdfannotationsubtype/freetext.md): An annotation that displays an editable text field.
- [highlight](pdfannotationsubtype/highlight.md): An annotation that highlights text.
- [ink](pdfannotationsubtype/ink.md): An annotation that represents a freehand scribble.
- [line](pdfannotationsubtype/line.md): An annotation that displays a single straight line.
- [link](pdfannotationsubtype/link.md): An annotation that provides a hyperlink to a location in the document, or an action to perform when the user clicks or taps it.
- [popup](pdfannotationsubtype/popup.md): An annotation that displays text in a pop-up window for entry and editing.
- [square](pdfannotationsubtype/square.md): An annotation that displays a square shape.
- [stamp](pdfannotationsubtype/stamp.md): An annotation that displays text or a graphic as if a rubber stamp imprints it on the page.
- [strikeOut](pdfannotationsubtype/strikeout.md): An annotation that strikes out text.
- [text](pdfannotationsubtype/text.md): An annotation that displays a collapsible note that contains text.
- [underline](pdfannotationsubtype/underline.md): An annotation that underlines text.
- [widget](pdfannotationsubtype/widget.md): An annotation that displays interactive form elements, including text or signature fields, radio buttons, checkboxes, push buttons, pop-ups, and tables.

### Creating an Annotation Subtype

- [init(rawValue:)](pdfannotationsubtype/init%28rawvalue_%29.md): Creates an annotation subtype using the specified raw string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an Annotation

- [init(bounds:forType:withProperties:)](pdfannotation/init%28bounds_fortype_withproperties_%29.md): Creates a PDF annotation with the specified bounds, type, and optional properties.

# PDFAnnotationSubtype (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The type of annotation, such as circle, text, or ink.

## Declaration

```objectivec
typedef NSString * const PDFAnnotationSubtype;
```

## Topics

### Choosing an Annotation Subtype

- [PDFAnnotationSubtypeCircle](pdfannotationsubtype/circle.md): An annotation that renders a circle shape.
- [PDFAnnotationSubtypeFreeText](pdfannotationsubtype/freetext.md): An annotation that displays an editable text field.
- [PDFAnnotationSubtypeHighlight](pdfannotationsubtype/highlight.md): An annotation that highlights text.
- [PDFAnnotationSubtypeInk](pdfannotationsubtype/ink.md): An annotation that represents a freehand scribble.
- [PDFAnnotationSubtypeLine](pdfannotationsubtype/line.md): An annotation that displays a single straight line.
- [PDFAnnotationSubtypeLink](pdfannotationsubtype/link.md): An annotation that provides a hyperlink to a location in the document, or an action to perform when the user clicks or taps it.
- [PDFAnnotationSubtypePopup](pdfannotationsubtype/popup.md): An annotation that displays text in a pop-up window for entry and editing.
- [PDFAnnotationSubtypeSquare](pdfannotationsubtype/square.md): An annotation that displays a square shape.
- [PDFAnnotationSubtypeStamp](pdfannotationsubtype/stamp.md): An annotation that displays text or a graphic as if a rubber stamp imprints it on the page.
- [PDFAnnotationSubtypeStrikeOut](pdfannotationsubtype/strikeout.md): An annotation that strikes out text.
- [PDFAnnotationSubtypeText](pdfannotationsubtype/text.md): An annotation that displays a collapsible note that contains text.
- [PDFAnnotationSubtypeUnderline](pdfannotationsubtype/underline.md): An annotation that underlines text.
- [PDFAnnotationSubtypeWidget](pdfannotationsubtype/widget.md): An annotation that displays interactive form elements, including text or signature fields, radio buttons, checkboxes, push buttons, pop-ups, and tables.

## See Also

### Creating an Annotation

- [initWithBounds:forType:withProperties:](pdfannotation/init%28bounds_fortype_withproperties_%29.md): Creates a PDF annotation with the specified bounds, type, and optional properties.
