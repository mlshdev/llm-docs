> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/value(forkeypath:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/value(forkeypath:))

# value(forKeyPath:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value for the derived property identified by a given key path.

## Declaration

```swift
func value(forKeyPath keyPath: String) -> Any?
```

## Parameters

- `keyPath`: A key path of the form relationship.property (with one or more relationships); for example “department.name” or “department.manager.lastName”.

<a id="return-value"></a>

## Return Value

The value for the derived property identified by `keyPath`.

<a id="Discussion"></a>

## Discussion

The default implementation gets the destination object for each relationship using [value(forKey:)](value%28forkey_%29.md) and returns the result of a [value(forKey:)](value%28forkey_%29.md) message to the final object.

## See Also

### Related Documentation

- [setValue(\_:forKeyPath:)](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.

### Getting Values

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [dictionaryWithValues(forKeys:)](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [value(forUndefinedKey:)](value%28forundefinedkey_%29.md): Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValue(forKey:)](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValue(forKeyPath:)](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValue(forKeyPath:)](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValue(forKey:)](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValue(forKeyPath:)](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.

# valueForKeyPath: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the value for the derived property identified by a given key path.

## Declaration

```objectivec
- (id) valueForKeyPath:(NSString *) keyPath;
```

## Parameters

- `keyPath`: A key path of the form relationship.property (with one or more relationships); for example “department.name” or “department.manager.lastName”.

<a id="return-value"></a>

## Return Value

The value for the derived property identified by `keyPath`.

<a id="Discussion"></a>

## Discussion

The default implementation gets the destination object for each relationship using [valueForKey:](value%28forkey_%29.md) and returns the result of a [valueForKey:](value%28forkey_%29.md) message to the final object.

## See Also

### Related Documentation

- [setValue:forKeyPath:](setvalue%28__forkeypath_%29.md): Sets the value for the property identified by a given key path to a given value.

### Getting Values

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [dictionaryWithValuesForKeys:](dictionarywithvalues%28forkeys_%29.md): Returns a dictionary containing the property values identified by each of the keys in a given array.
- [valueForUndefinedKey:](value%28forundefinedkey_%29.md): Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValueForKey:](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValueForKeyPath:](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValueForKeyPath:](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValueForKey:](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValueForKeyPath:](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.
