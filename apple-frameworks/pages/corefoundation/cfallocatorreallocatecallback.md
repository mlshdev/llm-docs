> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorreallocatecallback](https://developer.apple.com/documentation/corefoundation/cfallocatorreallocatecallback)

# CFAllocatorReallocateCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.

## Declaration

```swift
typealias CFAllocatorReallocateCallBack = (UnsafeMutableRawPointer?, CFIndex, CFOptionFlags, UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?
```

## Parameters

- `ptr`: The block of memory to resize.
- `newsize`: The size of the new allocation.
- `hint`: A bitfield that is currently not used (always set to 0).
- `info`: An untyped pointer to program-defined data.

<a id="return-value"></a>

## Return Value

Pointer to the new block of memory.

<a id="Discussion"></a>

## Discussion

In implementing this function, change the size of the block of memory pointed to by `ptr` to the size specified by `newsize` and return the pointer to the larger block of memory. Return NULL on any reallocation failure, leaving the old block of memory untouched. Also return NULL immediately if any of the following conditions if the ptr parameter is NULL or the `newsize` parameter is not greater than 0. Leave the contents of the old block of memory unchanged up to the lesser of the new or old sizes. If the `ptr` parameter is not a block of memory that has been previously allocated by the allocator, the results are undefined; abnormal program termination can occur. The `hint` argument is a bitfield that you should currently not use (that is, assign 0).

## See Also

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorCopyDescriptionCallBack](cfallocatorcopydescriptioncallback.md): A prototype for a function callback that provides a description of the specified data.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReleaseCallBack](cfallocatorreleasecallback.md): A prototype for a function callback that releases the given data.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.

# CFAllocatorReallocateCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.

## Declaration

```objectivec
typedef void *(*)(void *, long, unsigned long, void *) CFAllocatorReallocateCallBack;
```

## Parameters

- `ptr`: The block of memory to resize.
- `newsize`: The size of the new allocation.
- `hint`: A bitfield that is currently not used (always set to 0).
- `info`: An untyped pointer to program-defined data.

<a id="return-value"></a>

## Return Value

Pointer to the new block of memory.

<a id="Discussion"></a>

## Discussion

In implementing this function, change the size of the block of memory pointed to by `ptr` to the size specified by `newsize` and return the pointer to the larger block of memory. Return NULL on any reallocation failure, leaving the old block of memory untouched. Also return NULL immediately if any of the following conditions if the ptr parameter is NULL or the `newsize` parameter is not greater than 0. Leave the contents of the old block of memory unchanged up to the lesser of the new or old sizes. If the `ptr` parameter is not a block of memory that has been previously allocated by the allocator, the results are undefined; abnormal program termination can occur. The `hint` argument is a bitfield that you should currently not use (that is, assign 0).

## See Also

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorCopyDescriptionCallBack](cfallocatorcopydescriptioncallback.md): A prototype for a function callback that provides a description of the specified data.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReleaseCallBack](cfallocatorreleasecallback.md): A prototype for a function callback that releases the given data.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.
