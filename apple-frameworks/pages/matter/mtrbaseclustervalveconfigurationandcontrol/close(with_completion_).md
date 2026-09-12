> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustervalveconfigurationandcontrol/close(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustervalveconfigurationandcontrol/close(with:completion:))

# close(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func close(with params: MTRValveConfigurationAndControlClusterCloseParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func close(with params: MTRValveConfigurationAndControlClusterCloseParams?) async throws
```

# closeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) closeWithParams:(MTRValveConfigurationAndControlClusterCloseParams *) params completion:(MTRStatusCompletion) completion;
```
