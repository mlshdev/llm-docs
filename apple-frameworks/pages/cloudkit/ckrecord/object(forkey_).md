> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecord/object(forkey:)](https://developer.apple.com/documentation/cloudkit/ckrecord/object(forkey:))

# object(forKey:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+ · Swift 4.2+

Returns the object that the record stores for the specified key.

## Declaration

```swift
func object(forKey key: CKRecord.FieldKey) -> (any __CKRecordObjCValue)?
```

## Parameters

- `key`: The string that identifies a field in the record. A key must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces.

<a id="return-value"></a>

## Return Value

The object for the specified key, or `nil` if no such key exists in the record.

<a id="discussion"></a>

## Discussion

New records don’t contain any keys or values. Values are always one of the data types in [Supported Data Types](../ckrecord.md#Supported-Data-Types).

You access the fields of a `CKRecord` object the same way you access key-value pairs in a dictionary. The `CKRecord` class defines the [object(forKey:)](object%28forkey_%29.md) and [setObject(\_:forKey:)](setobject%28__forkey_%29.md) methods for getting and setting values. It also supports dictionary index notation. The following example shows how to use both techniques to set a `firstName` field and retrieve a `lastName` field from a record:

```swift
// Equivalent ways to get a value.
var hiredAt = record.object(forKey: "hiredAt")
hiredAt = record["hiredAt"]
```

## See Also

### Accessing the Record’s Fields

- [subscript(\_:)](subscript%28__%29-51whk.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29-4g91i.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
- [makeIterator()](makeiterator%28%29.md): Returns an iterator of the record’s key-value pairs.
- [CKRecordKeyValueIterator](../ckrecordkeyvalueiterator.md): An iterator of the record’s key-value pairs.
- [CKRecordValueProtocol](../ckrecordvalueprotocol.md): A description of a CloudKit record value.
- [CKRecordKeyValueSetting](../ckrecordkeyvaluesetting.md): A protocol for managing the key-value pairs of a CloudKit record.
- [CKRecordValue](../ckrecordvalue-swift.typealias.md): A data type for objects that CloudKit stores on the server.
