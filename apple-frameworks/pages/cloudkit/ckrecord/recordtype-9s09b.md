> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/recordtype-9s09b](https://developer.apple.com/documentation/cloudkit/ckrecord/recordtype-9s09b)

# recordType

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The value that your app defines to identify the type of record.

## Declaration

```objectivec
@property (copy, readonly) CKRecordType recordType;
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
- [creationDate](creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.
- [CKRecordID](id.md): An object that uniquely identifies a record in a database.
