> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordrecordidkey](https://developer.apple.com/documentation/cloudkit/ckrecordrecordidkey)

# CKRecordRecordIDKey

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A key constant that a record uses for its CKRecord.recordID.

## Declaration

```objectivec
extern CKRecordFieldKey const CKRecordRecordIDKey;
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
- [CKRecordParentKey](ckrecordparentkey-2kx8l.md): The key constant that a record uses for its CKRecord.parent.
- [CKRecordShareKey](ckrecordsharekey-rrat.md): The key constant that a record uses for its CKRecord.share.
