> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/predefined-allocators](https://developer.apple.com/documentation/corefoundation/predefined-allocators)

# Predefined Allocators (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

CFAllocator provides the following predefined allocators. In general, you should use `kCFAllocatorDefault` unless one of the special circumstances exist below.

## Topics

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate(\_:\_:)](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.

# Predefined Allocators (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

CFAllocator provides the following predefined allocators. In general, you should use `kCFAllocatorDefault` unless one of the special circumstances exist below.

## Topics

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.
