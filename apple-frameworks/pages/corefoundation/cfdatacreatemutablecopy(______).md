> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatacreatemutablecopy(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatacreatemutablecopy(_:_:_:))

# CFDataCreateMutableCopy(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFMutableData object by copying another CFData object.

## Declaration

```swift
func CFDataCreateMutableCopy(_ allocator: CFAllocator!, _ capacity: CFIndex, _ theData: CFData!) -> CFMutableData!
```

## Parameters

- `allocator`: The CFAllocator object to be used to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of bytes that the CFData object can contain. The CFData object starts with the same length as the original object, and can grow to contain this number of bytes.

  Pass `0` to specify that the maximum capacity is not limited. If non-`0`, `capacity` must be greater than or equal to the length of `theData`.
- `theData`: The CFData object to be copied.

<a id="return-value"></a>

## Return Value

A CFMutableData object that has the same contents as the original object. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Data Object

- [CFDataCreateMutable(\_:\_:)](cfdatacreatemutable%28____%29.md): Creates an empty CFMutableData object.

# CFDataCreateMutableCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a CFMutableData object by copying another CFData object.

## Declaration

```objectivec
extern CFMutableDataRefCFDataCreateMutableCopy(CFAllocatorRef allocator, CFIndex capacity, CFDataRef theData);
```

## Parameters

- `allocator`: The CFAllocator object to be used to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `capacity`: The maximum number of bytes that the CFData object can contain. The CFData object starts with the same length as the original object, and can grow to contain this number of bytes.

  Pass `0` to specify that the maximum capacity is not limited. If non-`0`, `capacity` must be greater than or equal to the length of `theData`.
- `theData`: The CFData object to be copied.

<a id="return-value"></a>

## Return Value

A CFMutableData object that has the same contents as the original object. Returns `NULL` if there was a problem copying the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating a Mutable Data Object

- [CFDataCreateMutable](cfdatacreatemutable%28____%29.md): Creates an empty CFMutableData object.
