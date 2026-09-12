> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesoperation/recordwithidwasdeletedblock-912xy](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/recordwithidwasdeletedblock-912xy)

# recordWithIDWasDeletedBlock

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The block to execute when a record no longer exists.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^recordWithIDWasDeletedBlock)(CKRecordID *recordID, CKRecordType recordType);
```

<a id="discussion"></a>

## Discussion

The block returns no value and takes the following parameters:

- **`recordID`**: The deleted record’s ID.
- **`recordType`**: The deleted record’s type.

The operation executes this block once for each record the server deletes after the previous change token. Each time the block executes, it executes serially with respect to the other blocks of the operation. If there aren’t any record deletions, this block doesn’t execute.

Set this property before you execute the operation or submit it to a queue.

## See Also

### Processing the Zone Change Operation Results

- [recordChangedBlock](recordchangedblock.md): Deprecated. The closure to execute with the contents of a changed record.
- [recordZoneChangeTokensUpdatedBlock](recordzonechangetokensupdatedblock.md): The closure to execute when the change token updates.
- [recordZoneFetchCompletionBlock](recordzonefetchcompletionblock.md): Deprecated. The closure to execute when a record zone’s fetch finishes.
- [fetchRecordZoneChangesCompletionBlock](fetchrecordzonechangescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
