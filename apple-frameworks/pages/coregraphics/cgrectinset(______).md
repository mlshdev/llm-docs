> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectinset(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectinset(_:_:_:))

# CGRectInset(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.

## Declaration

```swift
func CGRectInset(_ rect: CGRect, _ dx: CGFloat, _ dy: CGFloat) -> CGRect
```

## Parameters

- `rect`: The source [CGRect](../corefoundation/cgrect.md) structure.
- `dx`: The x-coordinate value to use for adjusting the source rectangle. To create an inset rectangle, specify a positive value. To create a larger, encompassing rectangle, specify a negative value.
- `dy`: The y-coordinate value to use for adjusting the source rectangle. To create an inset rectangle, specify a positive value. To create a larger, encompassing rectangle, specify a negative value.

<a id="return-value"></a>

## Return Value

A rectangle. The origin value is offset in the x-axis by the distance specified by the `dx` parameter and in the y-axis by the distance specified by the `dy` parameter, and its size adjusted by `(2*dx,2*dy)`, relative to the source rectangle. If `dx` and `dy` are positive values, then the rectangle’s size is decreased. If `dx` and `dy` are negative values, the rectangle’s size is increased.

<a id="Discussion"></a>

## Discussion

The rectangle is standardized and then the inset parameters are applied. If the resulting rectangle would have a negative height or width, a null rectangle is returned.

## See Also

### Modifying Rectangles

- [CGRectIntegral(\_:)](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection(\_:\_:)](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset(\_:\_:\_:)](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize(\_:)](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion(\_:\_:)](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.

# CGRectInset (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.

## Declaration

```objectivec
extern CGRect CGRectInset(CGRect rect, CGFloat dx, CGFloat dy);
```

## Parameters

- `rect`: The source [CGRect](../corefoundation/cgrect.md) structure.
- `dx`: The x-coordinate value to use for adjusting the source rectangle. To create an inset rectangle, specify a positive value. To create a larger, encompassing rectangle, specify a negative value.
- `dy`: The y-coordinate value to use for adjusting the source rectangle. To create an inset rectangle, specify a positive value. To create a larger, encompassing rectangle, specify a negative value.

<a id="return-value"></a>

## Return Value

A rectangle. The origin value is offset in the x-axis by the distance specified by the `dx` parameter and in the y-axis by the distance specified by the `dy` parameter, and its size adjusted by `(2*dx,2*dy)`, relative to the source rectangle. If `dx` and `dy` are positive values, then the rectangle’s size is decreased. If `dx` and `dy` are negative values, the rectangle’s size is increased.

<a id="Discussion"></a>

## Discussion

The rectangle is standardized and then the inset parameters are applied. If the resulting rectangle would have a negative height or width, a null rectangle is returned.

## See Also

### Modifying Rectangles

- [CGRectDivide](cgrectdivide.md): Divides a source rectangle into two component rectangles.
- [CGRectIntegral](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.
