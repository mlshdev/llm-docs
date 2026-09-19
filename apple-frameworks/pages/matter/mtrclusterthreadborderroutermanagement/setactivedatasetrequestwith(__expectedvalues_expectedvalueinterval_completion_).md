> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterthreadborderroutermanagement/setactivedatasetrequestwith(_:expectedvalues:expectedvalueinterval:completion:)

# setActiveDatasetRequestWith(\_:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func setActiveDatasetRequestWith(_ params: MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setActiveDatasetRequestWith(_ params: MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws
```

# setActiveDatasetRequestWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) setActiveDatasetRequestWithParams:(MTRThreadBorderRouterManagementClusterSetActiveDatasetRequestParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(MTRStatusCompletion) completion;
```
