> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterfancontrol/step(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterfancontrol/step(with:completion:))

# step(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func step(with params: MTRFanControlClusterStepParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func step(with params: MTRFanControlClusterStepParams) async throws
```

# stepWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) stepWithParams:(MTRFanControlClusterStepParams *) params completion:(MTRStatusCompletion) completion;
```
