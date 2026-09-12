> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationkey/color](https://developer.apple.com/documentation/pdfkit/pdfannotationkey/color)

# color (Swift)

**Framework:** PDFKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array of floats or a color object that specifies the annotation’s color.

## Declaration

```swift
static let color: PDFAnnotationKey
```

<a id="Discussion"></a>

## Discussion

Annotations use the color for the following:

- The background of the annotation’s icon when it’s in a closed state
- The title bar of the annotation’s pop-up window
- The border of a link annotation
- The stroke of a circle, square, or line shape annotation

## See Also

### Configuring Annotation Appearance

- [appearanceDictionary](appearancedictionary.md): A dictionary that contains properties for controlling the annotation’s visual appearance.
- [appearanceState](appearancestate.md): A string that specifies the appearance stream for the annotation.
- [border](border.md): An array of integers or border objects that describes the border of the annotation.
- [borderStyle](borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [defaultAppearance](defaultappearance.md): A string value a free text annotation uses to format the text.
- [highlightingMode](highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationHighlightingMode](../pdfannotationhighlightingmode.md)
- [iconName](iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [interiorColor](interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [quadding](quadding.md): An integer value that specifies left, right, or center justification.

# PDFAnnotationKeyColor (Objective-C)

**Framework:** PDFKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array of floats or a color object that specifies the annotation’s color.

## Declaration

```objectivec
extern PDFAnnotationKey PDFAnnotationKeyColor;
```

<a id="Discussion"></a>

## Discussion

Annotations use the color for the following:

- The background of the annotation’s icon when it’s in a closed state
- The title bar of the annotation’s pop-up window
- The border of a link annotation
- The stroke of a circle, square, or line shape annotation

## See Also

### Configuring Annotation Appearance

- [PDFAnnotationKeyAppearanceDictionary](appearancedictionary.md): A dictionary that contains properties for controlling the annotation’s visual appearance.
- [PDFAnnotationKeyAppearanceState](appearancestate.md): A string that specifies the appearance stream for the annotation.
- [PDFAnnotationKeyBorder](border.md): An array of integers or border objects that describes the border of the annotation.
- [PDFAnnotationKeyBorderStyle](borderstyle.md): A dictionary that contains the properties of the annotation’s border.
- [PDFAnnotationKeyDefaultAppearance](defaultappearance.md): A string value a free text annotation uses to format the text.
- [PDFAnnotationKeyHighlightingMode](highlightingmode.md): A string value that defines the way an annotation highlights when the user activates it, such as when clicking or tapping a link.
- [PDFAnnotationHighlightingMode](../pdfannotationhighlightingmode.md)
- [PDFAnnotationKeyIconName](iconname.md): A string value that specifies the name of an icon for a text or stamp annotation.
- [PDFAnnotationKeyInteriorColor](interiorcolor.md): An array of floating point values or a PDF color object that annotations use to fill interior space, such as line endings, squares, or circles.
- [PDFAnnotationKeyQuadding](quadding.md): An integer value that specifies left, right, or center justification.
