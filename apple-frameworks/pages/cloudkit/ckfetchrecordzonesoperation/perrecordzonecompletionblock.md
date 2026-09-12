> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonesoperation/perrecordzonecompletionblock](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/perrecordzonecompletionblock)

# perRecordZoneCompletionBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The closure to execute as the operation fetches individual record zones.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(CKRecordZoneID *, CKRecordZone *, NSError *) perRecordZoneCompletionBlock;
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The ID of the record zone.
- The record zone, or `nil` if CloudKit can’t fetch the record zone.
- If CloudKit can’t fetch the record zone, this parameter provides information about the failure; otherwise, it’s `nil`.

The operation executes this closure once for each record zone ID in the [recordZoneIDs](recordzoneids.md) property. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or submit the operation to a queue.
