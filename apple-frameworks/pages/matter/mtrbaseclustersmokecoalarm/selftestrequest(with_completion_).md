> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustersmokecoalarm/selftestrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustersmokecoalarm/selftestrequest(with:completion:))

# selfTestRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func selfTestRequest(with params: MTRSmokeCOAlarmClusterSelfTestRequestParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func selfTestRequest(with params: MTRSmokeCOAlarmClusterSelfTestRequestParams?) async throws
```

# selfTestRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) selfTestRequestWithParams:(MTRSmokeCOAlarmClusterSelfTestRequestParams *) params completion:(MTRStatusCompletion) completion;
```
