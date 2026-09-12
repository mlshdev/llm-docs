> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckrecordkeyvaluesetting/allkeys()](https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/allkeys())

# allKeys() (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an array of the record’s keys.

## Declaration

```swift
func allKeys() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of keys, or an empty array if the record doesn’t contain any keys.

## See Also

### Accessing a Record’s Fields

- [object(forKey:)](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [subscript(\_:)](subscript%28__%29.md): Returns the object that the record stores for the specified key.
- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [changedKeys()](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.

# allKeys (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Returns an array of the record’s keys.

## Declaration

```objectivec
- (NSArray<NSString *> *) allKeys;
```

<a id="return-value"></a>

## Return Value

An array of keys, or an empty array if the record doesn’t contain any keys.

## See Also

### Accessing a Record’s Fields

- [objectForKey:](object%28forkey_%29.md): Returns the object that the record stores for the specified key.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the object that the record stores for the specified key.
- [setObject:forKey:](setobject%28__forkey_%29.md): Stores an object in the record using the specified key.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Stores an object in the record using the specified key.
- [changedKeys](changedkeys%28%29.md): Returns an array of keys with recent changes to their values.
