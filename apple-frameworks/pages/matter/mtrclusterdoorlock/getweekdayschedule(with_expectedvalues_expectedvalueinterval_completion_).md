> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterdoorlock/getweekdayschedule(with:expectedvalues:expectedvalueinterval:completion:)

# getWeekDaySchedule(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getWeekDaySchedule(with params: MTRDoorLockClusterGetWeekDayScheduleParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRDoorLockClusterGetWeekDayScheduleResponseParams?, (any Error)?) -> Void)
```

```swift
func weekDaySchedule(with params: MTRDoorLockClusterGetWeekDayScheduleParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRDoorLockClusterGetWeekDayScheduleResponseParams
```

# getWeekDayScheduleWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getWeekDayScheduleWithParams:(MTRDoorLockClusterGetWeekDayScheduleParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRDoorLockClusterGetWeekDayScheduleResponseParams *data, NSError *error)) completion;
```
