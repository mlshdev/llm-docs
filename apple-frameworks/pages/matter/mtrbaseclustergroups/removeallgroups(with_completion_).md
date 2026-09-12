> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroups/removeallgroups(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroups/removeallgroups(with:completion:))

# removeAllGroups(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func removeAllGroups(with params: MTRGroupsClusterRemoveAllGroupsParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeAllGroups(with params: MTRGroupsClusterRemoveAllGroupsParams?) async throws
```

# removeAllGroupsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) removeAllGroupsWithParams:(MTRGroupsClusterRemoveAllGroupsParams *) params completion:(MTRStatusCompletion) completion;
```
