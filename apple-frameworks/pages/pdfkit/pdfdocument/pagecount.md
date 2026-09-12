> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/pagecount](https://developer.apple.com/documentation/pdfkit/pdfdocument/pagecount)

# pageCount (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The number of pages in the document.

## Declaration

```swift
var pageCount: Int { get }
```

## See Also

### Working with Pages

- [page(at:)](page%28at_%29.md): Returns the page at the specified index number.
- [index(for:)](index%28for_%29.md): Gets the index number for the specified page.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a page at the specified index point.
- [removePage(at:)](removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePage(at:withPageAt:)](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.

# pageCount (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The number of pages in the document.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger pageCount;
```

## See Also

### Working with Pages

- [pageAtIndex:](page%28at_%29.md): Returns the page at the specified index number.
- [indexForPage:](index%28for_%29.md): Gets the index number for the specified page.
- [insertPage:atIndex:](insert%28__at_%29.md): Inserts a page at the specified index point.
- [removePageAtIndex:](removepage%28at_%29.md): Removes the page at the specified index point.
- [exchangePageAtIndex:withPageAtIndex:](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.
