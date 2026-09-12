> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/onetimeurlforparticipantid:](https://developer.apple.com/documentation/cloudkit/ckshare/onetimeurlforparticipantid:)

# oneTimeURLForParticipantID:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Invitation URLs that any receiver can use to claim the associated participantID and join the share.

## Declaration

```objectivec
- (NSURL *) oneTimeURLForParticipantID:(NSString *) participantID;
```

## Parameters

- `participantID`: The [participantID](../ckshareparticipant/participantid.md) corresponding to the [oneTimeURLParticipant](participant/onetimeurlparticipant%28%29.md) added to the share.

<a id="discussion"></a>

## Discussion

Only available after a share record has been saved to the server for participants created via [oneTimeURLParticipant](participant/onetimeurlparticipant%28%29.md). One-time URLs are stable, and tied to the associated participantIDs as long as the participant is part of the share. Typically, a share owner provides a [URL](url.md) directly to a user invited via their handle. However, any user can also use a one-time URL in the same manner to fetch share metadata and accept the share. After share acceptance, the one-time URL becomes functionally equivalent to the regular [URL](url.md).
