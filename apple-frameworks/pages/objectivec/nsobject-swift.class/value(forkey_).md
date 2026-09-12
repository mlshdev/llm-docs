> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/value(forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value(forkey:))

# value(forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value for the property identified by a given key.

## Declaration

```swift
func value(forKey key: String) -> Any?
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value for the property identified by `key`.

<a id="Discussion"></a>

## Discussion

The search pattern that `valueForKey:` uses to find the correct value to return is described in [Accessor Search Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

## See Also

### Related Documentation

- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

### Getting Values

- [value(forKeyPath:)](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValues(forKeys:)](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [value(forUndefinedKey:)](value%28forundefinedkey_%29.md): Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValue(forKey:)](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValue(forKeyPath:)](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValue(forKeyPath:)](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValue(forKey:)](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValue(forKeyPath:)](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.

# valueForKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value for the property identified by a given key.

## Declaration

```objectivec
- (id) valueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="return-value"></a>

## Return Value

The value for the property identified by `key`.

<a id="Discussion"></a>

## Discussion

The search pattern that `valueForKey:` uses to find the correct value to return is described in [Accessor Search Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

## See Also

### Related Documentation

- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

### Getting Values

- [valueForKeyPath:](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValuesForKeys:](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [valueForUndefinedKey:](value%28forundefinedkey_%29.md): Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValueForKey:](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValueForKeyPath:](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValueForKeyPath:](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValueForKey:](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValueForKeyPath:](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.
