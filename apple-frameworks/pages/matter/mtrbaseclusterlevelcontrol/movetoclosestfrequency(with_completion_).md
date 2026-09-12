> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlevelcontrol/movetoclosestfrequency(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlevelcontrol/movetoclosestfrequency(with:completion:))

# moveToClosestFrequency(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func moveToClosestFrequency(with params: MTRLevelControlClusterMoveToClosestFrequencyParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func moveToClosestFrequency(with params: MTRLevelControlClusterMoveToClosestFrequencyParams) async throws
```

# moveToClosestFrequencyWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) moveToClosestFrequencyWithParams:(MTRLevelControlClusterMoveToClosestFrequencyParams *) params completion:(MTRStatusCompletion) completion;
```
