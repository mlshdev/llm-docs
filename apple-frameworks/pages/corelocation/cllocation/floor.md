> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/floor](https://developer.apple.com/documentation/corelocation/cllocation/floor)

# floor (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The logical floor of the building in which the user is located.

## Declaration

```swift
@NSCopying var floor: CLFloor? { get }
```

<a id="Discussion"></a>

## Discussion

If floor information is not available for the current location, the value of this property is `nil`.

## See Also

### Getting the location attributes

- [coordinate](coordinate.md): The geographical coordinate information.
- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [timestamp](timestamp.md): The time at which this location was determined.
- [sourceInformation](sourceinformation.md): Information about the source that provides the location.

# floor (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The logical floor of the building in which the user is located.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLFloor * floor;
```

<a id="Discussion"></a>

## Discussion

If floor information is not available for the current location, the value of this property is `nil`.

## See Also

### Getting the location attributes

- [coordinate](coordinate.md): The geographical coordinate information.
- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [timestamp](timestamp.md): The time at which this location was determined.
- [sourceInformation](sourceinformation.md): Information about the source that provides the location.
