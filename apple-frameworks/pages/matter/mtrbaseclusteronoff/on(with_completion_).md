> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteronoff/on(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteronoff/on(with:completion:))

# on(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func on(with params: MTROnOffClusterOnParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func on(with params: MTROnOffClusterOnParams?) async throws
```

# onWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) onWithParams:(MTROnOffClusterOnParams *) params completion:(MTRStatusCompletion) completion;
```
