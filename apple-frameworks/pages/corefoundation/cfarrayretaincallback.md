> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayretaincallback](https://developer.apple.com/documentation/corefoundation/cfarrayretaincallback)

# CFArrayRetainCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to retain a value being added to an array.

## Declaration

```swift
typealias CFArrayRetainCallBack = (CFAllocator?, UnsafeRawPointer?) -> UnsafeRawPointer?
```

## Parameters

- `allocator`: The array’s allocator.
- `value`: The value being added to an array.

<a id="return-value"></a>

## Return Value

The value to store in an array, which is usually the `value` parameter passed to this callback, but may be a different   value if a different value should be stored in an array.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate(\_:\_:\_:\_:)](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.

# CFArrayRetainCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to retain a value being added to an array.

## Declaration

```objectivec
typedef const void *(*)(const struct __CFAllocator *, const void *) CFArrayRetainCallBack;
```

## Parameters

- `allocator`: The array’s allocator.
- `value`: The value being added to an array.

<a id="return-value"></a>

## Return Value

The value to store in an array, which is usually the `value` parameter passed to this callback, but may be a different   value if a different value should be stored in an array.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
