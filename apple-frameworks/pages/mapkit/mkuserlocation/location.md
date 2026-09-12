> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkuserlocation/location](https://developer.apple.com/documentation/mapkit/mkuserlocation/location)

# location (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The location of the device.

## Declaration

```swift
var location: CLLocation? { get }
```

## Mentioned In

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="Discussion"></a>

## Discussion

This property contains `nil` if the map view isn’t showing the user’s location, or if the map view is still determining the user’s location.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Determining the user’s location

- [isUpdating](isupdating.md): A Boolean value that indicates whether the map view is updating the user’s location.
- [heading](heading.md): The heading of the user’s location.

# location (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The location of the device.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CLLocation * location;
```

## Mentioned In

- [Converting a user’s location to a descriptive placemark](../converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="Discussion"></a>

## Discussion

This property contains `nil` if the map view isn’t showing the user’s location, or if the map view is still determining the user’s location.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Determining the user’s location

- [updating](isupdating.md): A Boolean value that indicates whether the map view is updating the user’s location.
- [heading](heading.md): The heading of the user’s location.
