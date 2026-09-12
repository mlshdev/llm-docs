> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevse/cleartargets(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/cleartargets(with:completion:))

# clearTargets(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ClearTargets

## Declaration

```swift
func clearTargets(with params: MTREnergyEVSEClusterClearTargetsParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func clearTargets(with params: MTREnergyEVSEClusterClearTargetsParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to clear all stored charging targets.

# clearTargetsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ClearTargets

## Declaration

```objectivec
- (void) clearTargetsWithParams:(MTREnergyEVSEClusterClearTargetsParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to clear all stored charging targets.
