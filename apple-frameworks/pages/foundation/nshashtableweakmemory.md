> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtableweakmemory](https://developer.apple.com/documentation/foundation/nshashtableweakmemory)

# NSHashTableWeakMemory (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equal to [weakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [weakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.

## Declaration

```swift
var NSHashTableWeakMemory: NSPointerFunctions.Options { get }
```

## See Also

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [strongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [copyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [objectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).

# NSHashTableWeakMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Equal to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.

## Declaration

```objectivec
static const NSPointerFunctionsOptions NSHashTableWeakMemory;
```

## See Also

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableZeroingWeakMemory](nshashtablezeroingweakmemory.md): Deprecated. This option has been deprecated. Instead use the `NSHashTableWeakMemory` option. Equal to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [NSPointerFunctionsCopyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).
