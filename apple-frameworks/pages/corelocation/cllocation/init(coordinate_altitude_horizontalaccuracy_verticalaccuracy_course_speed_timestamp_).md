> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:course:speed:timestamp:)](https://developer.apple.com/documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:course:speed:timestamp:))

# init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a location object with the specified coordinate, altitude, and course information.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, horizontalAccuracy hAccuracy: CLLocationAccuracy, verticalAccuracy vAccuracy: CLLocationAccuracy, course: CLLocationDirection, speed: CLLocationSpeed, timestamp: Date)
```

## Parameters

- `coordinate`: A coordinate structure containing the latitude and longitude values.
- `altitude`: The altitude value for the location.
- `hAccuracy`: The radius of uncertainty for the geographical coordinate, measured in meters. Specify a negative number to indicate that the geographical coordinate is invalid.
- `vAccuracy`: The accuracy of the altitude value, measured in meters. Specify a negative number to indicate that the altitude is invalid.
- `course`: The direction of travel for the location, measured in degrees relative to due north and continuing clockwise around the compass.
- `speed`: The current speed associated with this location, measured in meters per second.
- `timestamp`: The time to associate with the location object. Typically, you specify the current time.

<a id="return-value"></a>

## Return Value

A location object initialized with the specified geographical coordinate, altitude, and course information.

<a id="Discussion"></a>

## Discussion

Use this method to create location objects that aren’t necessarily based on the user’s current location.Typically, you acquire location objects from your [CLLocationManager](../cllocationmanager.md) object, which returns the user’s actual location. However, you might use this method when you want to represent any location on a map. For example, you might create an object to represent the user’s intended destination.

## See Also

### Creating a location object

- [init(latitude:longitude:)](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)

# initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a location object with the specified coordinate, altitude, and course information.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate altitude:(CLLocationDistance) altitude horizontalAccuracy:(CLLocationAccuracy) hAccuracy verticalAccuracy:(CLLocationAccuracy) vAccuracy course:(CLLocationDirection) course speed:(CLLocationSpeed) speed timestamp:(NSDate *) timestamp;
```

## Parameters

- `coordinate`: A coordinate structure containing the latitude and longitude values.
- `altitude`: The altitude value for the location.
- `hAccuracy`: The radius of uncertainty for the geographical coordinate, measured in meters. Specify a negative number to indicate that the geographical coordinate is invalid.
- `vAccuracy`: The accuracy of the altitude value, measured in meters. Specify a negative number to indicate that the altitude is invalid.
- `course`: The direction of travel for the location, measured in degrees relative to due north and continuing clockwise around the compass.
- `speed`: The current speed associated with this location, measured in meters per second.
- `timestamp`: The time to associate with the location object. Typically, you specify the current time.

<a id="return-value"></a>

## Return Value

A location object initialized with the specified geographical coordinate, altitude, and course information.

<a id="Discussion"></a>

## Discussion

Use this method to create location objects that aren’t necessarily based on the user’s current location.Typically, you acquire location objects from your [CLLocationManager](../cllocationmanager.md) object, which returns the user’s actual location. However, you might use this method when you want to represent any location on a map. For example, you might create an object to represent the user’s intended destination.

## See Also

### Creating a location object

- [initWithLatitude:longitude:](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate and altitude information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)
