> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorcopydescriptioncallback](https://developer.apple.com/documentation/corefoundation/cfallocatorcopydescriptioncallback)

# CFAllocatorCopyDescriptionCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that provides a description of the specified data.

## Declaration

```swift
typealias CFAllocatorCopyDescriptionCallBack = (UnsafeRawPointer?) -> Unmanaged<CFString>?
```

## Parameters

- `info`: An untyped pointer to program-defined data.

<a id="return-value"></a>

## Return Value

A CFString object that describes the allocator. The caller is responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

A prototype for a function callback that provides a description of the data pointed to by the `info` field. In implementing this function, return a reference to a CFString object that describes your allocator, particularly some characteristics of your program-defined data.

## See Also

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReallocateCallBack](cfallocatorreallocatecallback.md): A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.
- [CFAllocatorReleaseCallBack](cfallocatorreleasecallback.md): A prototype for a function callback that releases the given data.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.

# CFAllocatorCopyDescriptionCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that provides a description of the specified data.

## Declaration

```objectivec
typedef const struct __CFString *(*)(const void *) CFAllocatorCopyDescriptionCallBack;
```

## Parameters

- `info`: An untyped pointer to program-defined data.

<a id="return-value"></a>

## Return Value

A CFString object that describes the allocator. The caller is responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

A prototype for a function callback that provides a description of the data pointed to by the `info` field. In implementing this function, return a reference to a CFString object that describes your allocator, particularly some characteristics of your program-defined data.

## See Also

### Callbacks

- [CFAllocatorAllocateCallBack](cfallocatorallocatecallback.md): A prototype for a function callback that allocates memory of a requested size.
- [CFAllocatorDeallocateCallBack](cfallocatordeallocatecallback.md): A prototype for a function callback that deallocates a block of memory.
- [CFAllocatorPreferredSizeCallBack](cfallocatorpreferredsizecallback.md): A prototype for a function callback that gives the size of memory likely to be allocated, given a certain request.
- [CFAllocatorReallocateCallBack](cfallocatorreallocatecallback.md): A prototype for a function callback that reallocates memory of a requested size for an existing block of memory.
- [CFAllocatorReleaseCallBack](cfallocatorreleasecallback.md): A prototype for a function callback that releases the given data.
- [CFAllocatorRetainCallBack](cfallocatorretaincallback.md): A prototype for a function callback that retains the given data.
