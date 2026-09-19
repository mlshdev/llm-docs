> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadborderroutermanagement/getpendingdatasetrequest(with:completion:)

# getPendingDatasetRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetPendingDatasetRequest

## Declaration

```swift
func getPendingDatasetRequest(with params: MTRThreadBorderRouterManagementClusterGetPendingDatasetRequestParams?, completion: @escaping @Sendable (MTRThreadBorderRouterManagementClusterDatasetResponseParams?, (any Error)?) -> Void)
```

```swift
func pendingDatasetRequest(with params: MTRThreadBorderRouterManagementClusterGetPendingDatasetRequestParams?) async throws -> MTRThreadBorderRouterManagementClusterDatasetResponseParams
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to request the pending dataset of the Thread network to which the border router is connected.

# getPendingDatasetRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetPendingDatasetRequest

## Declaration

```objectivec
- (void) getPendingDatasetRequestWithParams:(MTRThreadBorderRouterManagementClusterGetPendingDatasetRequestParams *) params completion:(void (^)(MTRThreadBorderRouterManagementClusterDatasetResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to request the pending dataset of the Thread network to which the border router is connected.
