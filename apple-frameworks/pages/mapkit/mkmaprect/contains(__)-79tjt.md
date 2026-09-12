> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/contains(_:)-79tjt](https://developer.apple.com/documentation/mapkit/mkmaprect/contains(_:)-79tjt)

# contains(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified map point lies within the rectangle.

## Declaration

```swift
func contains(_ point: MKMapPoint) -> Bool
```

## Parameters

- `point`: The point to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle isn’t `null` or empty and the point is inside the rectangle; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For this method, a point is inside the rectangle if its coordinates lie inside the rectangle or on the minimum X or minimum Y edge.

## See Also

### Intersecting the rectangle

- [contains(\_:)](contains%28__%29-1z5oa.md): Returns a Boolean value that indicates whether one rectangle contains another.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect each other.

# MKMapRectContainsPoint (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified map point lies within the rectangle.

## Declaration

```objectivec
extern BOOL MKMapRectContainsPoint(MKMapRect rect, MKMapPoint point);
```

## Parameters

- `rect`: The map rectangle the method is checking.
- `point`: The point to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the rectangle isn’t `null` or empty and the point is inside the rectangle; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

For this method, a point is inside the rectangle if its coordinates lie inside the rectangle or on the minimum X or minimum Y edge.

## See Also

### Intersecting the rectangle

- [MKMapRectContainsRect](contains%28__%29-1z5oa.md): Returns a Boolean value that indicates whether one rectangle contains another.
- [MKMapRectIntersectsRect](intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect each other.
