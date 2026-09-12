> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarygetcount(_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarygetcount(_:))

# CFDictionaryGetCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of key-value pairs in a dictionary.

## Declaration

```swift
func CFDictionaryGetCount(_ theDict: CFDictionary!) -> CFIndex
```

## Parameters

- `theDict`: The dictionary to examine.

<a id="return-value"></a>

## Return Value

The number of number of key-value pairs in `theDict`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey(\_:\_:)](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue(\_:\_:)](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCountOfKey(\_:\_:)](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue(\_:\_:)](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues(\_:\_:\_:)](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue(\_:\_:)](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent(\_:\_:\_:)](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.

# CFDictionaryGetCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of key-value pairs in a dictionary.

## Declaration

```objectivec
extern CFIndex CFDictionaryGetCount(CFDictionaryRef theDict);
```

## Parameters

- `theDict`: The dictionary to examine.

<a id="return-value"></a>

## Return Value

The number of number of key-value pairs in `theDict`.

## See Also

### Examining a dictionary

- [CFDictionaryContainsKey](cfdictionarycontainskey%28____%29.md): Returns a Boolean value that indicates whether a given key is in a dictionary.
- [CFDictionaryContainsValue](cfdictionarycontainsvalue%28____%29.md): Returns a Boolean value that indicates whether a given value is in a dictionary.
- [CFDictionaryGetCountOfKey](cfdictionarygetcountofkey%28____%29.md): Returns the number of times a key occurs in a dictionary.
- [CFDictionaryGetCountOfValue](cfdictionarygetcountofvalue%28____%29.md): Counts the number of times a given value occurs in the dictionary.
- [CFDictionaryGetKeysAndValues](cfdictionarygetkeysandvalues%28______%29.md): Fills two buffers with the keys and values from a dictionary.
- [CFDictionaryGetValue](cfdictionarygetvalue%28____%29.md): Returns the value associated with a given key.
- [CFDictionaryGetValueIfPresent](cfdictionarygetvalueifpresent%28______%29.md): Returns a Boolean value that indicates whether a given value for a given key is in a dictionary, and returns that value indirectly if it exists.
