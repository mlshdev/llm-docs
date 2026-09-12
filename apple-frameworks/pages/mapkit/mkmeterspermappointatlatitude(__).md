> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmeterspermappointatlatitude(_:)](https://developer.apple.com/documentation/mapkit/mkmeterspermappointatlatitude(_:))

# MKMetersPerMapPointAtLatitude(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance that one map point spans at the specified latitude.

## Declaration

```swift
func MKMetersPerMapPointAtLatitude(_ latitude: CLLocationDegrees) -> CLLocationDistance
```

## Parameters

- `latitude`: The latitude for which to return the value.

<a id="return-value"></a>

## Return Value

The distance (in meters) spanned by a single map point.

<a id="Discussion"></a>

## Discussion

The distance between map points decreases as the latitude approaches the poles. This relationship parallels the relationship between longitudinal coordinates at different latitudes.

## See Also

### Getting the distance between points

- [distance(to:)](mkmappoint/distance%28to_%29.md): Returns the number of meters between two map points.
- [MKMapPointsPerMeterAtLatitude(\_:)](mkmappointspermeteratlatitude%28__%29.md): Returns the number of map points that represent one meter at the specified latitude.

# MKMetersPerMapPointAtLatitude (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance that one map point spans at the specified latitude.

## Declaration

```objectivec
extern CLLocationDistance MKMetersPerMapPointAtLatitude(CLLocationDegrees latitude);
```

## Parameters

- `latitude`: The latitude for which to return the value.

<a id="return-value"></a>

## Return Value

The distance (in meters) spanned by a single map point.

<a id="Discussion"></a>

## Discussion

The distance between map points decreases as the latitude approaches the poles. This relationship parallels the relationship between longitudinal coordinates at different latitudes.

## See Also

### Getting the distance between points

- [MKMetersBetweenMapPoints](mkmappoint/distance%28to_%29.md): Returns the number of meters between two map points.
- [MKMapPointsPerMeterAtLatitude](mkmappointspermeteratlatitude%28__%29.md): Returns the number of map points that represent one meter at the specified latitude.
