> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadborderroutermanagement/getactivedatasetrequest(with:completion:)

# getActiveDatasetRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetActiveDatasetRequest

## Declaration

```swift
func getActiveDatasetRequest(with params: MTRThreadBorderRouterManagementClusterGetActiveDatasetRequestParams?, completion: @escaping @Sendable (MTRThreadBorderRouterManagementClusterDatasetResponseParams?, (any Error)?) -> Void)
```

```swift
func activeDatasetRequest(with params: MTRThreadBorderRouterManagementClusterGetActiveDatasetRequestParams?) async throws -> MTRThreadBorderRouterManagementClusterDatasetResponseParams
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to request the active operational dataset of the Thread network to which the border router is connected.

# getActiveDatasetRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetActiveDatasetRequest

## Declaration

```objectivec
- (void) getActiveDatasetRequestWithParams:(MTRThreadBorderRouterManagementClusterGetActiveDatasetRequestParams *) params completion:(void (^)(MTRThreadBorderRouterManagementClusterDatasetResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to request the active operational dataset of the Thread network to which the border router is connected.
