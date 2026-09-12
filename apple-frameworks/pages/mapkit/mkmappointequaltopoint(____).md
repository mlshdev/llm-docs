> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappointequaltopoint(_:_:)](https://developer.apple.com/documentation/mapkit/mkmappointequaltopoint(_:_:))

# MKMapPointEqualToPoint(\_:\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether two map points are equal.

## Declaration

```swift
func MKMapPointEqualToPoint(_ point1: MKMapPoint, _ point2: MKMapPoint) -> Bool
```

## Parameters

- `point1`: The first map point.
- `point2`: The second point.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `x` and `y` values in both points are exactly the same, or [false](https://developer.apple.com/documentation/swift/false) if one or both values are different.

# MKMapPointEqualToPoint (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether two map points are equal.

## Declaration

```objectivec
static BOOL MKMapPointEqualToPoint(MKMapPoint point1, MKMapPoint point2);
```

## Parameters

- `point1`: The first map point.
- `point2`: The second point.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `x` and `y` values in both points are exactly the same, or [false](https://developer.apple.com/documentation/swift/false) if one or both values are different.
