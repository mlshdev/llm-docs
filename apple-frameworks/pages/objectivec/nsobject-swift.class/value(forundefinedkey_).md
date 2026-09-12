> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/value(forundefinedkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value(forundefinedkey:))

# value(forUndefinedKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.

## Declaration

```swift
func value(forUndefinedKey key: String) -> Any?
```

## Parameters

- `key`: A string that is not equal to the name of any of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return an alternate value for undefined keys. The default implementation raises an `NSUndefinedKeyException`.

## See Also

### Related Documentation

- [setValue(\_:forUndefinedKey:)](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) when it finds no property for a given key.

### Getting Values

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [value(forKeyPath:)](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValues(forKeys:)](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [mutableArrayValue(forKey:)](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValue(forKeyPath:)](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValue(forKeyPath:)](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValue(forKey:)](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValue(forKeyPath:)](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.

# valueForUndefinedKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.

## Declaration

```objectivec
- (id) valueForUndefinedKey:(NSString *) key;
```

## Parameters

- `key`: A string that is not equal to the name of any of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return an alternate value for undefined keys. The default implementation raises an `NSUndefinedKeyException`.

## See Also

### Related Documentation

- [setValue:forUndefinedKey:](setvalue%28__forundefinedkey_%29.md): Invoked by [setValue:forKey:](setvalue%28__forkey_%29.md) when it finds no property for a given key.

### Getting Values

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [valueForKeyPath:](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValuesForKeys:](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [mutableArrayValueForKey:](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValueForKeyPath:](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValueForKeyPath:](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValueForKey:](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValueForKeyPath:](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.
