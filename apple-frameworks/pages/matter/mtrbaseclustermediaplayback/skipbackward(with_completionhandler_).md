> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustermediaplayback/skipbackward(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/skipbackward(with:completionhandler:))

# skipBackward(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use skipBackwardWithParams:completion:

## Declaration

```swift
func skipBackward(with params: MTRMediaPlaybackClusterSkipBackwardParams, completionHandler: @escaping @Sendable (MTRMediaPlaybackClusterPlaybackResponseParams?, (any Error)?) -> Void)
```

```swift
func skipBackward(with params: MTRMediaPlaybackClusterSkipBackwardParams) async throws -> MTRMediaPlaybackClusterPlaybackResponseParams
```

# skipBackwardWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use skipBackwardWithParams:completion:

## Declaration

```objectivec
- (void) skipBackwardWithParams:(MTRMediaPlaybackClusterSkipBackwardParams *) params completionHandler:(void (^)(MTRMediaPlaybackClusterPlaybackResponseParams *data, NSError *error)) completionHandler;
```
