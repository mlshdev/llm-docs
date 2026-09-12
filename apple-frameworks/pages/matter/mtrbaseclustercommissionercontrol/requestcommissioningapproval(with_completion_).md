> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercommissionercontrol/requestcommissioningapproval(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercommissionercontrol/requestcommissioningapproval(with:completion:))

# requestCommissioningApproval(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RequestCommissioningApproval

## Declaration

```swift
func requestCommissioningApproval(with params: MTRCommissionerControlClusterRequestCommissioningApprovalParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func requestCommissioningApproval(with params: MTRCommissionerControlClusterRequestCommissioningApprovalParams) async throws
```

<a id="discussion"></a>

## Discussion

This command is sent by a client to request approval for a future CommissionNode call.

# requestCommissioningApprovalWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RequestCommissioningApproval

## Declaration

```objectivec
- (void) requestCommissioningApprovalWithParams:(MTRCommissionerControlClusterRequestCommissioningApprovalParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command is sent by a client to request approval for a future CommissionNode call.
