> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/requesters](https://developer.apple.com/documentation/cloudkit/ckshare/requesters)

# requesters (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A list of all uninvited users who have requested access to this share.

## Declaration

```swift
var requesters: [CKShare.AccessRequester] { get }
```

<a id="discussion"></a>

## Discussion

When an originator or administrator allows share access requests, uninvited users can request to join the share. All pending access requests appear in this array. CloudKit returns each requester with name components and either an email or phone number.

Either share owners or administrators can respond to these access requests.

<a id="Responding-to-Access-Requests"></a>

### Responding to Access Requests:

- **Approve Requesters:**

  - Fetch the participant information by running [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) with the requester’s [participantLookupInfo](accessrequester/participantlookupinfo.md).
  - Add the resulting participant to the share.
- **Deny Requesters:**

  - Use [denyRequesters(\_:)](denyrequesters%28__%29.md) to remove the requester from the requesters list.
- **Block Requesters:**

  - Use [blockRequesters(\_:)](blockrequesters%28__%29.md) to block requesters.
  - Blocking a requester prevents them from sending future access requests to the share.

# requesters (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A list of all uninvited users who have requested access to this share.

## Declaration

```objectivec
@property (copy, readonly) NSArray<CKShareAccessRequester *> * requesters;
```

<a id="discussion"></a>

## Discussion

When an originator or administrator allows share access requests, uninvited users can request to join the share. All pending access requests appear in this array. CloudKit returns each requester with name components and either an email or phone number.

Either share owners or administrators can respond to these access requests.

<a id="Responding-to-Access-Requests"></a>

### Responding to Access Requests:

- **Approve Requesters:**

  - Fetch the participant information by running [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) with the requester’s [participantLookupInfo](accessrequester/participantlookupinfo.md).
  - Add the resulting participant to the share.
- **Deny Requesters:**

  - Use [denyRequesters:](denyrequesters%28__%29.md) to remove the requester from the requesters list.
- **Block Requesters:**

  - Use [blockRequesters:](blockrequesters%28__%29.md) to block requesters.
  - Blocking a requester prevents them from sending future access requests to the share.
