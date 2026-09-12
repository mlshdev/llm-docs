> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcontext/endpage()](https://developer.apple.com/documentation/coregraphics/cgcontext/endpage())

# endPage() (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Ends the current page in a page-based graphics context.

## Declaration

```swift
func endPage()
```

<a id="Discussion"></a>

## Discussion

When using a graphics context that supports multiple pages, you should call this function to terminate drawing in the current page.

## See Also

### Managing a Page-Based Graphics Context

- [beginPage(mediaBox:)](beginpage%28mediabox_%29.md): Starts a new page in a page-based graphics context.

# CGContextEndPage (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Ends the current page in a page-based graphics context.

## Declaration

```objectivec
extern void CGContextEndPage(CGContextRef c);
```

## Parameters

- `c`: A page-based graphics context.

<a id="Discussion"></a>

## Discussion

When using a graphics context that supports multiple pages, you should call this function to terminate drawing in the current page.

## See Also

### Managing a Page-Based Graphics Context

- [CGContextBeginPage](beginpage%28mediabox_%29.md): Starts a new page in a page-based graphics context.
