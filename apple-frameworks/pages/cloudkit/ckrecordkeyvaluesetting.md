> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvaluesetting](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting)

# CKRecordKeyValueSetting (Swift)

**Framework:** CloudKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol for managing the key-value pairs of a CloudKit record.

## Declaration

```swift
protocol CKRecordKeyValueSetting : NSObjectProtocol
```

## Topics

### Accessing a Record’s Fields

- [object(forKey:)](ckrecordkeyvaluesetting/object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecordkeyvaluesetting/subscript%28__%29.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](ckrecordkeyvaluesetting/setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](ckrecordkeyvaluesetting/allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](ckrecordkeyvaluesetting/changedkeys%28%29.md): Returns an array of keys with recent changes to their values.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CKRecord](ckrecord.md)
- [CKShare](ckshare.md)

## See Also

### Accessing the Record’s Fields

- [object(forKey:)](ckrecord/object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecord/subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecord/subscript%28__%29-4g91i.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](ckrecord/setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](ckrecord/allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](ckrecord/changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [makeIterator()](ckrecord/makeiterator%28%29.md): Returns an iterator of the record’s key-value pairs.
- [CKRecordKeyValueIterator](ckrecordkeyvalueiterator.md): An iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordValue](ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.

# CKRecordKeyValueSetting (Objective-C)

**Framework:** CloudKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol for managing the key-value pairs of a CloudKit record.

## Declaration

```objectivec
@protocol CKRecordKeyValueSetting <NSObject>
```

## Topics

### Accessing a Record’s Fields

- [objectForKey:](ckrecordkeyvaluesetting/object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](ckrecordkeyvaluesetting/subscript%28__%29.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](ckrecordkeyvaluesetting/setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](ckrecordkeyvaluesetting/setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](ckrecordkeyvaluesetting/allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys](ckrecordkeyvaluesetting/changedkeys%28%29.md): Returns an array of keys with recent changes to their values.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [CKRecord](ckrecord.md)

## See Also

### Accessing the Record’s Fields

- [objectForKey:](ckrecord/objectforkey_.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](ckrecord/subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](ckrecord/setobject_forkey_.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](ckrecord/setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](ckrecord/allkeys.md): Returns an array of the record’s keys.
- [changedKeys](ckrecord/changedkeys.md): Returns an array of keys with recent changes to their values.
- [CKRecordCreationDateKey](ckrecordcreationdatekey.md): A key constant that a record uses for its CKRecord.creationDate.
- [CKRecordCreatorUserRecordIDKey](ckrecordcreatoruserrecordidkey.md): A key constant that a record uses for its CKRecord.creatorUserRecordID.
- [CKRecordLastModifiedUserRecordIDKey](ckrecordlastmodifieduserrecordidkey.md): A key constant that a record uses for its CKRecord.lastModifiedUserRecordID.
- [CKRecordModificationDateKey](ckrecordmodificationdatekey.md): A key constant that a record uses for its CKRecord.modificationDate.
- [CKRecordRecordIDKey](ckrecordrecordidkey.md): A key constant that a record uses for its CKRecord.recordID.
- [CKRecordParentKey](ckrecordparentkey-2kx8l.md): The key constant that a record uses for its CKRecord.parent.
- [CKRecordShareKey](ckrecordsharekey-rrat.md): The key constant that a record uses for its CKRecord.share.
