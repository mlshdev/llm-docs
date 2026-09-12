> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdishwasheralarm/modifyenabledalarms(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdishwasheralarm/modifyenabledalarms(with:completion:))

# modifyEnabledAlarms(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ModifyEnabledAlarms

## Declaration

```swift
func modifyEnabledAlarms(with params: MTRDishwasherAlarmClusterModifyEnabledAlarmsParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func modifyEnabledAlarms(with params: MTRDishwasherAlarmClusterModifyEnabledAlarmsParams) async throws
```

<a id="discussion"></a>

## Discussion

This command allows a client to request that an alarm be enabled or suppressed at the server.

# modifyEnabledAlarmsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ModifyEnabledAlarms

## Declaration

```objectivec
- (void) modifyEnabledAlarmsWithParams:(MTRDishwasherAlarmClusterModifyEnabledAlarmsParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command allows a client to request that an alarm be enabled or suppressed at the server.
