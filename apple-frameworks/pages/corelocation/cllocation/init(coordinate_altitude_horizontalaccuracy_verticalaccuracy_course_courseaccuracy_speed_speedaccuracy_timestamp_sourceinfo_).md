> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:course:courseaccuracy:speed:speedaccuracy:timestamp:sourceinfo:)](https://developer.apple.com/documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:course:courseaccuracy:speed:speedaccuracy:timestamp:sourceinfo:))

# init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, horizontalAccuracy hAccuracy: CLLocationAccuracy, verticalAccuracy vAccuracy: CLLocationAccuracy, course: CLLocationDirection, courseAccuracy: CLLocationDirectionAccuracy, speed: CLLocationSpeed, speedAccuracy: CLLocationSpeedAccuracy, timestamp: Date, sourceInfo: CLLocationSourceInformation)
```

## See Also

### Creating a location object

- [init(latitude:longitude:)](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.

# initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate altitude:(CLLocationDistance) altitude horizontalAccuracy:(CLLocationAccuracy) hAccuracy verticalAccuracy:(CLLocationAccuracy) vAccuracy course:(CLLocationDirection) course courseAccuracy:(CLLocationDirectionAccuracy) courseAccuracy speed:(CLLocationSpeed) speed speedAccuracy:(CLLocationSpeedAccuracy) speedAccuracy timestamp:(NSDate *) timestamp sourceInfo:(CLLocationSourceInformation *) sourceInfo;
```

## See Also

### Creating a location object

- [initWithLatitude:longitude:](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
