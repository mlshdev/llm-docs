> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/coordinate](https://developer.apple.com/documentation/corelocation/cllocation/coordinate)

# coordinate (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The geographical coordinate information.

## Declaration

```swift
var coordinate: CLLocationCoordinate2D { get }
```

<a id="Discussion"></a>

## Discussion

When running in the simulator, Core Location uses the values provided to it by the simulator. You must run your application on an iOS-based device to get the actual location of that device.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting the location attributes

- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [floor](floor.md): The logical floor of the building in which the user is located.
- [timestamp](timestamp.md): The time at which this location was determined.
- [sourceInformation](sourceinformation.md): Information about the source that provides the location.

# coordinate (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The geographical coordinate information.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationCoordinate2D coordinate;
```

<a id="Discussion"></a>

## Discussion

When running in the simulator, Core Location uses the values provided to it by the simulator. You must run your application on an iOS-based device to get the actual location of that device.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting the location attributes

- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [floor](floor.md): The logical floor of the building in which the user is located.
- [timestamp](timestamp.md): The time at which this location was determined.
- [sourceInformation](sourceinformation.md): Information about the source that provides the location.
