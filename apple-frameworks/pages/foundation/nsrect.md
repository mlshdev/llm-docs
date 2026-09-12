> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrect](https://developer.apple.com/documentation/foundation/nsrect)

# NSRect (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A rectangle.

## Declaration

```swift
typealias NSRect = CGRect
```

<a id="Discussion"></a>

## Discussion

When building for 64 bit systems, or building 32 bit like 64 bit, `NSRect` is typedef’d to `CGRect`.

## Topics

### Managing Rectangles

- [NSContainsRect(\_:\_:)](nscontainsrect%28____%29.md): Returns a Boolean value that indicates whether one rectangle completely encloses another.
- [NSDivideRect(\_:\_:\_:\_:\_:)](nsdividerect%28__________%29.md): Divides a rectangle into two new rectangles.
- [NSEqualRects(\_:\_:)](nsequalrects%28____%29.md): Returns a Boolean value that indicates whether the two rectangles are equal.
- [NSIsEmptyRect(\_:)](nsisemptyrect%28__%29.md): Returns a Boolean value that indicates whether a given rectangle is empty.
- [NSHeight(\_:)](nsheight%28__%29.md): Returns the height of a given rectangle.
- [NSInsetRect(\_:\_:\_:)](nsinsetrect%28______%29.md): Insets a rectangle by a specified amount.
- [NSIntegralRect(\_:)](nsintegralrect%28__%29.md): Adjusts the sides of a rectangle to integer values.
- [NSIntegralRectWithOptions(\_:\_:)](nsintegralrectwithoptions%28____%29.md): Adjusts the sides of a rectangle to integral values using the specified options.
- [NSIntersectionRect(\_:\_:)](nsintersectionrect%28____%29.md): Calculates the intersection of two rectangles.
- [NSIntersectsRect(\_:\_:)](nsintersectsrect%28____%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [NSMakeRect(\_:\_:\_:\_:)](nsmakerect%28________%29.md): Creates a new `NSRect` from the specified values.
- [NSMaxX(\_:)](nsmaxx%28__%29.md): Returns the largest x coordinate of a given rectangle.
- [NSMaxY(\_:)](nsmaxy%28__%29.md): Returns the largest y coordinate of a given rectangle.
- [NSMidX(\_:)](nsmidx%28__%29.md): Returns the x coordinate of a given rectangle’s midpoint.
- [NSMidY(\_:)](nsmidy%28__%29.md): Returns the y coordinate of a given rectangle’s midpoint.
- [NSMinX(\_:)](nsminx%28__%29.md): Returns the smallest x coordinate of a given rectangle.
- [NSMinY(\_:)](nsminy%28__%29.md): Returns the smallest y coordinate of a given rectangle.
- [NSMouseInRect(\_:\_:\_:)](nsmouseinrect%28______%29.md): Returns a Boolean value that indicates whether the point is in the specified rectangle.
- [NSOffsetRect(\_:\_:\_:)](nsoffsetrect%28______%29.md): Offsets the rectangle by the specified amount.
- [NSPointInRect(\_:\_:)](nspointinrect%28____%29.md): Returns a Boolean value that indicates whether a given point is in a given rectangle.
- [NSRectFromString(\_:)](nsrectfromstring%28__%29.md): Returns a rectangle from a text-based representation.
- [NSStringFromRect(\_:)](nsstringfromrect%28__%29.md): Returns a string representation of a rectangle.
- [NSRectFromCGRect(\_:)](nsrectfromcgrect%28__%29.md): Returns an `NSRect` typecast from a `CGRect`.
- [NSRectToCGRect(\_:)](nsrecttocgrect%28__%29.md): Returns a `CGRect` typecast from an `NSRect`.
- [NSUnionRect(\_:\_:)](nsunionrect%28____%29.md): Calculates the union of two rectangles.
- [NSWidth(\_:)](nswidth%28__%29.md): Returns the width of the specified rectangle.

### Zero Constant

- [NSZeroRect](nszerorect.md): An `NSRect` structure set to `0` in width and height.

### Related Types

- [NSRectEdge](nsrectedge.md)
- [AlignmentOptions](alignmentoptions.md): Values representing alignment operations.
- [NSRectArray](nsrectarray.md): Type indicating a parameter is array of `NSRect` structures.
- [NSRectPointer](nsrectpointer.md): Type indicating a parameter is a pointer to an `NSRect` structure.

## See Also

### Geometry

- [CGFloat](../corefoundation/cgfloat-swift.struct.md): The basic type for floating-point scalar values in Core Graphics and related frameworks.
- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [AffineTransform](affinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.

# NSRect (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A rectangle.

## Declaration

```objectivec
typedef CGRect NSRect;
```

<a id="Discussion"></a>

## Discussion

When building for 64 bit systems, or building 32 bit like 64 bit, `NSRect` is typedef’d to `CGRect`.

## Topics

### Managing Rectangles

- [NSContainsRect](nscontainsrect%28____%29.md): Returns a Boolean value that indicates whether one rectangle completely encloses another.
- [NSDivideRect](nsdividerect%28__________%29.md): Divides a rectangle into two new rectangles.
- [NSEqualRects](nsequalrects%28____%29.md): Returns a Boolean value that indicates whether the two rectangles are equal.
- [NSIsEmptyRect](nsisemptyrect%28__%29.md): Returns a Boolean value that indicates whether a given rectangle is empty.
- [NSHeight](nsheight%28__%29.md): Returns the height of a given rectangle.
- [NSInsetRect](nsinsetrect%28______%29.md): Insets a rectangle by a specified amount.
- [NSIntegralRect](nsintegralrect%28__%29.md): Adjusts the sides of a rectangle to integer values.
- [NSIntegralRectWithOptions](nsintegralrectwithoptions%28____%29.md): Adjusts the sides of a rectangle to integral values using the specified options.
- [NSIntersectionRect](nsintersectionrect%28____%29.md): Calculates the intersection of two rectangles.
- [NSIntersectsRect](nsintersectsrect%28____%29.md): Returns a Boolean value that indicates whether two rectangles intersect.
- [NSMakeRect](nsmakerect%28________%29.md): Creates a new `NSRect` from the specified values.
- [NSMaxX](nsmaxx%28__%29.md): Returns the largest x coordinate of a given rectangle.
- [NSMaxY](nsmaxy%28__%29.md): Returns the largest y coordinate of a given rectangle.
- [NSMidX](nsmidx%28__%29.md): Returns the x coordinate of a given rectangle’s midpoint.
- [NSMidY](nsmidy%28__%29.md): Returns the y coordinate of a given rectangle’s midpoint.
- [NSMinX](nsminx%28__%29.md): Returns the smallest x coordinate of a given rectangle.
- [NSMinY](nsminy%28__%29.md): Returns the smallest y coordinate of a given rectangle.
- [NSMouseInRect](nsmouseinrect%28______%29.md): Returns a Boolean value that indicates whether the point is in the specified rectangle.
- [NSOffsetRect](nsoffsetrect%28______%29.md): Offsets the rectangle by the specified amount.
- [NSPointInRect](nspointinrect%28____%29.md): Returns a Boolean value that indicates whether a given point is in a given rectangle.
- [NSRectFromString](nsrectfromstring%28__%29.md): Returns a rectangle from a text-based representation.
- [NSStringFromRect](nsstringfromrect%28__%29.md): Returns a string representation of a rectangle.
- [NSRectFromCGRect](nsrectfromcgrect%28__%29.md): Returns an `NSRect` typecast from a `CGRect`.
- [NSRectToCGRect](nsrecttocgrect%28__%29.md): Returns a `CGRect` typecast from an `NSRect`.
- [NSUnionRect](nsunionrect%28____%29.md): Calculates the union of two rectangles.
- [NSWidth](nswidth%28__%29.md): Returns the width of the specified rectangle.

### Zero Constant

- [NSZeroRect](nszerorect.md): An `NSRect` structure set to `0` in width and height.

### Related Types

- [NSRectEdge](nsrectedge.md)
- [NSAlignmentOptions](alignmentoptions.md): Values representing alignment operations.
- [NSRectArray](nsrectarray.md): Type indicating a parameter is array of `NSRect` structures.
- [NSRectPointer](nsrectpointer.md): Type indicating a parameter is a pointer to an `NSRect` structure.

## See Also

### Geometry

- [NSPoint](nspoint.md): A point in a Cartesian coordinate system.
- [NSSize](nssize.md): A two-dimensional size.
- [NSAffineTransform](nsaffinetransform.md): A graphics coordinate transformation.
- [NSEdgeInsets](nsedgeinsets.md): A description of the distance between the edges of two rectangles.
