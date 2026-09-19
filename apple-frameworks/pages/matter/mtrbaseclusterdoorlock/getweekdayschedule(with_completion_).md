> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/getweekdayschedule(with:completion:)

# getWeekDaySchedule(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getWeekDaySchedule(with params: MTRDoorLockClusterGetWeekDayScheduleParams, completion: @escaping @Sendable (MTRDoorLockClusterGetWeekDayScheduleResponseParams?, (any Error)?) -> Void)
```

```swift
func weekDaySchedule(with params: MTRDoorLockClusterGetWeekDayScheduleParams) async throws -> MTRDoorLockClusterGetWeekDayScheduleResponseParams
```

# getWeekDayScheduleWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getWeekDayScheduleWithParams:(MTRDoorLockClusterGetWeekDayScheduleParams *) params completion:(void (^)(MTRDoorLockClusterGetWeekDayScheduleResponseParams *data, NSError *error)) completion;
```
