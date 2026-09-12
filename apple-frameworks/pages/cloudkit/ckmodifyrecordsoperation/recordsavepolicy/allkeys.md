> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifyrecordsoperation/recordsavepolicy/allkeys](https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/recordsavepolicy/allkeys)

# CKModifyRecordsOperation.RecordSavePolicy.allKeys (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A policy that instructs CloudKit to save all keys of a record, even those without changes.

## Declaration

```swift
case allKeys
```

<a id="discussion"></a>

## Discussion

> **Important**

> This policy doesn’t compare record change tags. To only save changes to the most recent version of a record, use [CKModifyRecordsOperation.RecordSavePolicy.ifServerRecordUnchanged](ifserverrecordunchanged.md) instead.

This policy causes CloudKit to overwrite any existing values on the server. It’s possible for a server record to contain keys that aren’t present locally. Another client might add keys to the record after you fetch it. Also, if you use the [desiredKeys](../../ckfetchrecordsoperation/desiredkeys-34l1l.md) property to request a subset of keys during a fetch operation, saving that same record modifies only those keys that you include in the fetch and any keys you add to the record after that.

## See Also

### Save Policies

- [CKModifyRecordsOperation.RecordSavePolicy.ifServerRecordUnchanged](ifserverrecordunchanged.md): A policy that instructs CloudKit to only proceed if the record’s change tag matches that of the server’s copy.
- [CKModifyRecordsOperation.RecordSavePolicy.changedKeys](changedkeys.md): A policy that instructs CloudKit to save only the fields of a record that contain changes.

# CKRecordSaveAllKeys (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A policy that instructs CloudKit to save all keys of a record, even those without changes.

## Declaration

```objectivec
CKRecordSaveAllKeys
```

<a id="discussion"></a>

## Discussion

> **Important**

> This policy doesn’t compare record change tags. To only save changes to the most recent version of a record, use [CKRecordSaveIfServerRecordUnchanged](ifserverrecordunchanged.md) instead.

This policy causes CloudKit to overwrite any existing values on the server. It’s possible for a server record to contain keys that aren’t present locally. Another client might add keys to the record after you fetch it. Also, if you use the [desiredKeys](../../ckfetchrecordsoperation/desiredkeys-34l1l.md) property to request a subset of keys during a fetch operation, saving that same record modifies only those keys that you include in the fetch and any keys you add to the record after that.

## See Also

### Save Policies

- [CKRecordSaveIfServerRecordUnchanged](ifserverrecordunchanged.md): A policy that instructs CloudKit to only proceed if the record’s change tag matches that of the server’s copy.
- [CKRecordSaveChangedKeys](changedkeys.md): A policy that instructs CloudKit to save only the fields of a record that contain changes.
