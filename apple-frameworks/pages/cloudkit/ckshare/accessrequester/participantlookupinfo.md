> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/accessrequester/participantlookupinfo](https://developer.apple.com/documentation/cloudkit/ckshare/accessrequester/participantlookupinfo)

# participantLookupInfo (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Lookup information for the requester.

## Declaration

```swift
@NSCopying var participantLookupInfo: CKUserIdentity.LookupInfo { get }
```

<a id="discussion"></a>

## Discussion

Use this lookup info with [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) to fetch the corresponding participant. Once fetched, add the participant to the share to approve the requester.

# participantLookupInfo (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Lookup information for the requester.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CKUserIdentityLookupInfo * participantLookupInfo;
```

<a id="discussion"></a>

## Discussion

Use this lookup info with [CKFetchShareParticipantsOperation](../../ckfetchshareparticipantsoperation.md) to fetch the corresponding participant. Once fetched, add the participant to the share to approve the requester.
