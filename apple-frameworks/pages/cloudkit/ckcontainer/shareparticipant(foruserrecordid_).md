> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/shareparticipant(foruserrecordid:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/shareparticipant(foruserrecordid:))

# shareParticipant(forUserRecordID:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the share participant with the specified user record ID.

## Declaration

```swift
func shareParticipant(forUserRecordID userRecordID: CKRecord.ID) async throws -> CKShare.Participant
```

## Parameters

- `userRecordID`: The share participant’s user record ID.

<a id="return-value"></a>

## Return Value

The share participant for the user record ID.

<a id="discussion"></a>

## Discussion

This method searches for the share participant asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) and configure it to use the necessary priority.
