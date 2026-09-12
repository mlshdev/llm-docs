> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/makeiterator()](https://developer.apple.com/documentation/cloudkit/ckrecord/makeiterator())

# makeIterator()

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

Returns an iterator of the record’s key-value pairs.

## Declaration

```swift
func makeIterator() -> CKRecordKeyValueIterator
```

## See Also

### Accessing the Record’s Fields

- [object(forKey:)](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29-4g91i.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [CKRecordKeyValueIterator](../ckrecordkeyvalueiterator.md): An iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](../ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordKeyValueSetting](../ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordValue](../ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.
