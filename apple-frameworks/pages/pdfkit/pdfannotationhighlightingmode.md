> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationhighlightingmode](https://developer.apple.com/documentation/pdfkit/pdfannotationhighlightingmode)

# PDFAnnotationHighlightingMode (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```swift
struct PDFAnnotationHighlightingMode
```

## Topics

### Choosing a Highlight Mode

- [invert](pdfannotationhighlightingmode/invert.md): A highlight mode that inverts the content of the annotation.
- [none](pdfannotationhighlightingmode/none.md): A highlight mode that doesn’t change the appearance of the annotation.
- [outline](pdfannotationhighlightingmode/outline.md): A highlight mode that inverts the annotation’s border.
- [push](pdfannotationhighlightingmode/push.md): A highlight mode that renders a pressed appearance for the annotation.

### Creating an Annotation Highlight Mode

- [init(rawValue:)](pdfannotationhighlightingmode/init%28rawvalue_%29.md): Creates a highlight mode using the specified raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Annotation Appearance

- [appearanceDictionary](pdfannotationkey/appearancedictionary.md): A dictionary that contains properties for controlling the annotation’s visual appearance.
- [appearanceState](pdfannotationkey/appearancestate.md): A string that specifies the appearance stream for the annotation.
- [border](pdfannotationkey/border.md): An array of integers or border objects that describes the border of the annotation.
- [borderStyle](pdfannotationkey/borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [color](pdfannotationkey/color.md): An array of floats or a color object that specifies the annotation’s color.
- [defaultAppearance](pdfannotationkey/defaultappearance.md): A string value a free text annotation uses to format the text.
- [highlightingMode](pdfannotationkey/highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [iconName](pdfannotationkey/iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [interiorColor](pdfannotationkey/interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [quadding](pdfannotationkey/quadding.md): An integer value that specifies left, right, or center justification.

# PDFAnnotationHighlightingMode (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```objectivec
typedef NSString * const PDFAnnotationHighlightingMode;
```

## Topics

### Choosing a Highlight Mode

- [PDFAnnotationHighlightingModeInvert](pdfannotationhighlightingmode/invert.md): A highlight mode that inverts the content of the annotation.
- [PDFAnnotationHighlightingModeNone](pdfannotationhighlightingmode/none.md): A highlight mode that doesn’t change the appearance of the annotation.
- [PDFAnnotationHighlightingModeOutline](pdfannotationhighlightingmode/outline.md): A highlight mode that inverts the annotation’s border.
- [PDFAnnotationHighlightingModePush](pdfannotationhighlightingmode/push.md): A highlight mode that renders a pressed appearance for the annotation.

## See Also

### Configuring Annotation Appearance

- [PDFAnnotationKeyAppearanceDictionary](pdfannotationkey/appearancedictionary.md): A dictionary that contains properties for controlling the annotation’s visual appearance.
- [PDFAnnotationKeyAppearanceState](pdfannotationkey/appearancestate.md): A string that specifies the appearance stream for the annotation.
- [PDFAnnotationKeyBorder](pdfannotationkey/border.md): An array of integers or border objects that describes the border of the annotation.
- [PDFAnnotationKeyBorderStyle](pdfannotationkey/borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [PDFAnnotationKeyColor](pdfannotationkey/color.md): An array of floats or a color object that specifies the annotation’s color.
- [PDFAnnotationKeyDefaultAppearance](pdfannotationkey/defaultappearance.md): A string value a free text annotation uses to format the text.
- [PDFAnnotationKeyHighlightingMode](pdfannotationkey/highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationKeyIconName](pdfannotationkey/iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [PDFAnnotationKeyInteriorColor](pdfannotationkey/interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [PDFAnnotationKeyQuadding](pdfannotationkey/quadding.md): An integer value that specifies left, right, or center justification.
