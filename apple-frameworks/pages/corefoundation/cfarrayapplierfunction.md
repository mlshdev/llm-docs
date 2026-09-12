> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarrayapplierfunction](https://developer.apple.com/documentation/corefoundation/cfarrayapplierfunction)

# CFArrayApplierFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every value in an array.

## Declaration

```swift
typealias CFArrayApplierFunction = (UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `value`: The current value in an array.
- `context`: The program-defined context parameter given to the applier   function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFArrayApplyFunction(\_:\_:\_:\_:)](cfarrayapplyfunction%28________%29.md) function, which iterates over the values in an array and applies the behavior defined in the applier function to each value in an array.

## See Also

### Callbacks

- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.

# CFArrayApplierFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every value in an array.

## Declaration

```objectivec
typedef void (*)(const void *, void *) CFArrayApplierFunction;
```

## Parameters

- `value`: The current value in an array.
- `context`: The program-defined context parameter given to the applier   function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFArrayApplyFunction](cfarrayapplyfunction%28________%29.md) function, which iterates over the values in an array and applies the behavior defined in the applier function to each value in an array.

## See Also

### Callbacks

- [CFArrayCopyDescriptionCallBack](cfarraycopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in an array.
- [CFArrayEqualCallBack](cfarrayequalcallback.md): Prototype of a callback function used to determine if two values in an array are equal.
- [CFArrayReleaseCallBack](cfarrayreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from an array.
- [CFArrayRetainCallBack](cfarrayretaincallback.md): Prototype of a callback function used to retain a value being added to an array.
