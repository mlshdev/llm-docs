> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroups/addgroup(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroups/addgroup(with:completion:))

# addGroup(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func addGroup(with params: MTRGroupsClusterAddGroupParams, completion: @escaping @Sendable (MTRGroupsClusterAddGroupResponseParams?, (any Error)?) -> Void)
```

```swift
func addGroup(with params: MTRGroupsClusterAddGroupParams) async throws -> MTRGroupsClusterAddGroupResponseParams
```

# addGroupWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) addGroupWithParams:(MTRGroupsClusterAddGroupParams *) params completion:(void (^)(MTRGroupsClusterAddGroupResponseParams *data, NSError *error)) completion;
```
