> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterrvcoperationalstate/pause(with:completion:)

# pause(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func pause(with params: MTRRVCOperationalStateClusterPauseParams?, completion: @escaping @Sendable (MTRRVCOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func pause(with params: MTRRVCOperationalStateClusterPauseParams?) async throws -> MTRRVCOperationalStateClusterOperationalCommandResponseParams
```

# pauseWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) pauseWithParams:(MTRRVCOperationalStateClusterPauseParams *) params completion:(void (^)(MTRRVCOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```
