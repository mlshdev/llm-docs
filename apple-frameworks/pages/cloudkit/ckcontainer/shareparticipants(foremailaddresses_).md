> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/shareparticipants(foremailaddresses:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/shareparticipants(foremailaddresses:))

# shareParticipants(forEmailAddresses:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches share participants with the specified email addresses and returns them to an awaiting caller.

## Declaration

```swift
func shareParticipants(forEmailAddresses emails: [String]) async throws -> [String : Result<CKShare.Participant, any Error>]
```

## Parameters

- `emails`: The share participants’ email addresses.

<a id="return-value"></a>

## Return Value

A dictionary of fetched share participants. The dictionary uses the email addresses you specify in `emails` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched share participant, or an error that describes why CloudKit can’t fetch that share participant.

<a id="discussion"></a>

## Discussion

CloudKit can translate any valid email address into a share participant. If the email address doesn’t correspond to a known iCloud account, then at share-accept-time, CloudKit offers the accepting participant a vetting process. The accepting participant uses this vetting process to link the email address to an iCloud account.

This method searches for share participants asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) and configure it to use the necessary priority.
