> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadborderroutermanagement/setactivedatasetrequestwith(_:completion:)

# setActiveDatasetRequestWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetActiveDatasetRequest

## Declaration

```swift
func setActiveDatasetRequestWith(_ params: MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setActiveDatasetRequestWith(_ params: MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams) async throws
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to set the active Dataset of the Thread network to which the Border Router is connected, when there is no active dataset already.

# setActiveDatasetRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command SetActiveDatasetRequest

## Declaration

```objectivec
- (void) setActiveDatasetRequestWithParams:(MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command SHALL be used to set the active Dataset of the Thread network to which the Border Router is connected, when there is no active dataset already.
