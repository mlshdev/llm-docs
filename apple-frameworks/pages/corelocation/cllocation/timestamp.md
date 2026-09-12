> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/timestamp](https://developer.apple.com/documentation/corelocation/cllocation/timestamp)

# timestamp (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time at which this location was determined.

## Declaration

```swift
var timestamp: Date { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting the location attributes

- [coordinate](coordinate.md): The geographical coordinate information.
- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [floor](floor.md): The logical floor of the building in which the user is located.
- [sourceInformation](sourceinformation.md): Information about the source that provides the location.

# timestamp (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The time at which this location was determined.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * timestamp;
```

<a id="Discussion"></a>

## Discussion

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting the location attributes

- [coordinate](coordinate.md): The geographical coordinate information.
- [altitude](altitude.md): The altitude above mean sea level associated with a location, measured in meters.
- [ellipsoidalAltitude](ellipsoidalaltitude.md): The altitude as a height above the World Geodetic System 1984 (WGS84) ellipsoid, measured in meters.
- [CLLocationDistance](../cllocationdistance.md): A distance in meters from an existing location.
- [floor](floor.md): The logical floor of the building in which the user is located.
- [sourceInformation](sourceinformation.md): Information about the source that provides the location.
