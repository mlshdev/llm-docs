> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/perrecorddeleteblock-9czoo](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/perrecorddeleteblock-9czoo)

# perRecordDeleteBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when CloudKit deletes a record.

## Declaration

```swift
var perRecordDeleteBlock: ((CKRecord.ID, Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the record that CloudKit deletes.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either

  - A successful `Result`
  - An error that provides information about a failure deleting the record.

The closure executes once for each record in the [recordIDsToDelete](recordidstodelete.md) property. Each time the closure executes, it executes serially with respect to the other record completion blocks of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
