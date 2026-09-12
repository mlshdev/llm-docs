> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetapplierfunction](https://developer.apple.com/documentation/corefoundation/cfsetapplierfunction)

# CFSetApplierFunction (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every value in a set.

## Declaration

```swift
typealias CFSetApplierFunction = (UnsafeRawPointer?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `value`: The current value in a set.
- `context`: The program-defined context parameter given to the apply function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFSetApplyFunction(\_:\_:\_:)](cfsetapplyfunction%28______%29.md) function which iterates over the values in a set and applies the behavior defined in the applier function to each value in a set.

## See Also

### Callbacks

- [CFSetCopyDescriptionCallBack](cfsetcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetHashCallBack](cfsethashcallback.md): Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.

# CFSetApplierFunction (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function that may be applied to every value in a set.

## Declaration

```objectivec
typedef void (*)(const void *, void *) CFSetApplierFunction;
```

## Parameters

- `value`: The current value in a set.
- `context`: The program-defined context parameter given to the apply function.

<a id="Discussion"></a>

## Discussion

This callback is passed to the [CFSetApplyFunction](cfsetapplyfunction%28______%29.md) function which iterates over the values in a set and applies the behavior defined in the applier function to each value in a set.

## See Also

### Callbacks

- [CFSetCopyDescriptionCallBack](cfsetcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetHashCallBack](cfsethashcallback.md): Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.
