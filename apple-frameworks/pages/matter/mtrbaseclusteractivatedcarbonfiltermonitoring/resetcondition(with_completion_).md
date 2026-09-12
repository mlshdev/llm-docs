> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractivatedcarbonfiltermonitoring/resetcondition(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractivatedcarbonfiltermonitoring/resetcondition(with:completion:))

# resetCondition(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func resetCondition(with params: MTRActivatedCarbonFilterMonitoringClusterResetConditionParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func resetCondition(with params: MTRActivatedCarbonFilterMonitoringClusterResetConditionParams?) async throws
```

# resetConditionWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) resetConditionWithParams:(MTRActivatedCarbonFilterMonitoringClusterResetConditionParams *) params completion:(MTRStatusCompletion) completion;
```
