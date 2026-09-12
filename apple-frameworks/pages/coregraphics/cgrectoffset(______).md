> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectoffset(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectoffset(_:_:_:))

# CGRectOffset(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle with an origin that is offset from that of the source rectangle.

## Declaration

```swift
func CGRectOffset(_ rect: CGRect, _ dx: CGFloat, _ dy: CGFloat) -> CGRect
```

## Parameters

- `rect`: The source rectangle.
- `dx`: The offset value for the x-coordinate.
- `dy`: The offset value for the  y-coordinate.

<a id="return-value"></a>

## Return Value

A rectangle that is the same size as the source, but with its origin offset by `dx` units along the x-axis and `dy` units along the y-axis with respect to the source. Returns a null rectangle if `rect` is a null rectangle.

## See Also

### Modifying Rectangles

- [CGRectInset(\_:\_:\_:)](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral(\_:)](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection(\_:\_:)](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectStandardize(\_:)](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion(\_:\_:)](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.

# CGRectOffset (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle with an origin that is offset from that of the source rectangle.

## Declaration

```objectivec
extern CGRect CGRectOffset(CGRect rect, CGFloat dx, CGFloat dy);
```

## Parameters

- `rect`: The source rectangle.
- `dx`: The offset value for the x-coordinate.
- `dy`: The offset value for the  y-coordinate.

<a id="return-value"></a>

## Return Value

A rectangle that is the same size as the source, but with its origin offset by `dx` units along the x-axis and `dy` units along the y-axis with respect to the source. Returns a null rectangle if `rect` is a null rectangle.

## See Also

### Modifying Rectangles

- [CGRectDivide](cgrectdivide.md): Divides a source rectangle into two component rectangles.
- [CGRectInset](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectStandardize](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.
