> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtableoptions](https://developer.apple.com/documentation/foundation/nshashtableoptions)

# NSHashTableOptions (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

## Declaration

```swift
typealias NSHashTableOptions = Int
```

## Topics

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [strongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [copyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [objectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [weakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [weakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.

# NSHashTableOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

## Declaration

```objectivec
typedef NSUInteger NSHashTableOptions;
```

## Topics

### Constants

- [NSHashTableStrongMemory](nshashtablestrongmemory.md): Equal to [NSPointerFunctionsStrongMemory](nspointerfunctions/options/strongmemory.md).
- [NSHashTableZeroingWeakMemory](nshashtablezeroingweakmemory.md): Deprecated. This option has been deprecated. Instead use the `NSHashTableWeakMemory` option. Equal to [NSPointerFunctionsZeroingWeakMemory](nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).
- [NSHashTableCopyIn](nshashtablecopyin.md): Equal to [NSPointerFunctionsCopyIn](nspointerfunctions/options/copyin.md).
- [NSHashTableObjectPointerPersonality](nshashtableobjectpointerpersonality.md): Equal to [NSPointerFunctionsObjectPointerPersonality](nspointerfunctions/options/objectpointerpersonality.md).
- [NSHashTableWeakMemory](nshashtableweakmemory.md): Equal to [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md). Uses weak read and write barriers appropriate for ARC or GC. Using [NSPointerFunctionsWeakMemory](nspointerfunctions/options/weakmemory.md) object references will turn to `NULL` on last release.
