> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfallocatorusecontext](https://developer.apple.com/documentation/corefoundation/kcfallocatorusecontext)

# kCFAllocatorUseContext (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Special allocator argument to [CFAllocatorCreate(\_:\_:)](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.

## Declaration

```swift
let kCFAllocatorUseContext: CFAllocator!
```

## See Also

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.

# kCFAllocatorUseContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Special allocator argument to [CFAllocatorCreate](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.

## Declaration

```objectivec
extern CFAllocatorRef const kCFAllocatorUseContext;
```

## See Also

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
