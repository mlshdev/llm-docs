> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorreleasecallback](https://developer.apple.com/documentation/corefoundation/cfallocatorreleasecallback)

# CFAllocatorReleaseCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that releases the given data.

## Declaration

```swift
typealias CFAllocatorReleaseCallBack = (UnsafeRawPointer?) -> Void
```

## Parameters

- `info`: The data to be released.

<a id="Discussion"></a>

## Discussion

A prototype for a function callback that releases the data pointed to by the `info` field. In implementing this function, release (or free) the data you have defined for the allocator context.

## See Also

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorCopyDescriptionCallBack](cfallocatorcopydescriptioncallback.md): A prototype for a function callback that provides a description of the specified data.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReallocateCallBack](cfallocatorreallocatecallback.md): A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.

# CFAllocatorReleaseCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that releases the given data.

## Declaration

```objectivec
typedef void (*)(const void *) CFAllocatorReleaseCallBack;
```

## Parameters

- `info`: The data to be released.

<a id="Discussion"></a>

## Discussion

A prototype for a function callback that releases the data pointed to by the `info` field. In implementing this function, release (or free) the data you have defined for the allocator context.

## See Also

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorCopyDescriptionCallBack](cfallocatorcopydescriptioncallback.md): A prototype for a function callback that provides a description of the specified data.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReallocateCallBack](cfallocatorreallocatecallback.md): A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.
