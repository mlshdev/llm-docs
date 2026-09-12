> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/draw(with:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/draw(with:))

# draw(with:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Draws the annotation on its associated page.

> Use [draw(with:in:)](draw%28with_in_%29.md) instead.

## Declaration

```swift
func draw(with box: PDFDisplayBox)
```

## Parameters

- `box`: The bounding box to draw the annotation in.

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

<a id="Discussion"></a>

## Discussion

The annotation is drawn relative to the origin of `box` in page-space coordinates.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [bounds(for:)](../pdfpage/bounds%28for_%29.md): Returns the bounds for the specified PDF display box.

### Deprecated Methods

- [init(bounds:)](init%28bounds_%29.md): Deprecated. Creates a PDF annotation object.
- [init(dictionary:forPage:)](init%28dictionary_forpage_%29.md): Deprecated.
- [removeAllAppearanceStreams()](removeallappearancestreams%28%29.md): Deprecated.

# drawWithBox: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Draws the annotation on its associated page.

> Use [drawWithBox:inContext:](draw%28with_in_%29.md) instead.

## Declaration

```objectivec
- (void) drawWithBox:(PDFDisplayBox) box;
```

## Parameters

- `box`: The bounding box to draw the annotation in.

## Mentioned In

- [Adding Custom Graphics to a PDF](../adding-custom-graphics-to-a-pdf.md)

<a id="Discussion"></a>

## Discussion

The annotation is drawn relative to the origin of `box` in page-space coordinates.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Related Documentation

- [boundsForBox:](../pdfpage/bounds%28for_%29.md): Returns the bounds for the specified PDF display box.

### Deprecated Methods

- [initWithBounds:](init%28bounds_%29.md): Deprecated. Creates a PDF annotation object.
- [removeAllAppearanceStreams](removeallappearancestreams%28%29.md): Deprecated.
