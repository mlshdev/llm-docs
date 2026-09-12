> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/recordsavepolicy](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/recordsavepolicy)

# CKModifyRecordsOperation.RecordSavePolicy (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate which policy to apply when saving records.

## Declaration

```swift
enum RecordSavePolicy
```

## Topics

### Save Policies

- [CKModifyRecordsOperation.RecordSavePolicy.ifServerRecordUnchanged](recordsavepolicy/ifserverrecordunchanged.md): A policy that instructs CloudKit to only proceed if the record’s change tag matches that of the server’s copy.
- [CKModifyRecordsOperation.RecordSavePolicy.changedKeys](recordsavepolicy/changedkeys.md): A policy that instructs CloudKit to save only the fields of a record that contain changes.
- [CKModifyRecordsOperation.RecordSavePolicy.allKeys](recordsavepolicy/allkeys.md): A policy that instructs CloudKit to save all keys of a record, even those without changes.

### Initializers

- [init(rawValue:)](recordsavepolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying Records

- [modifyRecords(saving:deleting:savePolicy:atomically:)](../ckdatabase/modifyrecords%28saving_deleting_savepolicy_atomically_%29.md): Modifies the specified records and returns the results to an awaiting caller.
- [modifyRecords(saving:deleting:savePolicy:atomically:completionHandler:)](../ckdatabase/modifyrecords%28saving_deleting_savepolicy_atomically_completionhandler_%29.md): Modifies the specified records and delivers the results to a completion handler.
- [save(\_:completionHandler:)](../ckdatabase/save%28__completionhandler_%29-3tatz.md): Saves a specific record.
- [delete(withRecordID:completionHandler:)](../ckdatabase/delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.

# CKRecordSavePolicy (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate which policy to apply when saving records.

## Declaration

```objectivec
enum CKRecordSavePolicy : NSInteger;
```

## Topics

### Save Policies

- [CKRecordSaveIfServerRecordUnchanged](recordsavepolicy/ifserverrecordunchanged.md): A policy that instructs CloudKit to only proceed if the record’s change tag matches that of the server’s copy.
- [CKRecordSaveChangedKeys](recordsavepolicy/changedkeys.md): A policy that instructs CloudKit to save only the fields of a record that contain changes.
- [CKRecordSaveAllKeys](recordsavepolicy/allkeys.md): A policy that instructs CloudKit to save all keys of a record, even those without changes.

## See Also

### Modifying Records

- [saveRecord:completionHandler:](../ckdatabase/save%28__completionhandler_%29-3tatz.md): Saves a specific record.
- [deleteRecordWithID:completionHandler:](../ckdatabase/delete%28withrecordid_completionhandler_%29.md): Deletes a specific record.
