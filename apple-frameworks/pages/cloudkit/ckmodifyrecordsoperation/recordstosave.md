> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/recordstosave](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/recordstosave)

# recordsToSave (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The records to save to the database.

## Declaration

```swift
var recordsToSave: [CKRecord]? { get set }
```

<a id="discussion"></a>

## Discussion

The initial value of the property is the array that you provide to the [init(recordsToSave:recordIDsToDelete:)](init%28recordstosave_recordidstodelete_%29.md) method. You can modify this array as necessary before you execute the operation. The records must all target the same database, but can belong to different record zones.

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Record Operation

- [recordIDsToDelete](recordidstodelete.md): The IDs of the records to delete permanently from the database.
- [clientChangeTokenData](clientchangetokendata.md): A token that tracks local changes to records.
- [isAtomic](isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](savepolicy.md): The policy to use when saving changes to records.
- [CKModifyRecordsOperation.RecordSavePolicy](recordsavepolicy.md): Constants that indicate which policy to apply when saving records.

# recordsToSave (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The records to save to the database.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CKRecord *> * recordsToSave;
```

<a id="discussion"></a>

## Discussion

The initial value of the property is the array that you provide to the [init(recordsToSave:recordIDsToDelete:)](init%28recordstosave_recordidstodelete_%29.md) method. You can modify this array as necessary before you execute the operation. The records must all target the same database, but can belong to different record zones.

If you intend to change the value of this property, do so before you execute the operation or submit the operation to a queue.

## See Also

### Configuring the Modify Record Operation

- [recordIDsToDelete](recordidstodelete.md): The IDs of the records to delete permanently from the database.
- [clientChangeTokenData](clientchangetokendata.md): A token that tracks local changes to records.
- [atomic](isatomic.md): A Boolean value that indicates whether the entire operation fails when CloudKit can’t update one or more records in a record zone.
- [savePolicy](savepolicy.md): The policy to use when saving changes to records.
- [CKRecordSavePolicy](recordsavepolicy.md): Constants that indicate which policy to apply when saving records.
