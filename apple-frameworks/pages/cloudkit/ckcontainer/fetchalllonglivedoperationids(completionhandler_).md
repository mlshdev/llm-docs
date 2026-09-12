> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchalllonglivedoperationids(completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchalllonglivedoperationids(completionhandler:))

# fetchAllLongLivedOperationIDs(completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS · watchOS 3.0+ · Swift 4.2+

Fetches the IDs of any long-lived operations that are running.

## Declaration

```swift
@preconcurrency func fetchAllLongLivedOperationIDs(completionHandler: @escaping @Sendable ([CKOperation.ID]?, (any Error)?) -> Void)
```

## Parameters

- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The IDs of all of the long-lived operations that are running.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the IDs.

A long-lived operation is one that continues to run after the user closes your app. When a long-lived operation completes, or your app or the system cancels it, it’s no longer active and CloudKit doesn’t include its ID in `outstandingOperationsByIDs`. An operation is complete when the system calls its completion handler.

Use the [longLivedOperation(for:)](longlivedoperation%28for_%29.md) method to fetch the operation for a specific ID.

## See Also

### Fetching Long-Lived Operations

- [fetchLongLivedOperation(withID:completionHandler:)](fetchlonglivedoperation%28withid_completionhandler_%29.md): Fetches the long-lived operation for the specified operation ID.
