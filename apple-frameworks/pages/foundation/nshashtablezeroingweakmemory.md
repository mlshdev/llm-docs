> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtablezeroingweakmemory](https://developer.apple.com/documentation/foundation/nshashtablezeroingweakmemory)

# NSHashTableZeroingWeakMemory

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.5+ (deprecated in 10.8)

This option has been deprecated. Instead use the `NSHashTableWeakMemory` option. Equal to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSHashTableZeroingWeakMemory;
```

<a id="Discussion"></a>

## Discussion

Note that `NSHashTableWeakMemory` is not entirely equivalent to and compatible with the previous option’s behavior: objects must be weak-reference-safe under manual and automatic reference counting; not all objects are.

## See Also

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [NSPointerFunctionsCopyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.
