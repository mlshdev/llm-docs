> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/cangoforward](https://developer.apple.com/documentation/pdfkit/pdfview/cangoforward)

# canGoForward (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the user can navigate to the next page in the page history.

## Declaration

```swift
var canGoForward: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The page history gets built as your application calls navigation methods such as [go(to:)](go%28to_%29-5lh5d.md) and [goToLastPage(\_:)](gotolastpage%28__%29.md).

## See Also

### Related Documentation

- [goForward(\_:)](goforward%28__%29.md): Navigates forward one step in the page history.

### Determining Valid History Operations

- [canGoBack](cangoback.md): Returns a Boolean value indicating whether the user can navigate to the previous page in the page history.
- [canGoToFirstPage](cangotofirstpage.md): Returns a Boolean value indicating whether the user can navigate to the first page of the document.
- [canGoToLastPage](cangotolastpage.md): Returns a Boolean value indicating whether the user can navigate to the last page of the document.
- [canGoToNextPage](cangotonextpage.md): Returns a Boolean value indicating whether the user can navigate to the next page of the document.
- [canGoToPreviousPage](cangotopreviouspage.md): Returns a Boolean value indicating whether the user can navigate to the previous page of the document.

# canGoForward (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the user can navigate to the next page in the page history.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canGoForward;
```

<a id="Discussion"></a>

## Discussion

The page history gets built as your application calls navigation methods such as [goToDestination:](go%28to_%29-5lh5d.md) and [goToLastPage:](gotolastpage%28__%29.md).

## See Also

### Related Documentation

- [goForward:](goforward%28__%29.md): Navigates forward one step in the page history.

### Determining Valid History Operations

- [canGoBack](cangoback.md): Returns a Boolean value indicating whether the user can navigate to the previous page in the page history.
- [canGoToFirstPage](cangotofirstpage.md): Returns a Boolean value indicating whether the user can navigate to the first page of the document.
- [canGoToLastPage](cangotolastpage.md): Returns a Boolean value indicating whether the user can navigate to the last page of the document.
- [canGoToNextPage](cangotonextpage.md): Returns a Boolean value indicating whether the user can navigate to the next page of the document.
- [canGoToPreviousPage](cangotopreviouspage.md): Returns a Boolean value indicating whether the user can navigate to the previous page of the document.
