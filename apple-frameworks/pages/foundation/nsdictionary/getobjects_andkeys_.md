> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/getobjects:andkeys:](https://developer.apple.com/documentation/foundation/nsdictionary/getobjects:andkeys:)

# getObjects:andKeys:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns by reference C arrays of the keys and values in the dictionary.

> Use [getObjects:andKeys:count:](getobjects_andkeys_count_.md) instead.

## Declaration

```objectivec
- (void) getObjects:(ObjectType[]) objects andKeys:(KeyType[]) keys;
```

## Parameters

- `objects`: Upon return, contains a C array of the values in the dictionary.
- `keys`: Upon return, contains a C array of the keys in the dictionary.

<a id="Discussion"></a>

## Discussion

The elements in the returned array and the keys array have a one-for-one correspondence, so that the nth object in the returned array corresponds to the the key in keys.

## See Also

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeysForObject:](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [valueForKey:](value%28forkey_%29.md): Returns the value associated with a given key.
- [getObjects:andKeys:count:](getobjects_andkeys_count_.md): Returns by reference C arrays of the keys and values in the dictionary.
- [objectsForKeys:notFoundMarker:](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [objectForKey:](object%28forkey_%29.md): Returns the value associated with a given key.
- [objectForKeyedSubscript:](subscript%28__%29-52n56.md): Returns the value associated with a given key.
