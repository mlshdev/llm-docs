> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmodometerdata/deltadistance](https://developer.apple.com/documentation/coremotion/cmodometerdata/deltadistance)

# deltaDistance (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The change in distance that the user travels since the last location, measured in meters.

## Declaration

```swift
var deltaDistance: CLLocationDistance { get }
```

## See Also

### Measuring distances

- [deltaAltitude](deltaaltitude.md): The change in altitude above mean sea level associated with the location, measured in meters.

# deltaDistance (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The change in distance that the user travels since the last location, measured in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDistance deltaDistance;
```

## See Also

### Measuring distances

- [deltaAltitude](deltaaltitude.md): The change in altitude above mean sea level associated with the location, measured in meters.
