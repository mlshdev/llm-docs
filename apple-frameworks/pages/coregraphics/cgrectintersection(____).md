> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectintersection(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectintersection(_:_:))

# CGRectIntersection(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the intersection of two rectangles.

## Declaration

```swift
func CGRectIntersection(_ r1: CGRect, _ r2: CGRect) -> CGRect
```

## Parameters

- `r1`: The first source rectangle.
- `r2`: The second source rectangle.

<a id="return-value"></a>

## Return Value

A rectangle that represents the intersection of the two specified rectangles. If the two rectangles do not intersect, returns the null rectangle. To check for this condition, use [CGRectIsNull(\_:)](cgrectisnull%28__%29.md).

<a id="Discussion"></a>

## Discussion

Both rectangles are standardized prior to calculating the intersection.

## See Also

### Modifying Rectangles

- [CGRectInset(\_:\_:\_:)](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral(\_:)](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectOffset(\_:\_:\_:)](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize(\_:)](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion(\_:\_:)](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.

# CGRectIntersection (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the intersection of two rectangles.

## Declaration

```objectivec
extern CGRect CGRectIntersection(CGRect r1, CGRect r2);
```

## Parameters

- `r1`: The first source rectangle.
- `r2`: The second source rectangle.

<a id="return-value"></a>

## Return Value

A rectangle that represents the intersection of the two specified rectangles. If the two rectangles do not intersect, returns the null rectangle. To check for this condition, use [CGRectIsNull](cgrectisnull%28__%29.md).

<a id="Discussion"></a>

## Discussion

Both rectangles are standardized prior to calculating the intersection.

## See Also

### Modifying Rectangles

- [CGRectDivide](cgrectdivide.md): Divides a source rectangle into two component rectangles.
- [CGRectInset](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntegral](cgrectintegral%28__%29.md): Returns the smallest rectangle that results from converting the source rectangle values to integers.
- [CGRectOffset](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.
