> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/objects(forkeys:notfoundmarker:)](https://developer.apple.com/documentation/foundation/nsdictionary/objects(forkeys:notfoundmarker:))

# objects(forKeys:notFoundMarker:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.

## Declaration

```swift
func objects(forKeys keys: [Any], notFoundMarker marker: Any) -> [Any]
```

## Parameters

- `keys`: An `NSArray` containing the keys for which to return corresponding values.
- `marker`: The marker object to place in the corresponding element of the returned array if an object isn’t found in the dictionary to correspond to a given key.

<a id="Discussion"></a>

## Discussion

The objects in the returned array and the `keys` array have a one-for-one correspondence, so that the nthe object in the returned array corresponds to the nthe key in `keys`.

## See Also

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeys(for:)](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [value(forKey:)](value%28forkey_%29.md): Returns the value associated with a given key.
- [object(forKey:)](object%28forkey_%29.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-52n56.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-1bt1b.md): Accesses the value associated with a given key.

# objectsForKeys:notFoundMarker: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.

## Declaration

```objectivec
- (NSArray<id> *) objectsForKeys:(NSArray<id> *) keys notFoundMarker:(ObjectType) marker;
```

## Parameters

- `keys`: An `NSArray` containing the keys for which to return corresponding values.
- `marker`: The marker object to place in the corresponding element of the returned array if an object isn’t found in the dictionary to correspond to a given key.

<a id="Discussion"></a>

## Discussion

The objects in the returned array and the `keys` array have a one-for-one correspondence, so that the nthe object in the returned array corresponds to the nthe key in `keys`.

## See Also

### Related Documentation

- [getObjects:andKeys:](getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeysForObject:](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [valueForKey:](value%28forkey_%29.md): Returns the value associated with a given key.
- [getObjects:andKeys:count:](getobjects_andkeys_count_.md): Returns by reference C arrays of the keys and values in the dictionary.
- [getObjects:andKeys:](getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.
- [objectForKey:](object%28forkey_%29.md): Returns the value associated with a given key.
- [objectForKeyedSubscript:](subscript%28__%29-52n56.md): Returns the value associated with a given key.
