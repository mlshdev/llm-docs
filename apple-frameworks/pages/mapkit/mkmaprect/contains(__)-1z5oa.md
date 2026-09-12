> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/contains(_:)-1z5oa](https://developer.apple.com/documentation/mapkit/mkmaprect/contains(_:)-1z5oa)

# contains(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether one rectangle contains another.

## Declaration

```swift
func contains(_ rect2: MKMapRect) -> Bool
```

## Parameters

- `rect2`: The rectangle that `rect1` might contain.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `rect2` is `null` or lies entirely inside `rect1`; otherwise, returns [false](https://developer.apple.com/documentation/swift/false) if `rect1` is `null` or doesn’t completely enclose `rect2`.

## See Also

### Intersecting the rectangle

- [contains(\_:)](contains%28__%29-79tjt.md): Returns a Boolean value that indicates whether the specified map point lies within the rectangle.
- [intersects(\_:)](intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect each other.

# MKMapRectContainsRect (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether one rectangle contains another.

## Declaration

```objectivec
extern BOOL MKMapRectContainsRect(MKMapRect rect1, MKMapRect rect2);
```

## Parameters

- `rect1`: The containing rectangle.
- `rect2`: The rectangle that `rect1` might contain.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `rect2` is `null` or lies entirely inside `rect1`; otherwise, returns [false](https://developer.apple.com/documentation/swift/false) if `rect1` is `null` or doesn’t completely enclose `rect2`.

## See Also

### Intersecting the rectangle

- [MKMapRectContainsPoint](contains%28__%29-79tjt.md): Returns a Boolean value that indicates whether the specified map point lies within the rectangle.
- [MKMapRectIntersectsRect](intersects%28__%29.md): Returns a Boolean value that indicates whether two rectangles intersect each other.
