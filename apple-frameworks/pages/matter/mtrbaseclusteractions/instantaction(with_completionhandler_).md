> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractions/instantaction(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractions/instantaction(with:completionhandler:))

# instantAction(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use instantActionWithParams:completion:

## Declaration

```swift
func instantAction(with params: MTRActionsClusterInstantActionParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func instantAction(with params: MTRActionsClusterInstantActionParams) async throws
```

# instantActionWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use instantActionWithParams:completion:

## Declaration

```objectivec
- (void) instantActionWithParams:(MTRActionsClusterInstantActionParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
