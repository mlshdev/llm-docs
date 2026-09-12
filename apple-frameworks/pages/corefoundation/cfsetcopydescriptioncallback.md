> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsetcopydescriptioncallback](https://developer.apple.com/documentation/corefoundation/cfsetcopydescriptioncallback)

# CFSetCopyDescriptionCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value in a set.

## Declaration

```swift
typealias CFSetCopyDescriptionCallBack = (UnsafeRawPointer?) -> Unmanaged<CFString>?
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A textual description of `value`. The caller is responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFSetCreate(\_:\_:\_:\_:)](cfsetcreate%28________%29.md) in a [CFSetCallBacks](cfsetcallbacks.md) structure. This callback is used by the [CFCopyDescription(\_:)](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFSetApplierFunction](cfsetapplierfunction.md): Prototype of a callback function that may be applied to every value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetHashCallBack](cfsethashcallback.md): Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.

# CFSetCopyDescriptionCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function used to get a description of a value in a set.

## Declaration

```objectivec
typedef const struct __CFString *(*)(const void *) CFSetCopyDescriptionCallBack;
```

## Parameters

- `value`: The value to be described.

<a id="return-value"></a>

## Return Value

A textual description of `value`. The caller is responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFSetCreate](cfsetcreate%28________%29.md) in a [CFSetCallBacks](cfsetcallbacks.md) structure. This callback is used by the [CFCopyDescription](cfcopydescription%28__%29.md) function.

## See Also

### Callbacks

- [CFSetApplierFunction](cfsetapplierfunction.md): Prototype of a callback function that may be applied to every value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetHashCallBack](cfsethashcallback.md): Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.
