> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvaluesetting/setobject(_:forkey:)](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/setobject(_:forkey:))

# setObject(\_:forKey:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Stores an object in the record using the specified key.

## Declaration

```swift
func setObject(_ object: (any __CKRecordObjCValue)?, forKey key: String)
```

## Parameters

- `object`: The object to store using the specified key. It must be one of the data types in [Supported Data Types](../ckrecord.md#Supported-Data-Types). You receive an error if you use a data type that CloudKit doesn’t support. If you specify `nil`, CloudKit removes any object that the record associates with the key.
- `key`: The key to associate with `object`. Use this key to retrieve the value later. A key must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces. Avoid using a key that matches the name of any property of `CKRecord`.

## See Also

### Accessing a Record’s Fields

- [object(forKey:)](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29.md): Returns the object that the record stores for the specified key.
- [allKeys()](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.

# setObject:forKey: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Stores an object in the record using the specified key.

## Declaration

```objectivec
- (void) setObject:(id<CKRecordValue>) object forKey:(CKRecordFieldKey) key;
```

## Parameters

- `object`: The object to store using the specified key. It must be one of the data types in [Supported Data Types](../ckrecord.md#Supported-Data-Types). You receive an error if you use a data type that CloudKit doesn’t support. If you specify `nil`, CloudKit removes any object that the record associates with the key.
- `key`: The key to associate with `object`. Use this key to retrieve the value later. A key must consist of one or more alphanumeric characters and must start with a letter. CloudKit permits the use of underscores, but not spaces. Avoid using a key that matches the name of any property of `CKRecord`.

## See Also

### Accessing a Record’s Fields

- [objectForKey:](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the object that the record stores for the specified key.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [allKeys](allkeys%28%29.md): Returns an array of the record’s keys.
- [changedKeys](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
