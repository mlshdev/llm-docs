> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didupdateworkoutzone:)

# workoutBuilder(\_:didUpdateWorkoutZone:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS · watchOS 27.0+

Tells the delegate that the person changed zones during the workout.

## Declaration

```swift
optional func workoutBuilder(_ workoutBuilder: HKLiveWorkoutBuilder, didUpdateWorkoutZone zoneUpdate: HKLiveWorkoutZoneUpdate)
```

## Parameters

- `workoutBuilder`: The live workout builder instance.
- `zoneUpdate`: Details about the zone transition and current state.

## Mentioned In

- [Accessing workout zone data](../accessing-workout-zone-data.md)

<a id="discussion"></a>

## Discussion

The system calls this method when the person moves between zones. Use this method to update your app’s interface to reflect the current zone or to provide feedback about zone changes.
