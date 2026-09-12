> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintpagerenderer/numberofpages](https://developer.apple.com/documentation/uikit/uiprintpagerenderer/numberofpages)

# numberOfPages (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of pages to render.

## Declaration

```swift
var numberOfPages: Int { get }
```

<a id="Discussion"></a>

## Discussion

By default, returns the number of pages as calculated by UIKit if the receiver uses print formatters. If the page renderer uses no print formatters, the returned value is zero. If your page renderer is doing any custom drawing except for headers and footers, it must override this method.

This method is called at any point when UIKit needs the number of pages. If an application requests the page range control, it’s called early on. It can also be called when the selected printer or duplex mode changes. Otherwise, it is called when the print job starts.

If print formatters aren’t used to compute the page count, the page renderer can override this method to calculate and return the number of pages. The computation can take into account the current [printableRect](printablerect.md) value for each page, any implicit margins, and the content to be drawn when laid out within these boundaries.

## See Also

### Related Documentation

- [pageCount](../uiprintformatter/pagecount.md): The number of pages to print.

### Accessing information about the print job

- [paperRect](paperrect.md): The size of the paper for printing.
- [printableRect](printablerect.md): The area in which printing can occur.

# numberOfPages (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of pages to render.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfPages;
```

<a id="Discussion"></a>

## Discussion

By default, returns the number of pages as calculated by UIKit if the receiver uses print formatters. If the page renderer uses no print formatters, the returned value is zero. If your page renderer is doing any custom drawing except for headers and footers, it must override this method.

This method is called at any point when UIKit needs the number of pages. If an application requests the page range control, it’s called early on. It can also be called when the selected printer or duplex mode changes. Otherwise, it is called when the print job starts.

If print formatters aren’t used to compute the page count, the page renderer can override this method to calculate and return the number of pages. The computation can take into account the current [printableRect](printablerect.md) value for each page, any implicit margins, and the content to be drawn when laid out within these boundaries.

## See Also

### Related Documentation

- [pageCount](../uiprintformatter/pagecount.md): The number of pages to print.

### Accessing information about the print job

- [paperRect](paperrect.md): The size of the paper for printing.
- [printableRect](printablerect.md): The area in which printing can occur.
