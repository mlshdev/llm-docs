> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/fetchalllonglivedoperationidswithcompletionhandler:](https://developer.apple.com/documentation/cloudkit/ckcontainer/fetchalllonglivedoperationidswithcompletionhandler:)

# fetchAllLongLivedOperationIDsWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Fetches the IDs of any long-lived operations that are running.

## Declaration

```objectivec
- (void) fetchAllLongLivedOperationIDsWithCompletionHandler:(void (^)(NSArray<NSString *> *outstandingOperationIDs, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block doesn’t return a value and takes the following parameters:

  - **`outstandingOperationsByIDs`**: The IDs of all of the long-lived operations that are running.
  - **`error`**: An error if a problem occurs, or `nil` if CloudKit successfully retrieves the IDs.

<a id="discussion"></a>

## Discussion

A long-lived operation is one that continues to run after the user closes the app. When a long-lived operation completes, or your app or the system cancels it, it’s no longer active and CloudKit doesn’t include its ID in `outstandingOperationsByIDs`. An operation is complete when the system calls its completion handler.

Use the [fetchLongLivedOperationWithID:completionHandler:](fetchlonglivedoperationwithid_completionhandler_.md) method to fetch the operation for a specific ID.

## See Also

### Fetching Long-Lived Operations

- [fetchLongLivedOperationWithID:completionHandler:](fetchlonglivedoperationwithid_completionhandler_.md): Fetches the long-lived operation for the specified operation ID.
