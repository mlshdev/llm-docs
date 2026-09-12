> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/recordtype-6v7au](https://developer.apple.com/documentation/cloudkit/ckrecord/recordtype-6v7au)

# recordType

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

The value that your app defines to identify the type of record.

## Declaration

```swift
var recordType: CKRecord.RecordType { get }
```

<a id="discussion"></a>

## Discussion

Use this value to differentiate between different record types in your app. The value is primarily for your benefit, so choose record types that represent the data in the corresponding records.

CloudKit provides two system-defined record types:

| Record Type | Description |
| --- | --- |
| [CKRecordTypeUserRecord](../ckrecordtypeuserrecord-49k30.md) | Identifies records that represent users. |
| [CKRecordTypeShare](../ckrecordtypeshare-8b6yt.md) | Identifies records that the user shares. |

## See Also

### Accessing the Record’s Metadata

- [recordID](recordid.md): The unique ID of the record.
- [CKRecord.SystemType](systemtype.md): Possible values for record types of system records.
- [creationDate](creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.
- [CKRecord.ID](id.md): An object that uniquely identifies a record in a database.
