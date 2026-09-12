> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcircle/init(center:radius:)](https://developer.apple.com/documentation/mapkit/mkcircle/init(center:radius:))

# init(center:radius:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a circle object using the specified coordinate and radius.

## Declaration

```swift
convenience init(center coord: CLLocationCoordinate2D, radius: CLLocationDistance)
```

## Parameters

- `coord`: The center point of the circle, specified as a latitude and longitude value.
- `radius`: The radius of the circle, measured in meters from the center point.

<a id="return-value"></a>

## Return Value

A circle overlay object.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a circle overlay

- [init(mapRect:)](init%28maprect_%29.md): Creates and returns a circle object that derives the circular area from the specified rectangle.

# circleWithCenterCoordinate:radius: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a circle object using the specified coordinate and radius.

## Declaration

```objectivec
+ (instancetype) circleWithCenterCoordinate:(CLLocationCoordinate2D) coord radius:(CLLocationDistance) radius;
```

## Parameters

- `coord`: The center point of the circle, specified as a latitude and longitude value.
- `radius`: The radius of the circle, measured in meters from the center point.

<a id="return-value"></a>

## Return Value

A circle overlay object.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a circle overlay

- [circleWithMapRect:](init%28maprect_%29.md): Creates and returns a circle object that derives the circular area from the specified rectangle.
