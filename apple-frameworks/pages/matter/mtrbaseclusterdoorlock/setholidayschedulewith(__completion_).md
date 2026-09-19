> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/setholidayschedulewith(_:completion:)

# setHolidayScheduleWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func setHolidayScheduleWith(_ params: MTRDoorLockClusterSetHolidayScheduleParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setHolidayScheduleWith(_ params: MTRDoorLockClusterSetHolidayScheduleParams) async throws
```

# setHolidayScheduleWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) setHolidayScheduleWithParams:(MTRDoorLockClusterSetHolidayScheduleParams *) params completion:(MTRStatusCompletion) completion;
```
