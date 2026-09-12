> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptablezeroingweakmemory](https://developer.apple.com/documentation/foundation/nsmaptablezeroingweakmemory)

# NSMapTableZeroingWeakMemory

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.5+ (deprecated in 10.8)

Equivalent to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSMapTableZeroingWeakMemory;
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
- [NSMapTableWeakMemory](nsmaptableweakmemory.md): Equivalent to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md).
