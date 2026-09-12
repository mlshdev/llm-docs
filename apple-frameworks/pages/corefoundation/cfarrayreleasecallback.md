> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayreleasecallback](https://developer.apple.com/documentation/corefoundation/cfarrayreleasecallback)

# CFArrayReleaseCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to release a value before it’s removed from an array.

## Declaration

```swift
typealias CFArrayReleaseCallBack = (CFAllocator?, UnsafeRawPointer?) -> Void
```

## Parameters

- `allocator`: The array’s allocator.
- `value`: The value being removed from an array.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate(\_:\_:\_:\_:)](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.

# CFArrayReleaseCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to release a value before it’s removed from an array.

## Declaration

```objectivec
typedef void (*)(const struct __CFAllocator *, const void *) CFArrayReleaseCallBack;
```

## Parameters

- `allocator`: The array’s allocator.
- `value`: The value being removed from an array.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.
