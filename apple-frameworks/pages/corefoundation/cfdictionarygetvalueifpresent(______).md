> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarygetvalueifpresent(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarygetvalueifpresent(_:_:_:))

# CFDictionaryGetValueIfPresent(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

## Declaration

```swift
func CFDictionaryGetValueIfPresent(_ theDict: CFDictionary!, _ key: UnsafeRawPointer!, _ value: UnsafeMutablePointer<UnsafeRawPointer?>!) -> Bool
```

## Parameters

- `theDict`: The dictionary to examine.
- `key`: The key for which to find a match in `theDict`. The key hash and equal callbacks provided when the dictionary was created are used to compare. If the hash callback was `NULL`, `key` is treated as a pointer and converted to an integer. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `key`, or any of the keys in `theDict`, is not understood by the equal callback, the behavior is undefined.
- `value`: A pointer to memory which, on return, is filled with the pointer-sized value if a matching key is found. If no key match is found, the contents of the storage pointed to by this parameter are undefined. This value may be `NULL`, in which case the value from the dictionary is not returned (but the return value of this function still indicates whether or not the key-value pair was present). If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if a matching key was found, otherwise `false`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey(\_:\_:)](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount(\_:)](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey(\_:\_:)](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue(\_:\_:)](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues(\_:\_:\_:)](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue(\_:\_:)](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.

# CFDictionaryGetValueIfPresent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

## Declaration

```objectivec
extern Boolean CFDictionaryGetValueIfPresent(CFDictionaryRef theDict, const void *key, const void **value);
```

## Parameters

- `theDict`: The dictionary to examine.
- `key`: The key for which to find a match in `theDict`. The key hash and equal callbacks provided when the dictionary was created are used to compare. If the hash callback was `NULL`, `key` is treated as a pointer and converted to an integer. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `key`, or any of the keys in `theDict`, is not understood by the equal callback, the behavior is undefined.
- `value`: A pointer to memory which, on return, is filled with the pointer-sized value if a matching key is found. If no key match is found, the contents of the storage pointed to by this parameter are undefined. This value may be `NULL`, in which case the value from the dictionary is not returned (but the return value of this function still indicates whether or not the key-value pair was present). If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if a matching key was found, otherwise `false`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
