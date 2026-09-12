> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/shareparticipants(for:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/shareparticipants(for:))

# shareParticipants(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 15.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Fetches share participants with the specified lookup infos and returns them to an awaiting caller.

## Declaration

```swift
func shareParticipants(for lookupInfos: [CKUserIdentity.LookupInfo]) async throws -> [CKUserIdentity.LookupInfo : Result<CKShare.Participant, any Error>]
```

## Parameters

- `lookupInfos`: The share participants’ lookup infos.

<a id="return-value"></a>

## Return Value

A dictionary of fetched share participants. The dictionary uses the lookup infos you specify in `lookupInfos` as its keys. The value of each key is a [Result](https://developer.apple.com/documentation/swift/result) that contains either the corresponding fetched share participant, or an error that describes why CloudKit can’t fetch that share participant.

<a id="discussion"></a>

## Discussion

This method searches for share participants asynchronously and with a low priority. If you want the task to execute with a higher priority, create an instance of [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md) and configure it to use the necessary priority.
