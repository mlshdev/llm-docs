> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarysetvalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarysetvalue(_:_:_:))

# CFDictionarySetValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value corresponding to a given key.

## Declaration

```swift
func CFDictionarySetValue(_ theDict: CFMutableDictionary!, _ key: UnsafeRawPointer!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theDict`: The dictionary to modify. If this parameter is a fixed-capacity dictionary and it is full before this operation, and the key does not exist in the dictionary, the behavior is undefined.
- `key`: The key of the value to set in `theDict`. If a key which matches `key` is already present in the dictionary, only the value for the key is changed (“add if absent, replace if present”). If no key matches `key`, the key-value pair is added to the dictionary.

  If a key-value pair is added, both `key` and `value` are retained by the dictionary, using the retain callback provided when `theDict` was created. `key` must be of the type expected by the key retain callback.
- `value`: The value to add to or replace in `theDict`. `value` is retained using the value retain callback provided when `theDict` was created, and the previous value if any is released. `value` must be of the type expected by the retain and release callbacks.

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue(\_:\_:\_:)](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues(\_:)](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue(\_:\_:)](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue(\_:\_:\_:)](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.

# CFDictionarySetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the value corresponding to a given key.

## Declaration

```objectivec
extern void CFDictionarySetValue(CFMutableDictionaryRef theDict, const void *key, const void *value);
```

## Parameters

- `theDict`: The dictionary to modify. If this parameter is a fixed-capacity dictionary and it is full before this operation, and the key does not exist in the dictionary, the behavior is undefined.
- `key`: The key of the value to set in `theDict`. If a key which matches `key` is already present in the dictionary, only the value for the key is changed (“add if absent, replace if present”). If no key matches `key`, the key-value pair is added to the dictionary.

  If a key-value pair is added, both `key` and `value` are retained by the dictionary, using the retain callback provided when `theDict` was created. `key` must be of the type expected by the key retain callback.
- `value`: The value to add to or replace in `theDict`. `value` is retained using the value retain callback provided when `theDict` was created, and the previous value if any is released. `value` must be of the type expected by the retain and release callbacks.

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
