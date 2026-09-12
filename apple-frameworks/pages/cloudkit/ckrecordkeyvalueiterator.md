> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvalueiterator](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvalueiterator)

# CKRecordKeyValueIterator

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

An iterator of the record’s key-value pairs.

## Declaration

```swift
struct CKRecordKeyValueIterator
```

## Topics

### Iterating Over a Record’s Fields

- [next()](ckrecordkeyvalueiterator/next%28%29.md): Advances the iterator and returns the next key-value pair from the record.

## Relationships

### Conforms To

- [IteratorProtocol](https://developer.apple.com/documentation/swift/iteratorprotocol)

## See Also

### Accessing the Record’s Fields

- [object(forKey:)](ckrecord/object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecord/subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](ckrecord/subscript%28__%29-4g91i.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](ckrecord/setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](ckrecord/allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](ckrecord/changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [makeIterator()](ckrecord/makeiterator%28%29.md): Returns an iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordValue](ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.
