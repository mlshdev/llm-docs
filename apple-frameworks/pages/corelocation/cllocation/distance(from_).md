> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/distance(from:)](https://developer.apple.com/documentation/corelocation/cllocation/distance(from:))

# distance(from:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance (measured in meters) from the current object’s location to the specified location.

## Declaration

```swift
func distance(from location: CLLocation) -> CLLocationDistance
```

## Parameters

- `location`: The destination location.

<a id="return-value"></a>

## Return Value

The distance (in meters) between the two locations.

<a id="Discussion"></a>

## Discussion

This method measures the distance between the location in the current object and the value in the `location` parameter. The distance is calculated by tracing a line between the two points that follows the curvature of the Earth, and measuring the length of the resulting arc. The arc is a smooth curve that doesn’t take into account altitude changes between the two locations.

## See Also

### Measuring the distance between coordinates

- [getDistanceFrom(\_:)](getdistancefrom%28__%29.md): Deprecated. Returns the distance (measured in meters) from the current object’s location to the specified location.

# distanceFromLocation: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance (measured in meters) from the current object’s location to the specified location.

## Declaration

```objectivec
- (CLLocationDistance) distanceFromLocation:(const CLLocation *) location;
```

## Parameters

- `location`: The destination location.

<a id="return-value"></a>

## Return Value

The distance (in meters) between the two locations.

<a id="Discussion"></a>

## Discussion

This method measures the distance between the location in the current object and the value in the `location` parameter. The distance is calculated by tracing a line between the two points that follows the curvature of the Earth, and measuring the length of the resulting arc. The arc is a smooth curve that doesn’t take into account altitude changes between the two locations.

## See Also

### Measuring the distance between coordinates

- [getDistanceFrom:](getdistancefrom%28__%29.md): Deprecated. Returns the distance (measured in meters) from the current object’s location to the specified location.
