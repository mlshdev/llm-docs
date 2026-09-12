> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorgetpreferredsizeforsize(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfallocatorgetpreferredsizeforsize(_:_:_:))

# CFAllocatorGetPreferredSizeForSize(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains the number of bytes likely to be allocated upon a specific request.

## Declaration

```swift
func CFAllocatorGetPreferredSizeForSize(_ allocator: CFAllocator!, _ size: CFIndex, _ hint: CFOptionFlags) -> CFIndex
```

## Parameters

- `allocator`: The allocator to use, or `NULL` for the default allocator.
- `size`: The number of bytes to allocate. If the value is `0` or less, the result is the same value.
- `hint`: A bitfield of type `CFOptionsFlags`. Pass flags to the allocator that suggest how memory is to be allocated. `0` indicates no hints. No hints are currently defined, only `0` should be passed for this argument.

<a id="return-value"></a>

## Return Value

The number of bytes likely to be allocated upon a specific request.

<a id="Discussion"></a>

## Discussion

The return value depends on the allocator’s internal allocation strategy, and will be equal to or larger than `size`. Calling this function may help you better match your memory allocation or reallocation strategy to that of the allocator.

Note that the return value depends on the internal implementation of the allocator and the results may change from release to release or from platform to platform.

If no function callback is assigned to the `preferredSize` field of the allocator’s context (see the `CFAllocatorContext` structure), then the value of `size` is returned.

## See Also

### Managing Memory with an Allocator

- [CFAllocatorAllocate(\_:\_:\_:)](cfallocatorallocate%28______%29.md): Allocates memory using the specified allocator.
- [CFAllocatorDeallocate(\_:\_:)](cfallocatordeallocate%28____%29.md): Deallocates a block of memory with a given allocator.
- [CFAllocatorReallocate(\_:\_:\_:\_:)](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.

# CFAllocatorGetPreferredSizeForSize (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Obtains the number of bytes likely to be allocated upon a specific request.

## Declaration

```objectivec
extern CFIndex CFAllocatorGetPreferredSizeForSize(CFAllocatorRef allocator, CFIndex size, CFOptionFlags hint);
```

## Parameters

- `allocator`: The allocator to use, or `NULL` for the default allocator.
- `size`: The number of bytes to allocate. If the value is `0` or less, the result is the same value.
- `hint`: A bitfield of type `CFOptionsFlags`. Pass flags to the allocator that suggest how memory is to be allocated. `0` indicates no hints. No hints are currently defined, only `0` should be passed for this argument.

<a id="return-value"></a>

## Return Value

The number of bytes likely to be allocated upon a specific request.

<a id="Discussion"></a>

## Discussion

The return value depends on the allocator’s internal allocation strategy, and will be equal to or larger than `size`. Calling this function may help you better match your memory allocation or reallocation strategy to that of the allocator.

Note that the return value depends on the internal implementation of the allocator and the results may change from release to release or from platform to platform.

If no function callback is assigned to the `preferredSize` field of the allocator’s context (see the `CFAllocatorContext` structure), then the value of `size` is returned.

## See Also

### Managing Memory with an Allocator

- [CFAllocatorAllocate](cfallocatorallocate%28______%29.md): Allocates memory using the specified allocator.
- [CFAllocatorDeallocate](cfallocatordeallocate%28____%29.md): Deallocates a block of memory with a given allocator.
- [CFAllocatorReallocate](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.
