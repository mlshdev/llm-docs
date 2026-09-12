> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtablestrongmemory](https://developer.apple.com/documentation/foundation/nshashtablestrongmemory)

# NSHashTableStrongMemory (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equal to [strongMemory](nspointerfunctions/options/strongmemory.md).

## Declaration

```swift
var NSHashTableStrongMemory: NSPointerFunctions.Options { get }
```

## See Also

### Constants

- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [copyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [objectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [weakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [weakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.

# NSHashTableStrongMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equal to [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md).

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSHashTableStrongMemory;
```

## See Also

### Constants

- [NSHashTableZeroingWeakMemory](nshashtablezeroingweakmemory.md): Deprecated. This option has been deprecated. Instead use the `NSHashTableWeakMemory` option. Equal to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [NSPointerFunctionsCopyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.
