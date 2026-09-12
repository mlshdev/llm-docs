> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/recordidstodelete](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/recordidstodelete)

# recordIDsToDelete (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The IDs of the records to delete permanently from the database.

## Declaration

```swift
var recordIDsToDelete: [CKRecord.ID]? { get set }
```

<a id="discussion"></a>

## Discussion

An array of [CKRecord.ID](../ckrecord/id.md) objects that identifies the records to delete. The initial value of the property is the array of record IDs that you provide to the [init(recordsToSave:recordIDsToDelete:)](init%28recordstosave_recordidstodelete_%29.md) method.

When deleting records, the operation reports progress only on the records with the IDs that you specify in this property. Deleting records can trigger the deletion of related records if there is an owner-owned relationship between the records involving a [CKRecord.Reference](../ckrecord/reference.md) object. When additional deletions occur, CloudKit doesn’t pass them to the progress handler of the operation. For that reason, it’s important to understand the implications of the ownership model you use when you relate records to each other through a [CKRecord.Reference](../ckrecord/reference.md) object. For more information about owner-owned relationships, see [CKRecord.Reference](../ckrecord/reference.md).

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Record Operation

- [recordsToSave](recordstosave.md): The records to save to the database.
- [clientChangeTokenData](clientchangetokendata.md): A token that tracks local changes to records.
- [isAtomic](isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](savepolicy.md): The policy to use when saving changes to records.
- [CKModifyRecordsOperation.RecordSavePolicy](recordsavepolicy.md): Constants that indicate which policy to apply when saving records.

# recordIDsToDelete (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The IDs of the records to delete permanently from the database.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKRecordID *> * recordIDsToDelete;
```

<a id="discussion"></a>

## Discussion

An array of [CKRecordID](../ckrecord/id.md) objects that identifies the records to delete. The initial value of the property is the array of record IDs that you provide to the [init(recordsToSave:recordIDsToDelete:)](init%28recordstosave_recordidstodelete_%29.md) method.

When deleting records, the operation reports progress only on the records with the IDs that you specify in this property. Deleting records can trigger the deletion of related records if there is an owner-owned relationship between the records involving a [CKReference](../ckrecord/reference.md) object. When additional deletions occur, CloudKit doesn’t pass them to the progress handler of the operation. For that reason, it’s important to understand the implications of the ownership model you use when you relate records to each other through a [CKReference](../ckrecord/reference.md) object. For more information about owner-owned relationships, see [CKReference](../ckrecord/reference.md).

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Record Operation

- [recordsToSave](recordstosave.md): The records to save to the database.
- [clientChangeTokenData](clientchangetokendata.md): A token that tracks local changes to records.
- [atomic](isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](savepolicy.md): The policy to use when saving changes to records.
- [CKRecordSavePolicy](recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
