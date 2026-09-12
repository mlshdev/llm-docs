> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/cangotofirstpage](https://developer.apple.com/documentation/pdfkit/pdfview/cangotofirstpage)

# canGoToFirstPage (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the user can navigate to the first page of the document.

## Declaration

```swift
var canGoToFirstPage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The return value will be [true](https://developer.apple.com/documentation/swift/true) unless the view is already displaying the first page.

## See Also

### Related Documentation

- [goToFirstPage(\_:)](gotofirstpage%28__%29.md): Navigates to the first page of the document.

### Determining Valid History Operations

- [canGoBack](cangoback.md): Returns a Boolean value indicating whether the user can navigate to the previous page in the page history.
- [canGoForward](cangoforward.md): Returns a Boolean value indicating whether the user can navigate to the next page in the page history.
- [canGoToLastPage](cangotolastpage.md): Returns a Boolean value indicating whether the user can navigate to the last page of the document.
- [canGoToNextPage](cangotonextpage.md): Returns a Boolean value indicating whether the user can navigate to the next page of the document.
- [canGoToPreviousPage](cangotopreviouspage.md): Returns a Boolean value indicating whether the user can navigate to the previous page of the document.

# canGoToFirstPage (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the user can navigate to the first page of the document.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canGoToFirstPage;
```

<a id="Discussion"></a>

## Discussion

The return value will be [true](https://developer.apple.com/documentation/swift/true) unless the view is already displaying the first page.

## See Also

### Related Documentation

- [goToFirstPage:](gotofirstpage%28__%29.md): Navigates to the first page of the document.

### Determining Valid History Operations

- [canGoBack](cangoback.md): Returns a Boolean value indicating whether the user can navigate to the previous page in the page history.
- [canGoForward](cangoforward.md): Returns a Boolean value indicating whether the user can navigate to the next page in the page history.
- [canGoToLastPage](cangotolastpage.md): Returns a Boolean value indicating whether the user can navigate to the last page of the document.
- [canGoToNextPage](cangotonextpage.md): Returns a Boolean value indicating whether the user can navigate to the next page of the document.
- [canGoToPreviousPage](cangotopreviouspage.md): Returns a Boolean value indicating whether the user can navigate to the previous page of the document.
