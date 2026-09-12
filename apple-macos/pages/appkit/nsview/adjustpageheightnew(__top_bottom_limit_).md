> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/adjustpageheightnew(_:top:bottom:limit:)](https://developer.apple.com/documentation/appkit/nsview/adjustpageheightnew(_:top:bottom:limit:))

# adjustPageHeightNew(\_:top:bottom:limit:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to adjust page height during automatic pagination.

## Declaration

```swift
func adjustPageHeightNew(_ newBottom: UnsafeMutablePointer<CGFloat>, top oldTop: CGFloat, bottom oldBottom: CGFloat, limit bottomLimit: CGFloat)
```

## Parameters

- `newBottom`: Returns by indirection a new [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value for the bottom edge of the pending page rectangle in the view’s coordinate system.
- `oldTop`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the top edge of the pending page rectangle in the view’s coordinate system.
- `oldBottom`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the bottom edge of the pending page rectangle in the view’s coordinate system.
- `bottomLimit`: The topmost [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value `newBottom` can be set to, as calculated using the value of the [heightAdjustLimit](heightadjustlimit.md) property.

<a id="Discussion"></a>

## Discussion

This method is invoked by [printView(\_:)](printview%28__%29.md). The view can raise the bottom edge and return the new value in `newBottom`, allowing it to prevent items such as lines of text from being divided across pages. If `bottomLimit` is exceeded, the pagination mechanism simply uses `bottomLimit` for the bottom edge.

The default implementation of this method propagates the message to its subviews, allowing nested views to adjust page height for their drawing as well. An [NSButton](../nsbutton.md) object or other small view, for example, will nudge the bottom edge up if necessary to prevent itself from being cut in two (thereby pushing it onto an adjacent page). Subclasses should invoke `super`’s implementation, if desired, after first making their own adjustments.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew(\_:left:right:limit:)](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [knowsPageRange(\_:)](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage(\_:)](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect(\_:)](locationofprintrect%28__%29.md): Invoked by [printView(\_:)](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

# adjustPageHeightNew:top:bottom:limit: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to adjust page height during automatic pagination.

## Declaration

```objectivec
- (void) adjustPageHeightNew:(CGFloat *) newBottom top:(CGFloat) oldTop bottom:(CGFloat) oldBottom limit:(CGFloat) bottomLimit;
```

## Parameters

- `newBottom`: Returns by indirection a new [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value for the bottom edge of the pending page rectangle in the view’s coordinate system.
- `oldTop`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the top edge of the pending page rectangle in the view’s coordinate system.
- `oldBottom`: A [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value that sets the bottom edge of the pending page rectangle in the view’s coordinate system.
- `bottomLimit`: The topmost [CGFloat](https://developer.apple.com/documentation/corefoundation/cgfloat-swift.struct) value `newBottom` can be set to, as calculated using the value of the [heightAdjustLimit](heightadjustlimit.md) property.

<a id="Discussion"></a>

## Discussion

This method is invoked by [print:](printview%28__%29.md). The view can raise the bottom edge and return the new value in `newBottom`, allowing it to prevent items such as lines of text from being divided across pages. If `bottomLimit` is exceeded, the pagination mechanism simply uses `bottomLimit` for the bottom edge.

The default implementation of this method propagates the message to its subviews, allowing nested views to adjust page height for their drawing as well. An [NSButton](../nsbutton.md) object or other small view, for example, will nudge the bottom edge up if necessary to prevent itself from being cut in two (thereby pushing it onto an adjacent page). Subclasses should invoke `super`’s implementation, if desired, after first making their own adjustments.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew:left:right:limit:](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [knowsPageRange:](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage:](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
- [locationOfPrintRect:](locationofprintrect%28__%29.md): Invoked by [print:](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.
