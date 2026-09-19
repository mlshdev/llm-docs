> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/settargetswith(_:completion:)

# setTargetsWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetTargets

## Declaration

```swift
func setTargetsWith(_ params: MTREnergyEVSEClusterSetTargetsParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setTargetsWith(_ params: MTREnergyEVSEClusterSetTargetsParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to set the user specified charging targets.

# setTargetsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetTargets

## Declaration

```objectivec
- (void) setTargetsWithParams:(MTREnergyEVSEClusterSetTargetsParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to set the user specified charging targets.
