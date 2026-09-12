> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatordeallocate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfallocatordeallocate(_:_:))

# CFAllocatorDeallocate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deallocates a block of memory with a given allocator.

## Declaration

```swift
func CFAllocatorDeallocate(_ allocator: CFAllocator!, _ ptr: UnsafeMutableRawPointer!)
```

## Parameters

- `allocator`: The allocator that was used to allocate the block of memory pointed to by `ptr`.
- `ptr`: An untyped pointer to a block of memory to deallocate using `allocator`.

<a id="Discussion"></a>

## Discussion

If the allocator does not specify a `deallocate` callback function, the memory is not deallocated.

<a id="Special-Considerations"></a>

### Special Considerations

You must use the same allocator to deallocate memory as was used to allocate it.

## See Also

### Managing Memory with an Allocator

- [CFAllocatorAllocate(\_:\_:\_:)](cfallocatorallocate%28______%29.md): Allocates memory using the specified allocator.
- [CFAllocatorGetPreferredSizeForSize(\_:\_:\_:)](cfallocatorgetpreferredsizeforsize%28______%29.md): Obtains the number of bytes likely to be allocated upon a specific request.
- [CFAllocatorReallocate(\_:\_:\_:\_:)](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.

# CFAllocatorDeallocate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deallocates a block of memory with a given allocator.

## Declaration

```objectivec
extern void CFAllocatorDeallocate(CFAllocatorRef allocator, void *ptr);
```

## Parameters

- `allocator`: The allocator that was used to allocate the block of memory pointed to by `ptr`.
- `ptr`: An untyped pointer to a block of memory to deallocate using `allocator`.

<a id="Discussion"></a>

## Discussion

If the allocator does not specify a `deallocate` callback function, the memory is not deallocated.

<a id="Special-Considerations"></a>

### Special Considerations

You must use the same allocator to deallocate memory as was used to allocate it.

## See Also

### Managing Memory with an Allocator

- [CFAllocatorAllocate](cfallocatorallocate%28______%29.md): Allocates memory using the specified allocator.
- [CFAllocatorGetPreferredSizeForSize](cfallocatorgetpreferredsizeforsize%28______%29.md): Obtains the number of bytes likely to be allocated upon a specific request.
- [CFAllocatorReallocate](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.
