> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryremoveallvalues(_:)](https://developer.apple.com/documentation/corefoundation/cfdictionaryremoveallvalues(_:))

# CFDictionaryRemoveAllValues(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes all the key-value pairs from a dictionary, making it empty.

## Declaration

```swift
func CFDictionaryRemoveAllValues(_ theDict: CFMutableDictionary!)
```

## Parameters

- `theDict`: The dictionary to modify.

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue(\_:\_:\_:)](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveValue(\_:\_:)](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue(\_:\_:\_:)](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue(\_:\_:\_:)](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.

# CFDictionaryRemoveAllValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes all the key-value pairs from a dictionary, making it empty.

## Declaration

```objectivec
extern void CFDictionaryRemoveAllValues(CFMutableDictionaryRef theDict);
```

## Parameters

- `theDict`: The dictionary to modify.

## See Also

### Modifying a Dictionary

- [CFDictionaryAddValue](cfdictionaryaddvalue%28______%29.md): Adds a key-value pair to a dictionary if the specified key is not already present.
- [CFDictionaryRemoveValue](cfdictionaryremovevalue%28____%29.md): Removes a key-value pair.
- [CFDictionaryReplaceValue](cfdictionaryreplacevalue%28______%29.md): Replaces a value corresponding to a given key.
- [CFDictionarySetValue](cfdictionarysetvalue%28______%29.md): Sets the value corresponding to a given key.
