> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermediaplayback/skipbackward(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/skipbackward(with:completion:))

# skipBackward(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func skipBackward(with params: MTRMediaPlaybackClusterSkipBackwardParams, completion: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackResponseParams?, (any Error)?) -> Void)
```

```swift
func skipBackward(with params: MTRMediaPlaybackClusterSkipBackwardParams) async throws -> MTRMediaPlaybackClusterPlaybackResponseParams
```

# skipBackwardWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) skipBackwardWithParams:(MTRMediaPlaybackClusterSkipBackwardParams *) params completion:(void (^)(MTRMediaPlaybackClusterPlaybackResponseParams *data, NSError *error)) completion;
```
