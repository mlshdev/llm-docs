> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteraccesscontrol/reviewfabricrestrictions(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteraccesscontrol/reviewfabricrestrictions(with:completion:))

# reviewFabricRestrictions(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ReviewFabricRestrictions

## Declaration

```swift
func reviewFabricRestrictions(with params: MTRAccessControlClusterReviewFabricRestrictionsParams, completion: @escaping @Sendable (MTRAccessControlClusterReviewFabricRestrictionsResponseParams?, (any Error)?) -> Void)
```

```swift
func reviewFabricRestrictions(with params: MTRAccessControlClusterReviewFabricRestrictionsParams) async throws -> MTRAccessControlClusterReviewFabricRestrictionsResponseParams
```

<a id="discussion"></a>

## Discussion

This command signals to the service associated with the device vendor that the fabric administrator would like a review of the current restrictions on the accessing fabric.

# reviewFabricRestrictionsWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ReviewFabricRestrictions

## Declaration

```objectivec
- (void) reviewFabricRestrictionsWithParams:(MTRAccessControlClusterReviewFabricRestrictionsParams *) params completion:(void (^)(MTRAccessControlClusterReviewFabricRestrictionsResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command signals to the service associated with the device vendor that the fabric administrator would like a review of the current restrictions on the accessing fabric.
