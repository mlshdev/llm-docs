> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationmarkup/setquadrilateralpoints(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotationmarkup/setquadrilateralpoints(_:))

# setQuadrilateralPoints(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the array of quadrilateral points defining the bounds of the markup.

## Declaration

```swift
func setQuadrilateralPoints(_ points: [Any]!)
```

<a id="Discussion"></a>

## Discussion

The points defined by each quadrilateral array should encompass a word or a contiguous group of words. The quadrilateral points are ordered counterclockwise, with the first point closest to the origin in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Markup Boundaries

- [quadrilateralPoints()](quadrilateralpoints%28%29.md): Deprecated. Gets the array of quadrilateral points defining the bounds of the markup.

# setQuadrilateralPoints: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the array of quadrilateral points defining the bounds of the markup.

## Declaration

```objectivec
- (void) setQuadrilateralPoints:(NSArray *) points;
```

<a id="Discussion"></a>

## Discussion

The points defined by each quadrilateral array should encompass a word or a contiguous group of words. The quadrilateral points are ordered counterclockwise, with the first point closest to the origin in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Markup Boundaries

- [quadrilateralPoints](quadrilateralpoints%28%29.md): Deprecated. Gets the array of quadrilateral points defining the bounds of the markup.
