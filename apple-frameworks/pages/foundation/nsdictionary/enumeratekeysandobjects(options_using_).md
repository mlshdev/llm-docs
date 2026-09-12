> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/enumeratekeysandobjects(options:using:)](https://developer.apple.com/documentation/foundation/nsdictionary/enumeratekeysandobjects(options:using:))

# enumerateKeysAndObjects(options:using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.

## Declaration

```swift
func enumerateKeysAndObjects(options opts: NSEnumerationOptions = [], using block: (Any, Any, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `opts`: Enumeration options.
- `block`: A block object to operate on entries in the dictionary.

<a id="Discussion"></a>

## Discussion

If the block sets `*stop` to [true](https://developer.apple.com/documentation/swift/true), the enumeration stops.

## See Also

### Enumerating Dictionaries

- [keyEnumerator()](keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the dictionary.
- [enumerateKeysAndObjects(\_:)](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [makeIterator()](makeiterator%28%29.md): Returns an iterator over the elements of this sequence.

# enumerateKeysAndObjectsWithOptions:usingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.

## Declaration

```objectivec
- (void) enumerateKeysAndObjectsWithOptions:(NSEnumerationOptions) opts usingBlock:(void (^)(KeyType key, ObjectType obj, BOOL *stop)) block;
```

## Parameters

- `opts`: Enumeration options.
- `block`: A block object to operate on entries in the dictionary.

<a id="Discussion"></a>

## Discussion

If the block sets `*stop` to [true](https://developer.apple.com/documentation/swift/true), the enumeration stops.

## See Also

### Enumerating Dictionaries

- [keyEnumerator](keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the dictionary.
- [enumerateKeysAndObjectsUsingBlock:](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [countByEnumeratingWithState:objects:count:](countbyenumeratingwithstate_objects_count_.md): Returns by reference a C array of objects over which the sender should iterate.
