> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordparentkey-2kx8l](https://developer.apple.com/documentation/cloudkit/ckrecordparentkey-2kx8l)

# CKRecordParentKey

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The key constant that a record uses for its CKRecord.parent.

## Declaration

```objectivec
extern CKRecordFieldKey const CKRecordParentKey;
```

## See Also

### Accessing the Record’s Fields

- [objectForKey:](ckrecord/objectforkey_.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](ckrecord/subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](ckrecord/setobject_forkey_.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](ckrecord/setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](ckrecord/allkeys.md): Returns an array of the record’s keys.
- [changedKeys](ckrecord/changedkeys.md): Returns an array of keys with recent changes to their values.
- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordCreationDateKey](ckrecordcreationdatekey.md): A key constant that a record uses for its CKRecord.creationDate.
- [CKRecordCreatorUserRecordIDKey](ckrecordcreatoruserrecordidkey.md): A key constant that a record uses for its CKRecord.creatorUserRecordID.
- [CKRecordLastModifiedUserRecordIDKey](ckrecordlastmodifieduserrecordidkey.md): A key constant that a record uses for its CKRecord.lastModifiedUserRecordID.
- [CKRecordModificationDateKey](ckrecordmodificationdatekey.md): A key constant that a record uses for its CKRecord.modificationDate.
- [CKRecordRecordIDKey](ckrecordrecordidkey.md): A key constant that a record uses for its CKRecord.recordID.
- [CKRecordShareKey](ckrecordsharekey-rrat.md): The key constant that a record uses for its CKRecord.share.
