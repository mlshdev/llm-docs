> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdirectory/getoperationaldataset(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdirectory/getoperationaldataset(with:completion:))

# getOperationalDataset(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetOperationalDataset

## Declaration

```swift
func getOperationalDataset(with params: MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams, completion: @escaping @Sendable (MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams?, (any Error)?) -> Void)
```

```swift
func operationalDataset(with params: MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams) async throws -> MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams
```

<a id="discussion"></a>

## Discussion

Retrieves the Thread Operational Dataset with the given Extended PAN ID.

# getOperationalDatasetWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command GetOperationalDataset

## Declaration

```objectivec
- (void) getOperationalDatasetWithParams:(MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams *) params completion:(void (^)(MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

Retrieves the Thread Operational Dataset with the given Extended PAN ID.
