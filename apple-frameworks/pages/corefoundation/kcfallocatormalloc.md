> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfallocatormalloc](https://developer.apple.com/documentation/corefoundation/kcfallocatormalloc)

# kCFAllocatorMalloc (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This allocator uses `malloc()`, `realloc()`, and `free()`.

## Declaration

```swift
let kCFAllocatorMalloc: CFAllocator!
```

<a id="Discussion"></a>

## Discussion

Typically you should not use this allocator, use `kCFAllocatorDefault` instead. This allocator is useful as the `bytesDeallocator` in CFData or `contentsDeallocator` in CFString where the memory was obtained as a result  of `malloc` type functions.

## See Also

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate(\_:\_:)](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.

# kCFAllocatorMalloc (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This allocator uses `malloc()`, `realloc()`, and `free()`.

## Declaration

```objectivec
extern CFAllocatorRef const kCFAllocatorMalloc;
```

<a id="Discussion"></a>

## Discussion

Typically you should not use this allocator, use `kCFAllocatorDefault` instead. This allocator is useful as the `bytesDeallocator` in CFData or `contentsDeallocator` in CFString where the memory was obtained as a result  of `malloc` type functions.

## See Also

### Constants

- [kCFAllocatorDefault](kcfallocatordefault.md): This is a synonym for `NULL`.
- [kCFAllocatorSystemDefault](kcfallocatorsystemdefault.md): Default system allocator.
- [kCFAllocatorMallocZone](kcfallocatormalloczone.md): This allocator explicitly uses the default malloc zone, returned by `malloc_default_zone()`.
- [kCFAllocatorNull](kcfallocatornull.md): This allocator does nothing—it allocates no memory.
- [kCFAllocatorUseContext](kcfallocatorusecontext.md): Special allocator argument to [CFAllocatorCreate](cfallocatorcreate%28____%29.md)—it uses the functions given in the context to allocate the allocator.
