> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/transformcontext(for:)](https://developer.apple.com/documentation/pdfkit/pdfpage/transformcontext(for:))

# transformContext(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Transforms the current context, given the specified box.

## Declaration

```swift
func transformContext(for box: PDFDisplayBox)
```

<a id="Discussion"></a>

## Discussion

When transforming the current context, this method takes into account the rotation of the page, as well as the origin of the box with respect to the page’s base coordinate system. This is a convenient method to call within the `PDFView` [draw(\_:)](../pdfview/draw%28__%29.md) method or from within a draw method of a `PDFAnnotation` subclass.

## See Also

### Related Documentation

- [PDFPage](../pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.

### Rendering Pages

- [draw(with:)](draw%28with_%29.md): Deprecated. Draws the page within the specified box.

# transformContextForBox: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Transforms the current context, given the specified box.

## Declaration

```objectivec
- (void) transformContextForBox:(PDFDisplayBox) box;
```

<a id="Discussion"></a>

## Discussion

When transforming the current context, this method takes into account the rotation of the page, as well as the origin of the box with respect to the page’s base coordinate system. This is a convenient method to call within the `PDFView` [drawPage:](../pdfview/draw%28__%29.md) method or from within a draw method of a `PDFAnnotation` subclass.

## See Also

### Related Documentation

- [PDFPage](../pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.

### Rendering Pages

- [drawWithBox:](draw%28with_%29.md): Deprecated. Draws the page within the specified box.
