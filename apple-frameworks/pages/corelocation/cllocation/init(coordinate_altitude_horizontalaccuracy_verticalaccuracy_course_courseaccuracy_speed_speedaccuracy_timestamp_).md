> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:course:courseaccuracy:speed:speedaccuracy:timestamp:)](https://developer.apple.com/documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:course:courseaccuracy:speed:speedaccuracy:timestamp:))

# init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

Creates a location object with the specified coordinate, altitude, course, and accuracy information.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, horizontalAccuracy hAccuracy: CLLocationAccuracy, verticalAccuracy vAccuracy: CLLocationAccuracy, course: CLLocationDirection, courseAccuracy: CLLocationDirectionAccuracy, speed: CLLocationSpeed, speedAccuracy: CLLocationSpeedAccuracy, timestamp: Date)
```

## Parameters

- `coordinate`: A coordinate structure containing the latitude and longitude values.
- `altitude`: The altitude value for the location.
- `hAccuracy`: The radius of uncertainty for the geographical coordinate, measured in meters. Specify a negative number to indicate that the geographical coordinate is invalid.
- `vAccuracy`: The accuracy of the altitude value, measured in meters. Specify a negative number to indicate that the altitude is invalid.
- `course`: The direction of travel for the location, measured in degrees relative to due north and continuing clockwise around the compass.
- `courseAccuracy`: The accuracy of the course value, measured in degrees. Specify a negative number to indicate that the course is invalid.
- `speed`: The current speed associated with this location, measured in meters per second.
- `speedAccuracy`: The accuracy of the speed value, measured in meters per second. Specify a negative number to indicate that the speed is invalid.
- `timestamp`: The time to associate with the location object. Typically, you specify the current time.

## See Also

### Creating a location object

- [init(latitude:longitude:)](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)

# initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

Creates a location object with the specified coordinate, altitude, course, and accuracy information.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate altitude:(CLLocationDistance) altitude horizontalAccuracy:(CLLocationAccuracy) hAccuracy verticalAccuracy:(CLLocationAccuracy) vAccuracy course:(CLLocationDirection) course courseAccuracy:(CLLocationDirectionAccuracy) courseAccuracy speed:(CLLocationSpeed) speed speedAccuracy:(CLLocationSpeedAccuracy) speedAccuracy timestamp:(NSDate *) timestamp;
```

## Parameters

- `coordinate`: A coordinate structure containing the latitude and longitude values.
- `altitude`: The altitude value for the location.
- `hAccuracy`: The radius of uncertainty for the geographical coordinate, measured in meters. Specify a negative number to indicate that the geographical coordinate is invalid.
- `vAccuracy`: The accuracy of the altitude value, measured in meters. Specify a negative number to indicate that the altitude is invalid.
- `course`: The direction of travel for the location, measured in degrees relative to due north and continuing clockwise around the compass.
- `courseAccuracy`: The accuracy of the course value, measured in degrees. Specify a negative number to indicate that the course is invalid.
- `speed`: The current speed associated with this location, measured in meters per second.
- `speedAccuracy`: The accuracy of the speed value, measured in meters per second. Specify a negative number to indicate that the speed is invalid.
- `timestamp`: The time to associate with the location object. Typically, you specify the current time.

## See Also

### Creating a location object

- [initWithLatitude:longitude:](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)
