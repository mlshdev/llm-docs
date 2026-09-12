> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwaterheatermanagement/cancelboost(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwaterheatermanagement/cancelboost(with:completion:))

# cancelBoost(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelBoost

## Declaration

```swift
func cancelBoost(with params: MTRWaterHeaterManagementClusterCancelBoostParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func cancelBoost(with params: MTRWaterHeaterManagementClusterCancelBoostParams?) async throws
```

<a id="discussion"></a>

## Discussion

Allows a client to cancel an ongoing Boost operation.

# cancelBoostWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CancelBoost

## Declaration

```objectivec
- (void) cancelBoostWithParams:(MTRWaterHeaterManagementClusterCancelBoostParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

Allows a client to cancel an ongoing Boost operation.
