> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonesoperation/perrecordzoneresultblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/perrecordzoneresultblock)

# perRecordZoneResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The closure to execute when a record zone becomes available.

## Declaration

```swift
var perRecordZoneResultBlock: ((CKRecordZone.ID, Result<CKRecordZone, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

This property is a closure that returns no value and has the following parameters:

- The ID of the record zone.
- A [Result](https://developer.apple.com/documentation/swift/result) that contains either a retrieved record zone, or an error that describes why CloudKit can’t retrieve the record zone.

The fetch operation executes this closure once for each record zone ID in the [recordZoneIDs](recordzoneids.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
