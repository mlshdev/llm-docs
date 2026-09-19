> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/stop(with:completionhandler:)

# stop(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stopWithParams:completion:

## Declaration

```swift
func stop(with params: MTRMediaPlaybackClusterStopPlaybackParams?, completionHandler: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackResponseParams?, (any Error)?) -> Void)
```

```swift
func stop(with params: MTRMediaPlaybackClusterStopPlaybackParams?) async throws -> MTRMediaPlaybackClusterPlaybackResponseParams
```

# stopPlaybackWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stopWithParams:completion:

## Declaration

```objectivec
- (void) stopPlaybackWithParams:(MTRMediaPlaybackClusterStopPlaybackParams *) params completionHandler:(void (^)(MTRMediaPlaybackClusterPlaybackResponseParams *data, NSError *error)) completionHandler;
```
