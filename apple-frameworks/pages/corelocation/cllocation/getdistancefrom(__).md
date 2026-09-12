> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/getdistancefrom(_:)](https://developer.apple.com/documentation/corelocation/cllocation/getdistancefrom(_:))

# getDistanceFrom(\_:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15)

Returns the distance (measured in meters) from the current object’s location to the specified location.

> Use the [distance(from:)](distance%28from_%29.md) method instead.

## Declaration

```swift
func getDistanceFrom(_ location: CLLocation) -> CLLocationDistance
```

## Parameters

- `location`: The other location.

<a id="return-value"></a>

## Return Value

The distance (in meters) between the two locations.

<a id="Discussion"></a>

## Discussion

This method measures the distance between the location in the current object and the value in the `location` parameter. The distance is calculated by tracing a line between the two points that follows the curvature of the Earth, and measuring the length of the resulting arc. The arc is a smooth curve that does not take into account altitude changes between the two locations.

## See Also

### Measuring the distance between coordinates

- [distance(from:)](distance%28from_%29.md): Returns the distance (measured in meters) from the current object’s location to the specified location.

# getDistanceFrom: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 3.2) · iPadOS 2.0+ (deprecated in 3.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Returns the distance (measured in meters) from the current object’s location to the specified location.

> Use the [distanceFromLocation:](distance%28from_%29.md) method instead.

## Declaration

```objectivec
- (CLLocationDistance) getDistanceFrom:(const CLLocation *) location;
```

## Parameters

- `location`: The other location.

<a id="return-value"></a>

## Return Value

The distance (in meters) between the two locations.

<a id="Discussion"></a>

## Discussion

This method measures the distance between the location in the current object and the value in the `location` parameter. The distance is calculated by tracing a line between the two points that follows the curvature of the Earth, and measuring the length of the resulting arc. The arc is a smooth curve that does not take into account altitude changes between the two locations.

## See Also

### Measuring the distance between coordinates

- [distanceFromLocation:](distance%28from_%29.md): Returns the distance (measured in meters) from the current object’s location to the specified location.
