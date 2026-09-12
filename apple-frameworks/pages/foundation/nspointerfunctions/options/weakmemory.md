> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/options/weakmemory](https://developer.apple.com/documentation/foundation/nspointerfunctions/options/weakmemory)

# weakMemory (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.

## Declaration

```swift
static var weakMemory: NSPointerFunctions.Options { get }
```

## See Also

### Memory Options

- [machVirtualMemory](machvirtualmemory.md): Use Mach memory.
- [mallocMemory](mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [opaqueMemory](opaquememory.md): Take no action when pointers are deleted.
- [strongMemory](strongmemory.md): Use strong write-barriers to backing store; use garbage-collected memory on copy-in.
- [NSMapTableStrongMemory](../../nsmaptablestrongmemory.md): Equivalent to [strongMemory](strongmemory.md).
- [NSMapTableWeakMemory](../../nsmaptableweakmemory.md): Equivalent to [weakMemory](weakmemory.md).

# NSPointerFunctionsWeakMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.

## Declaration

```objectivec
NSPointerFunctionsWeakMemory
```

## See Also

### Memory Options

- [NSPointerFunctionsMachVirtualMemory](machvirtualmemory.md): Use Mach memory.
- [NSPointerFunctionsMallocMemory](mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [NSPointerFunctionsOpaqueMemory](opaquememory.md): Take no action when pointers are deleted.
- [NSPointerFunctionsStrongMemory](strongmemory.md): Use strong write-barriers to backing store; use garbage-collected memory on copy-in.
- [NSPointerFunctionsZeroingWeakMemory](../../nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md): Deprecated. Use weak read and write barriers; use garbage-collected memory on copyIn.
- [NSMapTableStrongMemory](../../nsmaptablestrongmemory.md): Equivalent to [NSPointerFunctionsStrongMemory](strongmemory.md).
- [NSMapTableWeakMemory](../../nsmaptableweakmemory.md): Equivalent to [NSPointerFunctionsWeakMemory](weakmemory.md).
- [NSMapTableZeroingWeakMemory](../../nsmaptablezeroingweakmemory.md): Deprecated. Equivalent to [NSPointerFunctionsZeroingWeakMemory](../../nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
