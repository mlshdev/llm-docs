> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraycreatecopy(_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraycreatecopy(_:_:))

# CFArrayCreateCopy(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new immutable array with the values from another array.

## Declaration

```swift
func CFArrayCreateCopy(_ allocator: CFAllocator!, _ theArray: CFArray!) -> CFArray!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new array and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theArray`: The array to copy.

<a id="return-value"></a>

## Return Value

A new CFArray object that contains the same values as `theArray`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The pointer values from `theArray` are copied into the new array; the values are also retained by the new array. The count of the new array is the same as `theArray`. The new array uses the same callbacks as `theArray`.

## See Also

### Creating an Array

- [CFArrayCreate(\_:\_:\_:\_:)](cfarraycreate%28________%29.md): Creates a new immutable array with the given values.

# CFArrayCreateCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new immutable array with the values from another array.

## Declaration

```objectivec
extern CFArrayRefCFArrayCreateCopy(CFAllocatorRef allocator, CFArrayRef theArray);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new array and its storage for values. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `theArray`: The array to copy.

<a id="return-value"></a>

## Return Value

A new CFArray object that contains the same values as `theArray`. Ownership follows [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The pointer values from `theArray` are copied into the new array; the values are also retained by the new array. The count of the new array is the same as `theArray`. The new array uses the same callbacks as `theArray`.

## See Also

### Creating an Array

- [CFArrayCreate](cfarraycreate%28________%29.md): Creates a new immutable array with the given values.
