> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractions/instantaction(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractions/instantaction(with:completion:))

# instantAction(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func instantAction(with params: MTRActionsClusterInstantActionParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func instantAction(with params: MTRActionsClusterInstantActionParams) async throws
```

# instantActionWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) instantActionWithParams:(MTRActionsClusterInstantActionParams *) params completion:(MTRStatusCompletion) completion;
```
