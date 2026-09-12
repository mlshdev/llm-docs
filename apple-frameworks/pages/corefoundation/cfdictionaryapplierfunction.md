> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryapplierfunction](https://developer.apple.com/documentation/corefoundation/cfdictionaryapplierfunction)

# CFDictionaryApplierFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every key-value pair in a dictionary.

## Declaration

```swift
typealias CFDictionaryApplierFunction = (UnsafeRawPointer?, UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `key`: The key associated with the current key-value pair.
- `value`: The value associated with the current key-value pair.
- `context`: The program-defined context parameter given to the apply   function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFDictionaryApplyFunction(\_:\_:\_:)](cfdictionaryapplyfunction%28______%29.md) function which iterates over the key-value pairs in a dictionary and applies the behavior defined in the applier function to each key-value pair in a dictionary.

## See Also

### Callbacks

- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.

# CFDictionaryApplierFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every key-value pair in a dictionary.

## Declaration

```objectivec
typedef void (*)(const void *, const void *, void *) CFDictionaryApplierFunction;
```

## Parameters

- `key`: The key associated with the current key-value pair.
- `value`: The value associated with the current key-value pair.
- `context`: The program-defined context parameter given to the apply   function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFDictionaryApplyFunction](cfdictionaryapplyfunction%28______%29.md) function which iterates over the key-value pairs in a dictionary and applies the behavior defined in the applier function to each key-value pair in a dictionary.

## See Also

### Callbacks

- [CFDictionaryCopyDescriptionCallBack](cfdictionarycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value or key in a dictionary.
- [CFDictionaryEqualCallBack](cfdictionaryequalcallback.md): Prototype of a callback function used to determine if two values or keys in a dictionary are equal.
- [CFDictionaryHashCallBack](cfdictionaryhashcallback.md): Prototype of a callback function invoked to compute a hash code for a key. Hash codes are used when key-value pairs are accessed, added, or removed from a collection.
- [CFDictionaryReleaseCallBack](cfdictionaryreleasecallback.md): Prototype of a callback function used to release a key-value pair before it’s removed from a dictionary.
- [CFDictionaryRetainCallBack](cfdictionaryretaincallback.md): Prototype of a callback function used to retain a value or key being added to a dictionary.
