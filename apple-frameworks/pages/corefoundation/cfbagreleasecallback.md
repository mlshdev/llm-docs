> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagreleasecallback](https://developer.apple.com/documentation/corefoundation/cfbagreleasecallback)

# CFBagReleaseCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to release a value before it’s removed from a bag.

## Declaration

```swift
typealias CFBagReleaseCallBack = (CFAllocator?, UnsafeRawPointer?) -> Void
```

## Parameters

- `allocator`: The bag’s allocator.
- `value`: The value being removed from the bag.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFBagCreate(\_:\_:\_:\_:)](cfbagcreate%28________%29.md) in a [CFBagCallBacks](cfbagcallbacks.md) structure.

## See Also

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.

# CFBagReleaseCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to release a value before it’s removed from a bag.

## Declaration

```objectivec
typedef void (*)(const struct __CFAllocator *, const void *) CFBagReleaseCallBack;
```

## Parameters

- `allocator`: The bag’s allocator.
- `value`: The value being removed from the bag.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFBagCreate](cfbagcreate%28________%29.md) in a [CFBagCallBacks](cfbagcallbacks.md) structure.

## See Also

### Callbacks

- [CFBagApplierFunction](cfbagapplierfunction.md): Prototype of a callback function that may be applied to every value in a bag.
- [CFBagCopyDescriptionCallBack](cfbagcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a bag.
- [CFBagEqualCallBack](cfbagequalcallback.md): Prototype of a callback function used to determine if two values in a bag are equal.
- [CFBagHashCallBack](cfbaghashcallback.md): Prototype of a callback function invoked to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFBagRetainCallBack](cfbagretaincallback.md): Prototype of a callback function used to retain a value being added to a bag.
