> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterapplicationlauncher/launchapp(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterapplicationlauncher/launchapp(with:completionhandler:))

# launchApp(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use launchAppWithParams:completion:

## Declaration

```swift
func launchApp(with params: MTRApplicationLauncherClusterLaunchAppParams?, completionHandler: @escaping @Sendable (MTRApplicationLauncherClusterLauncherResponseParams?, (any Error)?) -> Void)
```

```swift
func launchApp(with params: MTRApplicationLauncherClusterLaunchAppParams?) async throws -> MTRApplicationLauncherClusterLauncherResponseParams
```

# launchAppWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use launchAppWithParams:completion:

## Declaration

```objectivec
- (void) launchAppWithParams:(MTRApplicationLauncherClusterLaunchAppParams *) params completionHandler:(void (^)(MTRApplicationLauncherClusterLauncherResponseParams *data, NSError *error)) completionHandler;
```
