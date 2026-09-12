> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercolorcontrol/movehue(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercolorcontrol/movehue(with:completion:))

# moveHue(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func moveHue(with params: MTRColorControlClusterMoveHueParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func moveHue(with params: MTRColorControlClusterMoveHueParams) async throws
```

# moveHueWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) moveHueWithParams:(MTRColorControlClusterMoveHueParams *) params completion:(MTRStatusCompletion) completion;
```
