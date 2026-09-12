> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectintegral(_:)](https://developer.apple.com/documentation/coregraphics/cgrectintegral(_:))

# CGRectIntegral(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the smallest rectangle that results from converting the source rectangle values to integers.

## Declaration

```swift
func CGRectIntegral(_ rect: CGRect) -> CGRect
```

## Parameters

- `rect`: The source rectangle.

<a id="return-value"></a>

## Return Value

A rectangle with the smallest integer values for its origin and size that contains the source rectangle. That is, given a rectangle with fractional origin or size values, `CGRectIntegral` rounds the rectangle’s origin downward and its size upward to the nearest whole integers, such that the result contains the original rectangle. Returns a null rectangle if `rect` is a null rectangle.

## See Also

### Modifying Rectangles

- [CGRectInset(\_:\_:\_:)](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntersection(\_:\_:)](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset(\_:\_:\_:)](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize(\_:)](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion(\_:\_:)](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.

# CGRectIntegral (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the smallest rectangle that results from converting the source rectangle values to integers.

## Declaration

```objectivec
extern CGRect CGRectIntegral(CGRect rect);
```

## Parameters

- `rect`: The source rectangle.

<a id="return-value"></a>

## Return Value

A rectangle with the smallest integer values for its origin and size that contains the source rectangle. That is, given a rectangle with fractional origin or size values, `CGRectIntegral` rounds the rectangle’s origin downward and its size upward to the nearest whole integers, such that the result contains the original rectangle. Returns a null rectangle if `rect` is a null rectangle.

## See Also

### Modifying Rectangles

- [CGRectDivide](cgrectdivide.md): Divides a source rectangle into two component rectangles.
- [CGRectInset](cgrectinset%28______%29.md): Returns a rectangle that is smaller or larger than the source rectangle, with the same center point.
- [CGRectIntersection](cgrectintersection%28____%29.md): Returns the intersection of two rectangles.
- [CGRectOffset](cgrectoffset%28______%29.md): Returns a rectangle with an origin that is offset from that of the source rectangle.
- [CGRectStandardize](cgrectstandardize%28__%29.md): Returns a rectangle with a positive width and height.
- [CGRectUnion](cgrectunion%28____%29.md): Returns the smallest rectangle that contains the two source rectangles.
