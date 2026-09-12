> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmappoint/init(_:)](https://developer.apple.com/documentation/mapkit/mkmappoint/init(_:))

# init(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates the map point data structure that corresponds to the specified coordinate.

## Declaration

```swift
init(_ coordinate: CLLocationCoordinate2D)
```

## Parameters

- `coordinate`: The coordinate containing the latitude and longitude values for the desired point.

<a id="return-value"></a>

## Return Value

The map point value that corresponds to the specified coordinate on a two-dimensional map projection.

## See Also

### Creating a map point

- [init()](init%28%29.md): Creates a map point at an unspecified point.
- [init(x:y:)](init%28x_y_%29.md): Creates a new map point structure from the specified values.

# MKMapPointForCoordinate (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates the map point data structure that corresponds to the specified coordinate.

## Declaration

```objectivec
extern MKMapPoint MKMapPointForCoordinate(CLLocationCoordinate2D coordinate);
```

## Parameters

- `coordinate`: The coordinate containing the latitude and longitude values for the desired point.

<a id="return-value"></a>

## Return Value

The map point value that corresponds to the specified coordinate on a two-dimensional map projection.
