> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlevelcontrol/movewithonoff(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlevelcontrol/movewithonoff(with:completion:))

# moveWithOnOff(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func moveWithOnOff(with params: MTRLevelControlClusterMoveWithOnOffParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func moveWithOnOff(with params: MTRLevelControlClusterMoveWithOnOffParams) async throws
```

# moveWithOnOffWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) moveWithOnOffWithParams:(MTRLevelControlClusterMoveWithOnOffParams *) params completion:(MTRStatusCompletion) completion;
```
