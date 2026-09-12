> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/allkeys(for:)](https://developer.apple.com/documentation/foundation/nsdictionary/allkeys(for:))

# allKeys(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.

## Declaration

```swift
func allKeys(for anObject: Any) -> [Any]
```

## Parameters

- `anObject`: The value to look for in the dictionary.

<a id="return-value"></a>

## Return Value

A new array containing the keys corresponding to all occurrences of `anObject` in the dictionary. If no object matching `anObject` is found, returns an empty array.

<a id="Discussion"></a>

## Discussion

Each object in the dictionary is sent an [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) message to determine if it’s equal to `anObject`.

## See Also

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [value(forKey:)](value%28forkey_%29.md): Returns the value associated with a given key.
- [objects(forKeys:notFoundMarker:)](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [object(forKey:)](object%28forkey_%29.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-52n56.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-1bt1b.md): Accesses the value associated with a given key.

# allKeysForObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.

## Declaration

```objectivec
- (NSArray<id> *) allKeysForObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: The value to look for in the dictionary.

<a id="return-value"></a>

## Return Value

A new array containing the keys corresponding to all occurrences of `anObject` in the dictionary. If no object matching `anObject` is found, returns an empty array.

<a id="Discussion"></a>

## Discussion

Each object in the dictionary is sent an [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) message to determine if it’s equal to `anObject`.

## See Also

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [valueForKey:](value%28forkey_%29.md): Returns the value associated with a given key.
- [getObjects:andKeys:count:](getobjects_andkeys_count_.md): Returns by reference C arrays of the keys and values in the dictionary.
- [getObjects:andKeys:](getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.
- [objectsForKeys:notFoundMarker:](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [objectForKey:](object%28forkey_%29.md): Returns the value associated with a given key.
- [objectForKeyedSubscript:](subscript%28__%29-52n56.md): Returns the value associated with a given key.
