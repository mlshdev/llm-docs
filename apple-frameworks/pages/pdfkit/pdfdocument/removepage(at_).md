> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/removepage(at:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/removepage(at:))

# removePage(at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Removes the page at the specified index point.

## Declaration

```swift
func removePage(at index: Int)
```

<a id="Discussion"></a>

## Discussion

This method raises an exception if `index` is out of bounds.

## See Also

### Working with Pages

- [pageCount](pagecount.md): The number of pages in the document.
- [page(at:)](page%28at_%29.md): Returns the page at the specified index number.
- [index(for:)](index%28for_%29.md): Gets the index number for the specified page.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts a page at the specified index point.
- [exchangePage(at:withPageAt:)](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.

# removePageAtIndex: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Removes the page at the specified index point.

## Declaration

```objectivec
- (void) removePageAtIndex:(NSUInteger) index;
```

<a id="Discussion"></a>

## Discussion

This method raises an exception if `index` is out of bounds.

## See Also

### Working with Pages

- [pageCount](pagecount.md): The number of pages in the document.
- [pageAtIndex:](page%28at_%29.md): Returns the page at the specified index number.
- [indexForPage:](index%28for_%29.md): Gets the index number for the specified page.
- [insertPage:atIndex:](insert%28__at_%29.md): Inserts a page at the specified index point.
- [exchangePageAtIndex:withPageAtIndex:](exchangepage%28at_withpageat_%29.md): Swaps one page with another.
- [pageClass](pageclass.md): The class that is allocated and initialized when page objects are created for the document.
