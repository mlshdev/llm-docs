> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryremovevalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionaryremovevalue(_:_:))

# CFDictionaryRemoveValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a key-value pair.

## Declaration

```swift
func CFDictionaryRemoveValue(_ theDict: CFMutableDictionary!, _ key: UnsafeRawPointer!)
```

## Parameters

- `theDict`: The dictionary to modify.
- `key`: The key of the value to remove from `theDict`. If a key which matches `key` is present in `theDict`, the key-value pair is removed from the dictionary, otherwise this function does nothing (“remove if present”).

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue(\_:\_:\_:)](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues(\_:)](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryReplaceValue(\_:\_:\_:)](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue(\_:\_:\_:)](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.

# CFDictionaryRemoveValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a key-value pair.

## Declaration

```objectivec
extern void CFDictionaryRemoveValue(CFMutableDictionaryRef theDict, const void *key);
```

## Parameters

- `theDict`: The dictionary to modify.
- `key`: The key of the value to remove from `theDict`. If a key which matches `key` is present in `theDict`, the key-value pair is removed from the dictionary, otherwise this function does nothing (“remove if present”).

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryReplaceValue](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.
