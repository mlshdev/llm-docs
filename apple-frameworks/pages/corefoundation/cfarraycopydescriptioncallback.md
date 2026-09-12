> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraycopydescriptioncallback](https://developer.apple.com/documentation/corefoundation/cfarraycopydescriptioncallback)

# CFArrayCopyDescriptionCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value in an array.

## Declaration

```swift
typealias CFArrayCopyDescriptionCallBack = (UnsafeRawPointer?) -> Unmanaged<CFString>?
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A textual description of `value`. The caller is responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate(\_:\_:\_:\_:)](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure. This callback is used by the [CFCopyDescription(\_:)](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.

# CFArrayCopyDescriptionCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value in an array.

## Declaration

```objectivec
typedef const struct __CFString *(*)(const void *) CFArrayCopyDescriptionCallBack;
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A textual description of `value`. The caller is responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure. This callback is used by the [CFCopyDescription](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.
