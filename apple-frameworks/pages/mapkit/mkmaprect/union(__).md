> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/union(_:)](https://developer.apple.com/documentation/mapkit/mkmaprect/union(_:))

# union(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle that represents the union of two rectangles.

## Declaration

```swift
func union(_ rect2: MKMapRect) -> MKMapRect
```

## Parameters

- `rect2`: The second rectangle.

<a id="return-value"></a>

## Return Value

A rectangle with an area that encompasses the two rectangles and the space between them.

<a id="Discussion"></a>

## Discussion

If either rectangle is `null`, this method returns the other rectangle. This method sets the origin point of the returned rectangle to the smaller of the x and y values for the two rectangles. Similarly, the method computes the size and width of the rectangle by taking the maximum x and y values and subtracting the x and y values for the new origin point.

## See Also

### Modifying the rectangle

- [intersection(\_:)](intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [insetBy(dx:dy:)](insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [offsetBy(dx:dy:)](offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide(\_:\_:\_:\_:\_:)](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.

# MKMapRectUnion (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a rectangle that represents the union of two rectangles.

## Declaration

```objectivec
extern MKMapRect MKMapRectUnion(MKMapRect rect1, MKMapRect rect2);
```

## Parameters

- `rect1`: The first rectangle.
- `rect2`: The second rectangle.

<a id="return-value"></a>

## Return Value

A rectangle with an area that encompasses the two rectangles and the space between them.

<a id="Discussion"></a>

## Discussion

If either rectangle is `null`, this method returns the other rectangle. This method sets the origin point of the returned rectangle to the smaller of the x and y values for the two rectangles. Similarly, the method computes the size and width of the rectangle by taking the maximum x and y values and subtracting the x and y values for the new origin point.

## See Also

### Modifying the rectangle

- [MKMapRectIntersection](intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [MKMapRectInset](insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [MKMapRectOffset](offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
- [MKMapRectDivide](../mkmaprectdivide%28__________%29.md): Divides the specified rectangle into two smaller rectangles.
