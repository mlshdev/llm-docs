> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarykeycallbacks/hash](https://developer.apple.com/documentation/corefoundation/cfdictionarykeycallbacks/hash)

# hash (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compute a hash code for keys as they are used to access, add, or remove values in the dictionary. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFDictionaryHashCallBack](../cfdictionaryhashcallback.md) for a description of this callback.

## Declaration

```swift
var hash: CFDictionaryHashCallBack!
```

# hash (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to compute a hash code for keys as they are used to access, add, or remove values in the dictionary. If `NULL`, the collection computes a hash code by converting the pointer value to an integer. See [CFDictionaryHashCallBack](../cfdictionaryhashcallback.md) for a description of this callback.

## Declaration

```objectivec
CFDictionaryHashCallBack hash;
```
