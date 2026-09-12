> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/zonegroup(for:)](https://developer.apple.com/documentation/healthkit/hkworkout/zonegroup(for:))

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

### Accessing zone data

- [zoneGroupsByType](zonegroupsbytype.md): A property that contains a dictionary that maps quantity types to their zone groups for this workout.
