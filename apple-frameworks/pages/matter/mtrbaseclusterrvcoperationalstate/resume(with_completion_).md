> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterrvcoperationalstate/resume(with:completion:)

# resume(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func resume(with params: MTRRVCOperationalStateClusterResumeParams?, completion: @escaping @Sendable (MTRRVCOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func resume(with params: MTRRVCOperationalStateClusterResumeParams?) async throws -> MTRRVCOperationalStateClusterOperationalCommandResponseParams
```

# resumeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) resumeWithParams:(MTRRVCOperationalStateClusterResumeParams *) params completion:(void (^)(MTRRVCOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```
