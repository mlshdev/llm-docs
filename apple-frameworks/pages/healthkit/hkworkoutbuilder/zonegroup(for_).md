> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/zonegroup(for:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/zonegroup(for:))

# zoneGroup(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the current zone group for the specified quantity type.

## Declaration

```swift
func zoneGroup(for quantityType: HKQuantityType) -> HKWorkoutZoneGroup?
```

## Parameters

- `quantityType`: The quantity type for which to retrieve zone information.

<a id="return-value"></a>

## Return Value

The zone group with current time-in-zone data, or `nil` if no zone information is available.

<a id="discussion"></a>

## Discussion

This method provides real-time zone duration calculations during an active workout. The durations update as the system processes new samples.

## See Also

### Configuring zone data

- [setCustomZoneConfiguration(\_:for:)](setcustomzoneconfiguration%28__for_%29.md): Overrides the preferred zone configuration with a custom zone for the current workout.
- [zoneConfiguration(for:)](zoneconfiguration%28for_%29.md): Returns the zone configuration for the specified quantity type.
