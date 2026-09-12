> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroups/viewgroup(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroups/viewgroup(with:completion:))

# viewGroup(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func viewGroup(with params: MTRGroupsClusterViewGroupParams, completion: @escaping @Sendable (MTRGroupsClusterViewGroupResponseParams?, (any Error)?) -> Void)
```

```swift
func viewGroup(with params: MTRGroupsClusterViewGroupParams) async throws -> MTRGroupsClusterViewGroupResponseParams
```

# viewGroupWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) viewGroupWithParams:(MTRGroupsClusterViewGroupParams *) params completion:(void (^)(MTRGroupsClusterViewGroupResponseParams *data, NSError *error)) completion;
```
