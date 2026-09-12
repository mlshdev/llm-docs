> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercommissionercontrol/commissionnode(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercommissionercontrol/commissionnode(with:completion:))

# commissionNode(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CommissionNode

## Declaration

```swift
func commissionNode(with params: MTRCommissionerControlClusterCommissionNodeParams, completion: @escaping @Sendable (MTRCommissionerControlClusterReverseOpenCommissioningWindowParams?, (any Error)?) -> Void)
```

```swift
func commissionNode(with params: MTRCommissionerControlClusterCommissionNodeParams) async throws -> MTRCommissionerControlClusterReverseOpenCommissioningWindowParams
```

<a id="discussion"></a>

## Discussion

This command is sent by a client to request that the server begins commissioning a previously approved request.

# commissionNodeWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command CommissionNode

## Declaration

```objectivec
- (void) commissionNodeWithParams:(MTRCommissionerControlClusterCommissionNodeParams *) params completion:(void (^)(MTRCommissionerControlClusterReverseOpenCommissioningWindowParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command is sent by a client to request that the server begins commissioning a previously approved request.
