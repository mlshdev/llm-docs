> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteraccesscontrol/reviewfabricrestrictions(with:expectedvalues:expectedvalueinterval:completion:)](https://developer.apple.com/documentation/matter/mtrclusteraccesscontrol/reviewfabricrestrictions(with:expectedvalues:expectedvalueinterval:completion:))

# reviewFabricRestrictions(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func reviewFabricRestrictions(with params: MTRAccessControlClusterReviewFabricRestrictionsParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRAccessControlClusterReviewFabricRestrictionsResponseParams?, (any Error)?) -> Void)
```

```swift
func reviewFabricRestrictions(with params: MTRAccessControlClusterReviewFabricRestrictionsParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRAccessControlClusterReviewFabricRestrictionsResponseParams
```

# reviewFabricRestrictionsWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) reviewFabricRestrictionsWithParams:(MTRAccessControlClusterReviewFabricRestrictionsParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRAccessControlClusterReviewFabricRestrictionsResponseParams *data, NSError *error)) completion;
```
