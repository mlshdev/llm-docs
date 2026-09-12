> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlay/coordinate](https://developer.apple.com/documentation/mapkit/mkoverlay/coordinate)

# coordinate (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The approximate center point of the overlay area.

## Declaration

```swift
var coordinate: CLLocationCoordinate2D { get }
```

<a id="Discussion"></a>

## Discussion

This point is typically set to the center point of the map’s bounding rectangle. The overlay uses it as the anchor point for any callouts that display for the annotation.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Describing the overlay geometry

- [boundingMapRect](boundingmaprect.md): The projected rectangle that encompasses the overlay.

# coordinate (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The approximate center point of the overlay area.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;
```

<a id="Discussion"></a>

## Discussion

This point is typically set to the center point of the map’s bounding rectangle. The overlay uses it as the anchor point for any callouts that display for the annotation.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Describing the overlay geometry

- [boundingMapRect](boundingmaprect.md): The projected rectangle that encompasses the overlay.
