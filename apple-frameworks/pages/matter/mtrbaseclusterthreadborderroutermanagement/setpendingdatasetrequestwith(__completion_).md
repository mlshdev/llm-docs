> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadborderroutermanagement/setpendingdatasetrequestwith(_:completion:)

# setPendingDatasetRequestWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetPendingDatasetRequest

## Declaration

```swift
func setPendingDatasetRequestWith(_ params: MTRThreadBorderRouterManagementClusterSetPendingDatasetRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setPendingDatasetRequestWith(_ params: MTRThreadBorderRouterManagementClusterSetPendingDatasetRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to set or update the pending Dataset of the Thread network to which the Border Router is connected, if the Border Router supports PANChange Feature.

# setPendingDatasetRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetPendingDatasetRequest

## Declaration

```objectivec
- (void) setPendingDatasetRequestWithParams:(MTRThreadBorderRouterManagementClusterSetPendingDatasetRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to set or update the pending Dataset of the Thread network to which the Border Router is connected, if the Border Router supports PANChange Feature.
