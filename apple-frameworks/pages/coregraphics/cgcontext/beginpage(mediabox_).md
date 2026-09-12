> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/beginpage(mediabox:)](https://developer.apple.com/documentation/coregraphics/cgcontext/beginpage(mediabox:))

# beginPage(mediaBox:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Starts a new page in a page-based graphics context.

## Declaration

```swift
func beginPage(mediaBox: UnsafePointer<CGRect>?)
```

## Parameters

- `mediaBox`: A rectangle defining the bounds of the new page, expressed in units of the default user space, or `NULL`. These bounds supersede any supplied for the media box when you created the context. If you pass `NULL`, Core Graphics uses the rectangle you supplied for the media box when the graphics context was created.

<a id="Discussion"></a>

## Discussion

When using a graphics context that supports multiple pages, you should call this function together with [endPage()](endpage%28%29.md) to delineate the page boundaries in the output. In other words, each page should be bracketed by calls to `CGContextBeginPage` and `CGContextEndPage`. Core Graphics ignores all drawing operations performed outside a page boundary in a page-based context.

## See Also

### Managing a Page-Based Graphics Context

- [endPage()](endpage%28%29.md): Ends the current page in a page-based graphics context.

# CGContextBeginPage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Starts a new page in a page-based graphics context.

## Declaration

```objectivec
extern void CGContextBeginPage(CGContextRef c, const CGRect *mediaBox);
```

## Parameters

- `c`: A page-based graphics context such as a PDF context. If you specify a context that does not support multiple pages, this function does nothing.
- `mediaBox`: A rectangle defining the bounds of the new page, expressed in units of the default user space, or `NULL`. These bounds supersede any supplied for the media box when you created the context. If you pass `NULL`, Core Graphics uses the rectangle you supplied for the media box when the graphics context was created.

<a id="Discussion"></a>

## Discussion

When using a graphics context that supports multiple pages, you should call this function together with [CGContextEndPage](endpage%28%29.md) to delineate the page boundaries in the output. In other words, each page should be bracketed by calls to `CGContextBeginPage` and `CGContextEndPage`. Core Graphics ignores all drawing operations performed outside a page boundary in a page-based context.

## See Also

### Managing a Page-Based Graphics Context

- [CGContextEndPage](endpage%28%29.md): Ends the current page in a page-based graphics context.
