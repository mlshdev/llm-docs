> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/rectforpage(_:)](https://developer.apple.com/documentation/appkit/nsview/rectforpage(_:))

# rectForPage(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to determine the portion of the view to be printed for the specified page number.

## Declaration

```swift
func rectForPage(_ page: Int) -> NSRect
```

## Parameters

- `page`: An integer indicating a page number. Page numbers are one-based—that is pages run from one to *N*.

<a id="return-value"></a>

## Return Value

A rectangle defining the region of the view to be printed for `pageNumber`. This method returns `NSZeroRect` if `pageNumber` is outside the view’s bounds.

<a id="Discussion"></a>

## Discussion

If the view responded [true](https://developer.apple.com/documentation/swift/true) to an earlier [knowsPageRange(\_:)](knowspagerange%28__%29.md) message, this method is invoked for each page it specified in the out parameters of that message. The view is later made to display this rectangle in order to generate the image for this page.

If an `NSView` object responds [false](https://developer.apple.com/documentation/swift/false) to [knowsPageRange(\_:)](knowspagerange%28__%29.md), this method isn’t invoked by the printing mechanism.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew(\_:left:right:limit:)](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew(\_:top:bottom:limit:)](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange(\_:)](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [locationOfPrintRect(\_:)](locationofprintrect%28__%29.md): Invoked by [printView(\_:)](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

# rectForPage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implemented by subclasses to determine the portion of the view to be printed for the specified page number.

## Declaration

```objectivec
- (NSRect) rectForPage:(NSInteger) page;
```

## Parameters

- `page`: An integer indicating a page number. Page numbers are one-based—that is pages run from one to *N*.

<a id="return-value"></a>

## Return Value

A rectangle defining the region of the view to be printed for `pageNumber`. This method returns `NSZeroRect` if `pageNumber` is outside the view’s bounds.

<a id="Discussion"></a>

## Discussion

If the view responded [true](https://developer.apple.com/documentation/swift/true) to an earlier [knowsPageRange:](knowspagerange%28__%29.md) message, this method is invoked for each page it specified in the out parameters of that message. The view is later made to display this rectangle in order to generate the image for this page.

If an `NSView` object responds [false](https://developer.apple.com/documentation/swift/false) to [knowsPageRange:](knowspagerange%28__%29.md), this method isn’t invoked by the printing mechanism.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew:left:right:limit:](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew:top:bottom:limit:](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange:](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [locationOfPrintRect:](locationofprintrect%28__%29.md): Invoked by [print:](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.
