> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/poweradjustrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/poweradjustrequest(with:completion:))

# powerAdjustRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PowerAdjustRequest

## Declaration

```swift
func powerAdjustRequest(with params: MTRDeviceEnergyManagementClusterPowerAdjustRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func powerAdjustRequest(with params: MTRDeviceEnergyManagementClusterPowerAdjustRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to request an adjustment in the power consumption of an ESA for a specified duration.

# powerAdjustRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PowerAdjustRequest

## Declaration

```objectivec
- (void) powerAdjustRequestWithParams:(MTRDeviceEnergyManagementClusterPowerAdjustRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to request an adjustment in the power consumption of an ESA for a specified duration.
