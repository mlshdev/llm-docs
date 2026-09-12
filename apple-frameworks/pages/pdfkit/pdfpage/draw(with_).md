> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/draw(with:)](https://developer.apple.com/documentation/pdfkit/pdfpage/draw(with:))

# draw(with:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Draws the page within the specified box.

## Declaration

```swift
func draw(with box: PDFDisplayBox)
```

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

<a id="Discussion"></a>

## Discussion

This method takes into account the page rotation and draws clipped to the specified box. If the page is set to display annotations, this method also draws them. This method does not clear the background. To clear the background before drawing, use [NSRectFill](https://developer.apple.com/documentation/appkit/nsrectfill) with `NSColor` set (typically) to white.

## See Also

### Related Documentation

- [displaysAnnotations](displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.

### Rendering Pages

- [transformContext(for:)](transformcontext%28for_%29.md): Deprecated. Transforms the current context, given the specified box.

# drawWithBox: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Draws the page within the specified box.

## Declaration

```objectivec
- (void) drawWithBox:(PDFDisplayBox) box;
```

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

<a id="Discussion"></a>

## Discussion

This method takes into account the page rotation and draws clipped to the specified box. If the page is set to display annotations, this method also draws them. This method does not clear the background. To clear the background before drawing, use [NSRectFill](https://developer.apple.com/documentation/appkit/nsrectfill) with `NSColor` set (typically) to white.

## See Also

### Related Documentation

- [displaysAnnotations](displaysannotations.md): Returns a Boolean value indicating whether annotations are displayed for the page.

### Rendering Pages

- [transformContextForBox:](transformcontext%28for_%29.md): Deprecated. Transforms the current context, given the specified box.
