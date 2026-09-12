> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlevelcontrol/stop(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlevelcontrol/stop(with:completion:))

# stop(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func stop(with params: MTRLevelControlClusterStopParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func stop(with params: MTRLevelControlClusterStopParams) async throws
```

# stopWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) stopWithParams:(MTRLevelControlClusterStopParams *) params completion:(MTRStatusCompletion) completion;
```
