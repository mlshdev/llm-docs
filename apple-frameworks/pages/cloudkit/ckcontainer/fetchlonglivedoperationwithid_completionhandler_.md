> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchlonglivedoperationwithid:completionhandler:](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchlonglivedoperationwithid:completionhandler:)

# fetchLongLivedOperationWithID:completionHandler:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Fetches the long-lived operation for the specified operation ID.

## Declaration

```objectivec
- (void) fetchLongLivedOperationWithID:(CKOperationID) operationID completionHandler:(void (^)(CKOperation *outstandingOperation, NSError *error)) completionHandler;
```

## Parameters

- `operationID`: The operation’s ID.
- `completionHandler`: The block doesn’t return a value and takes the following parameters:

  - **`outstandingOperation`**: The long-lived operation. If the operation completes, or your app or the system cancels it, this parameter is `nil`.
  - **`error`**: An error if a problem occurs, or `nil` if CloudKit successfully retrieves the operation.

<a id="discussion"></a>

## Discussion

A long-lived operation is one that continues to run after the user closes your app. When a long-lived operation completes, the system calls its completion block to notify you.

## See Also

### Fetching Long-Lived Operations

- [fetchAllLongLivedOperationIDsWithCompletionHandler:](fetchalllonglivedoperationidswithcompletionhandler_.md): Fetches the IDs of any long-lived operations that are running.
