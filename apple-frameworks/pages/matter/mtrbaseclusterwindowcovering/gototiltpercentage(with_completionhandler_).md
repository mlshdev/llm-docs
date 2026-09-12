> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwindowcovering/gototiltpercentage(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwindowcovering/gototiltpercentage(with:completionhandler:))

# goToTiltPercentage(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use goToTiltPercentageWithParams:completion:

## Declaration

```swift
func goToTiltPercentage(with params: MTRWindowCoveringClusterGoToTiltPercentageParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func goToTiltPercentage(with params: MTRWindowCoveringClusterGoToTiltPercentageParams) async throws
```

# goToTiltPercentageWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use goToTiltPercentageWithParams:completion:

## Declaration

```objectivec
- (void) goToTiltPercentageWithParams:(MTRWindowCoveringClusterGoToTiltPercentageParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
