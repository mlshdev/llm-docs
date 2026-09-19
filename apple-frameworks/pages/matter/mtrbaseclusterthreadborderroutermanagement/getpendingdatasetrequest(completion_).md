> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterthreadborderroutermanagement/getpendingdatasetrequest(completion:)

# getPendingDatasetRequest(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func getPendingDatasetRequest(completion: @escaping @Sendable (MTRThreadBorderRouterManagementClusterDatasetResponseParams?, (any Error)?) -> Void)
```

```swift
func pendingDatasetRequest() async throws -> MTRThreadBorderRouterManagementClusterDatasetResponseParams
```

# getPendingDatasetRequestWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) getPendingDatasetRequestWithCompletion:(void (^)(MTRThreadBorderRouterManagementClusterDatasetResponseParams *data, NSError *error)) completion;
```
