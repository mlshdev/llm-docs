> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/starttimeadjustrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/starttimeadjustrequest(with:completion:))

# startTimeAdjustRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command StartTimeAdjustRequest

## Declaration

```swift
func startTimeAdjustRequest(with params: MTRDeviceEnergyManagementClusterStartTimeAdjustRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startTimeAdjustRequest(with params: MTRDeviceEnergyManagementClusterStartTimeAdjustRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to adjust the start time of a Forecast sequence that has not yet started operation (i.e. where the current Forecast StartTime is in the future).

# startTimeAdjustRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command StartTimeAdjustRequest

## Declaration

```objectivec
- (void) startTimeAdjustRequestWithParams:(MTRDeviceEnergyManagementClusterStartTimeAdjustRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to adjust the start time of a Forecast sequence that has not yet started operation (i.e. where the current Forecast StartTime is in the future).
