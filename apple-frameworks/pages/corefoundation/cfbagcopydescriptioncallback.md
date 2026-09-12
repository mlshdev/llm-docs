> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagcopydescriptioncallback](https://developer.apple.com/documentation/corefoundation/cfbagcopydescriptioncallback)

# CFBagCopyDescriptionCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value in a bag.

## Declaration

```swift
typealias CFBagCopyDescriptionCallBack = (UnsafeRawPointer?) -> Unmanaged<CFString>?
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A textual description of `value`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFBagCreate(\_:\_:\_:\_:)](cfbagcreate%28________%29.md) in a [CFBagCallBacks](cfbagcallbacks.md) structure. This callback is used by the [CFCopyDescription(\_:)](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.

# CFBagCopyDescriptionCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value in a bag.

## Declaration

```objectivec
typedef const struct __CFString *(*)(const void *) CFBagCopyDescriptionCallBack;
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A textual description of `value`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFBagCreate](cfbagcreate%28________%29.md) in a [CFBagCallBacks](cfbagcallbacks.md) structure. This callback is used by the [CFCopyDescription](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagReleaseCallBack](cfbagreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a bag.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.
