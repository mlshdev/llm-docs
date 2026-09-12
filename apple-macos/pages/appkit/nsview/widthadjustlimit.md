> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/widthadjustlimit](https://developer.apple.com/documentation/appkit/nsview/widthadjustlimit)

# widthAdjustLimit (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.

## Declaration

```swift
var widthAdjustLimit: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a floating point number in the range `0.0` to `1.0`. This fraction is used to calculate the right edge limit for a [adjustPageWidthNew(\_:left:right:limit:)](adjustpagewidthnew%28__left_right_limit_%29.md) message.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [adjustPageWidthNew(\_:left:right:limit:)](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew(\_:top:bottom:limit:)](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange(\_:)](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage(\_:)](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect(\_:)](locationofprintrect%28__%29.md): Invoked by [printView(\_:)](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

# widthAdjustLimit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.

## Declaration

```objectivec
@property (readonly) CGFloat widthAdjustLimit;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a floating point number in the range `0.0` to `1.0`. This fraction is used to calculate the right edge limit for a [adjustPageWidthNew:left:right:limit:](adjustpagewidthnew%28__left_right_limit_%29.md) message.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [adjustPageWidthNew:left:right:limit:](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew:top:bottom:limit:](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange:](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage:](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect:](locationofprintrect%28__%29.md): Invoked by [print:](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.
