> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercontentlauncher/launchcontent(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustercontentlauncher/launchcontent(with:completionhandler:))

# launchContent(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use launchContentWithParams:completion:

## Declaration

```swift
func launchContent(with params: MTRContentLauncherClusterLaunchContentParams, completionHandler: @escaping @Sendable (MTRContentLauncherClusterLaunchResponseParams?, (any Error)?) -> Void)
```

```swift
func launchContent(with params: MTRContentLauncherClusterLaunchContentParams) async throws -> MTRContentLauncherClusterLaunchResponseParams
```

# launchContentWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use launchContentWithParams:completion:

## Declaration

```objectivec
- (void) launchContentWithParams:(MTRContentLauncherClusterLaunchContentParams *) params completionHandler:(void (^)(MTRContentLauncherClusterLaunchResponseParams *data, NSError *error)) completionHandler;
```
