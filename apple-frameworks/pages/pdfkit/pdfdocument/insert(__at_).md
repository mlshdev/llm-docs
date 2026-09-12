> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/insert(_:at:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/insert(_:at:))

# insert(\_:at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Inserts a page at the specified index point.

## Declaration

```swift
func insert(_ page: PDFPage, at index: Int)
```

<a id="Discussion"></a>

## Discussion

This method raises an exception if `index` is out of bounds.

Be aware that a PDF viewing application might use the size of the first page in the document as representative of all page sizes when reporting the size of a document. If you need to get the actual size of an individual page, you can use [bounds(for:)](../pdfpage/bounds%28for_%29.md) (note that the size is returned in points, which are typically converted to inches or centimeters by PDF viewing applications).

## See Also

### Working with Pages

- [pageCount](pagecount.md): The number of pages in the document.
- [page(at:)](page%28at_%29.md): Returns the page at the specified index number.
- [index(for:)](index%28for_%29.md): Gets the index number for the specified page.
- [removePage(at:)](removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePage(at:withPageAt:)](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.

# insertPage:atIndex: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Inserts a page at the specified index point.

## Declaration

```objectivec
- (void) insertPage:(PDFPage *) page atIndex:(NSUInteger) index;
```

<a id="Discussion"></a>

## Discussion

This method raises an exception if `index` is out of bounds.

Be aware that a PDF viewing application might use the size of the first page in the document as representative of all page sizes when reporting the size of a document. If you need to get the actual size of an individual page, you can use [boundsForBox:](../pdfpage/bounds%28for_%29.md) (note that the size is returned in points, which are typically converted to inches or centimeters by PDF viewing applications).

## See Also

### Working with Pages

- [pageCount](pagecount.md): The number of pages in the document.
- [pageAtIndex:](page%28at_%29.md): Returns the page at the specified index number.
- [indexForPage:](index%28for_%29.md): Gets the index number for the specified page.
- [removePageAtIndex:](removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePageAtIndex:withPageAtIndex:](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.
