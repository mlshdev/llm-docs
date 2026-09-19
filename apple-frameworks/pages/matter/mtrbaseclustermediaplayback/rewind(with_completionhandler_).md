> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/rewind(with:completionhandler:)

# rewind(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use rewindWithParams:completion:

## Declaration

```swift
func rewind(with params: MTRMediaPlaybackClusterRewindParams?, completionHandler: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackResponseParams?, (any Error)?) -> Void)
```

```swift
func rewind(with params: MTRMediaPlaybackClusterRewindParams?) async throws -> MTRMediaPlaybackClusterPlaybackResponseParams
```

# rewindWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use rewindWithParams:completion:

## Declaration

```objectivec
- (void) rewindWithParams:(MTRMediaPlaybackClusterRewindParams *) params completionHandler:(void (^)(MTRMediaPlaybackClusterPlaybackResponseParams *data, NSError *error)) completionHandler;
```
