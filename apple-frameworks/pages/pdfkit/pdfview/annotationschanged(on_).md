> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/annotationschanged(on:)](https://developer.apple.com/documentation/pdfkit/pdfview/annotationschanged(on:))

# annotationsChanged(on:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Tells the PDF view that an annotation on the specified page has changed.

## Declaration

```swift
func annotationsChanged(on page: PDFPage)
```

<a id="Discussion"></a>

## Discussion

When the `PDFView` object receives this message, it rescans for tool tips and pop-ups and informs the `PDFThumbailView` objects so the thumbnail images can be redrawn.

## See Also

### Working with Annotation Actions

- [Link Annotations](../link-annotations.md): Validate and handle links in a PDF view.

# annotationsChangedOnPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Tells the PDF view that an annotation on the specified page has changed.

## Declaration

```objectivec
- (void) annotationsChangedOnPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

When the `PDFView` object receives this message, it rescans for tool tips and pop-ups and informs the `PDFThumbailView` objects so the thumbnail images can be redrawn.

## See Also

### Working with Annotation Actions

- [Link Annotations](../link-annotations.md): Validate and handle links in a PDF view.
