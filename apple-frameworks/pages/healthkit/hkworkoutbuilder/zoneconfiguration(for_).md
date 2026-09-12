> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/zoneconfiguration(for:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/zoneconfiguration(for:))

# zoneConfiguration(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the zone configuration for the specified quantity type.

## Declaration

```swift
func zoneConfiguration(for quantityType: HKQuantityType) async throws -> HKWorkoutZoneConfiguration?
```

## Parameters

- `quantityType`: The quantity type for which to retrieve the configuration.

<a id="return-value"></a>

## Return Value

This method returns a custom configuration set by `setZoneConfiguration(_:for:)`, if it exists. Otherwise, this method returns the person’s preferred workout zone configuration from the health store.

<a id="discussion"></a>

## Discussion

This method throws an error if the framework can’t retrieve a zone configuration for the given quantity type.

## See Also

### Configuring zone data

- [setCustomZoneConfiguration(\_:for:)](setcustomzoneconfiguration%28__for_%29.md): Overrides the preferred zone configuration with a custom zone for the current workout.
- [zoneGroup(for:)](zonegroup%28for_%29.md): Returns the current zone group for the specified quantity type.
