> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/longlivedoperation(for:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/longlivedoperation(for:))

# longLivedOperation(for:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Fetches the long-lived operation for the specified operation ID and returns it to an awaiting caller.

## Declaration

```swift
func longLivedOperation(for operationID: CKOperation.ID) async throws -> CKOperation?
```

## Parameters

- `operationID`: The operation’s ID.

<a id="return-value"></a>

## Return Value

The long-lived operation, or `nil` if the operation completes, or your app or the system cancels it

<a id="discussion"></a>

## Discussion

A long-lived operation is one that continues to run after the user closes your app. When a long-lived operation completes, the system calls its completion block to notify you.

After setting callback blocks on the returned long-lived operation, and starting the returned long-lived operation on an operation queue, the operation invokes all callbacks made while your app was closed.
