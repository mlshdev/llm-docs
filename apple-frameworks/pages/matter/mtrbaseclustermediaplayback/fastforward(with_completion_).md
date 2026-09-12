> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermediaplayback/fastforward(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/fastforward(with:completion:))

# fastForward(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func fastForward(with params: MTRMediaPlaybackClusterFastForwardParams?, completion: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackResponseParams?, (any Error)?) -> Void)
```

```swift
func fastForward(with params: MTRMediaPlaybackClusterFastForwardParams?) async throws -> MTRMediaPlaybackClusterPlaybackResponseParams
```

# fastForwardWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) fastForwardWithParams:(MTRMediaPlaybackClusterFastForwardParams *) params completion:(void (^)(MTRMediaPlaybackClusterPlaybackResponseParams *data, NSError *error)) completion;
```
