> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/initwithrecordtype:recordid:](https://developer.apple.com/documentation/cloudkit/ckrecord/initwithrecordtype:recordid:)

# initWithRecordType:recordID:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a record using an ID that you provide.

## Declaration

```objectivec
- (instancetype) initWithRecordType:(CKRecordType) recordType recordID:(CKRecordID *) recordID;
```

## Parameters

- `recordType`: A string that represents the type of record that you want to create. You can’t change the record type after initialization. You define the record types that your app supports and use them to distinguish between records with different types of data. This parameter must not be `nil` or contain an empty string.

  A record type must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces.
- `recordID`: The ID to assign to the record. When creating the ID, you can specify the zone where you want to store the record. You should provide a value that is unique across all records and you may not provide `nil`.

<a id="return-value"></a>

## Return Value

An initialized record object.

<a id="discussion"></a>

## Discussion

Use this method to initialize a new record object with the specified ID. The newly created record contains no data.

Upon creation, record objects exist only in memory on the local device. Save the record using a [CKModifyRecordsOperation](../ckmodifyrecordsoperation.md) object or by using the [saveRecord:completionHandler:](../ckdatabase/save%28__completionhandler_%29-3tatz.md) method of [CKDatabase](../ckdatabase.md) to transfer the record’s contents to the server.

## See Also

### Creating a Record

- [initWithRecordType:](initwithrecordtype_.md): Creates a new record of the specified type.
- [initWithRecordType:zoneID:](initwithrecordtype_zoneid_.md): Creates a record in the specified zone.
- [CKRecordType](../ckrecordtype.md): A data type that CloudKit requires for record types.
- [CKRecordTypeShare](../ckrecordtypeshare-8b6yt.md): The system type that identifies a share record.
- [CKRecordTypeUserRecord](../ckrecordtypeuserrecord-49k30.md): The system type that identifies a user record.
- [CKRecordFieldKey](../ckrecordfieldkey.md): A data type that CloudKit requires for record field names.
