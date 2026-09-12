> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/goforward(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/goforward(_:))

# goForward(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Navigates forward one step in the page history.

## Declaration

```swift
@IBAction func goForward(_ sender: Any?)
```

<a id="Discussion"></a>

## Discussion

The page history gets built as your application calls navigation methods such as [go(to:)](go%28to_%29-5lh5d.md) and [goToLastPage(\_:)](gotolastpage%28__%29.md).

## See Also

### Related Documentation

- [canGoForward](cangoforward.md): Returns a Boolean value indicating whether the user can navigate to the next page in the page history.

### Navigating History for a Document

- [goBack(\_:)](goback%28__%29.md): Navigates back one step in the page history.
- [goToFirstPage(\_:)](gotofirstpage%28__%29.md): Navigates to the first page of the document.
- [goToLastPage(\_:)](gotolastpage%28__%29.md): Navigates to the last page of the document.
- [goToNextPage(\_:)](gotonextpage%28__%29.md): Navigates to the next page of the document.
- [goToPreviousPage(\_:)](gotopreviouspage%28__%29.md): Navigates to the previous page of the document.

# goForward: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Navigates forward one step in the page history.

## Declaration

```objectivec
- (void) goForward:(id) sender;
```

<a id="Discussion"></a>

## Discussion

The page history gets built as your application calls navigation methods such as [goToDestination:](go%28to_%29-5lh5d.md) and [goToLastPage:](gotolastpage%28__%29.md).

## See Also

### Related Documentation

- [canGoForward](cangoforward.md): Returns a Boolean value indicating whether the user can navigate to the next page in the page history.

### Navigating History for a Document

- [goBack:](goback%28__%29.md): Navigates back one step in the page history.
- [goToFirstPage:](gotofirstpage%28__%29.md): Navigates to the first page of the document.
- [goToLastPage:](gotolastpage%28__%29.md): Navigates to the last page of the document.
- [goToNextPage:](gotonextpage%28__%29.md): Navigates to the next page of the document.
- [goToPreviousPage:](gotopreviouspage%28__%29.md): Navigates to the previous page of the document.
