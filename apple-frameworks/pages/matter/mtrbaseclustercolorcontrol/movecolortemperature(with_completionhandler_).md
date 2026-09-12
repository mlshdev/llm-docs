> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercolorcontrol/movecolortemperature(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustercolorcontrol/movecolortemperature(with:completionhandler:))

# moveColorTemperature(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use moveColorTemperatureWithParams:completion:

## Declaration

```swift
func moveColorTemperature(with params: MTRColorControlClusterMoveColorTemperatureParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func moveColorTemperature(with params: MTRColorControlClusterMoveColorTemperatureParams) async throws
```

# moveColorTemperatureWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use moveColorTemperatureWithParams:completion:

## Declaration

```objectivec
- (void) moveColorTemperatureWithParams:(MTRColorControlClusterMoveColorTemperatureParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
