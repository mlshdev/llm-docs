> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchshareparticipantsoperation/shareparticipantfetchedblock](https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/shareparticipantfetchedblock)

# shareParticipantFetchedBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute as the operation generates individual participants.

> Use perShareParticipantCompletionBlock instead, which surfaces per-share-participant errors

## Declaration

```swift
var shareParticipantFetchedBlock: ((CKShare.Participant) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The participant that the operation generates.

The operation executes this closure once for each item of user data in the [userIdentityLookupInfos](useridentitylookupinfos.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Operation’s Results

- [fetchShareParticipantsCompletionBlock](fetchshareparticipantscompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# shareParticipantFetchedBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute as the operation generates individual participants.

> Use perShareParticipantCompletionBlock instead, which surfaces per-share-participant errors

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^shareParticipantFetchedBlock)(CKShareParticipant *participant);
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The participant that the operation generates.

The operation executes this closure once for each item of user data in the [userIdentityLookupInfos](useridentitylookupinfos.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.

## See Also

### Processing the Operation’s Results

- [fetchShareParticipantsCompletionBlock](fetchshareparticipantscompletionblock.md): Deprecated. The closure to execute when the operation finishes.
