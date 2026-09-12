> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/init(latitude:longitude:)](https://developer.apple.com/documentation/corelocation/cllocation/init(latitude:longitude:))

# init(latitude:longitude:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a location object with the specified latitude and longitude.

## Declaration

```swift
init(latitude: CLLocationDegrees, longitude: CLLocationDegrees)
```

## Parameters

- `latitude`: The latitude of the geographical coordinate.
- `longitude`: The longitude of the geographical coordinate.

<a id="return-value"></a>

## Return Value

A location object initialized with the specified geographical coordinate.

<a id="Discussion"></a>

## Discussion

Use this method to create location objects that are not necessarily based on the user’s current location. Typically, you acquire location objects from your [CLLocationManager](../cllocationmanager.md) object, which returns the user’s actual location. However, you might use this method when you want to represent any location on a map. For example, you might create an object to represent the user’s intended destination.

This method records the latitude and longitude values you provide, and it initializes other properties to appropriate default values. Specifically, this method sets the [altitude](altitude.md) and [horizontalAccuracy](horizontalaccuracy.md) properties to 0, sets the [verticalAccuracy](verticalaccuracy.md) property to `-1` to indicate that the altitude is invalid, sets the [speed](speed.md) and [course](course.md) values to `-1`, and sets the [timestamp](timestamp.md) property to the time at which the returned object was created.

## See Also

### Creating a location object

- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)

# initWithLatitude:longitude: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a location object with the specified latitude and longitude.

## Declaration

```objectivec
- (instancetype) initWithLatitude:(CLLocationDegrees) latitude longitude:(CLLocationDegrees) longitude;
```

## Parameters

- `latitude`: The latitude of the geographical coordinate.
- `longitude`: The longitude of the geographical coordinate.

<a id="return-value"></a>

## Return Value

A location object initialized with the specified geographical coordinate.

<a id="Discussion"></a>

## Discussion

Use this method to create location objects that are not necessarily based on the user’s current location. Typically, you acquire location objects from your [CLLocationManager](../cllocationmanager.md) object, which returns the user’s actual location. However, you might use this method when you want to represent any location on a map. For example, you might create an object to represent the user’s intended destination.

This method records the latitude and longitude values you provide, and it initializes other properties to appropriate default values. Specifically, this method sets the [altitude](altitude.md) and [horizontalAccuracy](horizontalaccuracy.md) properties to 0, sets the [verticalAccuracy](verticalaccuracy.md) property to `-1` to indicate that the altitude is invalid, sets the [speed](speed.md) and [course](course.md) values to `-1`, and sets the [timestamp](timestamp.md) property to the time at which the returned object was created.

## See Also

### Creating a location object

- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)
