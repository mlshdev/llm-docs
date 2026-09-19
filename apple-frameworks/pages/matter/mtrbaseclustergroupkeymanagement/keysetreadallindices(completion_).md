> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustergroupkeymanagement/keysetreadallindices(completion:)

# keySetReadAllIndices(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func keySetReadAllIndices(completion: @escaping @Sendable (MTRGroupKeyManagementClusterKeySetReadAllIndicesResponseParams?, (any Error)?) -> Void)
```

```swift
func keySetReadAllIndices() async throws -> MTRGroupKeyManagementClusterKeySetReadAllIndicesResponseParams
```

# keySetReadAllIndicesWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) keySetReadAllIndicesWithCompletion:(void (^)(MTRGroupKeyManagementClusterKeySetReadAllIndicesResponseParams *data, NSError *error)) completion;
```
