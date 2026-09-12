> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlay/intersects(_:)](https://developer.apple.com/documentation/mapkit/mkoverlay/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the specified rectangle intersects the overlay’s shape.

## Declaration

```swift
optional func intersects(_ mapRect: MKMapRect) -> Bool
```

## Parameters

- `mapRect`: The rectangle to intersect with the overlay’s area.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if any part of the map rectangle intersects the receiver’s shape, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

<a id="Discussion"></a>

## Discussion

You can implement this method to provide more specific bounds-checking for an overlay. If you don’t implement it, the method uses the bounding rectangle to detect intersections.

# intersectsMapRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the specified rectangle intersects the overlay’s shape.

## Declaration

```objectivec
- (BOOL) intersectsMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The rectangle to intersect with the overlay’s area.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if any part of the map rectangle intersects the receiver’s shape, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

<a id="Discussion"></a>

## Discussion

You can implement this method to provide more specific bounds-checking for an overlay. If you don’t implement it, the method uses the bounding rectangle to detect intersections.
