> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/subscript(_:)-51whk](https://developer.apple.com/documentation/cloudkit/ckrecord/subscript(_:)-51whk)

# subscript(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns the object that the record stores for the specified key.

## Declaration

```swift
subscript(key: String) -> (any __CKRecordObjCValue)? { get set }
```

## Parameters

- `key`: The string that identifies a field in the record. A key must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces.

<a id="return-value"></a>

## Return Value

The object for the specified key, or `nil` if no such key exists in the record.

<a id="Discussion"></a>

## Discussion

> **Important**

> Don’t call this method directly. The presence of this method is necessary to support subscripting syntax for record objects.

## See Also

### Accessing the Record’s Fields

- [object(forKey:)](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29-4g91i.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [makeIterator()](makeiterator%28%29.md): Returns an iterator of the record’s key-value pairs.
- [CKRecordKeyValueIterator](../ckrecordkeyvalueiterator.md): An iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](../ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordKeyValueSetting](../ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordValue](../ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.

# objectForKeyedSubscript: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns the object that the record stores for the specified key.

## Declaration

```objectivec
- (id<CKRecordValue>) objectForKeyedSubscript:(CKRecordFieldKey) key;
```

## Parameters

- `key`: The string that identifies a field in the record. A key must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces.

<a id="return-value"></a>

## Return Value

The object for the specified key, or `nil` if no such key exists in the record.

<a id="Discussion"></a>

## Discussion

> **Important**

> Don’t call this method directly. The presence of this method is necessary to support subscripting syntax for record objects.

## See Also

### Accessing the Record’s Fields

- [objectForKey:](objectforkey_.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](setobject_forkey_.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](allkeys.md): Returns an array of the record’s keys.
- [changedKeys](changedkeys.md): Returns an array of keys with recent changes to their values.
- [CKRecordKeyValueSetting](../ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordCreationDateKey](../ckrecordcreationdatekey.md): A key constant that a record uses for its CKRecord.creationDate.
- [CKRecordCreatorUserRecordIDKey](../ckrecordcreatoruserrecordidkey.md): A key constant that a record uses for its CKRecord.creatorUserRecordID.
- [CKRecordLastModifiedUserRecordIDKey](../ckrecordlastmodifieduserrecordidkey.md): A key constant that a record uses for its CKRecord.lastModifiedUserRecordID.
- [CKRecordModificationDateKey](../ckrecordmodificationdatekey.md): A key constant that a record uses for its CKRecord.modificationDate.
- [CKRecordRecordIDKey](../ckrecordrecordidkey.md): A key constant that a record uses for its CKRecord.recordID.
- [CKRecordParentKey](../ckrecordparentkey-2kx8l.md): The key constant that a record uses for its CKRecord.parent.
- [CKRecordShareKey](../ckrecordsharekey-rrat.md): The key constant that a record uses for its CKRecord.share.
