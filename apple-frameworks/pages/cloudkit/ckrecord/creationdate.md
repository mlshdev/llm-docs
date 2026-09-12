> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/creationdate](https://developer.apple.com/documentation/cloudkit/ckrecord/creationdate)

# creationDate (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The time when CloudKit first saves the record to the server.

## Declaration

```swift
var creationDate: Date? { get }
```

<a id="discussion"></a>

## Discussion

The creation date reflects the time when CloudKit creates a record on the server with the current record’s ID. For new instances of this class, the value of this property is initially `nil`. When you save the record to the server, the value updates with the creation date for the record.

## See Also

### Accessing the Record’s Metadata

- [recordID](recordid.md): The unique ID of the record.
- [recordType](recordtype-6v7au.md): The value that your app defines to identify the type of record.
- [CKRecord.SystemType](systemtype.md): Possible values for record types of system records.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.
- [CKRecord.ID](id.md): An object that uniquely identifies a record in a database.

# creationDate (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The time when CloudKit first saves the record to the server.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDate * creationDate;
```

<a id="discussion"></a>

## Discussion

The creation date reflects the time when CloudKit creates a record on the server with the current record’s ID. For new instances of this class, the value of this property is initially `nil`. When you save the record to the server, the value updates with the creation date for the record.

## See Also

### Accessing the Record’s Metadata

- [recordID](recordid.md): The unique ID of the record.
- [recordType](recordtype-9s09b.md): The value that your app defines to identify the type of record.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.
- [CKRecordID](id.md): An object that uniquely identifies a record in a database.
