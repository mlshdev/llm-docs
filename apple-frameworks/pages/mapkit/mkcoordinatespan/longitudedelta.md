> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcoordinatespan/longitudedelta](https://developer.apple.com/documentation/mapkit/mkcoordinatespan/longitudedelta)

# longitudeDelta (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The amount of east-to-west distance (measured in degrees) to display for the map region.

## Declaration

```swift
var longitudeDelta: CLLocationDegrees
```

<a id="Discussion"></a>

## Discussion

The number of kilometers spanned by a longitude range varies based on the current latitude. For example, one degree of longitude spans a distance of approximately 111 kilometers (69 miles) at the equator but shrinks to 0 kilometers at the poles.

## See Also

### Getting the span coordinates

- [latitudeDelta](latitudedelta.md): The amount of north-to-south distance (measured in degrees) to display on the map.

# longitudeDelta (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The amount of east-to-west distance (measured in degrees) to display for the map region.

## Declaration

```objectivec
CLLocationDegrees longitudeDelta;
```

<a id="Discussion"></a>

## Discussion

The number of kilometers spanned by a longitude range varies based on the current latitude. For example, one degree of longitude spans a distance of approximately 111 kilometers (69 miles) at the equator but shrinks to 0 kilometers at the poles.

## See Also

### Getting the span coordinates

- [latitudeDelta](latitudedelta.md): The amount of north-to-south distance (measured in degrees) to display on the map.
