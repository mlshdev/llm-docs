> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/intersection(_:)](https://developer.apple.com/documentation/mapkit/mkmaprect/intersection(_:))

# intersection(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the rectangle that represents the intersection of two rectangles.

## Declaration

```swift
func intersection(_ rect2: MKMapRect) -> MKMapRect
```

## Parameters

- `rect2`: The second rectangle.

<a id="return-value"></a>

## Return Value

The rectangle representing the intersection of the two rectangles, or [null](null.md) if there’s no intersection.

## See Also

### Modifying the rectangle

- [union(\_:)](union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [insetBy(dx:dy:)](insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [offsetBy(dx:dy:)](offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide(\_:\_:\_:\_:\_:)](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.

# MKMapRectIntersection (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the rectangle that represents the intersection of two rectangles.

## Declaration

```objectivec
extern MKMapRect MKMapRectIntersection(MKMapRect rect1, MKMapRect rect2);
```

## Parameters

- `rect1`: The first rectangle.
- `rect2`: The second rectangle.

<a id="return-value"></a>

## Return Value

The rectangle representing the intersection of the two rectangles, or [MKMapRectNull](null.md) if there’s no intersection.

## See Also

### Modifying the rectangle

- [MKMapRectUnion](union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [MKMapRectInset](insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [MKMapRectOffset](offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.
