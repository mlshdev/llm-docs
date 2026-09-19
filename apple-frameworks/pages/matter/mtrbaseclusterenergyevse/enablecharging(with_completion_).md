> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/enablecharging(with:completion:)

# enableCharging(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command EnableCharging

## Declaration

```swift
func enableCharging(with params: MTREnergyEVSEClusterEnableChargingParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func enableCharging(with params: MTREnergyEVSEClusterEnableChargingParams) async throws
```

<a id="discussion"></a>

## Discussion

This command allows a client to enable the EVSE to charge an EV, and to provide or update the maximum and minimum charge current.

# enableChargingWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command EnableCharging

## Declaration

```objectivec
- (void) enableChargingWithParams:(MTREnergyEVSEClusterEnableChargingParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command allows a client to enable the EVSE to charge an EV, and to provide or update the maximum and minimum charge current.
