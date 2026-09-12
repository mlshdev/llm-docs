> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinateregion/init(_:)](https://developer.apple.com/documentation/mapkit/mkcoordinateregion/init(_:))

# init(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the region that corresponds to the specified map rectangle.

## Declaration

```swift
init(_ rect: MKMapRect)
```

## Parameters

- `rect`: The map rectangle that corresponds to the desired region on a two-dimensional map projection.

<a id="return-value"></a>

## Return Value

The region structure specifying the latitude, longitude, and span values for the specified rectangle.

## See Also

### Creating a region

- [init()](init%28%29.md): Creates a coordinate region.
- [init(center:latitudinalMeters:longitudinalMeters:)](init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
- [init(center:span:)](init%28center_span_%29.md): Creates a coordinate region with a span around the specified center coordinate.

# MKCoordinateRegionForMapRect (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the region that corresponds to the specified map rectangle.

## Declaration

```objectivec
extern MKCoordinateRegion MKCoordinateRegionForMapRect(MKMapRect rect);
```

## Parameters

- `rect`: The map rectangle that corresponds to the desired region on a two-dimensional map projection.

<a id="return-value"></a>

## Return Value

The region structure specifying the latitude, longitude, and span values for the specified rectangle.

## See Also

### Creating a region

- [MKCoordinateRegionMakeWithDistance](init%28center_latitudinalmeters_longitudinalmeters_%29.md): Creates a new coordinate region from the specified coordinate and distance values.
