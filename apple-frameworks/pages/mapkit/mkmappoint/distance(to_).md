> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappoint/distance(to:)](https://developer.apple.com/documentation/mapkit/mkmappoint/distance(to:))

# distance(to:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of meters between two map points.

## Declaration

```swift
func distance(to b: MKMapPoint) -> CLLocationDistance
```

## Parameters

- `b`: The second map point.

<a id="return-value"></a>

## Return Value

The number of meters between the specified map points.

<a id="Discussion"></a>

## Discussion

This distance reflects the actual distance between the two points on the surface of the globe, taking into account the curvature of the Earth.

## See Also

### Getting the distance between points

- [MKMetersPerMapPointAtLatitude(\_:)](../mkmeterspermappointatlatitude%28__%29.md): Returns the distance that one map point spans at the specified latitude.
- [MKMapPointsPerMeterAtLatitude(\_:)](../mkmappointspermeteratlatitude%28__%29.md): Returns the number of map points that represent one meter at the specified latitude.

# MKMetersBetweenMapPoints (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of meters between two map points.

## Declaration

```objectivec
extern CLLocationDistance MKMetersBetweenMapPoints(MKMapPoint a, MKMapPoint b);
```

## Parameters

- `a`: The first map point.
- `b`: The second map point.

<a id="return-value"></a>

## Return Value

The number of meters between the specified map points.

<a id="Discussion"></a>

## Discussion

This distance reflects the actual distance between the two points on the surface of the globe, taking into account the curvature of the Earth.

## See Also

### Getting the distance between points

- [MKMetersPerMapPointAtLatitude](../mkmeterspermappointatlatitude%28__%29.md): Returns the distance that one map point spans at the specified latitude.
- [MKMapPointsPerMeterAtLatitude](../mkmappointspermeteratlatitude%28__%29.md): Returns the number of map points that represent one meter at the specified latitude.
