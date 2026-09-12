> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/modifyforecastrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/modifyforecastrequest(with:completion:))

# modifyForecastRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ModifyForecastRequest

## Declaration

```swift
func modifyForecastRequest(with params: MTRDeviceEnergyManagementClusterModifyForecastRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func modifyForecastRequest(with params: MTRDeviceEnergyManagementClusterModifyForecastRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to modify a Forecast within the limits allowed by the ESA.

# modifyForecastRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ModifyForecastRequest

## Declaration

```objectivec
- (void) modifyForecastRequestWithParams:(MTRDeviceEnergyManagementClusterModifyForecastRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to modify a Forecast within the limits allowed by the ESA.
