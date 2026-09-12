> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarygetcountofkey(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarygetcountofkey(_:_:))

# CFDictionaryGetCountOfKey(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of times a key occurs in a dictionary.

## Declaration

```swift
func CFDictionaryGetCountOfKey(_ theDict: CFDictionary!, _ key: UnsafeRawPointer!) -> CFIndex
```

## Parameters

- `theDict`: The dictionary to examine.
- `key`: The key for which to find matches in `theDict`. The key hash and equal callbacks provided when the dictionary was created are used to compare. If the hash callback was `NULL`, the key is treated as a pointer and converted to an integer. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `key`, or any of the keys in the dictionary, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns `1` if a matching key is used by the dictionary, otherwise `0`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey(\_:\_:)](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount(\_:)](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfValue(\_:\_:)](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues(\_:\_:\_:)](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue(\_:\_:)](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent(\_:\_:\_:)](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

# CFDictionaryGetCountOfKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of times a key occurs in a dictionary.

## Declaration

```objectivec
extern CFIndex CFDictionaryGetCountOfKey(CFDictionaryRef theDict, const void *key);
```

## Parameters

- `theDict`: The dictionary to examine.
- `key`: The key for which to find matches in `theDict`. The key hash and equal callbacks provided when the dictionary was created are used to compare. If the hash callback was `NULL`, the key is treated as a pointer and converted to an integer. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `key`, or any of the keys in the dictionary, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

Returns `1` if a matching key is used by the dictionary, otherwise `0`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfValue](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.
