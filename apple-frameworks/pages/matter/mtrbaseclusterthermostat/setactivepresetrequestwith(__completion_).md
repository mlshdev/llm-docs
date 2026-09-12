> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/setactivepresetrequestwith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/setactivepresetrequestwith(_:completion:))

# setActivePresetRequestWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetActivePresetRequest

## Declaration

```swift
func setActivePresetRequestWith(_ params: MTRThermostatClusterSetActivePresetRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setActivePresetRequestWith(_ params: MTRThermostatClusterSetActivePresetRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

This command will set the active preset to the provided preset handle.

# setActivePresetRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetActivePresetRequest

## Declaration

```objectivec
- (void) setActivePresetRequestWithParams:(MTRThermostatClusterSetActivePresetRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command will set the active preset to the provided preset handle.
