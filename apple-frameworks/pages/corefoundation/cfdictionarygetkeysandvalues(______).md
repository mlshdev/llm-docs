> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarygetkeysandvalues(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarygetkeysandvalues(_:_:_:))

# CFDictionaryGetKeysAndValues(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills two buffers with the keys and values from a dictionary.

## Declaration

```swift
func CFDictionaryGetKeysAndValues(_ theDict: CFDictionary!, _ keys: UnsafeMutablePointer<UnsafeRawPointer?>!, _ values: UnsafeMutablePointer<UnsafeRawPointer?>!)
```

## Parameters

- `theDict`: The dictionary to examine.
- `keys`: A C array of pointer-sized values that, on return, is filled with keys from the `theDict`. The keys and values C arrays are parallel to each other (that is, the items at the same indices form a key-value pair from the dictionary). This value must be a valid pointer to a C array of the appropriate type and size (that is, a size equal to the count of `theDict`), or `NULL` if the keys are not required. If the keys are Core Foundation objects, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).
- `values`: A C array of pointer-sized values that, on return, is filled with values from the `theDict`. The keys and values C arrays are parallel to each other (that is, the items at the same indices form a key-value pair from the dictionary). This value must be a valid pointer to a C array of the appropriate type and size (that is, a size equal to the count of `theDict`), or `NULL` if the values are not required. If the values are Core Foundation objects, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey(\_:\_:)](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount(\_:)](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey(\_:\_:)](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue(\_:\_:)](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetValue(\_:\_:)](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent(\_:\_:\_:)](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

# CFDictionaryGetKeysAndValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills two buffers with the keys and values from a dictionary.

## Declaration

```objectivec
extern void CFDictionaryGetKeysAndValues(CFDictionaryRef theDict, const void **keys, const void **values);
```

## Parameters

- `theDict`: The dictionary to examine.
- `keys`: A C array of pointer-sized values that, on return, is filled with keys from the `theDict`. The keys and values C arrays are parallel to each other (that is, the items at the same indices form a key-value pair from the dictionary). This value must be a valid pointer to a C array of the appropriate type and size (that is, a size equal to the count of `theDict`), or `NULL` if the keys are not required. If the keys are Core Foundation objects, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).
- `values`: A C array of pointer-sized values that, on return, is filled with values from the `theDict`. The keys and values C arrays are parallel to each other (that is, the items at the same indices form a key-value pair from the dictionary). This value must be a valid pointer to a C array of the appropriate type and size (that is, a size equal to the count of `theDict`), or `NULL` if the values are not required. If the values are Core Foundation objects, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetValue](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.
