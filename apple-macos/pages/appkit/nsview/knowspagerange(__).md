> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/knowspagerange(_:)](https://developer.apple.com/documentation/appkit/nsview/knowspagerange(_:))

# knowsPageRange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the view handles page boundaries.

## Declaration

```swift
func knowsPageRange(_ range: NSRangePointer) -> Bool
```

## Parameters

- `range`: On return, holds the page range if [true](https://developer.apple.com/documentation/swift/true) is returned directly. Page numbers are one-based—that is pages run from one to *N*.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view handles page boundaries; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Returns [false](https://developer.apple.com/documentation/swift/false) if the view uses the default auto-pagination mechanism. The default implementation returns [false](https://developer.apple.com/documentation/swift/false). Override this method if your class handles page boundaries.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew(\_:left:right:limit:)](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew(\_:top:bottom:limit:)](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [rectForPage(\_:)](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect(\_:)](locationofprintrect%28__%29.md): Invoked by [printView(\_:)](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

# knowsPageRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the view handles page boundaries.

## Declaration

```objectivec
- (BOOL) knowsPageRange:(NSRangePointer) range;
```

## Parameters

- `range`: On return, holds the page range if [true](https://developer.apple.com/documentation/swift/true) is returned directly. Page numbers are one-based—that is pages run from one to *N*.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view handles page boundaries; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Returns [false](https://developer.apple.com/documentation/swift/false) if the view uses the default auto-pagination mechanism. The default implementation returns [false](https://developer.apple.com/documentation/swift/false). Override this method if your class handles page boundaries.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew:left:right:limit:](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew:top:bottom:limit:](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [rectForPage:](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect:](locationofprintrect%28__%29.md): Invoked by [print:](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.
