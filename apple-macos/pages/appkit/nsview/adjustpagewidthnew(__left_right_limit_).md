> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/adjustpagewidthnew(_:left:right:limit:)](https://developer.apple.com/documentation/appkit/nsview/adjustpagewidthnew(_:left:right:limit:))

# adjustPageWidthNew(\_:left:right:limit:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to adjust page width during automatic pagination.

## Declaration

```swift
func adjustPageWidthNew(_ newRight: UnsafeMutablePointer<CGFloat>, left oldLeft: CGFloat, right oldRight: CGFloat, limit rightLimit: CGFloat)
```

## Parameters

- `newRight`: Returns by indirection a new [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value for the right edge of the pending page rectangle in the view’s coordinate system.
- `oldLeft`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the left edge of the pending page rectangle in the view’s coordinate system.
- `oldRight`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the right edge of the pending page rectangle in the view’s coordinate system.
- `rightLimit`: The leftmost [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value `newRight` can be set to, as calculated using the value of the [widthAdjustLimit](widthadjustlimit.md) property.

<a id="Discussion"></a>

## Discussion

This method is invoked by [printView(\_:)](printview%28__%29.md). The view can pull in the right edge and return the new value in `newRight`, allowing it to prevent items such as small images or text columns from being divided across pages. If `rightLimit` is exceeded, the pagination mechanism simply uses `rightLimit` for the right edge.

The default implementation of this method propagates the message to its subviews, allowing nested views to adjust page width for their drawing as well. An [NSButton](../nsbutton.md) object or other small view, for example, will nudge the right edge out if necessary to prevent itself from being cut in two (thereby pushing it onto an adjacent page). Subclasses should invoke `super`’s implementation, if desired, after first making their own adjustments.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageHeightNew(\_:top:bottom:limit:)](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange(\_:)](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage(\_:)](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect(\_:)](locationofprintrect%28__%29.md): Invoked by [printView(\_:)](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

# adjustPageWidthNew:left:right:limit: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to adjust page width during automatic pagination.

## Declaration

```objectivec
- (void) adjustPageWidthNew:(CGFloat *) newRight left:(CGFloat) oldLeft right:(CGFloat) oldRight limit:(CGFloat) rightLimit;
```

## Parameters

- `newRight`: Returns by indirection a new [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value for the right edge of the pending page rectangle in the view’s coordinate system.
- `oldLeft`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the left edge of the pending page rectangle in the view’s coordinate system.
- `oldRight`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the right edge of the pending page rectangle in the view’s coordinate system.
- `rightLimit`: The leftmost [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value `newRight` can be set to, as calculated using the value of the [widthAdjustLimit](widthadjustlimit.md) property.

<a id="Discussion"></a>

## Discussion

This method is invoked by [print:](printview%28__%29.md). The view can pull in the right edge and return the new value in `newRight`, allowing it to prevent items such as small images or text columns from being divided across pages. If `rightLimit` is exceeded, the pagination mechanism simply uses `rightLimit` for the right edge.

The default implementation of this method propagates the message to its subviews, allowing nested views to adjust page width for their drawing as well. An [NSButton](../nsbutton.md) object or other small view, for example, will nudge the right edge out if necessary to prevent itself from being cut in two (thereby pushing it onto an adjacent page). Subclasses should invoke `super`’s implementation, if desired, after first making their own adjustments.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageHeightNew:top:bottom:limit:](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange:](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage:](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect:](locationofprintrect%28__%29.md): Invoked by [print:](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.
