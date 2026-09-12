> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/options](https://developer.apple.com/documentation/foundation/nspointerfunctions/options)

# NSPointerFunctions.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the memory and personality options for an `NSPointerFunctions` object.

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

When specifying a value, you can use only one of the options listed in Memory Options,  only one of the options listed in Personality Options, and any number of other options.

## Topics

### Memory Options

These options are mutually exclusive.

- [machVirtualMemory](options/machvirtualmemory.md): Use Mach memory.
- [mallocMemory](options/mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [opaqueMemory](options/opaquememory.md): Take no action when pointers are deleted.
- [strongMemory](options/strongmemory.md): Use strong write-barriers to backing store; use garbage-collected memory on copy-in.
- [weakMemory](options/weakmemory.md): Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.
- [NSMapTableStrongMemory](../nsmaptablestrongmemory.md): Equivalent to [strongMemory](options/strongmemory.md).
- [NSMapTableWeakMemory](../nsmaptableweakmemory.md): Equivalent to [weakMemory](options/weakmemory.md).

### Personality Options

These options are mutually exclusive.

- [cStringPersonality](options/cstringpersonality.md): Use a string hash and `strcmp`; C-string ‘`%s`’ style description.
- [integerPersonality](options/integerpersonality.md): Use unshifted value as hash and equality.
- [objectPersonality](options/objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [objectPointerPersonality](options/objectpointerpersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.
- [opaquePersonality](options/opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [structPersonality](options/structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](sizefunction.md)).
- [NSMapTableObjectPointerPersonality](../nsmaptableobjectpointerpersonality.md): Equivalent to [objectPointerPersonality](options/objectpointerpersonality.md).

### Copy Option

- [copyIn](options/copyin.md): Use the memory acquire function to allocate and copy items on input (see [acquireFunction](acquirefunction.md)).
- [NSMapTableCopyIn](../nsmaptablecopyin.md): Equivalent to [copyIn](options/copyin.md).

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSPointerFunctionsOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the memory and personality options for an `NSPointerFunctions` object.

## Declaration

```objectivec
enum NSPointerFunctionsOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

When specifying a value, you can use only one of the options listed in Memory Options,  only one of the options listed in Personality Options, and any number of other options.

## Topics

### Memory Options

These options are mutually exclusive.

- [NSPointerFunctionsMachVirtualMemory](options/machvirtualmemory.md): Use Mach memory.
- [NSPointerFunctionsMallocMemory](options/mallocmemory.md): Use `free()` on removal, `calloc()` on copy in.
- [NSPointerFunctionsOpaqueMemory](options/opaquememory.md): Take no action when pointers are deleted.
- [NSPointerFunctionsStrongMemory](options/strongmemory.md): Use strong write-barriers to backing store; use garbage-collected memory on copy-in.
- [NSPointerFunctionsWeakMemory](options/weakmemory.md): Uses weak read and write barriers appropriate for ARC or GC. Using NSPointerFunctionsWeakMemory object references will turn to `NULL` on last release.
- [NSPointerFunctionsZeroingWeakMemory](../nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md): Deprecated. Use weak read and write barriers; use garbage-collected memory on copyIn.
- [NSMapTableStrongMemory](../nsmaptablestrongmemory.md): Equivalent to [NSPointerFunctionsStrongMemory](options/strongmemory.md).
- [NSMapTableWeakMemory](../nsmaptableweakmemory.md): Equivalent to [NSPointerFunctionsWeakMemory](options/weakmemory.md).
- [NSMapTableZeroingWeakMemory](../nsmaptablezeroingweakmemory.md): Deprecated. Equivalent to [NSPointerFunctionsZeroingWeakMemory](../nspointerfunctionsoptions/nspointerfunctionszeroingweakmemory.md).

### Personality Options

These options are mutually exclusive.

- [NSPointerFunctionsCStringPersonality](options/cstringpersonality.md): Use a string hash and `strcmp`; C-string ‘`%s`’ style description.
- [NSPointerFunctionsIntegerPersonality](options/integerpersonality.md): Use unshifted value as hash and equality.
- [NSPointerFunctionsObjectPersonality](options/objectpersonality.md): Use `hash` and `isEqual` methods for hashing and equality comparisons, use the `description` method for a description.
- [NSPointerFunctionsObjectPointerPersonality](options/objectpointerpersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality; use the `description` method for a description.
- [NSPointerFunctionsOpaquePersonality](options/opaquepersonality.md): Use shifted pointer for the hash value and direct comparison to determine equality.
- [NSPointerFunctionsStructPersonality](options/structpersonality.md): Use a memory hash and `memcmp` (using a size function that you must set—see [sizeFunction](sizefunction.md)).
- [NSMapTableObjectPointerPersonality](../nsmaptableobjectpointerpersonality.md): Equivalent to [NSPointerFunctionsObjectPointerPersonality](options/objectpointerpersonality.md).

### Copy Option

- [NSPointerFunctionsCopyIn](options/copyin.md): Use the memory acquire function to allocate and copy items on input (see [acquireFunction](acquirefunction.md)).
- [NSMapTableCopyIn](../nsmaptablecopyin.md): Equivalent to [NSPointerFunctionsCopyIn](options/copyin.md).
