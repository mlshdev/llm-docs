> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/sourceinformation](https://developer.apple.com/documentation/corelocation/cllocation/sourceinformation)

# sourceInformation (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about the source that provides the location.

## Declaration

```swift
var sourceInformation: CLLocationSourceInformation? { get }
```

<a id="Discussion"></a>

## Discussion

This property enables developers to make better-informed decisions as to whether to treat certain locations differently, or reject potentially simulated locations that they generate during testing. An app may choose to check this property and reject locations if, for example, the [isSimulatedBySoftware](../cllocationsourceinformation/issimulatedbysoftware.md) property is `true` when the developer isn’t debugging or testing the app.

Use the [sourceInformation](sourceinformation.md) property when knowing the true location of the device (within a tolerance for estimation error and horizontal/vertical accuracy) is critical.

## See Also

### Getting the location attributes

- [coordinate](coordinate.md): The geographical coordinate information.
- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [floor](floor.md): The logical floor of the building in which the user is located.
- [timestamp](timestamp.md): The time at which this location was determined.

# sourceInformation (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Information about the source that provides the location.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CLLocationSourceInformation * sourceInformation;
```

<a id="Discussion"></a>

## Discussion

This property enables developers to make better-informed decisions as to whether to treat certain locations differently, or reject potentially simulated locations that they generate during testing. An app may choose to check this property and reject locations if, for example, the [isSimulatedBySoftware](../cllocationsourceinformation/issimulatedbysoftware.md) property is `true` when the developer isn’t debugging or testing the app.

Use the [sourceInformation](sourceinformation.md) property when knowing the true location of the device (within a tolerance for estimation error and horizontal/vertical accuracy) is critical.

## See Also

### Getting the location attributes

- [coordinate](coordinate.md): The geographical coordinate information.
- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [floor](floor.md): The logical floor of the building in which the user is located.
- [timestamp](timestamp.md): The time at which this location was determined.
