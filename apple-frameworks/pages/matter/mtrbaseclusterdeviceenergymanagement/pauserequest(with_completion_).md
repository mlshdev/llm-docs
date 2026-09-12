> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/pauserequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/pauserequest(with:completion:))

# pauseRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PauseRequest

## Declaration

```swift
func pauseRequest(with params: MTRDeviceEnergyManagementClusterPauseRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func pauseRequest(with params: MTRDeviceEnergyManagementClusterPauseRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to temporarily pause an operation and reduce the ESAs energy demand.

# pauseRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PauseRequest

## Declaration

```objectivec
- (void) pauseRequestWithParams:(MTRDeviceEnergyManagementClusterPauseRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to temporarily pause an operation and reduce the ESAs energy demand.
