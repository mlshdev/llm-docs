> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:timestamp:)](https://developer.apple.com/documentation/corelocation/cllocation/init(coordinate:altitude:horizontalaccuracy:verticalaccuracy:timestamp:))

# init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a location object with the specified coordinate and altitude information.

## Declaration

```swift
init(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, horizontalAccuracy hAccuracy: CLLocationAccuracy, verticalAccuracy vAccuracy: CLLocationAccuracy, timestamp: Date)
```

## Parameters

- `coordinate`: A coordinate structure containing the latitude and longitude values.
- `altitude`: The altitude value for the location.
- `hAccuracy`: The radius of uncertainty for the geographical coordinate, measured in meters. Specify a negative number to indicate that the geographical coordinate is invalid.
- `vAccuracy`: The accuracy of the altitude value, measured in meters. Specify a negative number to indicate that the altitude is invalid.
- `timestamp`: The time to associate with the location object. Typically, you specify the current time.

<a id="return-value"></a>

## Return Value

A location object initialized with the specified geographical coordinate and altitude information.

<a id="Discussion"></a>

## Discussion

Use this method to create location objects that are not necessarily based on the user’s current location.Typically, you acquire location objects from your [CLLocationManager](../cllocationmanager.md) object, which returns the user’s actual location. However, you might use this method when you want to represent any location on a map. For example, you might create an object to represent the user’s intended destination.

This method records the values you provide, and it initializes other properties to appropriate default values. Specifically, this method sets the speed and course values to `-1`.

## See Also

### Creating a location object

- [init(latitude:longitude:)](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
- [init(coordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:)](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)

# initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:timestamp: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a location object with the specified coordinate and altitude information.

## Declaration

```objectivec
- (instancetype) initWithCoordinate:(CLLocationCoordinate2D) coordinate altitude:(CLLocationDistance) altitude horizontalAccuracy:(CLLocationAccuracy) hAccuracy verticalAccuracy:(CLLocationAccuracy) vAccuracy timestamp:(NSDate *) timestamp;
```

## Parameters

- `coordinate`: A coordinate structure containing the latitude and longitude values.
- `altitude`: The altitude value for the location.
- `hAccuracy`: The radius of uncertainty for the geographical coordinate, measured in meters. Specify a negative number to indicate that the geographical coordinate is invalid.
- `vAccuracy`: The accuracy of the altitude value, measured in meters. Specify a negative number to indicate that the altitude is invalid.
- `timestamp`: The time to associate with the location object. Typically, you specify the current time.

<a id="return-value"></a>

## Return Value

A location object initialized with the specified geographical coordinate and altitude information.

<a id="Discussion"></a>

## Discussion

Use this method to create location objects that are not necessarily based on the user’s current location.Typically, you acquire location objects from your [CLLocationManager](../cllocationmanager.md) object, which returns the user’s actual location. However, you might use this method when you want to represent any location on a map. For example, you might create an object to represent the user’s intended destination.

This method records the values you provide, and it initializes other properties to appropriate default values. Specifically, this method sets the speed and course values to `-1`.

## See Also

### Creating a location object

- [initWithLatitude:longitude:](init%28latitude_longitude_%29.md): Creates a location object with the specified latitude and longitude.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:speed:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_speed_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, and course information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_%29.md): Creates a location object with the specified coordinate, altitude, course, and accuracy information.
- [initWithCoordinate:altitude:horizontalAccuracy:verticalAccuracy:course:courseAccuracy:speed:speedAccuracy:timestamp:sourceInfo:](init%28coordinate_altitude_horizontalaccuracy_verticalaccuracy_course_courseaccuracy_speed_speedaccuracy_timestamp_sourceinfo_%29.md)
