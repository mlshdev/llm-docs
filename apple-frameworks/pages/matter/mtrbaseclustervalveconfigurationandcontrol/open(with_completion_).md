> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustervalveconfigurationandcontrol/open(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustervalveconfigurationandcontrol/open(with:completion:))

# open(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func open(with params: MTRValveConfigurationAndControlClusterOpenParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func open(with params: MTRValveConfigurationAndControlClusterOpenParams?) async throws
```

# openWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) openWithParams:(MTRValveConfigurationAndControlClusterOpenParams *) params completion:(MTRStatusCompletion) completion;
```
