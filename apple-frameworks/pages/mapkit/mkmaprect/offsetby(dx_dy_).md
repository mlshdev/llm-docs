> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/offsetby(dx:dy:)](https://developer.apple.com/documentation/mapkit/mkmaprect/offsetby(dx:dy:))

# offsetBy(dx:dy:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle with an origin point that shifts by the specified amount.

## Declaration

```swift
func offsetBy(dx: Double, dy: Double) -> MKMapRect
```

## Parameters

- `dx`: The amount (in map points) to shift the x-coordinate of the origin point.
- `dy`: The amount (in map points) to shift the x-coordinate of the origin point.

<a id="return-value"></a>

## Return Value

The offset rectangle. If the original rectangle is `null`, that rectangle returns instead.

## See Also

### Modifying the rectangle

- [union(\_:)](union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [intersection(\_:)](intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [insetBy(dx:dy:)](insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [MKMapRectDivide(\_:\_:\_:\_:\_:)](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.

# MKMapRectOffset (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle with an origin point that shifts by the specified amount.

## Declaration

```objectivec
extern MKMapRect MKMapRectOffset(MKMapRect rect, double dx, double dy);
```

## Parameters

- `rect`: The original rectangle.
- `dx`: The amount (in map points) to shift the x-coordinate of the origin point.
- `dy`: The amount (in map points) to shift the x-coordinate of the origin point.

<a id="return-value"></a>

## Return Value

The offset rectangle. If the original rectangle is `null`, that rectangle returns instead.

## See Also

### Modifying the rectangle

- [MKMapRectUnion](union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [MKMapRectIntersection](intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [MKMapRectInset](insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [MKMapRectDivide](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.
