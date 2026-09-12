> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/layoutdocumentview()](https://developer.apple.com/documentation/pdfkit/pdfview/layoutdocumentview())

# layoutDocumentView() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Performs layout of the inner views.

## Declaration

```swift
func layoutDocumentView()
```

<a id="Discussion"></a>

## Discussion

The `PDFView` actually contains several subviews, such as the document view (where the PDF is actually drawn) and a “matte view” (which may appear as a gray area around the PDF content, depending on the scaling). Changes to the PDF content may require changes to these inner views, so you must call this method explicitly if you use PDF Kit utility classes to add or remove a page, rotate a page, or perform other operations affecting visible layout.

This method is called automatically from `PDFView` methods that affect the visible layout (such as `setDocument(_:)`, `setDisplayBox(_:)` or [zoomIn(\_:)](zoomin%28__%29.md)).

## See Also

### Specializing the View

- [documentView](documentview.md): The innermost view used by `PDFView` or by your `PDFView` subclass.
- [Draw Operations](../draw-operations.md): Draw in a PDF page.

# layoutDocumentView (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Performs layout of the inner views.

## Declaration

```objectivec
- (void) layoutDocumentView;
```

<a id="Discussion"></a>

## Discussion

The `PDFView` actually contains several subviews, such as the document view (where the PDF is actually drawn) and a “matte view” (which may appear as a gray area around the PDF content, depending on the scaling). Changes to the PDF content may require changes to these inner views, so you must call this method explicitly if you use PDF Kit utility classes to add or remove a page, rotate a page, or perform other operations affecting visible layout.

This method is called automatically from `PDFView` methods that affect the visible layout (such as `setDocument(_:)`, `setDisplayBox(_:)` or [zoomIn:](zoomin%28__%29.md)).

## See Also

### Specializing the View

- [documentView](documentview.md): The innermost view used by `PDFView` or by your `PDFView` subclass.
- [Draw Operations](../draw-operations.md): Draw in a PDF page.
