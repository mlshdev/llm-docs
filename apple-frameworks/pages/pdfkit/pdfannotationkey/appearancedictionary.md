> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationkey/appearancedictionary](https://developer.apple.com/documentation/pdfkit/pdfannotationkey/appearancedictionary)

# appearanceDictionary (Swift)

**Framework:** PDFKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A dictionary that contains properties for controlling the annotation’s visual appearance.

## Declaration

```swift
static let appearanceDictionary: PDFAnnotationKey
```

<a id="Discussion"></a>

## Discussion

PDFKit typically generates this property when saving a PDF document. If present, PDFKit uses the contents of the dictionary to render the annotation. PDFKit clears this value if either of the following occurs:

- The appearance changes and PDFKit must rerender the annotation, such as if the color changes.
- Explicit removal of the value occurs to allow use of the annotation’s properties for rendering.

## See Also

### Configuring Annotation Appearance

- [appearanceState](appearancestate.md): A string that specifies the appearance stream for the annotation.
- [border](border.md): An array of integers or border objects that describes the border of the annotation.
- [borderStyle](borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [color](color.md): An array of floats or a color object that specifies the annotation’s color.
- [defaultAppearance](defaultappearance.md): A string value a free text annotation uses to format the text.
- [highlightingMode](highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationHighlightingMode](../pdfannotationhighlightingmode.md)
- [iconName](iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [interiorColor](interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [quadding](quadding.md): An integer value that specifies left, right, or center justification.

# PDFAnnotationKeyAppearanceDictionary (Objective-C)

**Framework:** PDFKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A dictionary that contains properties for controlling the annotation’s visual appearance.

## Declaration

```objectivec
extern PDFAnnotationKey PDFAnnotationKeyAppearanceDictionary;
```

<a id="Discussion"></a>

## Discussion

PDFKit typically generates this property when saving a PDF document. If present, PDFKit uses the contents of the dictionary to render the annotation. PDFKit clears this value if either of the following occurs:

- The appearance changes and PDFKit must rerender the annotation, such as if the color changes.
- Explicit removal of the value occurs to allow use of the annotation’s properties for rendering.

## See Also

### Configuring Annotation Appearance

- [PDFAnnotationKeyAppearanceState](appearancestate.md): A string that specifies the appearance stream for the annotation.
- [PDFAnnotationKeyBorder](border.md): An array of integers or border objects that describes the border of the annotation.
- [PDFAnnotationKeyBorderStyle](borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [PDFAnnotationKeyColor](color.md): An array of floats or a color object that specifies the annotation’s color.
- [PDFAnnotationKeyDefaultAppearance](defaultappearance.md): A string value a free text annotation uses to format the text.
- [PDFAnnotationKeyHighlightingMode](highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationHighlightingMode](../pdfannotationhighlightingmode.md)
- [PDFAnnotationKeyIconName](iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [PDFAnnotationKeyInteriorColor](interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [PDFAnnotationKeyQuadding](quadding.md): An integer value that specifies left, right, or center justification.
