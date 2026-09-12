> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/getholidayschedule(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/getholidayschedule(with:completion:))

# getHolidaySchedule(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getHolidaySchedule(with params: MTRDoorLockClusterGetHolidayScheduleParams, completion: @escaping @Sendable (MTRDoorLockClusterGetHolidayScheduleResponseParams?, (any Error)?) -> Void)
```

```swift
func holidaySchedule(with params: MTRDoorLockClusterGetHolidayScheduleParams) async throws -> MTRDoorLockClusterGetHolidayScheduleResponseParams
```

# getHolidayScheduleWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getHolidayScheduleWithParams:(MTRDoorLockClusterGetHolidayScheduleParams *) params completion:(void (^)(MTRDoorLockClusterGetHolidayScheduleResponseParams *data, NSError *error)) completion;
```
