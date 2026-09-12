> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/insetby(dx:dy:)](https://developer.apple.com/documentation/mapkit/mkmaprect/insetby(dx:dy:))

# insetBy(dx:dy:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the specified rectangle with an inset by the specified amounts.

## Declaration

```swift
func insetBy(dx: Double, dy: Double) -> MKMapRect
```

## Parameters

- `dx`: The amount (in map points) to subtract from both sides along the x-axis.
- `dy`: The amount (in map points) to subtract from both sides along the x-axis.

<a id="return-value"></a>

## Return Value

The inset rectangle. If the original rectangle was null, that rectangle is returned instead.

## See Also

### Modifying the rectangle

- [union(\_:)](union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [intersection(\_:)](intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [offsetBy(dx:dy:)](offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide(\_:\_:\_:\_:\_:)](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.

# MKMapRectInset (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the specified rectangle with an inset by the specified amounts.

## Declaration

```objectivec
extern MKMapRect MKMapRectInset(MKMapRect rect, double dx, double dy);
```

## Parameters

- `rect`: The original rectangle.
- `dx`: The amount (in map points) to subtract from both sides along the x-axis.
- `dy`: The amount (in map points) to subtract from both sides along the x-axis.

<a id="return-value"></a>

## Return Value

The inset rectangle. If the original rectangle was null, that rectangle is returned instead.

## See Also

### Modifying the rectangle

- [MKMapRectUnion](union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [MKMapRectIntersection](intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [MKMapRectOffset](offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.
