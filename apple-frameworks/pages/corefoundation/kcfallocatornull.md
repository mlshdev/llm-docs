> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfallocatornull](https://developer.apple.com/documentation/corefoundation/kcfallocatornull)

# kCFAllocatorNull (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This allocator does nothing—it allocates no memory.

## Declaration

```swift
let kCFAllocatorNull: CFAllocator!
```

<a id="Discussion"></a>

## Discussion

This allocator is useful as the `bytesDeallocator` in CFData or `contentsDeallocator` in CFString where the memory should not be freed.

## See Also

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate(\_:\_:)](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.

# kCFAllocatorNull (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This allocator does nothing—it allocates no memory.

## Declaration

```objectivec
extern CFAllocatorRef const kCFAllocatorNull;
```

<a id="Discussion"></a>

## Discussion

This allocator is useful as the `bytesDeallocator` in CFData or `contentsDeallocator` in CFString where the memory should not be freed.

## See Also

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.
