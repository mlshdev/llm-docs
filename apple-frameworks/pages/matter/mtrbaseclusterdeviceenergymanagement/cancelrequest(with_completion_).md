> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/cancelrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/cancelrequest(with:completion:))

# cancelRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelRequest

## Declaration

```swift
func cancelRequest(with params: MTRDeviceEnergyManagementClusterCancelRequestParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func cancelRequest(with params: MTRDeviceEnergyManagementClusterCancelRequestParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to request cancellation of a previous adjustment request in a StartTimeAdjustRequest, ModifyForecastRequest or RequestConstraintBasedForecast command.

# cancelRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelRequest

## Declaration

```objectivec
- (void) cancelRequestWithParams:(MTRDeviceEnergyManagementClusterCancelRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to request cancellation of a previous adjustment request in a StartTimeAdjustRequest, ModifyForecastRequest or RequestConstraintBasedForecast command.
