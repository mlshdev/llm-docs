> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/dictionarywithvalues(forkeys:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/dictionarywithvalues(forkeys:))

# dictionaryWithValues(forKeys:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary containing the property values identified by each of the keys in a given array.

## Declaration

```swift
func dictionaryWithValues(forKeys keys: [String]) -> [String : Any]
```

## Parameters

- `keys`: An array containing `NSString` objects that identify properties of the receiver.

<a id="return-value"></a>

## Return Value

A dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.

<a id="Discussion"></a>

## Discussion

The default implementation invokes [value(forKey:)](value%28forkey_%29.md) for each key in `keys` and substitutes `NSNull` values in the dictionary for returned `nil` values.

## See Also

### Related Documentation

- [setValuesForKeys(\_:)](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.

### Getting Values

- [value(forKey:)](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [value(forKeyPath:)](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [value(forUndefinedKey:)](value%28forundefinedkey_%29.md): Invoked by [value(forKey:)](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValue(forKey:)](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValue(forKeyPath:)](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValue(forKey:)](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValue(forKeyPath:)](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValue(forKey:)](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValue(forKeyPath:)](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.

# dictionaryWithValuesForKeys: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a dictionary containing the property values identified by each of the keys in a given array.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) dictionaryWithValuesForKeys:(NSArray<NSString *> *) keys;
```

## Parameters

- `keys`: An array containing `NSString` objects that identify properties of the receiver.

<a id="return-value"></a>

## Return Value

A dictionary containing as keys the property names in `keys`, with corresponding values being the corresponding property values.

<a id="Discussion"></a>

## Discussion

The default implementation invokes [valueForKey:](value%28forkey_%29.md) for each key in `keys` and substitutes `NSNull` values in the dictionary for returned `nil` values.

## See Also

### Related Documentation

- [setValuesForKeysWithDictionary:](setvaluesforkeys%28__%29.md): Sets properties of the receiver with values from a given dictionary, using its keys to identify the properties.

### Getting Values

- [valueForKey:](value%28forkey_%29.md): Returns the value for the property identified by a given key.
- [valueForKeyPath:](value%28forkeypath_%29.md): Returns the value for the derived property identified by a given key path.
- [valueForUndefinedKey:](value%28forundefinedkey_%29.md): Invoked by [valueForKey:](value%28forkey_%29.md) when it finds no property corresponding to a given key.
- [mutableArrayValueForKey:](mutablearrayvalue%28forkey_%29.md): Returns a mutable array proxy that provides read-write access to an ordered to-many relationship specified by a given key.
- [mutableArrayValueForKeyPath:](mutablearrayvalue%28forkeypath_%29.md): Returns a mutable array that provides read-write access to the ordered to-many relationship specified by a given key path.
- [mutableSetValueForKey:](mutablesetvalue%28forkey_%29.md): Returns a mutable set proxy that provides read-write access to the unordered to-many relationship specified by a given key.
- [mutableSetValueForKeyPath:](mutablesetvalue%28forkeypath_%29.md): Returns a mutable set that provides read-write access to the unordered to-many relationship specified by a given key path.
- [mutableOrderedSetValueForKey:](mutableorderedsetvalue%28forkey_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key.
- [mutableOrderedSetValueForKeyPath:](mutableorderedsetvalue%28forkeypath_%29.md): Returns a mutable ordered set that provides read-write access to the uniquing ordered to-many relationship specified by a given key path.
