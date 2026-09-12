> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/setactiveschedulerequestwith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/setactiveschedulerequestwith(_:completion:))

# setActiveScheduleRequestWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetActiveScheduleRequest

## Declaration

```swift
func setActiveScheduleRequestWith(_ params: MTRThermostatClusterSetActiveScheduleRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setActiveScheduleRequestWith(_ params: MTRThermostatClusterSetActiveScheduleRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

This command will set the active schedule to the provided schedule handle.

# setActiveScheduleRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetActiveScheduleRequest

## Declaration

```objectivec
- (void) setActiveScheduleRequestWithParams:(MTRThermostatClusterSetActiveScheduleRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command will set the active schedule to the provided schedule handle.
