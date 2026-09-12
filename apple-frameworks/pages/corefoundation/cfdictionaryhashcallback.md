> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryhashcallback](https://developer.apple.com/documentation/corefoundation/cfdictionaryhashcallback)

# CFDictionaryHashCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.

## Declaration

```swift
typealias CFDictionaryHashCallBack = (UnsafeRawPointer?) -> CFHashCode
```

## Parameters

- `value`: The value used to compute the hash code.

<a id="return-value"></a>

## Return Value

An integer that can be used as a table address in a hash table structure.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md) in a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure.

## See Also

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.

# CFDictionaryHashCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.

## Declaration

```objectivec
typedef unsigned long (*)(const void *) CFDictionaryHashCallBack;
```

## Parameters

- `value`: The value used to compute the hash code.

<a id="return-value"></a>

## Return Value

An integer that can be used as a table address in a hash table structure.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFDictionaryCreate](cfdictionarycreate%28____________%29.md) in a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure.

## See Also

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.
