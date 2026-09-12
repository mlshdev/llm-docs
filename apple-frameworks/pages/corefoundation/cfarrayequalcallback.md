> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayequalcallback](https://developer.apple.com/documentation/corefoundation/cfarrayequalcallback)

# CFArrayEqualCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to determine if two values in an array are equal.

## Declaration

```swift
typealias CFArrayEqualCallBack = (UnsafeRawPointer?, UnsafeRawPointer?) -> DarwinBoolean
```

## Parameters

- `value1`: A value in an array to be compared with `value2` for equality.
- `value2`: A value in an array to be compared with `value1` for equality.

<a id="return-value"></a>

## Return Value

`true` if `value1` and `value2` are equal, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate(\_:\_:\_:\_:)](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.

# CFArrayEqualCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to determine if two values in an array are equal.

## Declaration

```objectivec
typedef unsigned char (*)(const void *, const void *) CFArrayEqualCallBack;
```

## Parameters

- `value1`: A value in an array to be compared with `value2` for equality.
- `value2`: A value in an array to be compared with `value1` for equality.

<a id="return-value"></a>

## Return Value

`true` if `value1` and `value2` are equal, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFArrayCreate](cfarraycreate%28________%29.md) in a [CFArrayCallBacks](cfarraycallbacks.md) structure.

## See Also

### Callbacks

- [CFArrayApplierFunction](cfarrayapplierfunction.md): Prototype of a callback function that may be applied to every value in an array.
- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.
