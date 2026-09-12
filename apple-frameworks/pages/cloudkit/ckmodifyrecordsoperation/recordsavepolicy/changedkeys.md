> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/recordsavepolicy/changedkeys](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/recordsavepolicy/changedkeys)

# CKModifyRecordsOperation.RecordSavePolicy.changedKeys (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A policy that instructs CloudKit to save only the fields of a record that contain changes.

## Declaration

```swift
case changedKeys
```

<a id="discussion"></a>

## Discussion

> **Important**

> This policy doesn’t compare record change tags. To only save changes to the most recent version of a record, use [CKModifyRecordsOperation.RecordSavePolicy.ifServerRecordUnchanged](ifserverrecordunchanged.md) instead.

## See Also

### Save Policies

- [CKModifyRecordsOperation.RecordSavePolicy.ifServerRecordUnchanged](ifserverrecordunchanged.md): A policy that instructs CloudKit to only proceed if the record’s change tag matches that of the server’s copy.
- [CKModifyRecordsOperation.RecordSavePolicy.allKeys](allkeys.md): A policy that instructs CloudKit to save all keys of a record, even those without changes.

# CKRecordSaveChangedKeys (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A policy that instructs CloudKit to save only the fields of a record that contain changes.

## Declaration

```objectivec
CKRecordSaveChangedKeys
```

<a id="discussion"></a>

## Discussion

> **Important**

> This policy doesn’t compare record change tags. To only save changes to the most recent version of a record, use [CKRecordSaveIfServerRecordUnchanged](ifserverrecordunchanged.md) instead.

## See Also

### Save Policies

- [CKRecordSaveIfServerRecordUnchanged](ifserverrecordunchanged.md): A policy that instructs CloudKit to only proceed if the record’s change tag matches that of the server’s copy.
- [CKRecordSaveAllKeys](allkeys.md): A policy that instructs CloudKit to save all keys of a record, even those without changes.
