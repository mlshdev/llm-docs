> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/gettargetswith(_:completion:)

# getTargetsWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetTargets

## Declaration

```swift
func getTargetsWith(_ params: MTREnergyEVSEClusterGetTargetsParams?, completion: @escaping @Sendable (MTREnergyEVSEClusterGetTargetsResponseParams?, (any Error)?) -> Void)
```

```swift
func targets(with params: MTREnergyEVSEClusterGetTargetsParams?) async throws -> MTREnergyEVSEClusterGetTargetsResponseParams
```

<a id="discussion"></a>

## Discussion

Allows a client to retrieve the current set of charging targets.

# getTargetsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetTargets

## Declaration

```objectivec
- (void) getTargetsWithParams:(MTREnergyEVSEClusterGetTargetsParams *) params completion:(void (^)(MTREnergyEVSEClusterGetTargetsResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to retrieve the current set of charging targets.
