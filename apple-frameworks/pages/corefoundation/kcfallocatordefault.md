> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfallocatordefault](https://developer.apple.com/documentation/corefoundation/kcfallocatordefault)

# kCFAllocatorDefault (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This is a synonym for `NULL`.

## Declaration

```swift
let kCFAllocatorDefault: CFAllocator!
```

## See Also

### Constants

- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate(\_:\_:)](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.

# kCFAllocatorDefault (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This is a synonym for `NULL`.

## Declaration

```objectivec
extern CFAllocatorRef const kCFAllocatorDefault;
```

## See Also

### Constants

- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMalloc](kcfallocatormalloc.md): This allocator uses `malloc()`, `realloc()`, and `free()`.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.
