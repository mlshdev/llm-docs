> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryretaincallback](https://developer.apple.com/documentation/corefoundation/cfdictionaryretaincallback)

# CFDictionaryRetainCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to retain a value or key being added to a dictionary.

## Declaration

```swift
typealias CFDictionaryRetainCallBack = (CFAllocator?, UnsafeRawPointer?) -> UnsafeRawPointer?
```

## Parameters

- `allocator`: The dictionary’s allocator.
- `value`: The value being added to the dictionary.

<a id="return-value"></a>

## Return Value

The value or key to store in the dictionary, which is usually the `value` parameter passed to this callback, but may be a different   value if a different value should be stored in the collection.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md) in a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) and [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure.

## See Also

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.

# CFDictionaryRetainCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to retain a value or key being added to a dictionary.

## Declaration

```objectivec
typedef const void *(*)(const struct __CFAllocator *, const void *) CFDictionaryRetainCallBack;
```

## Parameters

- `allocator`: The dictionary’s allocator.
- `value`: The value being added to the dictionary.

<a id="return-value"></a>

## Return Value

The value or key to store in the dictionary, which is usually the `value` parameter passed to this callback, but may be a different   value if a different value should be stored in the collection.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFDictionaryCreate](cfdictionarycreate%28____________%29.md) in a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) and [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md) structure.

## See Also

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
