> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationkey/contents](https://developer.apple.com/documentation/pdfkit/pdfannotationkey/contents)

# contents (Swift)

**Framework:** PDFKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The text that the annotation displays or represents.

## Declaration

```swift
static let contents: PDFAnnotationKey
```

<a id="Discussion"></a>

## Discussion

If the annotation doesn’t display text, the annotation uses it as an alternative human-readable form. For example, VoiceOver speaks the text for the annotation.

## See Also

### Configuring General Properties

- [date](date.md): The date, or string representation of a date, of the annotation’s most recent modification.
- [flags](flags.md): An integer value that specifies flags for the annotation.
- [name](name.md): A string that uniquely identifies the annotation among all annotations on the same page.
- [page](page.md): A dictionary or PDF page object that includes the annotation.
- [parent](parent.md): A dictionary or annotation object that a pop-up or widget belongs to.
- [quadPoints](quadpoints.md): An array of floating point values that specifies a rectangular region of a page.
- [rect](rect.md): The rectangle that the annotation occupies on the page, in page-space coordinates.
- [subtype](subtype.md): The type of annotation that the entries in a dictionary describe.
- [textLabel](textlabel.md): A string that represents the title of the annotation.

# PDFAnnotationKeyContents (Objective-C)

**Framework:** PDFKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The text that the annotation displays or represents.

## Declaration

```objectivec
extern PDFAnnotationKey PDFAnnotationKeyContents;
```

<a id="Discussion"></a>

## Discussion

If the annotation doesn’t display text, the annotation uses it as an alternative human-readable form. For example, VoiceOver speaks the text for the annotation.

## See Also

### Configuring General Properties

- [PDFAnnotationKeyDate](date.md): The date, or string representation of a date, of the annotation’s most recent modification.
- [PDFAnnotationKeyFlags](flags.md): An integer value that specifies flags for the annotation.
- [PDFAnnotationKeyName](name.md): A string that uniquely identifies the annotation among all annotations on the same page.
- [PDFAnnotationKeyPage](page.md): A dictionary or PDF page object that includes the annotation.
- [PDFAnnotationKeyParent](parent.md): A dictionary or annotation object that a pop-up or widget belongs to.
- [PDFAnnotationKeyQuadPoints](quadpoints.md): An array of floating point values that specifies a rectangular region of a page.
- [PDFAnnotationKeyRect](rect.md): The rectangle that the annotation occupies on the page, in page-space coordinates.
- [PDFAnnotationKeySubtype](subtype.md): The type of annotation that the entries in a dictionary describe.
- [PDFAnnotationKeyTextLabel](textlabel.md): A string that represents the title of the annotation.
