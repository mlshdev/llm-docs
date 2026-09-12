> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbasic/mfgspecificping(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbasic/mfgspecificping(with:completionhandler:))

# mfgSpecificPing(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use mfgSpecificPingWithParams:completion:

## Declaration

```swift
func mfgSpecificPing(with params: MTRBasicClusterMfgSpecificPingParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func mfgSpecificPing(with params: MTRBasicClusterMfgSpecificPingParams?) async throws
```

# mfgSpecificPingWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use mfgSpecificPingWithParams:completion:

## Declaration

```objectivec
- (void) mfgSpecificPingWithParams:(MTRBasicClusterMfgSpecificPingParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
