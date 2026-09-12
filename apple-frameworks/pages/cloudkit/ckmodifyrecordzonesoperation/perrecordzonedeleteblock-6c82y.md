> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordzonesoperation/perrecordzonedeleteblock-6c82y](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/perrecordzonedeleteblock-6c82y)

# perRecordZoneDeleteBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when CloudKit deletes a record zone.

## Declaration

```swift
var perRecordZoneDeleteBlock: ((CKRecordZone.ID, Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the record zone that CloudKit deletes.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either

  - A successful `Result`
  - An error that provides information about a failure deleting the record zone.

The closure executes once for each record zone in the [recordZoneIDsToDelete](recordzoneidstodelete.md) property. Each time the closure executes, it executes serially with respect to the other record zone completion blocks of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
