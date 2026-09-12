> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappointspermeteratlatitude(_:)](https://developer.apple.com/documentation/mapkit/mkmappointspermeteratlatitude(_:))

# MKMapPointsPerMeterAtLatitude(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of map points that represent one meter at the specified latitude.

## Declaration

```swift
func MKMapPointsPerMeterAtLatitude(_ latitude: CLLocationDegrees) -> Double
```

## Parameters

- `latitude`: The latitude for which to return the value.

<a id="return-value"></a>

## Return Value

The number of map points that span one meter.

<a id="Discussion"></a>

## Discussion

The number of map points per meter increases as the latitude approaches the poles.

## See Also

### Getting the distance between points

- [distance(to:)](mkmappoint/distance%28to_%29.md): Returns the number of meters between two map points.
- [MKMetersPerMapPointAtLatitude(\_:)](mkmeterspermappointatlatitude%28__%29.md): Returns the distance that one map point spans at the specified latitude.

# MKMapPointsPerMeterAtLatitude (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of map points that represent one meter at the specified latitude.

## Declaration

```objectivec
extern double MKMapPointsPerMeterAtLatitude(CLLocationDegrees latitude);
```

## Parameters

- `latitude`: The latitude for which to return the value.

<a id="return-value"></a>

## Return Value

The number of map points that span one meter.

<a id="Discussion"></a>

## Discussion

The number of map points per meter increases as the latitude approaches the poles.

## See Also

### Getting the distance between points

- [MKMetersBetweenMapPoints](mkmappoint/distance%28to_%29.md): Returns the number of meters between two map points.
- [MKMetersPerMapPointAtLatitude](mkmeterspermappointatlatitude%28__%29.md): Returns the distance that one map point spans at the specified latitude.
