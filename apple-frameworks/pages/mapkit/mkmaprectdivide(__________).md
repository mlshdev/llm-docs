> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprectdivide(_:_:_:_:_:)](https://developer.apple.com/documentation/mapkit/mkmaprectdivide(_:_:_:_:_:))

# MKMapRectDivide(\_:\_:\_:\_:\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Divides the specified rectangle into two smaller rectangles.

## Declaration

```swift
func MKMapRectDivide(_ rect: MKMapRect, _ slice: UnsafeMutablePointer<MKMapRect>, _ remainder: UnsafeMutablePointer<MKMapRect>, _ amount: Double, _ edge: CGRectEdge)
```

## Parameters

- `rect`: The rectangle to divide.
- `slice`: On input, a pointer to a map rectangle. On output, this parameter contains the portion of `rect` that the method removes.
- `remainder`: On input, a pointer to a map rectangle. On output, this parameter contains the remaining portion of `rect` that the method doesn’t remove.
- `amount`: The amount of `rect` to remove along the specified edge. If this value is negative, the system sets it to `0`.
- `edge`: The edge from which to remove the specified amount.

## See Also

### Modifying the rectangle

- [union(\_:)](mkmaprect/union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [intersection(\_:)](mkmaprect/intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [insetBy(dx:dy:)](mkmaprect/insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [offsetBy(dx:dy:)](mkmaprect/offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.

# MKMapRectDivide (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Divides the specified rectangle into two smaller rectangles.

## Declaration

```objectivec
extern void MKMapRectDivide(MKMapRect rect, MKMapRect *slice, MKMapRect *remainder, double amount, CGRectEdge edge);
```

## Parameters

- `rect`: The rectangle to divide.
- `slice`: On input, a pointer to a map rectangle. On output, this parameter contains the portion of `rect` that the method removes.
- `remainder`: On input, a pointer to a map rectangle. On output, this parameter contains the remaining portion of `rect` that the method doesn’t remove.
- `amount`: The amount of `rect` to remove along the specified edge. If this value is negative, the system sets it to `0`.
- `edge`: The edge from which to remove the specified amount.

## See Also

### Modifying the rectangle

- [MKMapRectUnion](mkmaprect/union%28__%29.md): Returns a rectangle that represents the union of two rectangles.
- [MKMapRectIntersection](mkmaprect/intersection%28__%29.md): Returns the rectangle that represents the intersection of two rectangles.
- [MKMapRectInset](mkmaprect/insetby%28dx_dy_%29.md): Returns the specified rectangle with an inset by the specified amounts.
- [MKMapRectOffset](mkmaprect/offsetby%28dx_dy_%29.md): Returns a rectangle with an origin point that shifts by the specified amount.
