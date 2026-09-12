> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/countbyenumeratingwithstate:objects:count:](https://developer.apple.com/documentation/foundation/nsdictionary/countbyenumeratingwithstate:objects:count:)

# countByEnumeratingWithState:objects:count:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a C array of objects over which the sender should iterate.

## Declaration

```objectivec
- (NSUInteger) countByEnumeratingWithState:(NSFastEnumerationState *) state objects:(K[]) buffer count:(NSUInteger) len;
```

## Parameters

- `state`: Context information that is used in the enumeration to, in addition to other possibilities, ensure that the collection has not been mutated.
- `buffer`: A C array of objects over which the sender is to iterate.
- `len`: The maximum number of objects to return in `buffer`.

<a id="return-value"></a>

## Return Value

The number of objects returned in `buffer`. Returns `0` when the iteration is finished.

## See Also

### Enumerating Dictionaries

- [keyEnumerator](keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the dictionary.
- [enumerateKeysAndObjectsUsingBlock:](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [enumerateKeysAndObjectsWithOptions:usingBlock:](enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.
