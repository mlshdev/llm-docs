> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/addentries(from:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/addentries(from:))

# addEntries(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds to the receiving dictionary the entries from another dictionary.

## Declaration

```swift
func addEntries(from otherDictionary: [AnyHashable : Any])
```

## Parameters

- `otherDictionary`: The dictionary from which to add entries

<a id="Discussion"></a>

## Discussion

Each value object from `otherDictionary` is sent a [retain](../../objectivec/nsobject-c.protocol/retain.md) message before being added to the receiving dictionary. In contrast, each key object is copied (using [copy(with:)](../nscopying/copy%28with_%29.md)—keys must conform to the `NSCopying` protocol), and the copy is added to the receiving dictionary.

If both dictionaries contain the same key, the receiving dictionary’s previous value object for that key is sent a `release` message, and the new value object takes its place.

## See Also

### Adding Entries to a Mutable Dictionary

- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setDictionary(\_:)](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.

# addEntriesFromDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds to the receiving dictionary the entries from another dictionary.

## Declaration

```objectivec
- (void) addEntriesFromDictionary:(NSDictionary<id,id> *) otherDictionary;
```

## Parameters

- `otherDictionary`: The dictionary from which to add entries

<a id="Discussion"></a>

## Discussion

Each value object from `otherDictionary` is sent a [retain](../../objectivec/nsobject-c.protocol/retain.md) message before being added to the receiving dictionary. In contrast, each key object is copied (using [copyWithZone:](../nscopying/copy%28with_%29.md)—keys must conform to the `NSCopying` protocol), and the copy is added to the receiving dictionary.

If both dictionaries contain the same key, the receiving dictionary’s previous value object for that key is sent a `release` message, and the new value object takes its place.

## See Also

### Adding Entries to a Mutable Dictionary

- [setObject:forKey:](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Adds a given key-value pair to the dictionary.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setDictionary:](setdictionary%28__%29.md): Sets the contents of the receiving dictionary to entries in a given dictionary.
