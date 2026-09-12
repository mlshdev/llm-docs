> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdeviceenergymanagement/resumerequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdeviceenergymanagement/resumerequest(with:completion:))

# resumeRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ResumeRequest

## Declaration

```swift
func resumeRequest(with params: MTRDeviceEnergyManagementClusterResumeRequestParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func resumeRequest(with params: MTRDeviceEnergyManagementClusterResumeRequestParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to cancel the PauseRequest command and enable earlier resumption of operation.

# resumeRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ResumeRequest

## Declaration

```objectivec
- (void) resumeRequestWithParams:(MTRDeviceEnergyManagementClusterResumeRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to cancel the PauseRequest command and enable earlier resumption of operation.
