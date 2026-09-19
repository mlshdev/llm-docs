> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/updatenoc(with:completion:)

# updateNOC(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func updateNOC(with params: MTROperationalCredentialsClusterUpdateNOCParams, completion: @escaping @Sendable (MTROperationalCredentialsClusterNOCResponseParams?, (any Error)?) -> Void)
```

```swift
func updateNOC(with params: MTROperationalCredentialsClusterUpdateNOCParams) async throws -> MTROperationalCredentialsClusterNOCResponseParams
```

# updateNOCWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) updateNOCWithParams:(MTROperationalCredentialsClusterUpdateNOCParams *) params completion:(void (^)(MTROperationalCredentialsClusterNOCResponseParams *data, NSError *error)) completion;
```
