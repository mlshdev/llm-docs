> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutactivity/zonegroup(for:)](https://developer.apple.com/documentation/healthkit/hkworkoutactivity/zonegroup(for:))

# zoneGroup(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a zone group for the specified quantity type.

## Declaration

```swift
func zoneGroup(for quantityType: HKQuantityType) -> HKWorkoutZoneGroup?
```

## Parameters

- `quantityType`: The quantity type for which to retrieve zone information.

<a id="return-value"></a>

## Return Value

The zone group for the quantity type, or `nil` if no zone information exists for the given type.

## See Also

### Accessing zone data

- [zoneGroupsByType](zonegroupsbytype.md): A property that contains a dictionary that maps quantity types to their zone groups for this activity.
