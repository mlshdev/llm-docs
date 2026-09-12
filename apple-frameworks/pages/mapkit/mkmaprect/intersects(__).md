> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmaprect/intersects(_:)](https://developer.apple.com/documentation/mapkit/mkmaprect/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether two rectangles intersect each other.

## Declaration

```swift
func intersects(_ rect2: MKMapRect) -> Bool
```

## Parameters

- `rect2`: The second rectangle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `rect1` and `rect2` intersect each other, or [false](https://developer.apple.com/documentation/swift/false) if they don’t intersect or either rectangle is `null`.

<a id="Discussion"></a>

## Discussion

The rectangles aren’t intersecting if the only intersection occurs along an edge. For a true intersection, the rectangles both need to enclose a single rectangular area with a width and height that are both greater than `0`.

## See Also

### Intersecting the rectangle

- [contains(\_:)](contains%28__%29-79tjt.md): Returns a Boolean value that indicates whether the specified map point lies within the rectangle.
- [contains(\_:)](contains%28__%29-1z5oa.md): Returns a Boolean value that indicates whether one rectangle contains another.

# MKMapRectIntersectsRect (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether two rectangles intersect each other.

## Declaration

```objectivec
extern BOOL MKMapRectIntersectsRect(MKMapRect rect1, MKMapRect rect2);
```

## Parameters

- `rect1`: The first rectangle.
- `rect2`: The second rectangle.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `rect1` and `rect2` intersect each other, or [false](https://developer.apple.com/documentation/swift/false) if they don’t intersect or either rectangle is `null`.

<a id="Discussion"></a>

## Discussion

The rectangles aren’t intersecting if the only intersection occurs along an edge. For a true intersection, the rectangles both need to enclose a single rectangular area with a width and height that are both greater than `0`.

## See Also

### Intersecting the rectangle

- [MKMapRectContainsPoint](contains%28__%29-79tjt.md): Returns a Boolean value that indicates whether the specified map point lies within the rectangle.
- [MKMapRectContainsRect](contains%28__%29-1z5oa.md): Returns a Boolean value that indicates whether one rectangle contains another.
