> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteraudiooutput/select(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteraudiooutput/select(with:completionhandler:))

# select(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use selectOutputWithParams:completion:

## Declaration

```swift
func select(with params: MTRAudioOutputClusterSelectOutputParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func select(with params: MTRAudioOutputClusterSelectOutputParams) async throws
```

# selectOutputWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use selectOutputWithParams:completion:

## Declaration

```objectivec
- (void) selectOutputWithParams:(MTRAudioOutputClusterSelectOutputParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
