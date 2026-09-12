> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/preferredworkoutzoneconfiguration(for:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/preferredworkoutzoneconfiguration(for:))

# preferredWorkoutZoneConfiguration(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a person’s preferred zone configuration for a quantity type.

## Declaration

```swift
func preferredWorkoutZoneConfiguration(for quantityType: HKQuantityType) async throws -> HKWorkoutZoneConfiguration?
```

## Parameters

- `quantityType`: The quantity type for which to retrieve the preferred zone configuration.

<a id="return-value"></a>

## Return Value

The preferred zone configuration, or `nil` if the person hasn’t configured zones for the quantity type.

## Mentioned In

- [Accessing workout zone data](../accessing-workout-zone-data.md)

<a id="discussion"></a>

## Discussion

The system returns the person’s manually configured zones from Health Settings, or the system-generated zones if the person hasn’t set custom values. System-generated zones update periodically as the person’s health metrics change, however, the system preserves zones that the person configures. Use this method to display zone information that aligns with the person’s preferences across their workouts.

This method throws an error if the framework can’t retrieve the requested zone configuration.

## See Also

### Accessing the preferred units

- [preferredUnits(for:completion:)](preferredunits%28for_completion_%29.md): Returns the user’s preferred units for the given quantity types.
- [HKUserPreferencesDidChange](../../foundation/nsnotification/name-swift.struct/hkuserpreferencesdidchange.md): Notifies observers whenever the user changes his or her preferred units.
