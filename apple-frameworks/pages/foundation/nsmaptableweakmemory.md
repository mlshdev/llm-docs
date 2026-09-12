> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptableweakmemory](https://developer.apple.com/documentation/foundation/nsmaptableweakmemory)

# NSMapTableWeakMemory (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equivalent to [weakMemory](nspointerfunctions/options/weakmemory.md).

## Declaration

```swift
var NSMapTableWeakMemory: NSPointerFunctions.Options { get }
```

## See Also

### Memory Options

- [machVirtualMemory](nspointerfunctions/options/machvirtualmemory.md): Use Mach memory.
- [mallocMemory](nspointerfunctions/options/mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [opaqueMemory](nspointerfunctions/options/opaquememory.md): Take no action when pointers are deleted.
- [strongMemory](nspointerfunctions/options/strongmemory.md): Use strong write-barriers to backing store; use garbage-collected memory on copy-in.
- [weakMemory](nspointerfunctions/options/weakmemory.md): Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.
- [NSMapTableStrongMemory](nsmaptablestrongmemory.md): Equivalent to [strongMemory](nspointerfunctions/options/strongmemory.md).

# NSMapTableWeakMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equivalent to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md).

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSMapTableWeakMemory;
```

## See Also

### Memory Options

- [NSPointerFunctionsMachVirtualMemory](nspointerfunctions/options/machvirtualmemory.md): Use Mach memory.
- [NSPointerFunctionsMallocMemory](nspointerfunctions/options/mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [NSPointerFunctionsOpaqueMemory](nspointerfunctions/options/opaquememory.md): Take no action when pointers are deleted.
- [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md): Use strong write-barriers to backing store; use garbage-collected memory on copy-in.
- [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md): Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.
- [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md): Deprecated. Use weak read and write barriers; use garbage-collected memory on copyIn.
- [NSMapTableStrongMemory](nsmaptablestrongmemory.md): Equivalent to [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md).
- [NSMapTableZeroingWeakMemory](nsmaptablezeroingweakmemory.md): Deprecated. Equivalent to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
