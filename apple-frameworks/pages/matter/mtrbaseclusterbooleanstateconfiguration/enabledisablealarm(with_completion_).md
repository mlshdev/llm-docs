> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbooleanstateconfiguration/enabledisablealarm(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbooleanstateconfiguration/enabledisablealarm(with:completion:))

# enableDisableAlarm(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func enableDisableAlarm(with params: MTRBooleanStateConfigurationClusterEnableDisableAlarmParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func enableDisableAlarm(with params: MTRBooleanStateConfigurationClusterEnableDisableAlarmParams) async throws
```

# enableDisableAlarmWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) enableDisableAlarmWithParams:(MTRBooleanStateConfigurationClusterEnableDisableAlarmParams *) params completion:(MTRStatusCompletion) completion;
```
