> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordtypeuserrecord-49k30](https://developer.apple.com/documentation/cloudkit/ckrecordtypeuserrecord-49k30)

# CKRecordTypeUserRecord

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The system type that identifies a user record.

## Declaration

```objectivec
extern CKRecordType const CKRecordTypeUserRecord;
```

<a id="discussion"></a>

## Discussion

CloudKit automatically creates a user record for each unique user of the app. User records are empty initially. You can add data to the user record using the same rules that apply for all records. Specifically, you must specify a consistent type of data for a particular field name in all user records. However, you can’t create new user records using this record type and you can’t query for records of this type. To locate user records, you must know the ID of the user record or use the methods that CKContainer provides to discover user records.

## See Also

### Creating a Record

- [initWithRecordType:](ckrecord/initwithrecordtype_.md): Creates a new record of the specified type.
- [initWithRecordType:zoneID:](ckrecord/initwithrecordtype_zoneid_.md): Creates a record in the specified zone.
- [initWithRecordType:recordID:](ckrecord/initwithrecordtype_recordid_.md): Creates a record using an ID that you provide.
- [CKRecordType](ckrecordtype.md): A data type that CloudKit requires for record types.
- [CKRecordTypeShare](ckrecordtypeshare-8b6yt.md): The system type that identifies a share record.
- [CKRecordFieldKey](ckrecordfieldkey.md): A data type that CloudKit requires for record field names.
