> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledictionary/setdictionary(_:)](https://developer.apple.com/documentation/foundation/nsmutabledictionary/setdictionary(_:))

# setDictionary(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the contents of the receiving dictionary to entries in a given dictionary.

## Declaration

```swift
func setDictionary(_ otherDictionary: [AnyHashable : Any])
```

## Parameters

- `otherDictionary`: A dictionary containing the new entries.

<a id="Discussion"></a>

## Discussion

All entries are removed from the receiving dictionary (with [removeAllObjects()](removeallobjects%28%29.md)), then each entry from `otherDictionary` added into the receiving dictionary.

## See Also

### Adding Entries to a Mutable Dictionary

- [setObject(\_:forKey:)](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setValue(\_:forKey:)](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntries(from:)](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.

# setDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the contents of the receiving dictionary to entries in a given dictionary.

## Declaration

```objectivec
- (void) setDictionary:(NSDictionary<id,id> *) otherDictionary;
```

## Parameters

- `otherDictionary`: A dictionary containing the new entries.

<a id="Discussion"></a>

## Discussion

All entries are removed from the receiving dictionary (with [removeAllObjects](removeallobjects%28%29.md)), then each entry from `otherDictionary` added into the receiving dictionary.

## See Also

### Adding Entries to a Mutable Dictionary

- [setObject:forKey:](setobject%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Adds a given key-value pair to the dictionary.
- [setValue:forKey:](setvalue%28__forkey_%29.md): Adds a given key-value pair to the dictionary.
- [addEntriesFromDictionary:](addentries%28from_%29.md): Adds to the receiving dictionary the entries from another dictionary.
