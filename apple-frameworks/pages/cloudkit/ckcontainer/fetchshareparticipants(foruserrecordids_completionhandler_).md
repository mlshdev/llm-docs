> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchshareparticipants(foruserrecordids:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchshareparticipants(foruserrecordids:completionhandler:))

# fetchShareParticipants(forUserRecordIDs:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches share participants with the specified user record IDs.

## Declaration

```swift
@preconcurrency func fetchShareParticipants(forUserRecordIDs userRecordIDs: [CKRecord.ID], completionHandler: @escaping @Sendable (Result<[CKRecord.ID : Result<CKShare.Participant, any Error>], any Error>) -> Void)
```

## Parameters

- `userRecordIDs`: The share participants’ user record IDs.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- A dictionary of fetched share participants. The dictionary uses the user record IDs you specify in `userRecordIDs` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched share participant, or an error that describes why CloudKit can’t fetch that share participant.

This method searches for share participants asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) and configure it to use the necessary priority.
