> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/makeiterator()](https://developer.apple.com/documentation/foundation/nsdictionary/makeiterator())

# makeIterator()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an iterator over the elements of this sequence.

## Declaration

```swift
func makeIterator() -> NSDictionary.Iterator
```

<a id="Discussion"></a>

## Discussion

Complexity: O(1).

## See Also

### Enumerating Dictionaries

- [keyEnumerator()](keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the dictionary.
- [enumerateKeysAndObjects(\_:)](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [enumerateKeysAndObjects(options:using:)](enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.
