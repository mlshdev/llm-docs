> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryreplacevalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdictionaryreplacevalue(_:_:_:))

# CFDictionaryReplaceValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a value corresponding to a given key.

## Declaration

```swift
func CFDictionaryReplaceValue(_ theDict: CFMutableDictionary!, _ key: UnsafeRawPointer!, _ value: UnsafeRawPointer!)
```

## Parameters

- `theDict`: The dictionary to modify.
- `key`: The key of the value to replace in `theDict`. If a key which matches `key` is present in the dictionary, the value is changed to the `value`, otherwise this function does nothing (“replace if present”).
- `value`: The new value for `key`. The `value` object is retained by `theDict` using the retain callback provided when `theDict` was created, and the old value is released. `value` must be of the type expected by the retain and release callbacks.

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue(\_:\_:\_:)](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues(\_:)](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue(\_:\_:)](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionarySetValue(\_:\_:\_:)](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.

# CFDictionaryReplaceValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a value corresponding to a given key.

## Declaration

```objectivec
extern void CFDictionaryReplaceValue(CFMutableDictionaryRef theDict, const void *key, const void *value);
```

## Parameters

- `theDict`: The dictionary to modify.
- `key`: The key of the value to replace in `theDict`. If a key which matches `key` is present in the dictionary, the value is changed to the `value`, otherwise this function does nothing (“replace if present”).
- `value`: The new value for `key`. The `value` object is retained by `theDict` using the retain callback provided when `theDict` was created, and the old value is released. `value` must be of the type expected by the retain and release callbacks.

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveAllValues](cfdictionaryremoveallvalues%28__%29.md): Removes all the key-value pairs from a dictionary, making it empty.
- [CFDictionaryRemoveValue](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionarySetValue](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.
