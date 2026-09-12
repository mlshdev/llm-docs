> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/setyeardayschedulewith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/setyeardayschedulewith(_:completion:))

# setYearDayScheduleWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func setYearDayScheduleWith(_ params: MTRDoorLockClusterSetYearDayScheduleParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setYearDayScheduleWith(_ params: MTRDoorLockClusterSetYearDayScheduleParams) async throws
```

# setYearDayScheduleWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) setYearDayScheduleWithParams:(MTRDoorLockClusterSetYearDayScheduleParams *) params completion:(MTRStatusCompletion) completion;
```
