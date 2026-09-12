> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationmarkup/quadrilateralpoints()](https://developer.apple.com/documentation/pdfkit/pdfannotationmarkup/quadrilateralpoints())

# quadrilateralPoints() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Gets the array of quadrilateral points defining the bounds of the markup.

## Declaration

```swift
func quadrilateralPoints() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

Each quadrilateral encompasses a word or a contiguous group of words. The quadrilateral points are ordered counterclockwise, with the first point closest to the origin in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Markup Boundaries

- [setQuadrilateralPoints(\_:)](setquadrilateralpoints%28__%29.md): Deprecated. Sets the array of quadrilateral points defining the bounds of the markup.

# quadrilateralPoints (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Gets the array of quadrilateral points defining the bounds of the markup.

## Declaration

```objectivec
- (NSArray *) quadrilateralPoints;
```

<a id="Discussion"></a>

## Discussion

Each quadrilateral encompasses a word or a contiguous group of words. The quadrilateral points are ordered counterclockwise, with the first point closest to the origin in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Working with Markup Boundaries

- [setQuadrilateralPoints:](setquadrilateralpoints%28__%29.md): Deprecated. Sets the array of quadrilateral points defining the bounds of the markup.
