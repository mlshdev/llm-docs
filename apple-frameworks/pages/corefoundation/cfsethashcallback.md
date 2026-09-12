> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsethashcallback](https://developer.apple.com/documentation/corefoundation/cfsethashcallback)

# CFSetHashCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.

## Declaration

```swift
typealias CFSetHashCallBack = (UnsafeRawPointer?) -> CFHashCode
```

## Parameters

- `value`: The value used to compute the hash code.

<a id="return-value"></a>

## Return Value

An integer that can be used as a table address in a hash table structure.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFSetCreate(\_:\_:\_:\_:)](cfsetcreate%28________%29.md) in a [CFSetCallBacks](cfsetcallbacks.md) structure.

## See Also

### Callbacks

- [CFSetApplierFunction](cfsetapplierfunction.md): Prototype of a callback function that may be applied to every value in a set.
- [CFSetCopyDescriptionCallBack](cfsetcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.

# CFSetHashCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Prototype of a callback function called to compute a hash code for a value. Hash codes are used when values are accessed, added, or removed from a collection.

## Declaration

```objectivec
typedef unsigned long (*)(const void *) CFSetHashCallBack;
```

## Parameters

- `value`: The value used to compute the hash code.

<a id="return-value"></a>

## Return Value

An integer that can be used as a table address in a hash table structure.

<a id="Discussion"></a>

## Discussion

This callback is passed to [CFSetCreate](cfsetcreate%28________%29.md) in a [CFSetCallBacks](cfsetcallbacks.md) structure.

## See Also

### Callbacks

- [CFSetApplierFunction](cfsetapplierfunction.md): Prototype of a callback function that may be applied to every value in a set.
- [CFSetCopyDescriptionCallBack](cfsetcopydescriptioncallback.md): Prototype of a callback function used to get a description of a value in a set.
- [CFSetEqualCallBack](cfsetequalcallback.md): Prototype of a callback function used to determine if two values in a set are equal.
- [CFSetReleaseCallBack](cfsetreleasecallback.md): Prototype of a callback function used to release a value before it’s removed from a set.
- [CFSetRetainCallBack](cfsetretaincallback.md): Prototype of a callback function used to retain a value being added to a set.
