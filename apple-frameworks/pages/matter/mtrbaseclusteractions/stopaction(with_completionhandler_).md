> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractions/stopaction(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractions/stopaction(with:completionhandler:))

# stopAction(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stopActionWithParams:completion:

## Declaration

```swift
func stopAction(with params: MTRActionsClusterStopActionParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func stopAction(with params: MTRActionsClusterStopActionParams) async throws
```

# stopActionWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stopActionWithParams:completion:

## Declaration

```objectivec
- (void) stopActionWithParams:(MTRActionsClusterStopActionParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
