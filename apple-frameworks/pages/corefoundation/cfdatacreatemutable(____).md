> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatacreatemutable(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatacreatemutable(_:_:))

# CFDataCreateMutable(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an empty CFMutableData object.

## Declaration

```swift
func CFDataCreateMutable(_ allocator: CFAllocator!, _ capacity: CFIndex) -> CFMutableData!
```

## Parameters

- `allocator`: The CFAllocator object to be used to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of bytes that the CFData object can contain. The CFData object starts empty and can grow to contain this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.

<a id="return-value"></a>

## Return Value

A CFMutableData object or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates an empty (that is, content-less) CFMutableData object. You can add raw data to this object with the [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md) function, and thereafter you can replace and delete characters with the appropriate CFMutableData functions. If the `capacity` parameter is greater than `0`, any attempt to add characters beyond this limit can result in undefined behavior.

## See Also

### Creating a Mutable Data Object

- [CFDataCreateMutableCopy(\_:\_:\_:)](cfdatacreatemutablecopy%28______%29.md): Creates a CFMutableData object by copying another CFData object.

# CFDataCreateMutable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an empty CFMutableData object.

## Declaration

```objectivec
extern CFMutableDataRefCFDataCreateMutable(CFAllocatorRef allocator, CFIndex capacity);
```

## Parameters

- `allocator`: The CFAllocator object to be used to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of bytes that the CFData object can contain. The CFData object starts empty and can grow to contain this number of values (and it can have less).

  Pass `0` to specify that the maximum capacity is not limited. The value must not be negative.

<a id="return-value"></a>

## Return Value

A CFMutableData object or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function creates an empty (that is, content-less) CFMutableData object. You can add raw data to this object with the [CFDataAppendBytes](cfdataappendbytes%28______%29.md) function, and thereafter you can replace and delete characters with the appropriate CFMutableData functions. If the `capacity` parameter is greater than `0`, any attempt to add characters beyond this limit can result in undefined behavior.

## See Also

### Creating a Mutable Data Object

- [CFDataCreateMutableCopy](cfdatacreatemutablecopy%28______%29.md): Creates a CFMutableData object by copying another CFData object.
