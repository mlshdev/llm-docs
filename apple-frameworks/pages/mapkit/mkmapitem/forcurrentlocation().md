> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/forcurrentlocation()](https://developer.apple.com/documentation/mapkit/mkmapitem/forcurrentlocation())

# forCurrentLocation() (Swift)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a singleton map item object representing the user’s location.

## Declaration

```swift
class func forCurrentLocation() -> MKMapItem
```

<a id="return-value"></a>

## Return Value

An `MKMapItem` object representing the user’s location.

<a id="Discussion"></a>

## Discussion

For privacy reasons, and because the user’s location can change, the map item that this method returns doesn’t contain any coordinate data. When you need the actual location of the user, use the Core Location framework to retrieve it.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating map items

- [init(placemark:)](init%28placemark_%29.md): Deprecated. Creates and returns a map item object using the specified placemark object.

# mapItemForCurrentLocation (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a singleton map item object representing the user’s location.

## Declaration

```objectivec
+ (MKMapItem *) mapItemForCurrentLocation;
```

<a id="return-value"></a>

## Return Value

An `MKMapItem` object representing the user’s location.

<a id="Discussion"></a>

## Discussion

For privacy reasons, and because the user’s location can change, the map item that this method returns doesn’t contain any coordinate data. When you need the actual location of the user, use the Core Location framework to retrieve it.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating map items

- [initWithPlacemark:](init%28placemark_%29.md): Deprecated. Creates and returns a map item object using the specified placemark object.
