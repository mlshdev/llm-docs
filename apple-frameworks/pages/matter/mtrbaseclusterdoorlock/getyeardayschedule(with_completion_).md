> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/getyeardayschedule(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/getyeardayschedule(with:completion:))

# getYearDaySchedule(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getYearDaySchedule(with params: MTRDoorLockClusterGetYearDayScheduleParams, completion: @escaping @Sendable (MTRDoorLockClusterGetYearDayScheduleResponseParams?, (any Error)?) -> Void)
```

```swift
func yearDaySchedule(with params: MTRDoorLockClusterGetYearDayScheduleParams) async throws -> MTRDoorLockClusterGetYearDayScheduleResponseParams
```

# getYearDayScheduleWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getYearDayScheduleWithParams:(MTRDoorLockClusterGetYearDayScheduleParams *) params completion:(void (^)(MTRDoorLockClusterGetYearDayScheduleResponseParams *data, NSError *error)) completion;
```
