> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectunion(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectunion(_:_:))

# CGRectUnion(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the smallest rectangle that contains the two source rectangles.

## Declaration

```swift
func CGRectUnion(_ r1: CGRect, _ r2: CGRect) -> CGRect
```

## Parameters

- `r1`: The first source rectangle.
- `r2`: The second source rectangle.

<a id="return-value"></a>

## Return Value

The smallest rectangle that completely contains both of the source rectangles.

<a id="Discussion"></a>

## Discussion

Both rectangles are standardized prior to calculating the union. If either of the rectangles is a null rectangle, a copy of the other rectangle is returned (resulting in a null rectangle if both rectangles are null). Otherwise a rectangle that completely contains the source rectangles is returned.

## See Also

### Modifying Rectangles

- [CGRectInset(\_:\_:\_:)](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral(\_:)](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection(\_:\_:)](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset(\_:\_:\_:)](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize(\_:)](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.

# CGRectUnion (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the smallest rectangle that contains the two source rectangles.

## Declaration

```objectivec
extern CGRect CGRectUnion(CGRect r1, CGRect r2);
```

## Parameters

- `r1`: The first source rectangle.
- `r2`: The second source rectangle.

<a id="return-value"></a>

## Return Value

The smallest rectangle that completely contains both of the source rectangles.

<a id="Discussion"></a>

## Discussion

Both rectangles are standardized prior to calculating the union. If either of the rectangles is a null rectangle, a copy of the other rectangle is returned (resulting in a null rectangle if both rectangles are null). Otherwise a rectangle that completely contains the source rectangles is returned.

## See Also

### Modifying Rectangles

- [CGRectDivide](cgrectdivide.md): Divides a source rectangle into two component rectangles.
- [CGRectInset](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectIntersection](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
