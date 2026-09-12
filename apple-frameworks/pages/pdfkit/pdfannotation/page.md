> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/page](https://developer.apple.com/documentation/pdfkit/pdfannotation/page)

# page (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the page that the annotation is associated with.

## Declaration

```swift
weak var page: PDFPage? { get set }
```

<a id="return-value"></a>

## Return Value

The PDF page associated with the annotation.

<a id="Discussion"></a>

## Discussion

The [addAnnotation(\_:)](../pdfpage/addannotation%28__%29.md) method in the `PDFPage` class lets you associate an annotation with a page.

## See Also

### Accessing Information About an Annotation

- [modificationDate](modificationdate.md): Returns the modification date of the annotation.
- [userName](username.md): Returns the name of the user who created the annotation.
- [type](type.md): Returns the type of the annotation.
- [action](action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](../pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](../pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.

# page (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the page that the annotation is associated with.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) PDFPage * page;
```

<a id="return-value"></a>

## Return Value

The PDF page associated with the annotation.

<a id="Discussion"></a>

## Discussion

The [addAnnotation:](../pdfpage/addannotation%28__%29.md) method in the `PDFPage` class lets you associate an annotation with a page.

## See Also

### Accessing Information About an Annotation

- [modificationDate](modificationdate.md): Returns the modification date of the annotation.
- [userName](username.md): Returns the name of the user who created the annotation.
- [type](type.md): Returns the type of the annotation.
- [action](action.md): An object that represents an action for a PDF element, such as a link annotation.
- [PDFAction](../pdfaction.md): An action that is performed when, for example, a PDF annotation is activated or an outline item is clicked.
- [PDFDestination](../pdfdestination.md): A `PDFDestination` object describes a point on a PDF page.
