> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchlonglivedoperation(withid:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchlonglivedoperation(withid:completionhandler:))

# fetchLongLivedOperation(withID:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS · watchOS 3.0+ · Swift 4.2+

Fetches the long-lived operation for the specified operation ID.

## Declaration

```swift
@preconcurrency func fetchLongLivedOperation(withID operationID: CKOperation.ID, completionHandler: @escaping @Sendable (CKOperation?, (any Error)?) -> Void)
```

## Parameters

- `operationID`: The operation’s ID.
- `completionHandler`: The closure to execute with the fetch results.

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameters:

- The long-lived operation. If the operation completes, or your app or the system cancels it, this parameter is `nil`.
- An error if a problem occurs, or `nil` if CloudKit successfully retrieves the operation.

A long-lived operation is one that continues to run after the user closes your app. When a long-lived operation completes, the system calls its completion block to notify you.

After setting callback blocks on the returned long-lived operation, and starting the returned long-lived operation on an operation queue, the operation invokes all callbacks made while your app was closed.

## See Also

### Fetching Long-Lived Operations

- [fetchAllLongLivedOperationIDs(completionHandler:)](fetchalllonglivedoperationids%28completionhandler_%29.md): Fetches the IDs of any long-lived operations that are running.
