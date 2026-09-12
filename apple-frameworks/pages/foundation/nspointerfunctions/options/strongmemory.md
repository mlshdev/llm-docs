> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/options/strongmemory](https://developer.apple.com/documentation/foundation/nspointerfunctions/options/strongmemory)

# strongMemory (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use strong write-barriers to backing store; use garbage-collected memory on copy-in.

## Declaration

```swift
static var strongMemory: NSPointerFunctions.Options { get }
```

<a id="Discussion"></a>

## Discussion

This is the default memory value.

As a special case, if you do not use garbage collection and specify this value in conjunction with [objectPersonality](objectpersonality.md) or [objectPointerPersonality](objectpointerpersonality.md) then the `NSPointerFunctions` object uses `retain` and `release`.

If you do not use garbage collection, and specify this value in conjunction with a valid non-object personality, it is the same as specifying [mallocMemory](mallocmemory.md).

## See Also

### Memory Options

- [machVirtualMemory](machvirtualmemory.md): Use Mach memory.
- [mallocMemory](mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [opaqueMemory](opaquememory.md): Take no action when pointers are deleted.
- [weakMemory](weakmemory.md): Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.
- [NSMapTableStrongMemory](../../nsmaptablestrongmemory.md): Equivalent to [strongMemory](strongmemory.md).
- [NSMapTableWeakMemory](../../nsmaptableweakmemory.md): Equivalent to [weakMemory](weakmemory.md).

# NSPointerFunctionsStrongMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Use strong write-barriers to backing store; use garbage-collected memory on copy-in.

## Declaration

```objectivec
NSPointerFunctionsStrongMemory
```

<a id="Discussion"></a>

## Discussion

This is the default memory value.

As a special case, if you do not use garbage collection and specify this value in conjunction with [NSPointerFunctionsObjectPersonality](objectpersonality.md) or [NSPointerFunctionsObjectPointerPersonality](objectpointerpersonality.md) then the `NSPointerFunctions` object uses `retain` and `release`.

If you do not use garbage collection, and specify this value in conjunction with a valid non-object personality, it is the same as specifying [NSPointerFunctionsMallocMemory](mallocmemory.md).

## See Also

### Memory Options

- [NSPointerFunctionsMachVirtualMemory](machvirtualmemory.md): Use Mach memory.
- [NSPointerFunctionsMallocMemory](mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [NSPointerFunctionsOpaqueMemory](opaquememory.md): Take no action when pointers are deleted.
- [NSPointerFunctionsWeakMemory](weakmemory.md): Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.
- [NSPointerFunctionsZeroingWeakMemory](../../nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md): Deprecated. Use weak read and write barriers; use garbage-collected memory on copyIn.
- [NSMapTableStrongMemory](../../nsmaptablestrongmemory.md): Equivalent to [NSPointerFunctionsStrongMemory](strongmemory.md).
- [NSMapTableWeakMemory](../../nsmaptableweakmemory.md): Equivalent to [NSPointerFunctionsWeakMemory](weakmemory.md).
- [NSMapTableZeroingWeakMemory](../../nsmaptablezeroingweakmemory.md): Deprecated. Equivalent to [NSPointerFunctionsZeroingWeakMemory](../../nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
