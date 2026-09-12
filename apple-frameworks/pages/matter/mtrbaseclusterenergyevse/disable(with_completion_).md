> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterenergyevse/disable(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterenergyevse/disable(with:completion:))

# disable(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Disable

## Declaration

```swift
func disable(with params: MTREnergyEVSEClusterDisableParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func disable(with params: MTREnergyEVSEClusterDisableParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to disable the EVSE from charging and discharging.

# disableWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Disable

## Declaration

```objectivec
- (void) disableWithParams:(MTREnergyEVSEClusterDisableParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to disable the EVSE from charging and discharging.
