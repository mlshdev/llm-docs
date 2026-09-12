> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/index(for:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/index(for:))

# index(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Gets the index number for the specified page.

## Declaration

```swift
func index(for page: PDFPage) -> Int
```

<a id="Discussion"></a>

## Discussion

Indexes are zero-based. This method raises an exception and returns `NSNotFound` if `page` is not found.

## See Also

### Working with Pages

- [pageCount](pagecount.md): The number of pages in the document.
- [page(at:)](page%28at_%29.md): Returns the page at the specified index number.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a page at the specified index point.
- [removePage(at:)](removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePage(at:withPageAt:)](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.

# indexForPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Gets the index number for the specified page.

## Declaration

```objectivec
- (NSUInteger) indexForPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

Indexes are zero-based. This method raises an exception and returns `NSNotFound` if `page` is not found.

## See Also

### Working with Pages

- [pageCount](pagecount.md): The number of pages in the document.
- [pageAtIndex:](page%28at_%29.md): Returns the page at the specified index number.
- [insertPage:atIndex:](insert%28__at_%29.md): Inserts a page at the specified index point.
- [removePageAtIndex:](removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePageAtIndex:withPageAtIndex:](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.
