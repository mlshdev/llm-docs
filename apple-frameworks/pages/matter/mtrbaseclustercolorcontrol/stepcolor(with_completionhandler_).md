> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercolorcontrol/stepcolor(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustercolorcontrol/stepcolor(with:completionhandler:))

# stepColor(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stepColorWithParams:completion:

## Declaration

```swift
func stepColor(with params: MTRColorControlClusterStepColorParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func stepColor(with params: MTRColorControlClusterStepColorParams) async throws
```

# stepColorWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use stepColorWithParams:completion:

## Declaration

```objectivec
- (void) stepColorWithParams:(MTRColorControlClusterStepColorParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
