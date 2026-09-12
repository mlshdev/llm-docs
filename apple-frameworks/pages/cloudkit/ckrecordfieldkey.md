> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordfieldkey](https://developer.apple.com/documentation/cloudkit/ckrecordfieldkey)

# CKRecordFieldKey

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data type that CloudKit requires for record field names.

## Declaration

```objectivec
typedef NSString * CKRecordFieldKey;
```

## See Also

### Creating a Record

- [initWithRecordType:](ckrecord/initwithrecordtype_.md): Creates a new record of the specified type.
- [initWithRecordType:zoneID:](ckrecord/initwithrecordtype_zoneid_.md): Creates a record in the specified zone.
- [initWithRecordType:recordID:](ckrecord/initwithrecordtype_recordid_.md): Creates a record using an ID that you provide.
- [CKRecordType](ckrecordtype.md): A data type that CloudKit requires for record types.
- [CKRecordTypeShare](ckrecordtypeshare-8b6yt.md): The system type that identifies a share record.
- [CKRecordTypeUserRecord](ckrecordtypeuserrecord-49k30.md): The system type that identifies a user record.
