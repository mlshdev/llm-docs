> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/type](https://developer.apple.com/documentation/pdfkit/pdfannotation/type)

# type (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the type of the annotation.

## Declaration

```swift
var type: String? { get set }
```

<a id="return-value"></a>

## Return Value

The type of the annotation. Types include `Line`, `Link`, `Text`, and so on, referring to the `PDFAnnotation` subclasses. In the Adobe PDF Specification, this attribute is called `Subtype`, and the common “type” for all annotations in the PDF Specification is `Annot`.

## See Also

### Accessing Information About an Annotation

- [page](page.md): Returns the page that the annotation is associated with.
- [modificationDate](modificationdate.md): Returns the modification date of the annotation.
- [userName](username.md): Returns the name of the user who created the annotation.
- [action](action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](../pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](../pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.

# type (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the type of the annotation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * type;
```

<a id="return-value"></a>

## Return Value

The type of the annotation. Types include `Line`, `Link`, `Text`, and so on, referring to the `PDFAnnotation` subclasses. In the Adobe PDF Specification, this attribute is called `Subtype`, and the common “type” for all annotations in the PDF Specification is `Annot`.

## See Also

### Accessing Information About an Annotation

- [page](page.md): Returns the page that the annotation is associated with.
- [modificationDate](modificationdate.md): Returns the modification date of the annotation.
- [userName](username.md): Returns the name of the user who created the annotation.
- [action](action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](../pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](../pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.
