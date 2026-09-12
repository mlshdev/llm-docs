> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/username](https://developer.apple.com/documentation/pdfkit/pdfannotation/username)

# userName (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the name of the user who created the annotation.

## Declaration

```swift
var userName: String? { get set }
```

<a id="return-value"></a>

## Return Value

The name of the user who created the annotation, or NULL if no user name is set.

## See Also

### Related Documentation

- [PDFAnnotation](../pdfannotation.md): An annotation in a PDF document.

### Accessing Information About an Annotation

- [page](page.md): Returns the page that the annotation is associated with.
- [modificationDate](modificationdate.md): Returns the modification date of the annotation.
- [type](type.md): Returns the type of the annotation.
- [action](action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](../pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](../pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.

# userName (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the name of the user who created the annotation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * userName;
```

<a id="return-value"></a>

## Return Value

The name of the user who created the annotation, or NULL if no user name is set.

## See Also

### Related Documentation

- [PDFAnnotation](../pdfannotation.md): An annotation in a PDF document.

### Accessing Information About an Annotation

- [page](page.md): Returns the page that the annotation is associated with.
- [modificationDate](modificationdate.md): Returns the modification date of the annotation.
- [type](type.md): Returns the type of the annotation.
- [action](action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](../pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](../pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.
