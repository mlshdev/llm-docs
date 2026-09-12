> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcircle/boundingmaprect](https://developer.apple.com/documentation/mapkit/mkcircle/boundingmaprect)

# boundingMapRect (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The bounding rectangle of the circular area.

## Declaration

```swift
var boundingMapRect: MKMapRect { get }
```

<a id="Discussion"></a>

## Discussion

As latitude values move away from the equator and toward the poles, the physical distance between map points gets smaller. This means that the map needs more map points to represent the same distance. As a result, the bounding rectangle of a circle overlay gets larger as the center point of that circle moves away from the equator and toward the poles.

## See Also

### Accessing the overlay’s attributes

- [coordinate](coordinate.md): The center point of the circular area, specified as a latitude and longitude.
- [radius](radius.md): The radius of the circular area, in meters.

# boundingMapRect (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The bounding rectangle of the circular area.

## Declaration

```objectivec
@property (nonatomic, readonly) MKMapRect boundingMapRect;
```

<a id="Discussion"></a>

## Discussion

As latitude values move away from the equator and toward the poles, the physical distance between map points gets smaller. This means that the map needs more map points to represent the same distance. As a result, the bounding rectangle of a circle overlay gets larger as the center point of that circle moves away from the equator and toward the poles.

## See Also

### Accessing the overlay’s attributes

- [coordinate](coordinate.md): The center point of the circular area, specified as a latitude and longitude.
- [radius](radius.md): The radius of the circular area, in meters.
