> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarygetcountofvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarygetcountofvalue(_:_:))

# CFDictionaryGetCountOfValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Counts the number of times a given value occurs in the dictionary.

## Declaration

```swift
func CFDictionaryGetCountOfValue(_ theDict: CFDictionary!, _ value: UnsafeRawPointer!) -> CFIndex
```

## Parameters

- `theDict`: The dictionary to examine.
- `value`: The value for which to find matches in `theDict`. The value equal callback provided when the dictionary was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in the dictionary, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The number of times the `value` occurs in `theDict`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey(\_:\_:)](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount(\_:)](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey(\_:\_:)](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetKeysAndValues(\_:\_:\_:)](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue(\_:\_:)](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent(\_:\_:\_:)](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

# CFDictionaryGetCountOfValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Counts the number of times a given value occurs in the dictionary.

## Declaration

```objectivec
extern CFIndex CFDictionaryGetCountOfValue(CFDictionaryRef theDict, const void *value);
```

## Parameters

- `theDict`: The dictionary to examine.
- `value`: The value for which to find matches in `theDict`. The value equal callback provided when the dictionary was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in the dictionary, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The number of times the `value` occurs in `theDict`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCount](cfdictionarygetcount%28__%29.md): Returns the number of key-value pairs in a dictionary.
- [CFDictionaryGetCountOfKey](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetKeysAndValues](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.
