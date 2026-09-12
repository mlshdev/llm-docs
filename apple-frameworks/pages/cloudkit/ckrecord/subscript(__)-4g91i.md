> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/subscript(_:)-4g91i](https://developer.apple.com/documentation/cloudkit/ckrecord/subscript(_:)-4g91i)

# subscript(\_:)

**Framework:** CloudKit  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Returns the object that the record stores for the specified key.

## Declaration

```swift
subscript(key: CKRecord.FieldKey) -> (any __CKRecordObjCValue)? { get set }
```

## Parameters

- `key`: The string that identifies a field in the record. A key must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces.

<a id="return-value"></a>

## Return Value

The object for the specified key, or `nil` if no such key exists in the record.

## See Also

### Accessing the Record’s Fields

- [object(forKey:)](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [makeIterator()](makeiterator%28%29.md): Returns an iterator of the record’s key-value pairs.
- [CKRecordKeyValueIterator](../ckrecordkeyvalueiterator.md): An iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](../ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordKeyValueSetting](../ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordValue](../ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.
