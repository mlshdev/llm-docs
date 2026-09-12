> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryaddvalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionaryaddvalue(_:_:_:))

# CFDictionaryAddValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a key-value pair to a dictionary if the specified key is not already present.

## Declaration

```swift
func CFDictionaryAddValue(_ theDict: CFMutableDictionary!, _ key: UnsafeRawPointer!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theDict`: The dictionary to modify. If the dictionary is a fixed-capacity dictionary and it is full before this operation, the behavior is undefined.
- `key`: The key for the value to add to the dictionary—a CFType object or a pointer value. The `key` is retained by the dictionary using the retain callback provided when the dictionary was created, so must be of the type expected by the callback. If a key which matches `key` is already present in the dictionary, this function does nothing (“add if absent”).
- `value`: A CFType object or a pointer value to add to the dictionary. The `value` is retained by the dictionary using the retain callback provided when the dictionary was created, so must be of the type expected by the callback.

## See Also

### Modifying a Dictionary

- [CFDictionaryRemoveAllValues(\_:)](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue(\_:\_:)](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue(\_:\_:\_:)](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue(\_:\_:\_:)](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.

# CFDictionaryAddValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a key-value pair to a dictionary if the specified key is not already present.

## Declaration

```objectivec
extern void CFDictionaryAddValue(CFMutableDictionaryRef theDict, const void *key, const void *value);
```

## Parameters

- `theDict`: The dictionary to modify. If the dictionary is a fixed-capacity dictionary and it is full before this operation, the behavior is undefined.
- `key`: The key for the value to add to the dictionary—a CFType object or a pointer value. The `key` is retained by the dictionary using the retain callback provided when the dictionary was created, so must be of the type expected by the callback. If a key which matches `key` is already present in the dictionary, this function does nothing (“add if absent”).
- `value`: A CFType object or a pointer value to add to the dictionary. The `value` is retained by the dictionary using the retain callback provided when the dictionary was created, so must be of the type expected by the callback.

## See Also

### Modifying a Dictionary

- [CFDictionaryRemoveAllValues](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.
