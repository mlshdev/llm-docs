> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappoint/coordinate](https://developer.apple.com/documentation/mapkit/mkmappoint/coordinate)

# coordinate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A 2D coordinate that corresponds to the latitude and longitude of the specified map point.

## Declaration

```swift
var coordinate: CLLocationCoordinate2D { get }
```

## See Also

### Getting the point coordinates

- [x](x.md): The location of the point along the x-axis of the map.
- [y](y.md): The location of the point along the y-axis of the map.

# MKCoordinateForMapPoint (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

A 2D coordinate that corresponds to the latitude and longitude of the specified map point.

## Declaration

```objectivec
extern CLLocationCoordinate2D MKCoordinateForMapPoint(MKMapPoint mapPoint);
```

## Parameters

- `mapPoint`: The map point value that corresponds to the desired point on a two-dimensional map projection.

<a id="return-value"></a>

## Return Value

The coordinate structure containing the latitude and longitude values for the specified point.

## See Also

### Getting the point coordinates

- [x](x.md): The location of the point along the x-axis of the map.
- [y](y.md): The location of the point along the y-axis of the map.
