> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtableobjectpointerpersonality](https://developer.apple.com/documentation/foundation/nshashtableobjectpointerpersonality)

# NSHashTableObjectPointerPersonality (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equal to [objectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).

## Declaration

```swift
var NSHashTableObjectPointerPersonality: NSPointerFunctions.Options { get }
```

## See Also

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [strongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [copyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [weakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [weakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.

# NSHashTableObjectPointerPersonality (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equal to [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSHashTableObjectPointerPersonality;
```

## See Also

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableZeroingWeakMemory](nshashtablezeroingweakmemory.md): Deprecated. This option has been deprecated. Instead use the `NSHashTableWeakMemory` option. Equal to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [NSPointerFunctionsCopyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.
