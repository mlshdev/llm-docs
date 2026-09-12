> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvaluesetting/subscript(_:)](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Subscript  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

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

## Default Implementations

### CKRecordKeyValueSetting Implementations

- [subscript(\_:)](subscript%28__%29-2uqmn.md): Accesses the value for the specified key in the record.
- [subscript(\_:)](subscript%28__%29-4f12u.md): Accesses the value for the specified key in the record.

## See Also

### Accessing a Record’s Fields

- [object(forKey:)](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [allKeys()](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.

# objectForKeyedSubscript: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

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

## Default Implementations

### CKRecordKeyValueSetting Implementations

- [subscript(\_:)](subscript%28__%29-2uqmn.md): Accesses the value for the specified key in the record.
- [subscript(\_:)](subscript%28__%29-4f12u.md): Accesses the value for the specified key in the record.

## See Also

### Accessing a Record’s Fields

- [objectForKey:](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
