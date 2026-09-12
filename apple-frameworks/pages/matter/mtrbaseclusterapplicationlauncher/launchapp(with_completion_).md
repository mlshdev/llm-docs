> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterapplicationlauncher/launchapp(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterapplicationlauncher/launchapp(with:completion:))

# launchApp(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func launchApp(with params: MTRApplicationLauncherClusterLaunchAppParams?, completion: @escaping @Sendable (MTRApplicationLauncherClusterLauncherResponseParams?, (any Error)?) -> Void)
```

```swift
func launchApp(with params: MTRApplicationLauncherClusterLaunchAppParams?) async throws -> MTRApplicationLauncherClusterLauncherResponseParams
```

# launchAppWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) launchAppWithParams:(MTRApplicationLauncherClusterLaunchAppParams *) params completion:(void (^)(MTRApplicationLauncherClusterLauncherResponseParams *data, NSError *error)) completion;
```
