> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalcredentials/updatefabriclabel(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/updatefabriclabel(with:completion:))

# updateFabricLabel(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func updateFabricLabel(with params: MTROperationalCredentialsClusterUpdateFabricLabelParams, completion: @escaping @Sendable (MTROperationalCredentialsClusterNOCResponseParams?, (any Error)?) -> Void)
```

```swift
func updateFabricLabel(with params: MTROperationalCredentialsClusterUpdateFabricLabelParams) async throws -> MTROperationalCredentialsClusterNOCResponseParams
```

# updateFabricLabelWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) updateFabricLabelWithParams:(MTROperationalCredentialsClusterUpdateFabricLabelParams *) params completion:(void (^)(MTROperationalCredentialsClusterNOCResponseParams *data, NSError *error)) completion;
```
