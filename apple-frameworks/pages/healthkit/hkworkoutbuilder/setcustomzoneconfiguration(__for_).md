> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/setcustomzoneconfiguration(_:for:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/setcustomzoneconfiguration(_:for:))

# setCustomZoneConfiguration(\_:for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Overrides the preferred zone configuration with a custom zone for the current workout.

## Declaration

```swift
func setCustomZoneConfiguration(_ configuration: HKWorkoutZoneConfiguration?, for quantityType: HKQuantityType) async throws
```

## Parameters

- `configuration`: The zone configuration to use, or `nil` to remove any custom configuration and use the person’s preferred zones.
- `quantityType`: The quantity type to which to apply the configuration.

## Mentioned In

- [Accessing workout zone data](../accessing-workout-zone-data.md)

<a id="discussion"></a>

## Discussion

Call this method before calling [beginCollection(withStart:completion:)](begincollection%28withstart_completion_%29.md) to apply custom zones. If you don’t set a custom configuration, the system uses the person’s preferred zone configuration from Health Settings for zone calculations. Custom configurations apply only to this workout and don’t modify the person’s preferred zones.

## See Also

### Configuring zone data

- [zoneConfiguration(for:)](zoneconfiguration%28for_%29.md): Returns the zone configuration for the specified quantity type.
- [zoneGroup(for:)](zonegroup%28for_%29.md): Returns the current zone group for the specified quantity type.
