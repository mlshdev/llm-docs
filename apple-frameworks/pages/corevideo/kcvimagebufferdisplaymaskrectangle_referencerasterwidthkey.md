> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvimagebufferdisplaymaskrectangle_referencerasterwidthkey](https://developer.apple.com/documentation/corevideo/kcvimagebufferdisplaymaskrectangle_referencerasterwidthkey)

# kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies the width in pixels of the 2D coordinate system to define the rectangle.

## Declaration

```swift
let kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey: CFString
```

<a id="Discussion"></a>

## Discussion

The `0,0` origin is the top-left corner. The raster width value is a [CFNumber](../corefoundation/cfnumber.md) of an unsigned 16-bit integer. The value usually matches the width of the video or the output device.

## See Also

### Constants

- [kCVImageBufferDisplayMaskRectangle_LeftEdgePointsKey](kcvimagebufferdisplaymaskrectangle_leftedgepointskey.md): Specifies inset points on the left vertical edge of the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RectangleHeightKey](kcvimagebufferdisplaymaskrectangle_rectangleheightkey.md): Specifies the height of the rectangle starting at the rectangle’s top offset toward the rectangle’s bottom edge.
- [kCVImageBufferDisplayMaskRectangle_RectangleLeftKey](kcvimagebufferdisplaymaskrectangle_rectangleleftkey.md): Specifies the horizontal pixel offset of the rectangle from the left of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleTopKey](kcvimagebufferdisplaymaskrectangle_rectangletopkey.md): Specifies the vertical pixel offset of the rectangle from the top of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleWidthKey](kcvimagebufferdisplaymaskrectangle_rectanglewidthkey.md): Specifies the width of the rectangle starting at the rectangle’s left offset toward the rectangle’s right edge.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterHeightKey](kcvimagebufferdisplaymaskrectangle_referencerasterheightkey.md): Specifies the height in pixels of the 2D coordinate system to define the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey](kcvimagebufferdisplaymaskrectangle_rightedgepointskey.md): Specifies inset points on the right vertical edge of the rectangle.

# kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies the width in pixels of the 2D coordinate system to define the rectangle.

## Declaration

```objectivec
extern CFStringRef const kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey;
```

<a id="Discussion"></a>

## Discussion

The `0,0` origin is the top-left corner. The raster width value is a [CFNumberRef](../corefoundation/cfnumber.md) of an unsigned 16-bit integer. The value usually matches the width of the video or the output device.

## See Also

### Constants

- [kCVImageBufferDisplayMaskRectangle_LeftEdgePointsKey](kcvimagebufferdisplaymaskrectangle_leftedgepointskey.md): Specifies inset points on the left vertical edge of the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RectangleHeightKey](kcvimagebufferdisplaymaskrectangle_rectangleheightkey.md): Specifies the height of the rectangle starting at the rectangle’s top offset toward the rectangle’s bottom edge.
- [kCVImageBufferDisplayMaskRectangle_RectangleLeftKey](kcvimagebufferdisplaymaskrectangle_rectangleleftkey.md): Specifies the horizontal pixel offset of the rectangle from the left of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleTopKey](kcvimagebufferdisplaymaskrectangle_rectangletopkey.md): Specifies the vertical pixel offset of the rectangle from the top of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleWidthKey](kcvimagebufferdisplaymaskrectangle_rectanglewidthkey.md): Specifies the width of the rectangle starting at the rectangle’s left offset toward the rectangle’s right edge.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterHeightKey](kcvimagebufferdisplaymaskrectangle_referencerasterheightkey.md): Specifies the height in pixels of the 2D coordinate system to define the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey](kcvimagebufferdisplaymaskrectangle_rightedgepointskey.md): Specifies inset points on the right vertical edge of the rectangle.
