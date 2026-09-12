> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/currentpage](https://developer.apple.com/documentation/pdfkit/pdfview/currentpage)

# currentPage (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the current page.

## Declaration

```swift
var currentPage: PDFPage? { get }
```

<a id="Discussion"></a>

## Discussion

When there are two pages in the view in a two-up mode, “current page” is the left page. For continuous modes, returns the page crossing a horizontal line halfway between the view’s top and bottom bounds.

## See Also

### Related Documentation

- [go(to:)](go%28to_%29-5lh5d.md): Navigates to the specified destination.

### Navigating Within a Document

- [currentDestination](currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [visiblePages](visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.
- [Navigation](../navigation.md): Operations for moving through page history and seeking to a page in a document.

# currentPage (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the current page.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PDFPage * currentPage;
```

<a id="Discussion"></a>

## Discussion

When there are two pages in the view in a two-up mode, “current page” is the left page. For continuous modes, returns the page crossing a horizontal line halfway between the view’s top and bottom bounds.

## See Also

### Related Documentation

- [goToDestination:](go%28to_%29-5lh5d.md): Navigates to the specified destination.

### Navigating Within a Document

- [currentDestination](currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [visiblePages](visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.
- [Navigation](../navigation.md): Operations for moving through page history and seeking to a page in a document.
