> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroupkeymanagement/keysetremove(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroupkeymanagement/keysetremove(with:completion:))

# keySetRemove(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func keySetRemove(with params: MTRGroupKeyManagementClusterKeySetRemoveParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func keySetRemove(with params: MTRGroupKeyManagementClusterKeySetRemoveParams) async throws
```

# keySetRemoveWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) keySetRemoveWithParams:(MTRGroupKeyManagementClusterKeySetRemoveParams *) params completion:(MTRStatusCompletion) completion;
```
