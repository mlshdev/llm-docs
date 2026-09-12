> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/drawpagepost(_:to:)](https://developer.apple.com/documentation/pdfkit/pdfview/drawpagepost(_:to:))

# drawPagePost(\_:to:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Perform post-page rendering for a page rendered to a context.

## Declaration

```swift
func drawPagePost(_ page: PDFPage, to context: CGContext)
```

## See Also

### Drawing in a PDF Page

- [draw(\_:to:)](draw%28__to_%29.md): Draw and render a visible page to a context.

# drawPagePost:toContext: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+

Perform post-page rendering for a page rendered to a context.

## Declaration

```objectivec
- (void) drawPagePost:(PDFPage *) page toContext:(CGContextRef) context;
```

## See Also

### Drawing in a PDF Page

- [drawPage:toContext:](draw%28__to_%29.md): Draw and render a visible page to a context.
