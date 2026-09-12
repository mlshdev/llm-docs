> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/recordmatchedblock-7kek0](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/recordmatchedblock-7kek0)

# recordMatchedBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The closure to execute when a record match is available.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(CKRecordID *, CKRecord *, NSError *) recordMatchedBlock;
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameters:

- The ID of the record.
- The record, or `nil` if CloudKit can’t retrieve the record.
- If CloudKit can’t retrieve the record, an error that provides information about the failure; otherwise, `nil`.

After identifying and sorting the records, the query operation executes this closure once for each of the result’s records. The closure executes serially with respect to all other closures of the operation, so you can expect only one closure at a time to execute for this operation.

Set the property’s value before you execute the operation or submit it to a queue.

> **Warning**

> Query indexes update asynchronously so they aren’t always current. If you query for records that you recently changed and don’t allow enough time for those changes to process, the query’s results may be incorrect. The results may not contain the correct records, and the records may be out of order.
