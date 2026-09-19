> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterthreadnetworkdirectory/getoperationaldataset(with:expectedvalues:expectedvalueinterval:completion:)

# getOperationalDataset(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func getOperationalDataset(with params: MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams?, (any Error)?) -> Void)
```

```swift
func operationalDataset(with params: MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams
```

# getOperationalDatasetWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) getOperationalDatasetWithParams:(MTRThreadNetworkDirectoryClusterGetOperationalDatasetParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRThreadNetworkDirectoryClusterOperationalDatasetResponseParams *data, NSError *error)) completion;
```
