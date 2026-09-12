> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/objectenumerator()](https://developer.apple.com/documentation/foundation/nsdictionary/objectenumerator())

# objectEnumerator() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each value in the dictionary.

## Declaration

```swift
func objectEnumerator() -> NSEnumerator
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each value in the dictionary.

<a id="Discussion"></a>

## Discussion

The following code fragment illustrates how you might use the method.

```objc
NSEnumerator *enumerator = [myDictionary objectEnumerator];
id value;
 
while ((value = [enumerator nextObject])) {
    /* code that acts on the dictionary’s values */
}
```

If you use this method with instances of mutable subclasses of `NSDictionary`, your code should not modify the entries during enumeration. If you intend to modify the entries, use the [allValues](allvalues.md) method to create a “snapshot” of the dictionary’s values. Work from this snapshot to modify the values.

<a id="Special-Considerations"></a>

### Special Considerations

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)). Fast enumeration is available in macOS 10.5 and later and iOS 2.0 and later.

## See Also

### Related Documentation

- [nextObject()](../nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Enumerating Dictionaries

- [keyEnumerator()](keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [enumerateKeysAndObjects(\_:)](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [enumerateKeysAndObjects(options:using:)](enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.
- [makeIterator()](makeiterator%28%29.md): Returns an iterator over the elements of this sequence.

# objectEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each value in the dictionary.

## Declaration

```objectivec
- (NSEnumerator<id> *) objectEnumerator;
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each value in the dictionary.

<a id="Discussion"></a>

## Discussion

The following code fragment illustrates how you might use the method.

```objc
NSEnumerator *enumerator = [myDictionary objectEnumerator];
id value;
 
while ((value = [enumerator nextObject])) {
    /* code that acts on the dictionary’s values */
}
```

If you use this method with instances of mutable subclasses of `NSDictionary`, your code should not modify the entries during enumeration. If you intend to modify the entries, use the [allValues](allvalues.md) method to create a “snapshot” of the dictionary’s values. Work from this snapshot to modify the values.

<a id="Special-Considerations"></a>

### Special Considerations

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)). Fast enumeration is available in macOS 10.5 and later and iOS 2.0 and later.

## See Also

### Related Documentation

- [nextObject](../nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Enumerating Dictionaries

- [keyEnumerator](keyenumerator%28%29.md): Provides an enumerator to access the keys in the dictionary.
- [enumerateKeysAndObjectsUsingBlock:](enumeratekeysandobjects%28__%29.md): Applies a given block object to the entries of the dictionary.
- [enumerateKeysAndObjectsWithOptions:usingBlock:](enumeratekeysandobjects%28options_using_%29.md): Applies a given block object to the entries of the dictionary, with options specifying how the enumeration is performed.
- [countByEnumeratingWithState:objects:count:](countbyenumeratingwithstate_objects_count_.md): Returns by reference a C array of objects over which the sender should iterate.
