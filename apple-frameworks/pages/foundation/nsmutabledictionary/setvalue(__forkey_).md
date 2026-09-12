> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/setvalue(_:forkey:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/setvalue(_:forkey:))

# setValue(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the dictionary.

## Declaration

```swift
func setValue(_ value: Any?, forKey key: String)
```

## Parameters

- `value`: The value for `key`.
- `key`: The key for `value`. Note that when using key-value coding, the key must be a string (see [Accessing Object Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170)).

<a id="Discussion"></a>

## Discussion

This method adds `value` and `key` to the dictionary using [setObject(\_:forKey:)](setobject%28__forkey_%29.md), unless `value` is `nil` in which case the method instead attempts to remove `key` using [removeObject(forKey:)](removeobject%28forkey_%29.md).

## See Also

### Related Documentation

- [value(forKey:)](../nsdictionary/value%28forkey_%29.md): Returns the value associated with a given key.

### Adding Entries to a Mutable Dictionary

- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntries(from:)](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary(\_:)](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.

# setValue:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given key-value pair to the dictionary.

## Declaration

```objectivec
- (void) setValue:(ObjectType) value forKey:(NSString *) key;
```

## Parameters

- `value`: The value for `key`.
- `key`: The key for `value`. Note that when using key-value coding, the key must be a string (see [Accessing Object Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170)).

<a id="Discussion"></a>

## Discussion

This method adds `value` and `key` to the dictionary using [setObject:forKey:](setobject%28__forkey_%29.md), unless `value` is `nil` in which case the method instead attempts to remove `key` using [removeObjectForKey:](removeobject%28forkey_%29.md).

## See Also

### Related Documentation

- [valueForKey:](../nsdictionary/value%28forkey_%29.md): Returns the value associated with a given key.

### Adding Entries to a Mutable Dictionary

- [setObject:forKey:](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Adds a given key-value pair to the dictionary.
- [addEntriesFromDictionary:](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
- [setDictionary:](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.
