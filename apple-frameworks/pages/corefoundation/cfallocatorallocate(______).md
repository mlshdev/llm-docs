> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfallocatorallocate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfallocatorallocate(_:_:_:))

# CFAllocatorAllocate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Allocates memory using the specified allocator.

## Declaration

```swift
func CFAllocatorAllocate(_ allocator: CFAllocator!, _ size: CFIndex, _ hint: CFOptionFlags) -> UnsafeMutableRawPointer!
```

## Parameters

- `allocator`: The allocator to use to allocate the memory. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `size`: The size of the memory to allocate.
- `hint`: A bitfield containing flags that suggest how memory is to be allocated. `0` indicates no hints. No hints are currently defined, so only `0` should be passed for this value.

<a id="return-value"></a>

## Return Value

A pointer to the newly allocated memory.

## See Also

### Managing Memory with an Allocator

- [CFAllocatorDeallocate(\_:\_:)](cfallocatordeallocate%28____%29.md): Deallocates a block of memory with a given allocator.
- [CFAllocatorGetPreferredSizeForSize(\_:\_:\_:)](cfallocatorgetpreferredsizeforsize%28______%29.md): Obtains the number of bytes likely to be allocated upon a specific request.
- [CFAllocatorReallocate(\_:\_:\_:\_:)](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.

# CFAllocatorAllocate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Allocates memory using the specified allocator.

## Declaration

```objectivec
extern void *CFAllocatorAllocate(CFAllocatorRef allocator, CFIndex size, CFOptionFlags hint);
```

## Parameters

- `allocator`: The allocator to use to allocate the memory. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `size`: The size of the memory to allocate.
- `hint`: A bitfield containing flags that suggest how memory is to be allocated. `0` indicates no hints. No hints are currently defined, so only `0` should be passed for this value.

<a id="return-value"></a>

## Return Value

A pointer to the newly allocated memory.

## See Also

### Managing Memory with an Allocator

- [CFAllocatorDeallocate](cfallocatordeallocate%28____%29.md): Deallocates a block of memory with a given allocator.
- [CFAllocatorGetPreferredSizeForSize](cfallocatorgetpreferredsizeforsize%28______%29.md): Obtains the number of bytes likely to be allocated upon a specific request.
- [CFAllocatorReallocate](cfallocatorreallocate%28________%29.md): Reallocates memory using the specified allocator.
