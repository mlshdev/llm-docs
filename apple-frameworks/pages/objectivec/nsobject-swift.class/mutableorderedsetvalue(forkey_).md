> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/mutableorderedsetvalue(forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/mutableorderedsetvalue(forkey:))

# mutableOrderedSetValue(forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.

## Declaration

```swift
func mutableOrderedSetValue(forKey key: String) -> NSMutableOrderedSet
```

## Parameters

- `key`: The name of a uniquing ordered to-many relationship.

<a id="return-value"></a>

## Return Value

A mutable ordered set that provides read-write access to the uniquing to-many relationship specified by `key`.

<a id="Discussion"></a>

## Discussion

Objects added to the mutable set proxy become related to the receiver, and objects removed from the mutable set become unrelated. The default implementation recognizes the same simple accessor methods and set accessor methods as [value(forKey:)](value%28forkey_%29.md), and follows the same direct instance variable access policies, but always returns a mutable collection proxy object instead of the immutable collection that [value(forKey:)](value%28forkey_%29.md) would return.

The search pattern that `mutableOrderedSetValueForKey:` uses is described in [Accessor Search Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

## See Also

### Getting Values

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [value(forKeyPath:)](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValues(forKeys:)](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [value(forUndefinedKey:)](value%28forundefinedkey_%29.md): Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValue(forKey:)](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValue(forKeyPath:)](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValue(forKeyPath:)](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValue(forKeyPath:)](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.

# mutableOrderedSetValueForKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.

## Declaration

```objectivec
- (NSMutableOrderedSet *) mutableOrderedSetValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of a uniquing ordered to-many relationship.

<a id="return-value"></a>

## Return Value

A mutable ordered set that provides read-write access to the uniquing to-many relationship specified by `key`.

<a id="Discussion"></a>

## Discussion

Objects added to the mutable set proxy become related to the receiver, and objects removed from the mutable set become unrelated. The default implementation recognizes the same simple accessor methods and set accessor methods as [valueForKey:](value%28forkey_%29.md), and follows the same direct instance variable access policies, but always returns a mutable collection proxy object instead of the immutable collection that [valueForKey:](value%28forkey_%29.md) would return.

The search pattern that `mutableOrderedSetValueForKey:` uses is described in [Accessor Search Patterns](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/SearchImplementation.html#//apple_ref/doc/uid/20000955) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).

## See Also

### Getting Values

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [valueForKeyPath:](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValuesForKeys:](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [valueForUndefinedKey:](value%28forundefinedkey_%29.md): Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValueForKey:](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValueForKeyPath:](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValueForKeyPath:](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValueForKeyPath:](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.
