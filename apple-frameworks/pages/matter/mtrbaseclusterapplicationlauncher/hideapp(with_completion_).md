> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterapplicationlauncher/hideapp(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterapplicationlauncher/hideapp(with:completion:))

# hideApp(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func hideApp(with params: MTRApplicationLauncherClusterHideAppParams?, completion: @escaping @Sendable (MTRApplicationLauncherClusterLauncherResponseParams?, (any Error)?) -> Void)
```

```swift
func hideApp(with params: MTRApplicationLauncherClusterHideAppParams?) async throws -> MTRApplicationLauncherClusterLauncherResponseParams
```

# hideAppWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) hideAppWithParams:(MTRApplicationLauncherClusterHideAppParams *) params completion:(void (^)(MTRApplicationLauncherClusterLauncherResponseParams *data, NSError *error)) completion;
```
