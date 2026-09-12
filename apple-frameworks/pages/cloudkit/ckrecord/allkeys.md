> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/allkeys](https://developer.apple.com/documentation/cloudkit/ckrecord/allkeys)

# allKeys

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns an array of the record’s keys.

## Declaration

```objectivec
- (NSArray<NSString *> *) allKeys;
```

<a id="return-value"></a>

## Return Value

An array of keys, or an empty array if the record doesn’t contain any keys.

<a id="discussion"></a>

## Discussion

The array contains only those keys with values that aren’t `nil`.

## See Also

### Accessing the Record’s Fields

- [objectForKey:](objectforkey_.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](setobject_forkey_.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [changedKeys](changedkeys.md): Returns an array of keys with recent changes to their values.
- [CKRecordKeyValueSetting](../ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordCreationDateKey](../ckrecordcreationdatekey.md): A key constant that a record uses for its CKRecord.creationDate.
- [CKRecordCreatorUserRecordIDKey](../ckrecordcreatoruserrecordidkey.md): A key constant that a record uses for its CKRecord.creatorUserRecordID.
- [CKRecordLastModifiedUserRecordIDKey](../ckrecordlastmodifieduserrecordidkey.md): A key constant that a record uses for its CKRecord.lastModifiedUserRecordID.
- [CKRecordModificationDateKey](../ckrecordmodificationdatekey.md): A key constant that a record uses for its CKRecord.modificationDate.
- [CKRecordRecordIDKey](../ckrecordrecordidkey.md): A key constant that a record uses for its CKRecord.recordID.
- [CKRecordParentKey](../ckrecordparentkey-2kx8l.md): The key constant that a record uses for its CKRecord.parent.
- [CKRecordShareKey](../ckrecordsharekey-rrat.md): The key constant that a record uses for its CKRecord.share.
