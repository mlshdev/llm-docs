> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractions/pauseaction(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractions/pauseaction(with:completion:))

# pauseAction(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func pauseAction(with params: MTRActionsClusterPauseActionParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func pauseAction(with params: MTRActionsClusterPauseActionParams) async throws
```

# pauseActionWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) pauseActionWithParams:(MTRActionsClusterPauseActionParams *) params completion:(MTRStatusCompletion) completion;
```
