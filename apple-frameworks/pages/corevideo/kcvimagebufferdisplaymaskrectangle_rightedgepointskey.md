> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvimagebufferdisplaymaskrectangle_rightedgepointskey](https://developer.apple.com/documentation/corevideo/kcvimagebufferdisplaymaskrectangle_rightedgepointskey)

# kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies inset points on the right vertical edge of the rectangle.

## Declaration

```swift
let kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey: CFString
```

<a id="Discussion"></a>

## Discussion

The points are [CFArray](../corefoundation/cfarray.md) of unsigned 16-bit integer [CFNumber](../corefoundation/cfnumber.md) pairs alternating between inset X and inset Y. Inset X is an unsigned offset from the right edge (`0`) towards the left edge (width). Inset Y is an unsigned offset from the top edge (`0`) towards the bottom edge (height).

## See Also

### Constants

- [kCVImageBufferDisplayMaskRectangle_LeftEdgePointsKey](kcvimagebufferdisplaymaskrectangle_leftedgepointskey.md): Specifies inset points on the left vertical edge of the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RectangleHeightKey](kcvimagebufferdisplaymaskrectangle_rectangleheightkey.md): Specifies the height of the rectangle starting at the rectangle’s top offset toward the rectangle’s bottom edge.
- [kCVImageBufferDisplayMaskRectangle_RectangleLeftKey](kcvimagebufferdisplaymaskrectangle_rectangleleftkey.md): Specifies the horizontal pixel offset of the rectangle from the left of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleTopKey](kcvimagebufferdisplaymaskrectangle_rectangletopkey.md): Specifies the vertical pixel offset of the rectangle from the top of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleWidthKey](kcvimagebufferdisplaymaskrectangle_rectanglewidthkey.md): Specifies the width of the rectangle starting at the rectangle’s left offset toward the rectangle’s right edge.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterHeightKey](kcvimagebufferdisplaymaskrectangle_referencerasterheightkey.md): Specifies the height in pixels of the 2D coordinate system to define the rectangle.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey](kcvimagebufferdisplaymaskrectangle_referencerasterwidthkey.md): Specifies the width in pixels of the 2D coordinate system to define the rectangle.

# kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies inset points on the right vertical edge of the rectangle.

## Declaration

```objectivec
extern CFStringRef const kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey;
```

<a id="Discussion"></a>

## Discussion

The points are [CFArrayRef](../corefoundation/cfarray.md) of unsigned 16-bit integer [CFNumberRef](../corefoundation/cfnumber.md) pairs alternating between inset X and inset Y. Inset X is an unsigned offset from the right edge (`0`) towards the left edge (width). Inset Y is an unsigned offset from the top edge (`0`) towards the bottom edge (height).

## See Also

### Constants

- [kCVImageBufferDisplayMaskRectangle_LeftEdgePointsKey](kcvimagebufferdisplaymaskrectangle_leftedgepointskey.md): Specifies inset points on the left vertical edge of the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RectangleHeightKey](kcvimagebufferdisplaymaskrectangle_rectangleheightkey.md): Specifies the height of the rectangle starting at the rectangle’s top offset toward the rectangle’s bottom edge.
- [kCVImageBufferDisplayMaskRectangle_RectangleLeftKey](kcvimagebufferdisplaymaskrectangle_rectangleleftkey.md): Specifies the horizontal pixel offset of the rectangle from the left of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleTopKey](kcvimagebufferdisplaymaskrectangle_rectangletopkey.md): Specifies the vertical pixel offset of the rectangle from the top of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleWidthKey](kcvimagebufferdisplaymaskrectangle_rectanglewidthkey.md): Specifies the width of the rectangle starting at the rectangle’s left offset toward the rectangle’s right edge.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterHeightKey](kcvimagebufferdisplaymaskrectangle_referencerasterheightkey.md): Specifies the height in pixels of the 2D coordinate system to define the rectangle.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey](kcvimagebufferdisplaymaskrectangle_referencerasterwidthkey.md): Specifies the width in pixels of the 2D coordinate system to define the rectangle.
