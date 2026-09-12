> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercolorcontrol/movetohueandsaturation(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercolorcontrol/movetohueandsaturation(with:completion:))

# moveToHueAndSaturation(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func moveToHueAndSaturation(with params: MTRColorControlClusterMoveToHueAndSaturationParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func moveToHueAndSaturation(with params: MTRColorControlClusterMoveToHueAndSaturationParams) async throws
```

# moveToHueAndSaturationWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) moveToHueAndSaturationWithParams:(MTRColorControlClusterMoveToHueAndSaturationParams *) params completion:(MTRStatusCompletion) completion;
```
