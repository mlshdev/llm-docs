> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/mutablesetvalue(forkeypath:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/mutablesetvalue(forkeypath:))

# mutableSetValue(forKeyPath:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.

## Declaration

```swift
func mutableSetValue(forKeyPath keyPath: String) -> NSMutableSet
```

## Parameters

- `keyPath`: A key path, relative to the receiver, to an unordered to-many relationship.

<a id="return-value"></a>

## Return Value

A mutable set that provides read-write access to the unordered to-many relationship specified by `keyPath`.

<a id="Discussion"></a>

## Discussion

See [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md) for additional details.

## See Also

### Getting Values

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [value(forKeyPath:)](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValues(forKeys:)](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [value(forUndefinedKey:)](value%28forundefinedkey_%29.md): Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValue(forKey:)](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValue(forKeyPath:)](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableOrderedSetValue(forKey:)](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValue(forKeyPath:)](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.

# mutableSetValueForKeyPath: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.

## Declaration

```objectivec
- (NSMutableSet *) mutableSetValueForKeyPath:(NSString *) keyPath;
```

## Parameters

- `keyPath`: A key path, relative to the receiver, to an unordered to-many relationship.

<a id="return-value"></a>

## Return Value

A mutable set that provides read-write access to the unordered to-many relationship specified by `keyPath`.

<a id="Discussion"></a>

## Discussion

See [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md) for additional details.

## See Also

### Getting Values

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [valueForKeyPath:](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [dictionaryWithValuesForKeys:](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [valueForUndefinedKey:](value%28forundefinedkey_%29.md): Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValueForKey:](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValueForKeyPath:](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableOrderedSetValueForKey:](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValueForKeyPath:](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.
