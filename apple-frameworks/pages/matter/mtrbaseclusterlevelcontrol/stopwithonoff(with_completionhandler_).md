> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterlevelcontrol/stopwithonoff(with:completionhandler:)

# stopWithOnOff(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stopWithOnOffWithParams:completion:

## Declaration

```swift
func stopWithOnOff(with params: MTRLevelControlClusterStopWithOnOffParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func stopWithOnOff(with params: MTRLevelControlClusterStopWithOnOffParams) async throws
```

# stopWithOnOffWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stopWithOnOffWithParams:completion:

## Declaration

```objectivec
- (void) stopWithOnOffWithParams:(MTRLevelControlClusterStopWithOnOffParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
