> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/cancelpoweradjustrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/cancelpoweradjustrequest(with:completion:))

# cancelPowerAdjustRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelPowerAdjustRequest

## Declaration

```swift
func cancelPowerAdjustRequest(with params: MTRDeviceEnergyManagementClusterCancelPowerAdjustRequestParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func cancelPowerAdjustRequest(with params: MTRDeviceEnergyManagementClusterCancelPowerAdjustRequestParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to cancel an ongoing PowerAdjustmentRequest operation.

# cancelPowerAdjustRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelPowerAdjustRequest

## Declaration

```objectivec
- (void) cancelPowerAdjustRequestWithParams:(MTRDeviceEnergyManagementClusterCancelPowerAdjustRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to cancel an ongoing PowerAdjustmentRequest operation.
