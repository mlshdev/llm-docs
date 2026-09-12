> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/locationofprintrect(_:)](https://developer.apple.com/documentation/appkit/nsview/locationofprintrect(_:))

# locationOfPrintRect(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked by [printView(\_:)](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

## Declaration

```swift
func locationOfPrintRect(_ rect: NSRect) -> NSPoint
```

## Parameters

- `rect`: A rectangle defining a region of the view; it is expressed in the default coordinate system of the page.

<a id="return-value"></a>

## Return Value

A point to be used for setting the origin for `aRect`, whose size the view can examine in order to properly place it. It is expressed in the default coordinate system of the page.

<a id="Discussion"></a>

## Discussion

The default implementation places `aRect` according to the status of the [NSPrintInfo](../nsprintinfo.md) object for the print job. By default it places the image in the upper-left corner of the page, but if the `NSPrintInfo` methods [isHorizontallyCentered](../nsprintinfo/ishorizontallycentered.md) or [isVerticallyCentered](../nsprintinfo/isverticallycentered.md) return [true](https://developer.apple.com/documentation/swift/true), it centers a single-page image along the appropriate axis. A multiple-page document, however, is always placed so the divided pieces can be assembled at their edges.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew(\_:left:right:limit:)](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew(\_:top:bottom:limit:)](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange(\_:)](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage(\_:)](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.

# locationOfPrintRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked by [print:](printview%28__%29.md) to determine the location of the region of the view being printed on the physical page.

## Declaration

```objectivec
- (NSPoint) locationOfPrintRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle defining a region of the view; it is expressed in the default coordinate system of the page.

<a id="return-value"></a>

## Return Value

A point to be used for setting the origin for `aRect`, whose size the view can examine in order to properly place it. It is expressed in the default coordinate system of the page.

<a id="Discussion"></a>

## Discussion

The default implementation places `aRect` according to the status of the [NSPrintInfo](../nsprintinfo.md) object for the print job. By default it places the image in the upper-left corner of the page, but if the `NSPrintInfo` methods [horizontallyCentered](../nsprintinfo/ishorizontallycentered.md) or [verticallyCentered](../nsprintinfo/isverticallycentered.md) return [true](https://developer.apple.com/documentation/swift/true), it centers a single-page image along the appropriate axis. A multiple-page document, however, is always placed so the divided pieces can be assembled at their edges.

## See Also

### Handling Pagination

- [heightAdjustLimit](heightadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as lines of text from being divided across pages.
- [widthAdjustLimit](widthadjustlimit.md): The fraction of the page that can be pushed onto the next page during automatic pagination to prevent items such as small images or text columns from being divided across pages.
- [adjustPageWidthNew:left:right:limit:](adjustpagewidthnew%28__left_right_limit_%29.md): Overridden by subclasses to adjust page width during automatic pagination.
- [adjustPageHeightNew:top:bottom:limit:](adjustpageheightnew%28__top_bottom_limit_%29.md): Overridden by subclasses to adjust page height during automatic pagination.
- [knowsPageRange:](knowspagerange%28__%29.md): Returns a Boolean value that indicates whether the view handles page boundaries.
- [rectForPage:](rectforpage%28__%29.md): Implemented by subclasses to determine the portion of the view to be printed for the specified page number.
