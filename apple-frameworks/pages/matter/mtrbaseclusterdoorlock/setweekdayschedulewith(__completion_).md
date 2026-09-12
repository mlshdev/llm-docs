> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/setweekdayschedulewith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/setweekdayschedulewith(_:completion:))

# setWeekDayScheduleWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func setWeekDayScheduleWith(_ params: MTRDoorLockClusterSetWeekDayScheduleParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setWeekDayScheduleWith(_ params: MTRDoorLockClusterSetWeekDayScheduleParams) async throws
```

# setWeekDayScheduleWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) setWeekDayScheduleWithParams:(MTRDoorLockClusterSetWeekDayScheduleParams *) params completion:(MTRStatusCompletion) completion;
```
