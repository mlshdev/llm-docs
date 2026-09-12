> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarycopydescriptioncallback](https://developer.apple.com/documentation/corefoundation/cfdictionarycopydescriptioncallback)

# CFDictionaryCopyDescriptionCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value or key in a dictionary.

## Declaration

```swift
typealias CFDictionaryCopyDescriptionCallBack = (UnsafeRawPointer?) -> Unmanaged<CFString>?
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A text description of `value`.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFDictionaryCreate(\_:\_:\_:\_:\_:\_:)](cfdictionarycreate%28____________%29.md) in a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure or [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md). This callback is used by the [CFCopyDescription(\_:)](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.

# CFDictionaryCopyDescriptionCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value or key in a dictionary.

## Declaration

```objectivec
typedef const struct __CFString *(*)(const void *) CFDictionaryCopyDescriptionCallBack;
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A text description of `value`.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFDictionaryCreate](cfdictionarycreate%28____________%29.md) in a [CFDictionaryKeyCallBacks](cfdictionarykeycallbacks.md) structure or [CFDictionaryValueCallBacks](cfdictionaryvaluecallbacks.md). This callback is used by the [CFCopyDescription](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFDictionaryApplierFunction](cfdictionaryapplierfunction.md): Prototype of a callback function that may be applied to every key-value pair in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.
