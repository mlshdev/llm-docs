> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/value(forkey:)](https://developer.apple.com/documentation/foundation/nsdictionary/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with a given key.

## Declaration

```swift
func value(forKey key: String) -> Any?
```

## Parameters

- `key`: The key for which to return the corresponding value. Note that when using key-value coding, the key must be a string (see [Accessing Object Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170)).

<a id="return-value"></a>

## Return Value

The value associated with `key`.

<a id="Discussion"></a>

## Discussion

If `key` does not start with “`@`”, invokes [object(forKey:)](object%28forkey_%29.md). If `key` does start with “`@`”, strips the “@” and invokes `[super valueForKey:]` with the rest of the key.

## See Also

### Related Documentation

- [setValue(\_:forKey:)](../nsmutabledictionary/setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeys(for:)](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [objects(forKeys:notFoundMarker:)](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [object(forKey:)](object%28forkey_%29.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-52n56.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-1bt1b.md): Accesses the value associated with a given key.

# valueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value associated with a given key.

## Declaration

```objectivec
- (ObjectType) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The key for which to return the corresponding value. Note that when using key-value coding, the key must be a string (see [Accessing Object Properties](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/BasicPrinciples.html#//apple_ref/doc/uid/20002170)).

<a id="return-value"></a>

## Return Value

The value associated with `key`.

<a id="Discussion"></a>

## Discussion

If `key` does not start with “`@`”, invokes [objectForKey:](object%28forkey_%29.md). If `key` does start with “`@`”, strips the “@” and invokes `[super valueForKey:]` with the rest of the key.

## See Also

### Related Documentation

- [getObjects:andKeys:](getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.
- [setValue:forKey:](../nsmutabledictionary/setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeysForObject:](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [getObjects:andKeys:count:](getobjects_andkeys_count_.md): Returns by reference C arrays of the keys and values in the dictionary.
- [getObjects:andKeys:](getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.
- [objectsForKeys:notFoundMarker:](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [objectForKey:](object%28forkey_%29.md): Returns the value associated with a given key.
- [objectForKeyedSubscript:](subscript%28__%29-52n56.md): Returns the value associated with a given key.
