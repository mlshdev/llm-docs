> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/systemtype](https://developer.apple.com/documentation/cloudkit/ckrecord/systemtype)

# CKRecord.SystemType

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Possible values for record types of system records.

## Declaration

```swift
enum SystemType
```

## Topics

### Types of System Records

- [share](systemtype/share.md): A string that represents the record type for CloudKit share records.
- [userRecord](systemtype/userrecord.md): A string that represents the record type for CloudKit user records.

## See Also

### Accessing the Record’s Metadata

- [recordID](recordid.md): The unique ID of the record.
- [recordType](recordtype-6v7au.md): The value that your app defines to identify the type of record.
- [creationDate](creationdate.md): The time when CloudKit first saves the record to the server.
- [creatorUserRecordID](creatoruserrecordid.md): The ID of the user who creates the record.
- [modificationDate](modificationdate.md): The most recent time that CloudKit saved the record to the server.
- [lastModifiedUserRecordID](lastmodifieduserrecordid.md): The ID of the user who most recently modified the record.
- [recordChangeTag](recordchangetag.md): The server change token for the record.
- [CKRecord.ID](id.md): An object that uniquely identifies a record in a database.
