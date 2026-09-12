> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/allkeys](https://developer.apple.com/documentation/foundation/nsdictionary/allkeys)

# allKeys (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.

## Declaration

```swift
var allKeys: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

The order of the elements in the array is not defined.

## See Also

### Accessing Keys and Values

- [allKeys(for:)](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [value(forKey:)](value%28forkey_%29.md): Returns the value associated with a given key.
- [objects(forKeys:notFoundMarker:)](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [object(forKey:)](object%28forkey_%29.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-52n56.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-1bt1b.md): Accesses the value associated with a given key.

# allKeys (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.

## Declaration

```objectivec
@property (copy, readonly) NSArray<id> * allKeys;
```

<a id="Discussion"></a>

## Discussion

The order of the elements in the array is not defined.

## See Also

### Accessing Keys and Values

- [allKeysForObject:](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [valueForKey:](value%28forkey_%29.md): Returns the value associated with a given key.
- [getObjects:andKeys:count:](getobjects_andkeys_count_.md): Returns by reference C arrays of the keys and values in the dictionary.
- [getObjects:andKeys:](getobjects_andkeys_.md): Deprecated. Returns by reference C arrays of the keys and values in the dictionary.
- [objectsForKeys:notFoundMarker:](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [objectForKey:](object%28forkey_%29.md): Returns the value associated with a given key.
- [objectForKeyedSubscript:](subscript%28__%29-52n56.md): Returns the value associated with a given key.
